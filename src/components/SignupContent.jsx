import React, { useState } from 'react';
import svgIconUrl from '../assets/CodeAntAIIcon.svg';
import { FaGithub, FaBitbucket, FaGitlab } from 'react-icons/fa';
import { VscAzureDevops } from "react-icons/vsc";
import { IoKeyOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
const SignupContent = () => {
    const [isSaas, setIsSaas] = useState(true);
    const saasSignUpIcons = [<FaGithub size={23} color="#000000" />, <FaBitbucket size={23} color="#2684FF" />, <VscAzureDevops size={23} color="#0073D3" />, <FaGitlab size={23} color="#E24329" />];
    const saasSignUpContent = ["Sign Up with GitHub", "Sign Up with Bitbucket", "Sign Up with Azure Devops", "Sign Up with GitLab"];
    const selfHostedIcons = [<FaGitlab size={23} color="#E24329" />, <IoKeyOutline size={23} />]
    const selfHostedContent = ["Self Hosted GitLab", "Sign in with SSO"];
    return (
        <div className="p-4 flex flex-col lg:min-h-0 justify-center">
            <div>
                <div className="flex items-center justify-center space-x-2 mb-7 pt-5">
                    <img src={svgIconUrl} alt="CodeAnt AI Icon" />
                    <span className="text-2xl">CodeAnt AI</span>
                </div>
                <h1 className='text-center font-bold text-[#181D27] text-2xl mb-4'>
                    Welcome to CodeAnt AI
                </h1>
                <div className='px-4'>
                    <div className='w-full flex justify-evenly items-center rounded-md bg-[#FAFAFA] mb-7'>
                        <button onClick={() => setIsSaas(true)} className={`font-semibold rounded-md w-1/2 h-full ${isSaas ? 'bg-[#2773DE] text-white' : ''} py-3`}>
                            SAAS
                        </button>
                        <button onClick={() => setIsSaas(false)} className={`font-semibold rounded-md w-1/2 h-full ${!isSaas ? 'bg-[#2773DE] text-white' : ''} py-3`}>
                            Self Hosted
                        </button>
                    </div>
                </div>
                <div className='w-full h-[0.3px] bg-[#ECECED]'></div>
                <div className='flex flex-col justify-center items-center gap-4 py-4'>
                    {isSaas ? saasSignUpContent.map((item, key) => {
                        return (<NavLink to="/repositories" className='flex justify-center items-center gap-3 font-semibold rounded-md w-full max-w-[446px] h-full border-2 border-[#ECECED] py-3 hover:bg-gray-50 transition-colors'>
                            {saasSignUpIcons[key]}{item}
                        </NavLink>)
                    }) : selfHostedContent.map((item, key) => {
                        return (<NavLink to="/repositories" className='flex justify-center items-center gap-3 font-semibold rounded-md w-full max-w-[446px] h-full border-2 border-[#ECECED] py-3 hover:bg-gray-50 transition-colors'>
                            {selfHostedIcons[key]}{item}
                        </NavLink>)
                    })}
                </div>
            </div>
        </div>
    );
};

export default SignupContent;
// bg-[#2773DE]