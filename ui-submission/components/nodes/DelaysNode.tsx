"use client";

import { Handle, Position } from "reactflow";
import { Clock } from "lucide-react";

interface DelaysNodeProps {
  data: {
    delayName: string;
    duration: string;
    unit: string; // e.g. "minutes", "hours", "days"
  };
}

export default function DelaysNode({ data }: DelaysNodeProps) {
  return (
    <div className="px-4 py-2 rounded-lg bg-white text-black shadow-md border-l-2 border-primary h-auto w-[240px] relative">
      {/* Top Handle */}
      <Handle type="target" position={Position.Top} className="bg-gray-500" />

      {/* Header */}
      <div className="flex items-center gap-2">
        <Clock className="h-4 w-4" />
        <h3 className="font-semibold text-sm">Delay</h3>
      </div>

      {/* Delay Description */}
      <p className="text-xs mt-1 text-gray-700">
        Wait {data.duration} {data.unit} before {data.delayName}
      </p>

      {/* Bottom Handle (only one, since it continues after delay) */}
      <Handle
        type="source"
        position={Position.Bottom}
        id="next"
        className="bg-primary"
        style={{ left: "50%" }}
      />
    </div>
  );
}
