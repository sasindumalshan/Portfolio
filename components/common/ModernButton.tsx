// components/ModernButton.tsx
import Image from "next/image";

type ModernButtonProps = {
  text: string;
  onClick?: () => void;
  href?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon?: any;
  isLoading?: boolean;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "gradient";
  size?: "sm" | "md" | "lg";
  className?: string;
};

export default function ModernButton({
  text,
  onClick,
  href,
  icon,
  isLoading = false,
  disabled = false,
  variant = "primary",
  size = "md",
  className = "",
}: ModernButtonProps) {
  const baseStyles = "group relative inline-flex items-center justify-center gap-3 font-medium rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100";
  
  const variantStyles = {
    primary: "bg-white/5 hover:bg-white/10 border border-white/20 text-white hover:scale-105 hover:shadow-lg hover:shadow-white/10",
    secondary: "bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 border border-white/10 text-white hover:scale-105 hover:shadow-xl",
    gradient: "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 border-0",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const content = (
    <>
      {isLoading ? (
        <>
          <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
          <span>Loading...</span>
        </>
      ) : (
        <>
          <span>{text}</span>
          {icon && (
            <Image
              src={icon}
              alt=""
              width={18}
              height={18}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          )}
        </>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={buttonClasses}
    >
      {content}
    </button>
  );
}