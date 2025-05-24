interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "destructive" | "default";
  appearance?: "fill" | "outline" | "text";
  size?: "small" | "default" | "large";
  fullWidth?: boolean;
  isLoading?: boolean;
}

export default function Button({
  children,
  variant = "default",
  appearance = "fill",
  size = "default",
  fullWidth = false,
  isLoading = false,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "rounded-md font-semibold focus-visible:outline-2 focus-visible:outline-offset-2";

  const variants = {
    fill: {
      primary:
        "bg-[#007cba] hover:bg-[#006ba1] focus-visible:outline-[#007cba] text-white shadow-xs",
      secondary:
        "bg-gray-600 hover:bg-gray-500 focus-visible:outline-gray-600 text-white shadow-xs",
      destructive:
        "bg-destructive hover:bg-red-700 focus-visible:outline-destructive text-white shadow-xs",
      default:
        "border border-gray-300 bg-white hover:bg-gray-50 focus-visible:outline-gray-300 text-gray-900 shadow-xs",
    },
    outline: {
      primary: "border border-[#007cba] text-[#007cba] hover:bg-[#007cba]/5",
      secondary: "border border-gray-600 text-gray-600 hover:bg-gray-600/5",
      destructive:
        "border border-destructive text-destructive hover:bg-destructive/5",
      default: "border border-gray-300 text-gray-700 hover:bg-gray-50",
    },
    text: {
      primary: "text-[#007cba] hover:bg-[#007cba]/5",
      secondary: "text-gray-600 hover:bg-gray-600/5",
      destructive: "text-destructive hover:bg-destructive/5",
      default: "text-gray-700 hover:bg-gray-50",
    },
  };

  const sizes = {
    small: "px-2 py-2 text-xs",
    default: "px-3 h-10 text-sm",
    large: "px-4 h-12 text-base",
  };

  const width = fullWidth ? "w-full" : "";
  const display = fullWidth ? "flex justify-center" : "inline-flex";

  return (
    <button
      type={props.type || "button"}
      className={`items-center ${baseStyles} ${variants[appearance][variant]} ${sizes[size]} ${width} ${display} ${className}`}
      disabled={isLoading}
      {...props}
    >
      <div className="flex items-center gap-2">
        {isLoading && (
          <svg
            className={`animate-spin ${size === "small" ? "h-3 w-3" : size === "large" ? "h-5 w-5" : "h-4 w-4"}`}
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </div>
    </button>
  );
}
