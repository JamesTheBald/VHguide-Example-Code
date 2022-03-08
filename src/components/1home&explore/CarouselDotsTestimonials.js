import React from "react";

// I tried to combine this with CarouselDotsTopPanel.js (to keep it DRY), by passing in the differences (color, size, positioning) as extra key-value pairs in the props object, then inserting them into the CSS using template literals. But it didn't work, so I've reverted to separate, dedicated files.

const CarouselDots = props => {
  const { pages, activePage, onClick } = props;
  return (
    <div className="flex">
      {pages.map(page => {
        const isActivePage = activePage === page;
        return (
          <button key={page} className="mt-3 mx-1 cursor-pointer" onClick={() => onClick(page)}>
            {isActivePage ? (
              <div className="m-2  bg-blue-black rounded-full" style={{ width: 12, height: 12 }} />
            ) : (
              <div
                className="m-2  border-2 border-solid border-blue-black rounded-full"
                style={{ width: 12, height: 12 }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default CarouselDots;
