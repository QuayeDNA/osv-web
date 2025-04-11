import React from "react";

interface TabContentProps {
  children: React.ReactNode;
  active: boolean;
}

const TabContent: React.FC<TabContentProps> = ({ children, active }) => {
  if (!active) return null;
  
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        {children}
      </div>
    </div>
  );
};

export default TabContent;
