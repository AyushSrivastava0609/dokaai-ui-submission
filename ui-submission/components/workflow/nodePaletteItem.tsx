"use client";

import { LucideIcon } from "lucide-react";

interface NodePaletteItemProps {
  icon: LucideIcon;
  label: string;
  disabled?: boolean;
  onClick: () => void;
}

export default function NodePaletteItem({ icon: Icon, label, disabled, onClick}: NodePaletteItemProps) {
  return (
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
  );
}
