import React from "react";

const CarouselDots = props => {
  const { pages, activePage, onClick, className, size, darkColours } = props;
  const baseDotClass = "m-2 rounded-full  cursor-pointer";

  const borderColClass = darkColours ? "border-blue-black" : "border-gray-light";
  const backgndColClass = darkColours ? "bg-blue-black" : "bg-gray-light";

  return (
    <div className={`flex ${className}`}>
      {pages.map(page => {
        const isActivePage = activePage === page;
        return (
          <button
            key={page}
            className="mt-3 mx-1 z-50"
            onClick={event => {
              event.stopPropagation();
              onClick(page);
            }}
          >
            {isActivePage ? (
              <div className={`${baseDotClass} ${backgndColClass}`} style={{ width: size, height: size }} />
            ) : (
              <div
                className={`${baseDotClass} border-2 border-solid ${borderColClass}`}
                className={`${baseDotClass} border-2 border-solid ${borderColClass}`}
                style={{ width: size, height: size }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default CarouselDots;
