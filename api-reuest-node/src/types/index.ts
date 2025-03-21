export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export interface ApiRequestConfig {
  url: string;
  method: HttpMethod;
  headers: Record<string, string>;
  body?: string;
}

export interface ApiResponse {
  status: number;
  statusText: string;
  data: any;
  headers: Record<string, string>;
}

export interface FlowNode {
  id: string;
  type: string;
  position: { x: number; y: number };
  data: any;
}

export interface FlowConnection {
  id: string;
  source: string;
  target: string;
}

export interface FlowState {
  nodes: FlowNode[];
  connections: FlowConnection[];
  addNode: (node: Omit<FlowNode, "id">) => void;
  updateNodeData: (id: string, data: any) => void;
  removeNode: (id: string) => void;
  addConnection: (source: string, target: string) => void;
  removeConnection: (id: string) => void;
}
