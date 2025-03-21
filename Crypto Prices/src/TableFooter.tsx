import React from "react";

interface TableFooterProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  hasNext: boolean;
}
export default function TableFooter({
  setCurrentPage,
  currentPage,
  hasNext,
}: TableFooterProps) {
  function updatePage(e: React.MouseEvent<HTMLButtonElement>) {
    const button = e.target as HTMLButtonElement;
    if (button.value === "next") {
      setCurrentPage((prev: number) => prev + 1);
    } else {
      setCurrentPage((prev: number) => prev - 1);
    }
  }
  return (
    <div className="tableFooter">
      <button
        value="back"
        onClick={updatePage}
        disabled={currentPage === 0 ? true : false}
      >
        Back
      </button>
      <button
        value="next"
        onClick={updatePage}
        disabled={hasNext ? false : true}
      >
        Next
      </button>
    </div>
  );
}
