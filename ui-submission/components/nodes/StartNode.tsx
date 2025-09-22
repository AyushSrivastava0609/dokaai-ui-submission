"use client";
import { Handle, Position } from "reactflow";
import { Mail, Zap } from "lucide-react"; // Assuming you're using lucide-react for icons

export default function StartNode({ data }: any) {
    return (
        <div className="px-4 py-2 rounded-md bg-white text-black shadow-md border-l-2 border-primary h-auto w-[240px]">
            <div className="flex items-center gap-2">
                <Zap className="h-4 w-4" />
                <h3 className="font-semibold text-sm truncate overflow-hidden whitespace-nowrap w-40 ">{data.name}</h3>
            </div>
            <p className="text-xs mt-1 text-gray-700 truncate overflow-hidden whitespace-nowrap w-40">
                {data.description}
            </p>
            <Handle type="source" position={Position.Bottom} className="bg-white" />
        </div>
    );
}