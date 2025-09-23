"use client";

import WorkflowCanvas from "../../components/workflow/WorkflowCanvas";
import WorkflowHeader from "../../components/workflow/WorkflowHeader";
import { WorkflowProvider } from "@/context/workflowContext";

export default function WorkflowPage() {
  return (
    <WorkflowProvider>
    <div className="flex flex-col h-screen">
      {/* Header with workflow name */}
      <WorkflowHeader />
      {/* Main canvas */}
      <div className="flex-1 relative">
        <WorkflowCanvas />
      </div>
    </div>
    </WorkflowProvider>
  );
}
