import React, { useState, useEffect } from "react";
import List from "./List";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Form = () => {
  useGSAP(() => {
    gsap.from(".div , .number", {
      y: -20,
      opacity: 0,
      duration: 1,
    });
  });

  const [input, setInput] = useState("");
  const [amount, setAmount] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    gsap.from(".total-amount", {
      y: -20,
      opacity: 0,
      duration: 1,
    });
  }, [list]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate input and amount
    if (!input || !amount) {
      alert("Please enter a valid expense and amount");
      return;
    }

    // Create a new expense object
    const newExpense = {
      id: list.length + 1,
      expense: input,
      amount: amount,
    };

    // Update the list of expenses
    setList([...list, newExpense]);

    // Clear input fields after submission
    setInput("");
    setAmount("");
  };

  return (
    <div className="bg-zinc-700 lg:h-screen flex flex-wrap ">

{/* absolute  top-[15%] left-[15%] -translate-x-[15%] -translate-y-[15%] */}

<div className=" sm:mt-6 flex justify-center items-center  flex-1  ">
    
        
      <div className=" ">
        <form className="flex flex-col gap-5 w-80 " onSubmit={handleSubmit}>
          <h2 className="text-3xl">Expense Tracker</h2>

          <input
            type="text"
            className="ring-1 ring-black px-3 py-1 placeholder-italic placeholder-text-sm rounded-md focus:bg-zinc-900/100 text-black focus:text-white focus:outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Expense"
            />
          <input
            type="number"
            className="ring-1 ring-black px-3 py-1 placeholder-italic placeholder-text-sm rounded-md focus:bg-zinc-900/100 text-black focus:text-white focus:outline-none"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount"
            />

          <input
            type="submit"
            value="Add Expense"
            className="border rounded-md py-1 w-60 items-center hover:bg-zinc-900/100 text-white"
            />
        </form>

        <div className="mt-36 flex">
          <h2 className="text-3xl flex gap-2">
            Total Expense : <span className="text-4xl">&#8377; </span>
          </h2>
          <h3 className="first-letter:text-4xl text-2xl total-amount">
            {/* Calculate and display total expense */}
            {list.reduce(
                (total, expense) => total + parseFloat(expense.amount),
                0
            )}
          </h3>
        </div>
        </div>
            
            </div>

        <div className="flex-1   flex justify-center items-center  mt-[50px] mb-3">
        <List list={list} />
      </div>
    </div>
  );
};

export default Form;
