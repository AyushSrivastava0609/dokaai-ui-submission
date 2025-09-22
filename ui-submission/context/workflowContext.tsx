"use client";

import React, { createContext, useContext, useState } from "react";
import { Node, Edge } from "reactflow";

/**
 * Context type definition for workflow state & actions
 * This includes all nodes, edges, active node type, sidebar state, and functions to add nodes
 */
interface WorkflowContextType {
    nodes: Node[]; // All nodes in the ReactFlow canvas
    edges: Edge[]; // All edges/connections in the canvas
    setNodes: React.Dispatch<React.SetStateAction<Node[]>>; // Function to update nodes
    setEdges: React.Dispatch<React.SetStateAction<Edge[]>>; // Function to update edges
    workflowName: string; // Name of the workflow
    setWorkflowName: (name: string) => void; // Function to update workflow name
    sidebarOpen: boolean; // Whether the sidebar (form panel) is open
    setSidebarOpen: (open: boolean) => void; // Function to toggle sidebar
    activeNodeType: string | null; // Currently active node type (for sidebar form)
    setActiveNodeType: (type: string | null) => void; // Set active node type
    startNodeCreated: boolean; // Whether a start node has been added
    // Functions to add various types of nodes
    addStartNode: (data: { name: string; description: string; tag: string; notificationType: string }) => void;
    addRecipientNode: (data: { customerPool: string; selectionType: string; targetAudience: string }) => void;
    addBinaryConditionNode: (data: { conditionName: string; property: string; operator: string; value: string }) => void;
    addMultipleConditionNode: (data: { conditionName: string; rules: { id: string; property: string; operator: string; value: string }[] }) => void;
    addDelayNode: (data: { delayName: string; duration: string; unit: string }) => void;
    addDigestNode: (data: { digestName: string; frequency: string; time: string }) => void;
    addScheduleNode: (data: { scheduleName: string; date: string; time: string; repeat: string }) => void;
    addChannelRouterNode: (data: { routerName: string; channels: string[] }) => void;
    addIndividualChannelNode: (data: { channelName: string; channelType: string; description?: string }) => void;
    addEndNode: (data: { name: string; description: string }) => void;
}

// Create React context for workflow. Undefined initially.
const WorkflowContext = createContext<WorkflowContextType | undefined>(undefined);

