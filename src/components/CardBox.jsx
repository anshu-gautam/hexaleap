import React from "react";

const AdCard = (props) => {
  const { title, content } = props;

  return (
    <div className="h-[250px] w-[200px] px-2 dark:bg-slate-600 dark:text-white">
      <h1 className="my-2 text-lg">{title}</h1>
      <p className="text-sm font-light">{content}</p>
    </div>
  );
};

export default AdCard;
