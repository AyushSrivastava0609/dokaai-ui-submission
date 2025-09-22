"use client";

import React, { createContext, useContext, useState } from "react";
import { Node, Edge } from "reactflow";

interface WorkflowContextType {
    nodes: Node[];
    edges: Edge[];
    setNodes: React.Dispatch<React.SetStateAction<Node[]>>;
    setEdges: React.Dispatch<React.SetStateAction<Edge[]>>;
    workflowName: string;
    setWorkflowName: (name: string) => void;
    sidebarOpen: boolean;
    setSidebarOpen: (open: boolean) => void;
    activeNodeType: string | null;
    setActiveNodeType: (type: string | null) => void;
    startNodeCreated: boolean;
    addStartNode: (data: {
        name: string;
        description: string;
        tag: string;
        notificationType: string;
    }) => void;
    addRecipientNode: (data: {
        customerPool: string,
        selectionType: string,
        targetAudience: string,
    }) => void;
    addBinaryConditionNode: (data: {
        conditionName: string;
        property: string;
        operator: string;
        value: string;
    }) => void;
    addMultipleConditionNode: (data: {
        conditionName: string;
        rules: { id: string; property: string; operator: string; value: string }[];
    }) => void;
    addDelayNode: (data: { 
        delayName: string; 
        duration: string; 
        unit: string 
    }) => void;
    addDigestNode: (data: { 
        digestName: string; 
        frequency: string; 
        time: string 
    }) => void;
    addScheduleNode: (data: { 
        scheduleName: string; 
        date: string; 
        time: string; 
        repeat: string 
    }) => void;
}

const WorkflowContext = createContext<WorkflowContextType | undefined>(undefined);

export const WorkflowProvider = ({ children }: { children: React.ReactNode }) => {
    const [nodes, setNodes] = useState<Node[]>([]);
    const [edges, setEdges] = useState<Edge[]>([]);
    const [workflowName, setWorkflowName] = useState("Untitled Workflow");
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeNodeType, setActiveNodeType] = useState<string | null>(null);
    const [startNodeCreated, setStartNodeCreated] = useState(false);


    const addStartNode = (data: { name: string; description: string; tag: string; notificationType: string }) => {
        const newNode: Node = {
            id: "start-1",
            type: "startNode",
            position: { x: 250, y: 100 },
            data,
        };
        setNodes(() => [newNode]);
        setWorkflowName(data.name || "Untitled Workflow");
        setStartNodeCreated(true);
        setSidebarOpen(false);
        setActiveNodeType(null);
        console.log(edges)
        console.log(nodes);
    };

    const addRecipientNode = (data: {
        customerPool: string,
        selectionType: string,
        targetAudience: string,
    }) => {
        const newNode: Node = {
            id: `recipient-${nodes.length + 1}`, // Generate a unique ID
            type: "recipientNode", // Specify the type of the node
            position: { x: 300, y: 200 + nodes.length * 100 }, // Position dynamically based on existing nodes
            data,
        };
        setNodes((prevNodes) => [...prevNodes, newNode]); // Add the new node to the existing nodes array
        setSidebarOpen(false);
        setActiveNodeType(null);
        console.log(nodes);
        console.log(edges)
    };

    const addBinaryConditionNode = (data: {
        conditionName: string;
        property: string;
        operator: string;
        value: string;
    }) => {
        const newNode: Node = {
            id: `condition-${Date.now()}`,
            type: "binaryConditionNode",
            position: { x: 400, y: 200 },
            data,
        };
        setNodes((nds) => [...nds, newNode]);
        setSidebarOpen(false);
        setActiveNodeType(null);
    };

    const addMultipleConditionNode = (data: {
        conditionName: string;
        rules: { id: string; property: string; operator: string; value: string }[];
    }) => {
        const newNode: Node = {
            id: `multi-condition-${Date.now()}`,
            type: "multipleConditionNode",
            position: { x: 500, y: 250 },
            data,
        };
        setNodes((nds) => [...nds, newNode]);
        setSidebarOpen(false);
        setActiveNodeType(null);
    };

    const addDelayNode = (data: { delayName: string; duration: string; unit: string }) => {
        const newNode: Node = {
            id: `delay-${Date.now()}`,
            type: "delayNode",
            position: { x: 400, y: 200 }, // You can improve positioning logic later
            data,
        };

        setNodes((nds) => [...nds, newNode]);
        setSidebarOpen(false);
        setActiveNodeType(null);

        console.log("Delay Node Added:", newNode);
    };

    const addDigestNode = (data: { digestName: string; frequency: string; time: string }) => {
        const newNode: Node = {
          id: `digest-${Date.now()}`,
          type: "digestNode",
          position: { x: 500, y: 300 },
          data,
        };
      
        setNodes((nds) => [...nds, newNode]);
        setSidebarOpen(false);
        setActiveNodeType(null);
      
        console.log("Digest Node Added:", newNode);
      };
      

      const addScheduleNode = (data: { scheduleName: string; date: string; time: string; repeat: string }) => {
        const newNode: Node = {
          id: `schedule-${Date.now()}`,
          type: "scheduleNode",
          position: { x: 500, y: 400 },
          data,
        };
      
        setNodes((nds) => [...nds, newNode]);
        setSidebarOpen(false);
        setActiveNodeType(null);
      
        console.log("Schedule Node Added:", newNode);
      };
      

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
                addScheduleNode
            }}
        >
            {children}
        </WorkflowContext.Provider>
    );
};

export const useWorkflow = () => {
    const ctx = useContext(WorkflowContext);
    if (!ctx) throw new Error("useWorkflow must be used within WorkflowProvider");
    return ctx;
};
