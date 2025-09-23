export type NodeType =
    | "startNode"
    | "binaryConditionNode"
    | "multipleConditionNode"
    | "delayNode"
    | "digestNode"
    | "scheduleNode"
    | "channelRouterNode"
    | "channelNode"
    | "endNode"
    | "endNode";

// Start node Node
export interface StartNodeData {
    name: string;
    description?: string;
    tag?: string;
    notificationType?: string;
}

// End node Node (typically minimal)
export interface EndNodeData {
    name?: string;
    description?: string;
}

//   Binary condition rule 
export interface BinaryConditionNodeData {
    conditionName: string;
    property: string;
    operator: string;
    value: string;
}

// Multiple condition rule (already used)
export interface Rule {
    id: string;
    property: string;
    operator: string;
    value: string;
}

// Multiple condition Node
export interface MultipleConditionNodeData {
    conditionName: string;
    rules: Rule[];
}

// Delay
export interface DelayNodeData {
    delayName: string;
    duration: string;
    unit: string;
}

// Digest
export interface DigestNodeData {
    digestName: string;
    frequency: string;
    time: string; // HH:mm
}

// Schedule
export interface ScheduleNodeData {
    scheduleName: string;
    date: string; // ISO date
    time: string; // HH:mm
    repeat: string;
}

// Channel Router
export interface ChannelRouterNodeData {
    routerName: string;
    channels: string[];
}

// Channel Node
export interface ChannelNodeData {
    channelName: string;
    channelType:  string;
    description?: string;
}

// Recipient Node
export interface RecipientNodeData {
    customerPool: string;
    selectionType: string;
    targetAudience: string;
}