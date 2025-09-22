"use client";

import { Handle, Position } from "reactflow";
import { Users } from "lucide-react";

interface IndividualChannelNodeProps {
    data: {
        channelName: string;
        channelType: string;
        description?: string;
    };
}

export default function IndividualChannelNode({ data }: IndividualChannelNodeProps) {
    return (
        <div className="px-4 py-2 rounded-lg bg-white text-black shadow-md border-l-2 border-primary h-auto w-[240px]">
            {/* Top Handle */}
            <Handle type="target" position={Position.Top} className="bg-gray-500" />

            {/* Header */}
            <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <h3 className="font-semibold text-sm">Individual Channel</h3>
            </div>

            {/* Channel Details */}
            <p className="text-xs mt-1 text-gray-700">
                Send via {data.channelName || "Unnamed Channel"} {data.channelType}
            </p>
            {data.description && (
                <p className="text-xs text-gray-500">{data.description}</p>
            )}

            {/* Bottom Handle */}
            <Handle type="source" position={Position.Bottom} className="bg-primary" />
        </div>
    );
}
