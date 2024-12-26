import React from 'react';
import Sidebar from '../components/Sidebar';
import MobileHandler from '../components/MobileHandler';
import RepositoryList from '../components/RepositoryList';
import Header from '../components/Header';
const RepositoryPage = () => {
  return (
    <div className="flex min-h-screen bg-[#FAFAFA]">
      <div className="hidden md:block w-[242px] fixed h-full">
        <Sidebar />
      </div>
      <MobileHandler />
      <div className="w-full md:mr-7 md:ml-[268px] md:mt-5 md:mb-5 pt-16 md:py-1 bg-white drop-shadow-lg rounded-lg mt-5">
        <div className="max-w-7xl mx-auto">
          <Header />
          <RepositoryList />
        </div>
      </div>
    </div>
  );
};

export default RepositoryPage;