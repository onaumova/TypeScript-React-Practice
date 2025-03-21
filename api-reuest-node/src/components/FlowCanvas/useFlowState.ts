import { useState } from "react";
import { FlowNode, FlowConnection, FlowState } from "../../types";
import { v4 as uuidv4 } from "uuid";

export const useFlowState = (): FlowState => {
  const [nodes, setNodes] = useState<FlowNode[]>([]);
  const [connections, setConnections] = useState<FlowConnection[]>([]);

  const addNode = (node: Omit<FlowNode, "id">) => {
    const newNode = { ...node, id: uuidv4() };
    setNodes((prev) => [...prev, newNode]);
    return newNode.id;
  };

  const updateNodeData = (id: string, data: any) => {
    setNodes((prev) =>
      prev.map((node) => (node.id === id ? { ...node, data } : node))
    );
  };

  const removeNode = (id: string) => {
    setNodes((prev) => prev.filter((node) => node.id !== id));
    setConnections((prev) =>
      prev.filter((conn) => conn.source !== id && conn.target !== id)
    );
  };

  const addConnection = (source: string, target: string) => {
    const newConnection = { id: uuidv4(), source, target };
    setConnections((prev) => [...prev, newConnection]);
    return newConnection.id;
  };

  const removeConnection = (id: string) => {
    setConnections((prev) => prev.filter((conn) => conn.id !== id));
  };

  return {
    nodes,
    connections,
    addNode,
    updateNodeData,
    removeNode,
    addConnection,
    removeConnection,
  };
};
