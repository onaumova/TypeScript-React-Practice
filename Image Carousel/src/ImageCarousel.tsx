import { useState } from "react";

export default function ImageCarousel({
  images,
}: Readonly<{
  images: ReadonlyArray<{ src: string; alt: string }>;
}>) {
  const [currentPage, setCurrentPage] = useState<number>(0);

  function handlePageChange(e: React.MouseEvent<HTMLButtonElement>) {
    const value = e.currentTarget.value;
    if (value === "next") {
      setCurrentPage(currentPage === images.length - 1 ? 0 : currentPage + 1);
    } else if (value === "prev") {
      setCurrentPage(currentPage === 0 ? images.length - 1 : currentPage - 1);
    } else if (typeof parseInt(value) === "number") {
      setCurrentPage(parseInt(value));
    }
  }
  const pageButtonClass = "carousel_button page_button";
  return (
    <div id="carousel">
      <div>
        <img
          key={images[currentPage].src}
          alt={images[currentPage].alt}
          src={images[currentPage].src}
          width="100%"
        />
      </div>
      <div className="navigationBar">
        <button
          className="carousel_button"
          id="prevButton"
          value="previous"
          onClick={handlePageChange}
        >
          &#10094;
        </button>
        <button
          className="carousel_button"
          id="nextButton"
          value="next"
          onClick={handlePageChange}
        >
          &#10095;
        </button>
      </div>
      <div className="pageButtonBar">
        {images.map((img, i) => (
          <button
            className={
              i === currentPage
                ? pageButtonClass + " selected"
                : pageButtonClass
            }
            value={i}
            onClick={handlePageChange}
          ></button>
        ))}
      </div>
    </div>
  );
}
