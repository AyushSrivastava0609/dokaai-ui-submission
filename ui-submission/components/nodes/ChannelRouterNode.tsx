"use client";

import { Handle, Position } from "reactflow";
import { Mail } from "lucide-react";

interface ChannelRouterNodeProps {
    data: {
        routerName: string;
        channels: string[];
    };
}

export default function ChannelRouterNode({ data }: ChannelRouterNodeProps) {
    return (
        <div className="px-4 py-2 rounded-lg bg-white text-black shadow-md border-l-2 border-primary h-auto w-[260px]">
            {/* Top Handle */}
            <Handle type="target" position={Position.Top} className="bg-gray-500" />

            {/* Header */}
            <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <h3 className="font-semibold text-sm">Channel Router</h3>
            </div>

            {/* Router Description */}
            <p className="text-xs mt-1 text-gray-700">
                {data.routerName || "Untitled Router"}
            </p>
            <p className="text-xs text-gray-500">
                Routes: {data.channels?.join(", ") || "No channels selected"}
            </p>

            {/* Bottom Handle */}
            <Handle type="source" position={Position.Bottom} className="bg-primary" />
        </div>
    );
}