export const WorkflowProvider = ({ children }: { children: React.ReactNode }) => {
    // Canvas nodes and edges
    const [nodes, setNodes] = useState<Node[]>([]);
    const [edges, setEdges] = useState<Edge[]>([]);

    // Workflow metadata
    const [workflowName, setWorkflowName] = useState("Untitled Workflow");
    const [sidebarOpen, setSidebarOpen] = useState(false); // Sidebar panel
    const [activeNodeType, setActiveNodeType] = useState<string | null>(null); // Active form
    const [startNodeCreated, setStartNodeCreated] = useState(false); // Start node status

    // ----------------------
    // Node Add Functions
    // ----------------------

    /** Add the start node. Only one allowed in workflow. */
    const addStartNode = (data: { name: string; description: string; tag: string; notificationType: string }) => {
        const newNode: Node = {
            id: "start-1", // Fixed ID since only one start node
            type: "startNode",
            position: { x: 250, y: 100 }, // Initial position on canvas
            data, // Data from form
        };
        setNodes([newNode]); // Replace existing nodes with start node
        setWorkflowName(data.name || "Untitled Workflow"); // Update workflow name
        setStartNodeCreated(true); // Mark start node as created
        setSidebarOpen(false); // Close sidebar after adding
        setActiveNodeType(null); // Reset active form
    };

    /** Add a recipient node. Positions dynamically based on existing nodes */
    const addRecipientNode = (data: { customerPool: string; selectionType: string; targetAudience: string }) => {
        const newNode: Node = {
            id: `recipient-${nodes.length + 1}`, // Unique ID
            type: "recipientNode",
            position: { x: 300, y: 200 + nodes.length * 100 }, // Stack vertically
            data,
        };
        setNodes(prev => [...prev, newNode]); // Append to existing nodes
        setSidebarOpen(false);
        setActiveNodeType(null);
    };

    /** Add a binary condition node */
    const addBinaryConditionNode = (data: { conditionName: string; property: string; operator: string; value: string }) => {
        const newNode: Node = {
            id: `condition-${Date.now()}`, // Unique ID based on timestamp
            type: "binaryConditionNode",
            position: { x: 400, y: 200 },
            data,
        };
        setNodes(nds => [...nds, newNode]);
        setSidebarOpen(false);
        setActiveNodeType(null);
    };

    /** Add a multiple condition node */
    const addMultipleConditionNode = (data: { conditionName: string; rules: { id: string; property: string; operator: string; value: string }[] }) => {
        const newNode: Node = {
            id: `multi-condition-${Date.now()}`,
            type: "multipleConditionNode",
            position: { x: 500, y: 250 },
            data,
        };
        setNodes(nds => [...nds, newNode]);
        setSidebarOpen(false);
        setActiveNodeType(null);
    };

    /** Add a delay node */
    const addDelayNode = (data: { delayName: string; duration: string; unit: string }) => {
        const newNode: Node = {
            id: `delay-${Date.now()}`,
            type: "delayNode",
            position: { x: 400, y: 200 }, // Position can be improved dynamically
            data,
        };
        setNodes(nds => [...nds, newNode]);
        setSidebarOpen(false);
        setActiveNodeType(null);
    };

    /** Add a digest node */
    const addDigestNode = (data: { digestName: string; frequency: string; time: string }) => {
        const newNode: Node = {
            id: `digest-${Date.now()}`,
            type: "digestNode",
            position: { x: 500, y: 300 },
            data,
        };
        setNodes(nds => [...nds, newNode]);
        setSidebarOpen(false);
        setActiveNodeType(null);
    };

    /** Add a schedule node */
    const addScheduleNode = (data: { scheduleName: string; date: string; time: string; repeat: string }) => {
        const newNode: Node = {
            id: `schedule-${Date.now()}`,
            type: "scheduleNode",
            position: { x: 500, y: 400 },
            data,
        };
        setNodes(nds => [...nds, newNode]);
        setSidebarOpen(false);
        setActiveNodeType(null);
    };

    /** Add a channel router node */
    const addChannelRouterNode = (data: { routerName: string; channels: string[] }) => {
        const newNode: Node = {
            id: `channel-router-${Date.now()}`,
            type: "channelRouterNode",
            position: { x: 400, y: 400 },
            data,
        };
        setNodes(nds => [...nds, newNode]);
        setSidebarOpen(false);
        setActiveNodeType(null);
    };

    /** Add an individual channel node */
    const addIndividualChannelNode = (data: { channelName: string; channelType: string; description?: string }) => {
        const newNode: Node = {
            id: `individual-channel-${Date.now()}`,
            type: "individualChannelNode",
            position: { x: 600, y: 400 },
            data,
        };
        setNodes(nds => [...nds, newNode]);
        setSidebarOpen(false);
        setActiveNodeType(null);
    };

    /** Add an end node (workflow completion) */
    const addEndNode = (data: { name: string; description: string }) => {
        const newNode: Node = {
            id: "end-1", // Only one end node
            type: "endNode",
            position: { x: 350, y: 100 },
            data,
        };
        setNodes(nds => [...nds, newNode]);
        setSidebarOpen(false);
        setActiveNodeType(null);
    };

    // Provide all state + functions to context consumers
    return (
        <WorkflowContext.Provider
            value={{
                nodes,
                edges,
                setNodes,
                setEdges,
                workflowName,
                setWorkflowName,
                sidebarOpen,
                setSidebarOpen,
                activeNodeType,
                setActiveNodeType,
                startNodeCreated,
                addStartNode,
                addRecipientNode,
                addBinaryConditionNode,
                addMultipleConditionNode,
                addDelayNode,
                addDigestNode,
                addScheduleNode,
                addChannelRouterNode,
                addIndividualChannelNode,
                addEndNode
            }}
        >
            {children}
        </WorkflowContext.Provider>
    );
};

/** Custom hook for consuming workflow context safely */
export const useWorkflow = () => {
    const ctx = useContext(WorkflowContext);
    if (!ctx) throw new Error("useWorkflow must be used within WorkflowProvider");
    return ctx;
};
