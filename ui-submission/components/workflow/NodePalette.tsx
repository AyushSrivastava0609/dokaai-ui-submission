'use client';

import {
  Calendar,
  CircleDot,
  Clock,
  Database,
  GitBranch,
  GitMerge,
  Globe,
  Mail,
  Users,
} from "lucide-react";
import { useWorkflow } from "@/context/workflowContext";
import NodePaletteItem from "./NodePaletteItem";

const nodes = [
  { icon: Database, label: "Recipients", type: "recipientNode" },
  { icon: GitBranch, label: "Condition", type: "binaryConditionNode" },
  { icon: GitMerge, label: "Multiple Condition", type: "multipleConditionNode" },
  { icon: Clock, label: "Delay", type: "delayNode" },
  { icon: Globe, label: "Digest", type: "digestNode" },
  { icon: Calendar, label: "Schedule", type: "scheduleNode" },
  { icon: Mail, label: "Channel Router", type: "channelRouterNode" },
  { icon: Users, label: "Individual Channel", type: "individualChannelNode" },
  { icon: CircleDot, label: "End Node", type: "endNode" }
];

interface NodePaletteProps {
  disabled?: boolean;
}

export default function NodePalette({ disabled }: NodePaletteProps) {
  const { setSidebarOpen, setActiveNodeType } = useWorkflow();

  const handleNodeClick = (nodeType: string) => {
    setActiveNodeType(nodeType);
    setSidebarOpen(true);
  };

  return (
    <div className="absolute top-1/4 left-4 z-10 -mt-20">
      <aside className="flex flex-col items-center gap-4 p-3 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 shadow-lg rounded-2xl">
        {nodes.map((node) => (
          <NodePaletteItem
            key={node.type}
            icon={node.icon}
            label={node.label}
            disabled={disabled}
            onClick={() => handleNodeClick(node.type)}
          />
        ))}
      </aside>
    </div>
  );
}
