// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

const Cards =[
  {
    id:1,
  card : "FREE", 
  price: "$0/month",
  contents : [
   {content: "Single User", isEnabled: true},
   {content: "50GB Storage",isEnabled: true },
   {content: "Unlimited Public Projects", isEnabled : true },
   {content: "Community Access", isEnabled: true },
   {content: "Unlimited Private Projects", isEnabled: false},
   {content: "Dedicated Phone Support",isEnabled: false},
   {content: "Free Subdomain", isEnabled:false},
   {content: "Monthly Status Reports", isEnabled:false}],
},
{
  id:2,
card : "PLUS", 
price: "$9/month",
contents : [
 {content: "5 Users", isEnabled: true},
 {content: "50GB Storage",isEnabled: true },
 {content: "Unlimited Public Projects", isEnabled : true },
 {content: "Community Access", isEnabled: true },
 {content: "Unlimited Private Projects", isEnabled: true},
 {content: "Dedicated Phone Support",isEnabled: true},
 {content: "Free Subdomain", isEnabled: true},
 {content: "Monthly Status Reports", isEnabled:false}],
},
{
  id:3,
card : "PRO", 
price: "$49/month",
contents : [
 {content: "Unlimited User", isEnabled: true},
 {content: "50GB Storage",isEnabled: true },
 {content: "Unlimited Public Projects", isEnabled : true },
 {content: "Community Access", isEnabled: true },
 {content: "Unlimited Private Projects", isEnabled: true},
 {content: "Dedicated Phone Support",isEnabled: true},
 {content: "Free Subdomain", isEnabled: true},
 {content: "Monthly Status Reports", isEnabled:true}],
},
];
export default function Pricecard(){
  return(
    <>
    <div className='md:flex flex-row  border-solid border-black gap-8 justify-center p-6
    bg-sky-600 w-auto m-3 sm:block'>
      {Cards.map((val) => (
      <div key={val.id} className='w-64 p-4 text-center bg-white shadow-lg rounded-2xl
      dark:bg-gray-800 sm:block'>
        <p key={val.card} className="mb-4 font-medium text-gray-400 dark:text-gray-50 ">
         {val.card}
     </p>
      <p key={val.price} className="text-3xl text-gray-900 dark:text-white font-semibold">
      {val.price} </p>
      <ul key={val.contents} className='w-full mt-6 mb-6 text-sm text-gray-800 dark:text-gray-100'>
      {val.contents.map((val) => (
        <>
        {val.isEnabled ? (
      <li key={val.content} className='mb-3 flex items-center'>&#10003;&nbsp; {val.content}</li>
        ) : (
          <li className='mb-3 flex text-gray-400 items-center'>
        &#65794;&nbsp;{val.content}</li>
        )}
        </>  
    ))}
      </ul>
      <button className='py-2 px-4 
      bg-indigo-500 hover:bg-indigo-600 
      text-white w-full
       text-center text-base font-semibold shadow-md 
        rounded-full'>Button</button>
    </div>
    ))}
    </div>
    </>
  )
}

