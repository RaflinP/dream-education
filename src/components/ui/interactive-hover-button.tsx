import React, { useState, useEffect } from "react"; // Import useState and useEffect
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "Button", className, ...props }, ref) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false); // Add mounted state

  useEffect(() => {
    setMounted(true); // Set mounted to true after client-side hydration
  }, []);

  // Define theme-dependent classes only when mounted
  const baseButtonClasses = mounted
    ? theme === "dark"
      ? "bg-black text-white border-white"
      : "bg-white text-black border-black"
    : "bg-transparent text-gray-500 border-gray-500"; // Fallback classes for SSR/unmounted

  const hoverTextClasses = mounted
    ? theme === "dark"
      ? "text-black"
      : "text-white"
    : "text-gray-500"; // Fallback

  const hoverBgClasses = mounted
    ? theme === "dark"
      ? "bg-white group-hover:bg-white"
      : "bg-black group-hover:bg-black"
    : "bg-transparent group-hover:bg-transparent"; // Fallback

  if (!mounted) {
    // Optionally render a placeholder or the component without theme-specific classes during SSR
    // For now, let's render the basic structure without the dynamic classes
    return (
      <button
        ref={ref}
        className={cn(
          "group relative w-32 cursor-pointer overflow-hidden rounded-full border p-2 text-center font-semibold",
          "bg-transparent text-gray-500 border-gray-500", // Default classes for SSR
          className,
        )}
        {...props}
      >
        <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {text}
        </span>
        <div className={cn(
          "absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100",
          "text-gray-500" // Default classes for SSR
        )}>
          <span>{text}</span>
          <ArrowRight />
        </div>
        <div className={cn(
          "absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8]",
          "bg-transparent group-hover:bg-transparent" // Default classes for SSR
        )}></div>
      </button>
    );
  }

  return (
    <button
      ref={ref}
      className={cn(
        "group relative w-32 cursor-pointer overflow-hidden rounded-full border p-2 text-center font-semibold",
        baseButtonClasses, // Use conditional classes
        className,
      )}
      {...props}
    >
      <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
        {text}
      </span>
      <div className={cn(
        "absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100",
        hoverTextClasses // Use conditional classes
      )}>
        <span>{text}</span>
        <ArrowRight />
      </div>
      <div className={cn(
        "absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8]",
        hoverBgClasses // Use conditional classes
      )}></div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };