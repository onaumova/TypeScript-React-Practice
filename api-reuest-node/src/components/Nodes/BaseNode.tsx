import React, { ReactNode } from "react";
import "./Node.css";

interface BaseNodeProps {
  id: string;
  title: string;
  children: ReactNode;
  onExecute?: () => void;
  isExecuting?: boolean;
}

export const BaseNode: React.FC<BaseNodeProps> = ({
  id,
  title,
  children,
  onExecute,
  isExecuting = false,
}) => {
  return (
    <div className="flow-node" data-node-id={id}>
      <div className="flow-node-header">
        <h3 className="flow-node-title">{title}</h3>
        {onExecute && (
          <button
            className="flow-node-execute-btn"
            onClick={onExecute}
            disabled={isExecuting}
          >
            {isExecuting ? "Running..." : "Run"}
          </button>
        )}
      </div>
      <div className="flow-node-content">{children}</div>
      <div className="flow-node-ports">
        <div
          className="flow-node-input-port"
          data-port-type="input"
          data-node-id={id}
        />
        <div
          className="flow-node-output-port"
          data-port-type="output"
          data-node-id={id}
        />
      </div>
    </div>
  );
};
