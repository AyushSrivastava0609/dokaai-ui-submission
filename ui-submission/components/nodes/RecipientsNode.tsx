"use client";
import { Handle, Position } from "reactflow";
import { Mail } from "lucide-react"; // Assuming you're using lucide-react for icons

export default function RecipientNode({ data }: any) {
    return (
        <div className="px-4 py-2 rounded-md bg-white text-black shadow-md border-l-2 border-primary h-auto w-[240px]">
            <Handle type="target" position={Position.Top} className="bg-white" />
            <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <h3 className="font-semibold text-sm">Recipients</h3>
            </div>
            <p className="text-xs mt-1 text-gray-700">
                You are using <span className="text-primary font-semibold">{data.targetAudience}</span> {data.selectionType} from <span className="text-primary font-semibold">{data.customerPool}</span> pool.
            </p>
            <Handle type="source" position={Position.Bottom} className="bg-white" />
        </div>
    );
}