import { ReactElement } from "react";
import { RHFController } from "./rhf-controller";
import { Edit01, Trash01 } from "@untitledui/icons";
import Image from "next/image";

interface FileValue {
  preview: string | null;
  fileType: string;
  file: File;
}

interface RHFFileProps {
  name: string;
  render?: (props: RenderProps) => ReactElement;
  accept?: string;
  maxSize?: number; // in bytes
}

interface RenderProps {
  field: {
    value: FileValue | null;
    onChange: (value: FileValue | null) => void;
  };
  fieldState: {
    error?: {
      message?: string;
    };
  };
  openFilePicker: () => void;
}

const DefaultImagePreview = ({
  onChange,
  value,
  openFilePicker,
}: {
  onChange: (value: FileValue | null) => void;
  value: FileValue | null;
  openFilePicker: () => void;
}) => (
  <div className="relative group">
    <div className="relative overflow-hidden  bg-gray-50">
      {value?.preview ? (
        <div className="aspect-[21/9]">
          <Image
            src={value.preview}
            alt="Preview"
            className="w-full h-full object-cover object-center"
            width={1200}
            height={800}
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-3 transition-opacity">
            <button
              onClick={openFilePicker}
              className="p-2 bg-white rounded-lg hover:bg-gray-100 transition-colors"
              title="Change Image"
            >
              <Edit01 className="size-5" />
            </button>
            <button
              onClick={() => onChange(null)}
              className="p-2 bg-white rounded-lg hover:bg-gray-100 transition-colors"
              title="Remove Image"
            >
              <Trash01 className="size-5" />
            </button>
          </div>
        </div>
      ) : (
        <div
          className="inset-0 flex flex-col items-center justify-center gap-3 cursor-pointer"
          onClick={openFilePicker}
        >
          <Image
            src="/images/placeholder-image.png"
            alt="Placeholder"
            className="aspect-[21/9] object-cover object-center"
            width={1200}
            height={800}
          />
        </div>
      )}
    </div>
  </div>
);

const DefaultFilePreview = ({
  value,
  openFilePicker,
}: {
  value: FileValue | null;
  openFilePicker: () => void;
  onChange: (value: FileValue | null) => void;
}) => {
  return (
    <div>
      {value ? (
        <div className="flex items-center gap-2 p-3 border rounded-md shadow">
          <div className="text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              {value.file?.name}
            </p>
            <p className="text-xs text-gray-500">
              {(value.file?.size / 1024).toFixed(2)} KB
            </p>
          </div>
          <button
            onClick={openFilePicker}
            className="px-2 py-1 text-xs bg-primary/20 text-primary rounded-full hover:bg-primary/30 transition-colors cursor-pointer"
          >
            Change
          </button>
        </div>
      ) : (
        <button
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
};

export const RHFFile = ({
  name,
  render,
  accept = "*/*",
  maxSize,
}: RHFFileProps) => {
  return (
    <RHFController
      name={name}
      render={({ field: { value, onChange }, fieldState }) => {
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

            const preview = file.type.startsWith("image/")
              ? URL.createObjectURL(file)
              : null;

            const value: FileValue = {
              preview,
              fileType: file.type,
              file,
            };

            onChange(value);
          };

          input.click();
        };

        // If custom render is provided, use it
        if (render) {
          return render({
            field: { value, onChange },
            fieldState,
            openFilePicker,
          });
        }

        // Default UI based on accept type
        return accept.includes("image/") ? (
          <DefaultImagePreview
            value={value}
            openFilePicker={openFilePicker}
            onChange={onChange}
          />
        ) : (
          <DefaultFilePreview
            value={value}
            openFilePicker={openFilePicker}
            onChange={onChange}
          />
        );
      }}
    />
  );
};

RHFFile.displayName = "RHFFile";
