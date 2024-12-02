import { useState } from "react";
import users from "./data/users.json";

/*
Given a list of users, build a users data table that displays users in a paginated format.

Requirements
Table requirements
The users data table should display the following columns: Id, Name, Age, Occupation
Each row in the table represents a single user
Pagination requirements
The pagination controls should allow the user to navigate to previous and next pages
The pagination controls should display the current page number and the total number of pages
The table should update dynamically when the user navigates to a different page
Provide an option to select the number of users displayed per page (e.g., 5, 10, 20) */

export default function DataTable() {
  const [message, setMessage] = useState<string>("Data Table");
  const [currentPageCount, setCurrentPageCount] = useState<number>(20);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(
    Math.ceil(users.length / 20)
  );
  const paginationOptions: number[] = [5, 10, 20];

  function handlePerPageChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const countPerPage = parseInt(e.target.value);
    setCurrentPageCount(countPerPage);
    setTotalPages(Math.ceil(users.length / countPerPage));
    setCurrentPage(1);
  }

  function updateCurrentPage(e: React.MouseEvent<HTMLButtonElement>) {
    const buttonVal = (e.target as HTMLButtonElement).value;
    if (buttonVal === "next") {
      setCurrentPage((last) => last + 1);
    } else {
      setCurrentPage((last) => last - 1);
    }
  }
  return (
    <div>
      <h1>{message}</h1>
      <table>
        <thead>
          <tr>
            {[
              { label: "ID", key: "id" },
              { label: "Name", key: "name" },
              { label: "Age", key: "age" },
              { label: "Occupation", key: "occupation" },
            ].map(({ label, key }) => (
              <th key={key}>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users
            .slice(
              currentPageCount * (currentPage - 1),
              currentPageCount * currentPage
            )
            .map(({ id, name, age, occupation }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{age}</td>
                <td>{occupation}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <div id="pagination">
        <select onChange={handlePerPageChange}>
          {paginationOptions.map((pageCount) => {
            return (
              <option
                value={pageCount}
                selected={pageCount === currentPageCount ? true : false}
              >
                {pageCount}
              </option>
            );
          })}
        </select>
        <button
          className="paginationButton"
          value="previous"
          disabled={currentPage === 1 ? true : false}
          onClick={updateCurrentPage}
        >
          {"<"}
        </button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          className="paginationButton"
          value="next"
          disabled={currentPage === totalPages ? true : false}
          onClick={updateCurrentPage}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}
