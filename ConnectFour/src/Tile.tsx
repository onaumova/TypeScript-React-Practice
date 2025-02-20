export default function Tile({ tile }: { tile: number | null }) {
  return (
    <div className="tile">
      {tile ? <div className={"player player-" + tile}></div> : null}
    </div>
  );
}
