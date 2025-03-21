/* Now, you need to implement the ApiRequestNode component that will integrate with the provided code. This component should:

Allow users to configure API requests (URL, method, headers, body)
Execute requests using the provided useApiRequest hook
Display the response data
Integrate with the existing Flow Canvas system */
import { FlowNode } from "../../types";
import { BaseNode } from "./BaseNode";
import { useState } from "react";

interface ApiRequestNodeProps {
  node: FlowNode;
}
export default function ApiRequestNode({ node }: ApiRequestNodeProps) {
  const [isExecuting, setIsExecuting] = useState<boolean>(false);

  function handleExecute() {}
  const children = <div></div>;
  return (
    <BaseNode
      id={node.id}
      title="API Request"
      onExecute={handleExecute}
      isExecuting
      children
    />
  );
}
