import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  centered = true,
  className = "",
}) => {
  return (
    <div
      className={`mb-12 ${centered ? "text-center" : ""} ${className}`}
      data-aos="fade-up"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-secondary/80 mb-8">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeader;
