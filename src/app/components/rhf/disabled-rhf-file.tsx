import { File04, X } from "@untitledui/icons";
import { RHFController } from "./rhf-controller";

interface FileValue {
  preview: string | null;
  fileType: string;
  file: File;
}

interface RHFFileProps {
  name: string;
  accept?: string;
  maxSize?: number; // in bytes
  triggerOnChange?: (value: FileValue | null) => void;
}

export const RHFFile = ({
  name,
  accept = "*/*",
  maxSize,
  triggerOnChange,
}: RHFFileProps) => {
  return (
    <RHFController
      name={name}
      render={({ field: { value, onChange } }) => {
        const openFilePicker = () => {
          const input = document.createElement("input");
          input.type = "file";
          input.accept = accept;

          input.onchange = (e) => {
            const file = (e.target as HTMLInputElement).files?.[0];
            if (!file) return;

            if (maxSize && file.size > maxSize) {
              console.error(`File size exceeds ${maxSize} bytes`);
              return;
            }

            const value: FileValue = {
              preview: null,
              fileType: file.type,
              file,
            };

            onChange(value);
            triggerOnChange?.(value);
          };

          input.click();
        };

        return (
          <div>
            {value ? (
              <div className="relative flex items-center gap-2 p-3 border border-input rounded-md shadow">
                <button
                  type="button"
                  onClick={() => onChange(null)}
                  className="absolute -top-2 -right-2 p-1 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors border-input border"
                >
                  <X className="w-4 h-4 text-gray-500" />
                </button>
                <div className="text-gray-500">
                  <File04 className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium text-gray-900 truncate">
                    {value.file?.name}
                  </div>
                  <div className="text-xs text-gray-500">
                    {(value.file?.size / 1024).toFixed(2)} KB
                  </div>
                </div>
                <button
                  type="button"
                  onClick={openFilePicker}
                  className="px-3 py-1.5 text-xs bg-primary/10 font-medium text-primary rounded-full hover:bg-primary/20 transition-colors cursor-pointer"
                >
                  Change
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={openFilePicker}
                className="w-full p-4 border-2 border-dashed rounded-lg flex flex-col items-center gap-2 text-gray-400 hover:text-gray-500 hover:border-gray-500 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                  />
                </svg>
                <div className="text-sm">Click to upload or drag and drop</div>
              </button>
            )}
          </div>
        );
      }}
    />
  );
};

RHFFile.displayName = "RHFFile";
