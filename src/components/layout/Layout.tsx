import React from 'react';
import SearchBar from './SearchBar';
import BottomNavigation from './BottomNavigation';

type LayoutProps = {
  title: string;
  children: React.ReactNode;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
};

const Layout = ({ title, children, searchTerm, setSearchTerm }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-20 bg-white shadow-sm">
        <SearchBar title={title} value={searchTerm} onChange={setSearchTerm} />
      </header>
      <main className="flex-1 overflow-auto pb-16">{children}</main>
      <BottomNavigation />
    </div>
  );
};

export default Layout;
