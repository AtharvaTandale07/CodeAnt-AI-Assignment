import React, { useState } from 'react'
import { Menu, X } from 'lucide-react';
import Sidebar from './Sidebar';
import svgIconUrl from '../assets/CodeAntAIIcon.svg';
const MobileHandler = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center space-x-2">
            <img src={svgIconUrl} />
            <span className="text-2xl">CodeAnt AI</span>
          </div>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
            {!isMobileMenuOpen ? <Menu className="w-6 h-6" /> : <X className='w-6 h-6' />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 mt-16 bg-black/30 z-30"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="md:hidden fixed inset-x-0 top-16 z-40 h-fit">
            <div>
              <div className="bg-white shadow-lg pb-4">
                <Sidebar className="overflow-y-auto" isMobileMenuOpen={isMobileMenuOpen} />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default MobileHandler;

