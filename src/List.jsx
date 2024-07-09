import React, { useEffect } from "react";
import gsap from "gsap";

const List = ({ list }) => {


  useEffect(() => {
    gsap.from("li",{
      x: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
      overflow: "hidden",
     
    });
  }, [list] ); // Run animation whenever `list` changes

  return (
    <div className="ring-1 ring-black p-2 rounded-md w-96 h-[500px]  overflow-y-auto overflow-x-hidden ">
      <h2 className="text-2xl mb-3 mx-2 font-semibold">Expense List</h2>
      <ul className="text-xl my-1">
        <div className="div flex justify-between items-center bg-zinc-900/100 px-3 py-1 rounded-md text-white w-full">
          <span>Expense Name</span>
          <span>Amount</span>
        </div>
        {list.map((item) => (
          <li className="flex justify-between items-center mx-2" key={item.id}>
            <span>{item.expense}</span>
            <span>{item.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
