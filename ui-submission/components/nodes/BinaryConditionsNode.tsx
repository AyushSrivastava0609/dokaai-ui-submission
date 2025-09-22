"use client";

import { Handle, Position } from "reactflow";
import { GitBranch } from "lucide-react";

interface BinaryConditionNodeProps {
    data: {
        conditionName: string;
        property: string;
        operator: string;
        value: string;
    };
}

export default function BinaryConditionNode({ data }: BinaryConditionNodeProps) {
    return (
        <div className="px-4 py-2 rounded-lg bg-white text-black shadow-md border-l-2 border-primary h-auto w-[240px] relative">
            {/* Top Handle */}
            <Handle type="target" position={Position.Top} className="bg-gray-500" />

            {/* Header */}
            <div className="flex items-center gap-2">
                <GitBranch className="h-4 w-4" />
                <h3 className="font-semibold text-sm">Condition</h3>
            </div>

            {/* Condition Description */}
            <p className="text-xs mt-1 text-gray-700">
                if {data.property} {data.operator} {data.value}
            </p>

            {/* Bottom Handles */}
            <Handle
                type="source"
                position={Position.Bottom}
                id="true"
                style={{ left: "40%" }}
                className="bg-red-500"
            />
            <Handle
                type="source"
                position={Position.Bottom}
                id="false"
                style={{ left: "60%" }}
                className="bg-primary"
            />

            {/* Labels for Handles */}
            <div className="flex justify-between text-xs text-gray-500 mt-2 px-2">
                <span>True</span>
                <span>False</span>
            </div>
        </div>
    );
}
