"use client";

import { LucideIcon } from "lucide-react";
import { useState } from "react";

interface NodePaletteItemProps {
  icon: LucideIcon;
  label: string;
  disabled?: boolean;
  onClick: () => void;
}

export default function NodePaletteItem({ icon: Icon, label, disabled, onClick }: NodePaletteItemProps) {
  
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        title={label}
        disabled={disabled}
        className={`p-2 rounded-md transition-colors
          ${disabled 
            ? "opacity-40 cursor-not-allowed" 
            : "hover:bg-primary/20"}
        `}
        onClick={onClick}
      >
        <Icon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
      </button>
      {isHovered && !disabled && (
        <div
          className="absolute top-1/2 left-full ml-2 transform -translate-y-1/2 px-2 py-1 text-sm text-white bg-black rounded shadow-lg"
        >
          {label}
        </div>
      )}
    </div>
  );
}
