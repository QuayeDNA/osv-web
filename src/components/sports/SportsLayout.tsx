import React from 'react';
import SportsHeader from './SportsHeader';
import SportsFooter from './SportsFooter';

interface SportsLayoutProps {
  children: React.ReactNode;
}

const SportsLayout: React.FC<SportsLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <SportsHeader />
      <main className="flex-grow">
        {children}
      </main>
      <SportsFooter />
    </div>
  );
};

export default SportsLayout;