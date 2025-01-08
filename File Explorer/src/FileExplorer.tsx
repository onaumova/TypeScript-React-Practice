import { useState } from "react";
import { Data } from "./App";

export default function FileExplorer({ data }: { data: Data[] }) {
  return (
    <div>
      <div>
        {
          nestedDirectoryOrFile(data, 0, true)
          // data.sort((a, b) => (a.name >= b.name ? 1 : -1))
          //   .map((item) => {
          //     if (item.hasOwnProperty("children")) {
          //       return (
          //         <Directory
          //           name={item.name}
          //           key={item.id}
          //           children={item.children || []}
          //           indent={0}
          //         />
          //       );
          //     } else {
          //       return <File name={item.name} key={item.id} indent={0} />;
          //     }
          //   })
        }
      </div>
    </div>
  );
}

function nestedDirectoryOrFile(
  children: Data[],
  indent: number,
  isExpanded: boolean
) {
  return children
    .sort((a, b) => {
      return a.hasOwnProperty("children") || a.name <= b.name ? -1 : 1;
    })
    .map((item) => {
      if (item.hasOwnProperty("children")) {
        return isExpanded ? (
          <Directory
            name={item.name}
            key={item.id}
            children={item.children || []}
            indent={indent + 10}
          />
        ) : null;
      } else {
        return isExpanded ? (
          <File name={item.name} key={item.id} indent={indent + 10} />
        ) : null;
      }
    });
}

interface DirectoryProps {
  name: string;
  children: Data[];
  indent: number;
}
function Directory({ name, children, indent }: DirectoryProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <div style={{ marginLeft: indent + "px" }}>
      <div className="directory-container">
        <button
          id="expandButton"
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          {isExpanded ? "-" : "+"}
        </button>
        <div className="directory">{name}</div>
      </div>
      {nestedDirectoryOrFile(children, indent + 2, isExpanded)}
    </div>
  );
}

interface FileProps {
  name: string;
  indent: number;
}
function File({ name, indent }: FileProps) {
  return (
    <div className="file" style={{ marginLeft: indent + "px" }}>
      {name}
    </div>
  );
}
