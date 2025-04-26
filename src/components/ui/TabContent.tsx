import React from "react";

interface TabContentProps {
  children: React.ReactNode;
  active: boolean;
  id?: string;
}

const TabContent: React.FC<TabContentProps> = ({ children, active, id }) => {
  if (!active) return null;
  
  return (
    <div id={id} className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        {children}
      </div>
    </div>
  );
};

export default TabContent;
