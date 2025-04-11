import React from "react";

interface CheckItemProps {
  text: string;
  symbol?: string;
  number?: number;
  className?: string;
}

const CheckItem: React.FC<CheckItemProps> = ({
  text,
  symbol = "✓",
  number,
  className = "",
}) => {
  return (
    <li className={`flex items-center ${className}`}>
      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center mr-3">
        {number !== undefined ? number : symbol}
      </div>
      <span>{text}</span>
    </li>
  );
};

export default CheckItem;
