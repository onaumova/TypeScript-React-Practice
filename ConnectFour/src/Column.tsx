import Tile from "./Tile";
import { useEffect } from "react";

interface ColumnProps {
  column: (number | null)[];
  onClick: () => void;
}

export default function Column({ column, onClick }: ColumnProps) {
  return (
    <div className="column" onClick={onClick}>
      {column.map((tile, i) => {
        return <Tile key={i} tile={tile} />;
      })}
    </div>
  );
}
