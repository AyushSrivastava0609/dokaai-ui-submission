"use client";

import { Handle, Position } from "reactflow";
import { GitMerge } from "lucide-react";

interface MultipleConditionNodeProps {
  data: {
    conditionName: string;
    rules: { id: string; property: string; operator: string; value: string }[];
  };
}

export default function MultipleConditionNode({ data }: MultipleConditionNodeProps) {
  return (
    <div className="px-4 py-2 rounded-lg bg-white text-black shadow-md border-l-4 border-primary h-auto w-[240px]">
      {/* Top Handle */}
      <Handle type="target" position={Position.Top} className="bg-gray-500" />

      {/* Header */}
      <div className="flex items-center gap-2">
        <GitMerge className="h-4 w-4" />
        <h3 className="font-semibold text-sm">Multiple Condition</h3>
      </div>

      {/* Rules */}
      <div className="space-y-1 mt-2">
        {data.rules.map((rule, index) => (
          <div key={rule.id} className="text-xs text-gray-700">
            {index + 1}. {rule.property} {rule.operator} {rule.value}
          </div>
        ))}
      </div>

      {/* Bottom Handles */}
      {data.rules.map((rule, index) => (
        <Handle
          key={rule.id}
          type="source"
          position={Position.Bottom}
          id={rule.id}
          style={{ left: `${20 + index * 40}px` }}
          className="bg-primary"
        />
      ))}
    </div>
  );
}