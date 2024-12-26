import React from 'react';
import { Search, RefreshCw, Plus } from 'lucide-react';
const Header = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center px-5 mt-2">
                <div className="mb-4 sm:text-left">
                    <h1 className="text-2xl font-semibold">Repositories</h1>
                    <p className="text-sm text-gray-600">33 total repositories</p>
                </div>
                <div className="flex sm:flex-row gap-2 mb-4">
                    <button className="flex items-center justify-center gap-2 px-2 sm:px-3 py-1 sm:py-2 text-sm sm:text-base text-gray-700 border-2 border-gray-200 shadow-md rounded-md w-auto">
                        <RefreshCw className="w-3 sm:w-4 h-3 sm:h-4" />
                        <span>Refresh All</span>
                    </button>
                    <button className="flex items-center justify-center gap-2 px-2 sm:px-3 py-1 sm:py-2 text-sm sm:text-base bg-blue-600 border-2 border-[#2E6FCA] shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.2)] text-white rounded-md w-auto">
                        <Plus className="w-3 sm:w-4 h-3 sm:h-4" />
                        <span>Add Repository</span>
                    </button>
                </div>

            </div>
            <div className="relative mb-4 px-4">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-[rgba(0,0,0,0.7)] w-5 h-5" />
                <p className="pl-10 pr-4 py-2 text-[rgba(0,0,0,0.8)] border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm w-full sm:w-80">
                    Search Repositories
                </p>
            </div>

        </>
    )
}

export default Header
