import React from 'react';
import SignupContent from '../components/SignupContent';
import HeroComponent from '../components/HeroComponent';
import svgIconUrl from '../assets/CodeAntAIIcon.svg';

const SignupPage = () => {
  return (
    <div className='w-full min-h-screen'>
      <div className='flex min-h-screen'>
        <div className='hidden lg:block lg:w-1/2 border-r border-gray-200 bg-white relative'>
          <HeroComponent />
          <img
            src={svgIconUrl}
            className='absolute bottom-0 w-[284px] h-[319px] opacity-25'
            alt="CodeAnt AI Icon"
          />
        </div>
        <div className='w-full lg:w-1/2 bg-[#FAFAFA] flex flex-col justify-center items-center'>
          <div className='bg-white rounded-lg w-11/12 h-[75%] lg:h-[67%] drop-shadow-lg mb-5'>
            <SignupContent />
          </div>
          <div className='text-center'>
            By signing up you agree to the <span className='font-semibold'>Privacy Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;