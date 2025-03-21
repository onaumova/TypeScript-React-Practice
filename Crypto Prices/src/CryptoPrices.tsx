import React, { useEffect, useState } from "react";
import TableFooter from "./TableFooter";

const CRYPTO_PRICES_API_BASE_URL =
  "https://api.frontendexpert.io/api/fe/cryptocurrencies";

interface Coin {
  name: string;
  price: string;
  marketCap: string;
}

export default function CryptoPrices() {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [tableData, setTableData] = useState<Coin[]>([]);
  const [hasNext, setHasNext] = useState<boolean>(true);

  useEffect(() => {
    const url = new URL(CRYPTO_PRICES_API_BASE_URL);
    url.searchParams.set("page", currentPage.toString());
    console.log("url ", url);
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        if (!result.hasNext) {
          setHasNext(false);
        }
        setTableData(result?.coins);
      })
      .catch((err) => console.log("The following error has occured: ", err));
  }, [currentPage]);

  return (
    <>
      <table>
        <caption>Crypto Prices</caption>
        <thead>
          <tr>
            <th>Coin</th>
            <th>Price</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((coin: Coin, i: number) => {
            return (
              <tr key={i}>
                <th>{coin.name}</th>
                <td>{coin.price}</td>
                <td>{coin.marketCap}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <TableFooter
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        hasNext={hasNext}
      />
    </>
  );
}
