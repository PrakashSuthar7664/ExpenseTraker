import React, { useEffect } from "react";
import gsap from "gsap";
import { FcDeleteDatabase } from "react-icons/fc";
import { MdDeleteForever } from "react-icons/md";

const List = ({ list, setList }) => {
  useEffect(() => {
    gsap.from("li", {
      x: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
    });
  }, [list]);

  const handleDelete = (id) => {
    const updatedList = list.filter((item) => item.id !== id);
    setList(updatedList);
  };

  return (
    <div className="ring-1 ring-black p-2 rounded-md w-96 h-[500px] overflow-y-auto overflow-x-hidden">
      <h2 className="text-2xl mb-3 mx-2 font-semibold">Expense List</h2>
      <ul className="text-xl my-1">
        <div className="flex justify-between items-center bg-zinc-900/100 px-3 py-1 rounded-md text-white w-full">
          <span>Expense Name</span>
          <span>Amount</span>
          <span>
            <FcDeleteDatabase />
          </span>
        </div>
        {list.map((item) => (
          <li
            className="flex justify-between items-center mx-2 gap-5 overflow-auto"
            key={item.id}
          >
            <span>{item.expense}</span>
            <span>{item.amount}</span>
            <span
              onClick={() => handleDelete(item.id)}
              className="text-red-700 font-bold cursor-pointer text-xl"
            >
              <MdDeleteForever />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
