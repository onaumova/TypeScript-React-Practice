import React from "react";
import { FlowState } from "../../types";
import "./FlowCanvas.css";

interface FlowCanvasProps {
  flowState: FlowState;
  renderNode: (node: any) => React.ReactNode;
}

export const FlowCanvas: React.FC<FlowCanvasProps> = ({
  flowState,
  renderNode,
}) => {
  return (
    <div className="flow-canvas">
      {flowState.nodes.map((node) => (
        <div
          key={node.id}
          className="flow-node-wrapper"
          style={{
            position: "absolute",
            left: `${node.position.x}px`,
            top: `${node.position.y}px`,
          }}
        >
          {renderNode(node)}
        </div>
      ))}
      <svg className="flow-connections">
        {flowState.connections.map((connection) => {
          // This would normally calculate the path between nodes
          // For simplicity, we're just rendering a placeholder
          return (
            <path
              key={connection.id}
              d="M0,0 C100,0 100,100 200,100"
              stroke="#888"
              strokeWidth="2"
              fill="none"
              className="flow-connection"
              data-connection-id={connection.id}
              data-source={connection.source}
              data-target={connection.target}
            />
          );
        })}
      </svg>
    </div>
  );
};
