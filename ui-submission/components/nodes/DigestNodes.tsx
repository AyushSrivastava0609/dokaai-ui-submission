"use client";

import { Handle, Position } from "reactflow";
import { Inbox } from "lucide-react";

interface DigestNodeProps {
    data: {
        digestName: string;
        frequency: string;
        time: string;
    };
}

export default function DigestNode({ data }: DigestNodeProps) {
    return (
        <div className="px-4 py-2 rounded-lg bg-white text-black shadow-md border-l-2 border-primary h-auto w-[240px]">
            {/* Top Handle */}
            <Handle type="target" position={Position.Top} className="bg-gray-500" />

            {/* Header */}
            <div className="flex items-center gap-2">
                <Inbox className="h-4 w-4" />
                <h3 className="font-semibold text-sm">Digest</h3>
            </div>

            {/* Digest Description */}
            <p className="text-xs mt-1 text-gray-700">
                {data.digestName || "Untitled Digest"} <br />
                Runs {data.frequency} at {data.time}
            </p>

            {/* Bottom Handle */}
            <Handle type="source" position={Position.Bottom} className="bg-primary" />
        </div>
    );
}
