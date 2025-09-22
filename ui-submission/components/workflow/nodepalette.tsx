"use client";

import {
  Calendar,
  Clock,
  Database,
  GitBranch,
  GitMerge,
  Globe,
  Mail,
  Users,
} from "lucide-react";
import NodePaletteItem from "./nodePaletteItem";
import { useWorkflow } from "@/context/workflowContext";

const nodes = [
  { icon: Database, label: "Recipients", type: "recipients" },
  { icon: GitBranch, label: "Condition", type: "condition" },
  { icon: GitMerge, label: "Multiple Condition", type: "multiple" },
  { icon: Clock, label: "Delay", type: "delay" },
  { icon: Globe, label: "Digest", type: "digest" },
  { icon: Calendar, label: "Schedule", type: "schedule" },
  { icon: Mail, label: "Channel Router", type: "channelRouter" },
  { icon: Users, label: "Individual Channel", type: "individual" },
];

interface NodePaletteProps {
  disabled?: boolean;
}

export default function NodePalette({ disabled }: NodePaletteProps) {
  const {
    setSidebarOpen,
    setActiveNodeType
  } = useWorkflow();
  // Define onClick handlers for each node type
  const handleNodeClick = (type: string) => {
    switch (type) {
      case "recipients":
        setActiveNodeType("recipientNode");
        setSidebarOpen(true);
        break;
      case "condition":
        console.log("Condition node clicked");
        setActiveNodeType("binaryConditionNode");
        setSidebarOpen(true);
        break;
      case "multiple":
        setActiveNodeType("multipleConditionNode");
        setSidebarOpen(true);
        break;
      case "delay":
        setActiveNodeType("delayNode");
        setSidebarOpen(true);
        break;
      case "digest":
        setActiveNodeType("digestNode");
        setSidebarOpen(true);
        break;
      case "schedule":
        setActiveNodeType("scheduleNode");
        setSidebarOpen(true);
        break;
      case "channelRouter":
        setActiveNodeType("channelRouterNode");
        setSidebarOpen(true);
        break;
      case "individual":
        console.log("Individual Channel node clicked");
        // Add logic for Individual Channel node
        break;
      default:
        console.log("Unknown node clicked");
    }
  };

  return (
    <div className="absolute top-1/4 left-4 z-10 -mt-10">
      <aside className="flex flex-col items-center gap-4 p-3 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 shadow-lg rounded-2xl">
        {nodes.map((node) => (
          <NodePaletteItem
            key={node.type}
            icon={node.icon}
            label={node.label}
            disabled={disabled}
            onClick={() => handleNodeClick(node.type)} // Pass the onClick handler
          />
        ))}
      </aside>
    </div>
  );
}
