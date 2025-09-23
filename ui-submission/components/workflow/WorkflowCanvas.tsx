"use client";

import React from "react";
import ReactFlow, {
    Background,
    Controls,
    applyNodeChanges,
    applyEdgeChanges,
    NodeChange,
    EdgeChange,
    Connection
} from "reactflow";

import "reactflow/dist/style.css";
import { Zap } from "lucide-react";

// Import all node components
import StartNode from "../nodes/StartNode";
import RecipientNode from "../nodes/RecipientsNode";
import BinaryConditionNode from "../nodes/BinaryConditionsNode";
import MultipleConditionNode from "../nodes/MultipleConditionsNode";
import DelaysNode from "../nodes/DelaysNode";
import DigestNode from "../nodes/DigestNodes";
import ScheduleNode from "../nodes/ScheduleNode";
import ChannelRouterNode from "../nodes/ChannelRouterNode";
import IndividualChannelNode from "../nodes/IndividualChannelNode";
import EndNode from "../nodes/EndNode";

// Import all corresponding forms for sidebar
import StartNodeForm from "../forms/StartNodeForm";
import RecipientNodeForm from "../forms/RecipientNodeForm";
import BinaryConditionForm from "../forms/BinaryConditionForm";
import MultipleConditionForm from "../forms/MultipleConditionForm";
import DelaysNodeForm from "../forms/DelaysNodeForm";
import DigestNodeForm from "../forms/DigestNodeForm";
import ScheduleNodeForm from "../forms/ScheduleNodeForm";
import ChannelRouterForm from "../forms/ChannelRouterNodeForm";
import IndividualChannelForm from "../forms/IndividualChannelNodeForm";
import EndNodeForm from "../forms/EndNodeForm";

// Utility components
import { useWorkflow } from "@/context/workflowContext";
import Sidebar from "./Sidebar";
import NodePalette from "./NodePalette";

// Map node type → ReactFlow node component
const nodeTypes = {
    startNode: StartNode,
    recipientNode: RecipientNode,
    binaryConditionNode: BinaryConditionNode,
    multipleConditionNode: MultipleConditionNode,
    delayNode: DelaysNode,
    digestNode: DigestNode,
    scheduleNode: ScheduleNode,
    channelRouterNode: ChannelRouterNode,
    individualChannelNode: IndividualChannelNode,
    endNode: EndNode
};

// Map node type → form component for sidebar
const formsMap: Record<string, React.FC<any>> = {
    startNode: StartNodeForm,
    recipientNode: RecipientNodeForm,
    binaryConditionNode: BinaryConditionForm,
    multipleConditionNode: MultipleConditionForm,
    delayNode: DelaysNodeForm,
    digestNode: DigestNodeForm,
    scheduleNode: ScheduleNodeForm,
    channelRouterNode: ChannelRouterForm,
    individualChannelNode: IndividualChannelForm,
    endNode: EndNodeForm
};

export default function WorkflowCanvas() {
    // Get workflow state and actions from context
    const {
        nodes,
        edges,
        setNodes,
        setEdges,
        startNodeCreated,
        setSidebarOpen,
        activeNodeType,
        setActiveNodeType,
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
    } = useWorkflow();

    // ReactFlow node changes handler
    const onNodesChange = (changes: NodeChange[]) =>
        setNodes(nds => applyNodeChanges(changes, nds));

    // ReactFlow edge changes handler
    const onEdgesChange = (changes: EdgeChange[]) =>
        setEdges(eds => applyEdgeChanges(changes, eds));

    // ReactFlow connection handler (when user draws edges)
    const onConnect = (connection: Connection) =>
        setEdges(eds => [
            ...eds,
            {
                id: `${connection.source}-${connection.target}`, // unique edge ID
                source: connection.source!,
                target: connection.target!,
                sourceHandle: connection.sourceHandle,
                targetHandle: connection.targetHandle
            },
        ]);

    // Map node type → corresponding addNode function
    const addNodeMap: Record<string, Function> = {
        startNode: addStartNode,
        recipientNode: addRecipientNode,
        binaryConditionNode: addBinaryConditionNode,
        multipleConditionNode: addMultipleConditionNode,
        delayNode: addDelayNode,
        digestNode: addDigestNode,
        scheduleNode: addScheduleNode,
        channelRouterNode: addChannelRouterNode,
        individualChannelNode: addIndividualChannelNode,
        endNode: addEndNode
    };

    // Dynamically get the form component and addNode function based on activeNodeType
    const ActiveForm = activeNodeType ? formsMap[activeNodeType] : null;
    const addNodeFn = activeNodeType ? addNodeMap[activeNodeType] : undefined;

    return (
        <div className="w-full h-full relative">
            {/* Overlay "Click to Start" button if start node not created */}
            {!startNodeCreated && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-10">
                    <button
                        onClick={() => {
                            setActiveNodeType("startNode"); // open start node form
                            setSidebarOpen(true);
                        }}
                        className="px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition flex items-center gap-2 border-2 border-gray-300"
                    >
                        <Zap className="h-5 w-5" /> Click to Start
                    </button>
                </div>
            )}

            {/* Node palette on the left */}
            <NodePalette disabled={!startNodeCreated} />

            {/* ReactFlow canvas */}
            <ReactFlow
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes} // use custom node components
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                fitView
            >
                <Background /> {/* Grid background */}
                <Controls position="top-right" /> {/* Zoom/pan controls */}
            </ReactFlow>

            {/* Sidebar renders form dynamically based on activeNodeType */}
            <Sidebar>
                {ActiveForm && addNodeFn && (
                    <ActiveForm onSubmit={addNodeFn} />
                )}
            </Sidebar>
        </div>
    );
}
