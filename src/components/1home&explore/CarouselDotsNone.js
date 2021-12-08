import React from "react";

const CarouselDotsNone = props => {
  const { pages } = props;
  return (
    <div className="hidden">
      {pages.map(page => {
        return <div key={page} />;
      })}
    </div>
  );
};

export default CarouselDotsNone;
