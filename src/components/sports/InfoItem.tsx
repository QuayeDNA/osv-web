import React from "react";
import { LucideIcon } from "lucide-react";

interface InfoItemProps {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
}

const InfoItem: React.FC<InfoItemProps> = ({ icon: Icon, title, children }) => {
  return (
    <div className="flex items-start">
      <Icon className="w-6 h-6 text-accent flex-shrink-0 mt-1 mr-3" />
      <div className="text-left">
        <h4 className="font-semibold mb-1">{title}</h4>
        {children}
      </div>
    </div>
  );
};

export default InfoItem;
