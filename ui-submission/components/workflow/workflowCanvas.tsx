"use client";

import React from "react";
import ReactFlow, {
    Background,
    Controls,
    applyNodeChanges,
    applyEdgeChanges,
    NodeChange,
    EdgeChange,
    Connection,
    Edge
} from "reactflow";

import "reactflow/dist/style.css";
import StartNode from "../nodes/StartNode";
import { useWorkflow } from "@/context/workflowContext";
import NodePalette from "./nodepalette";
import StartNodeForm from "../forms/StartNodeForm";
import Sidebar from "./sidebar";
import { Zap } from "lucide-react";
import RecipientNodeForm from "../forms/RecipientNodeForm";
import RecipientNode from "../nodes/RecipientsNode";
import BinaryConditionNode from "../nodes/BinaryConditionsNode";
import BinaryConditionForm from "../forms/BinaryConditionForm";
import MultipleConditionForm from "../forms/MultipleConditionForm";
import MultipleConditionNode from "../nodes/MultipleConditionsNode";
import DelaysNode from "../nodes/DelaysNode";
import DelaysNodeForm from "../forms/DelaysNodeForm";
import DigestNodeForm from "../forms/DigestNodeForm";
import DigestNode from "../nodes/DigestNodes";
import ScheduleNodeForm from "../forms/ScheduleNodeForm";
import ScheduleNode from "../nodes/ScheduleNode";

const nodeTypes = {
    startNode: StartNode,
    recipientNode: RecipientNode,
    binaryConditionNode: BinaryConditionNode,
    multipleConditionNode: MultipleConditionNode,
    delayNode: DelaysNode,
    digestNode: DigestNode,
    scheduleNode: ScheduleNode 
};

export default function WorkflowCanvas() {
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
        addScheduleNode
    } = useWorkflow();

    const onNodesChange = (changes: NodeChange[]) =>
        setNodes((nds) => applyNodeChanges(changes, nds));

    const onEdgesChange = (changes: EdgeChange[]) =>
        setEdges((eds) => applyEdgeChanges(changes, eds));

    const onConnect = (connection: Connection) =>
        setEdges((eds: Edge[]) => [
          ...eds,
          {
            id: `${connection.source ?? "unknown"}-${connection.target ?? "unknown"}`,
            source: connection.source ?? "",
            target: connection.target ?? "",
            sourceHandle: connection.sourceHandle,
            targetHandle: connection.targetHandle,
            // type: connection.type || "default",
          },
        ]);
    return (
        <div className="w-full h-full relative">
            {/* If start node not created → show Start button */}
            {!startNodeCreated && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-10 ">
                    <button
                        onClick={() => {
                            setActiveNodeType("startNode");
                            setSidebarOpen(true);
                            console.log(activeNodeType);
                        }}
                        className="px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition flex items-center gap-2 border-2 border-gray-300"
                    >
                        <Zap className="h-5 w-5" /> 
                        Click to Start
                    </button>
                </div>
            )}

            <NodePalette disabled={!startNodeCreated}/>

            {/* React Flow Canvas */}
            <ReactFlow
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                fitView
            >
                <Background />
                <Controls position="top-right" />
            </ReactFlow>

            {/* Sidebar with forms */}
            <Sidebar>
            {activeNodeType === 'startNode' && <StartNodeForm onSubmit={addStartNode} />}
            {activeNodeType === 'recipientNode' && <RecipientNodeForm onSubmit={addRecipientNode} />}
            {activeNodeType === 'binaryConditionNode' && <BinaryConditionForm onSubmit={addBinaryConditionNode} />}
            {activeNodeType === 'multipleConditionNode' && <MultipleConditionForm onSubmit={addMultipleConditionNode} />}
            {activeNodeType === 'delayNode' && <DelaysNodeForm onSubmit={addDelayNode} />}
            {activeNodeType === 'digestNode' && <DigestNodeForm onSubmit={addDigestNode} />}
            {activeNodeType === 'scheduleNode' && <ScheduleNodeForm onSubmit={addScheduleNode} />}
            </Sidebar>
        </div>
    );
}
        
