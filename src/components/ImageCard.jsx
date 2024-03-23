import React from "react";
import Image from "next/image";

const Card = (props) => {
  const { imagePath, altText } = props;

  return (
    <div className="w-48 bg-gray-200 shadow-md">
      <Image
        priority={true}
        src={imagePath}
        alt={altText}
        width={200}
        height={300}
      />
    </div>
  );
};
export default Card;
