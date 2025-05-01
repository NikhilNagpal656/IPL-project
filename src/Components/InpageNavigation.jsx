import React, { use, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const InpageNavigation = ({ teams, children }) => {
  const [index, setIndex] = useState(0);
  let tablineRef = useRef()
  let btnRef = useRef()

//   console.log(tablineRef);
  

  function togglebtn(btn,i){
    let {offsetWidth, offsetLeft} = btn
    tablineRef.current.style.width = offsetWidth + "px"
    tablineRef.current.style.left = offsetLeft + "px"
        setIndex(i)

  }
  useEffect(()=>{
    togglebtn(btnRef.current,0)
  },[])

  return (
    <div className="w-full">
      <div className={"bg-blue-700  w-full  flex justify-between items-end " + (teams.length > 2 ? "h-[100px] " : "h-[50px]")}>

      { teams.length > 2 ? teams.map(({path,title}, i) => (
        <Link to={path}>
        <button 
        ref={i==0 ? btnRef : null}
        key={i}
          className={
            " px-2 py-1.5  font-bold lg:px-15 lg:py-2 hover:bg-gray-200/40 " +
            (index == +i ? "text-black bg-gray-200/40 " : "text-gray-500")
          }
          onClick={(e) => togglebtn(e.target,i)}
        >


          {title}
        </button>
        </Link>
      ))  : 
     teams.map((data, i) => (
        <button 
        ref={i==0 ? btnRef : null}
        key={i}
        className={
          "bg-black border h-full w-[50%]  " +
          (index == +i ? "text-white " : "text-gray-500")
        }
        onClick={(e) => togglebtn(e.target,i)}
        >


          {data}
        </button>
      ))}
      <hr ref={tablineRef} className="border-2 border-white absolute duration-400 "/>
      </div>
      { teams.length > 2  ? "" : children[index]}
    </div>
  );
};

export default InpageNavigation;
