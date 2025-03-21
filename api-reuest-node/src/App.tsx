import React from "react";
import { FlowCanvas } from "./components/FlowCanvas/FlowCanvas";
import { useFlowState } from "./components/FlowCanvas/useFlowState";
import { NodeType } from "./components/Nodes/NodeTypes";
import ApiRequestNode from "./components/Nodes/ApiRequestNode";
// Import your ApiRequestNode component here

function App() {
  const flowState = useFlowState();

  // Create a sample node when the app loads
  React.useEffect(() => {
    flowState.addNode({
      type: NodeType.API_REQUEST,
      position: { x: 100, y: 100 },
      data: {
        config: {
          url: "https://jsonplaceholder.typicode.com/todos/1",
          method: "GET",
          headers: {},
        },
        response: null,
      },
    });
  }, []);

  const renderNode = (node: any) => {
    switch (node.type) {
      case NodeType.API_REQUEST:
        // Render your ApiRequestNode component here
        return <ApiRequestNode node={node} />;
      default:
        return <div>Unknown Node Type</div>;
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Postman Flows</h1>
      </header>
      <main className="app-content">
        <FlowCanvas flowState={flowState} renderNode={renderNode} />
      </main>
    </div>
  );
}

export default App;
