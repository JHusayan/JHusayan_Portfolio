import React from "react";
interface ICardProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}
const Card = (props: ICardProps) => {
  return (
    <div className="w-56 max-w-xs bg-standard-white shadow-lg rounded-xl overflow-hidden my-2 sm:my-10 cursor-pointer">
      <div className="group h-56 w-full [perspective:1000px]">
        <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Card;
