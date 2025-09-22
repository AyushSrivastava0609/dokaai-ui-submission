"use client";

import { useWorkflow } from "@/context/workflowContext";

export default function Sidebar({ children }: { children: React.ReactNode }) {
    const { sidebarOpen, setSidebarOpen } = useWorkflow();

    return (
        <div
            className={`fixed top-20 border border-gray-300 rounded-xl left-0 h-full w-96 bg-white shadow-xl transform transition-transform duration-300 z-50  h-[calc(100%_-_88px)]
        ${sidebarOpen ? "translate-x-2" : "-translate-x-full"}`}
        >
            {/* Header */}
            <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-lg font-semibold">Configure Node</h2>
                <button
                    className="text-gray-500 hover:text-gray-700"
                    onClick={() => setSidebarOpen(false)}
                >
                    ✕
                </button>
            </div>

            {/* Body */}
            <div className="p-4 overflow-y-auto h-[calc(100%-64px)]">
                {children}
            </div>
        </div>
    );
}
