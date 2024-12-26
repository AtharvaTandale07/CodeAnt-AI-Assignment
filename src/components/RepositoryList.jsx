import React from 'react'
import { Database } from "lucide-react"
const RepositoryList = () => {
    const repositories = [
        { name: 'design-system', language: 'React', size: '7320 KB', updated: '1 day ago', type: 'Public' },
        { name: 'codeant-ci-app', language: 'Javascript', size: '5871 KB', updated: '2 days ago', type: 'Private' },
        { name: 'analytics-dashboard', language: 'Python', size: '4521 KB', updated: '5 days ago', type: 'Private' },
        { name: 'mobile-app', language: 'Swift', size: '3096 KB', updated: '3 days ago', type: 'Public' },
        { name: 'e-commerce-platform', language: 'Java', size: '6210 KB', updated: '6 days ago', type: 'Private' },
        { name: 'blog-website', language: 'HTML/CSS', size: '1876 KB', updated: '4 days ago', type: 'Public' },
        { name: 'social-network', language: 'PHP', size: '5432 KB', updated: '7 days ago', type: 'Private' },
    ];
    return (
        <div>
            {repositories.map((repo, index) => (
                <div key={index} className={`border-t border-gray-200 py-4 last:border-b-0 ${index===1 ? 'bg-[#F5F5F5]':'bg-white'}`}>
                    <div className="flex flex-col px-4">
                        <div className="flex items-center space-x-2 mb-2">
                            <h3 className="text-base font-medium">{repo.name}</h3>
                            <div className="text-xs px-2 py-1 rounded-full bg-[#EFF8FF] text-[#175CD3] border-[1.2px] border-[#B2DDFF]">
                                {repo.type}
                            </div>
                        </div>
                        <div className="flex items-center sm:space-x-10 space-x-4">
                            <div className="flex items-center space-x-1">
                                <span className="text-sm text-gray-600 mr-1">{repo.language}</span>
                                <div className="w-2 h-2 bg-[#2773DE] rounded-full"></div>
                            </div>
                            <div className='flex items-center'>
                                <Database className='w-4 h-3'/>
                                <span className="text-sm text-gray-600">{repo.size}</span>
                            </div>
                            <span className="text-sm text-gray-600">Updated {repo.updated}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default RepositoryList
