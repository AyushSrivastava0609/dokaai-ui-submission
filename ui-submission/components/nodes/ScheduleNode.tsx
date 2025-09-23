"use client";

import { Handle, Position } from "reactflow";
import { Calendar } from "lucide-react";
import { ScheduleNodeData } from "@/types";

interface ScheduleNodeProps {
    data: ScheduleNodeData
}

export default function ScheduleNode({ data }: ScheduleNodeProps) {
    return (
        <div className="px-4 py-2 rounded-lg bg-white text-black shadow-md border-l-2 border-primary h-auto w-[240px]">
            {/* Top Handle */}
            <Handle type="target" position={Position.Top} className="bg-gray-500" />

            {/* Header */}
            <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <h3 className="font-semibold text-sm">Schedule</h3>
            </div>

            {/* Schedule Description */}
            <p className="text-xs mt-1 text-gray-700">
                {data.scheduleName || "Untitled Schedule"} <br />
                {data.date} at {data.time} ({data.repeat})
            </p>

            {/* Bottom Handle */}
            <Handle type="source" position={Position.Bottom} className="bg-primary" />
        </div>
    );
}
