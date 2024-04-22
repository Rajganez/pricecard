// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
    <div className='md:flex flex-row  border-solid border-black gap-8 justify-center p-6
    bg-sky-600 w-auto m-3 sm:block'>
    <div className='w-64 p-4 text-center bg-white shadow-lg rounded-2xl
     dark:bg-gray-800 sm:block'>
    <p className="mb-4 text-xl font-medium text-gray-400 dark:text-gray-50 ">
        FREE
    </p>
    <p className="text-3xl text-gray-900 dark:text-white font-semibold">
        $0
        <span className="text-3xl text-gray-900 dark:text-white font-semibold">
            /month
        </span>
    </p>
    <ul className='w-full mt-6 mb-6 text-sm text-gray-800 dark:text-gray-100'>
      <li className='mb-3 flex items-center'>&#10003;&nbsp; Single User</li>
      <li className='mb-3 flex items-center'>&#10003;&nbsp; 50GB Storage</li>
      <li className='mb-3 flex items-center'>&#10003;&nbsp; Unlimited Public Projects</li>
      <li className='mb-3 flex items-center'>&#10003;&nbsp; Community Access</li>
    </ul>
    <ul className='w-full mt-6 mb-6 text-sm text-gray-400 dark:text-gray-70'>
      <li className='mb-3 flex items-center'>&#65794;&nbsp; Single User</li>
      <li className='mb-3 flex items-center'>&#65794;&nbsp; 50GB Storage</li>
      <li className='mb-3 flex items-center'>&#65794;&nbsp; Unlimited Public Projects</li>
      <li className='mb-3 flex items-center'>&#65794;&nbsp; Community Access</li>
    </ul>
    <button className='py-2 px-4 
     bg-indigo-500 hover:bg-indigo-600 
     text-white w-full
      text-center text-base font-semibold shadow-md 
       rounded-full'>Button</button>
    </div>
    <div className='w-64 p-4 text-center bg-white shadow-lg rounded-2xl dark:bg-gray-800'>
    <p className="mb-4 text-xl font-medium text-gray-400 dark:text-gray-50">
        PLUS
    </p>
    <p className="text-3xl text-gray-900 dark:text-white font-semibold">
        $9
        <span className="text-3xl text-gray-900 dark:text-white font-semibold">
            /month
        </span>
    </p>
    <ul className='w-full mt-6 mb-6 text-sm text-gray-800 dark:text-gray-100'>
      <li className='mb-3 flex items-center'>&#10003;&nbsp; 5 Users</li>
      <li className='mb-3 flex items-center'>&#10003;&nbsp; 50GB Storage</li>
      <li className='mb-3 flex items-center'>&#10003;&nbsp; Unlimited Public Projects</li>
      <li className='mb-3 flex items-center'>&#10003;&nbsp; Community Access</li>
      <li className='mb-3 flex items-center'>&#10003;&nbsp; Unlimited Private Projects</li>
      <li className='mb-3 flex items-center'>&#10003;&nbsp; Dedicated Phone Support</li>
      <li className='mb-3 flex items-center'>&#10003;&nbsp; Free Subdomain</li>
    </ul>
    <ul className='w-full mt-6 mb-6 text-sm text-gray-400 dark:text-gray-70'>
      <li className='mb-3 flex items-center'>&#65794;&nbsp; Monthly Status Reports</li>
    </ul>
    <button className='py-2 px-4 
     bg-indigo-500 hover:bg-indigo-600 
     text-white w-full
      text-center text-base font-semibold shadow-md 
       rounded-full'>Button</button>
    </div>
    <div className='w-64 p-4 text-center bg-white shadow-lg rounded-2xl dark:bg-gray-800'>
    <p className="mb-4 text-xl font-medium text-gray-400 dark:text-gray-50">
        PRO
    </p>
    <p className="text-3xl text-gray-900 dark:text-white font-semibold">
        $49
        <span className="text-3xl text-gray-900 dark:text-white font-semibold">
            /month
        </span>
    </p>
    <ul className='w-full mt-6 mb-6 text-sm text-gray-800 dark:text-gray-100'>
      <li className='mb-3 flex items-center'>&#10003;&nbsp; Unlimited Users</li>
      <li className='mb-3 flex items-center'>&#10003;&nbsp; 50GB Storage</li>
      <li className='mb-3 flex items-center'>&#10003;&nbsp; Unlimited Public Projects</li>
      <li className='mb-3 flex items-center'>&#10003;&nbsp; Community Access</li>
      <li className='mb-3 flex items-center'>&#10003;&nbsp; Unlimited Private Projects</li>
      <li className='mb-3 flex items-center'>&#10003;&nbsp; Dedicated Phone Support</li>
      <li className='mb-3 flex items-center'>&#10003;&nbsp; Free Subdomain</li>
      <li className='mb-3 flex items-center'>&#10003;&nbsp; Monthly Status Reports</li>
    </ul>
    <button className='py-2 px-4 
     bg-indigo-600 hover:bg-indigo-700 
     text-white w-full
      text-center text-base font-semibold shadow-md 
       rounded-full'>Button</button>
    </div>
    </div>
    </>
  )
}

export default App
