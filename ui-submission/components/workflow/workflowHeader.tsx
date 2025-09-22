"use client";
import { useWorkflow } from "@/context/workflowContext";
import { ChevronRight, Save, Send, Workflow } from "lucide-react";

export default function WorkflowHeader() {
    const { workflowName, startNodeCreated } = useWorkflow();

    return (
        <header className="w-full px-6 py-4 border-b flex items-center justify-between bg-white shadow-sm">
            {/* Left: Workflow icon + name */}
            <div className="flex items-center gap-2">
                <Workflow className="px-2 py-2 rounded-md h-10 w-10 border text-primary bg-primary/20" />
                <ChevronRight className="h-6 w-6 text-primary" />
                <h1 className="text-lg font-semibold truncate overflow-hidden whitespace-nowrap w-40">{workflowName}</h1>
            </div>

            {/* Right: Actions */}
            <div className="flex gap-4">
                <button
                    disabled={!startNodeCreated}
                    className={`px-4 py-2 rounded flex items-center border transition
            ${startNodeCreated
                            ? "text-primary border-primary hover:bg-primary/10"
                            : "text-gray-400 border-gray-300 cursor-not-allowed bg-gray-100"
                        }`}
                >
                    <Save className="inline-block mr-2 h-5 w-5" />
                    Edit
                </button>

                <button
                    disabled={!startNodeCreated}
                    className={`px-4 py-2 rounded flex items-center transition
            ${startNodeCreated
                            ? "bg-primary/90 text-white hover:bg-primary"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                >
                    <Send className="inline-block mr-2 h-5 w-5" />
                    Publish
                </button>
            </div>
        </header>
    );
}
