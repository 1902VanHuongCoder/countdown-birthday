import React, { useState } from "react";
import { Link } from "react-router-dom";
import { removeVietnameseTones } from "./removeVietnameseTones";
const Generate = () => {
  const [name, setName] = useState("Paul");
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState(1);
  const [link, setLink] = useState("");
  const handleGenerateLink = (event) => {
    event.preventDefault();
    let nameConverted = removeVietnameseTones(name);
    setLink(`http://localhost:3000/${nameConverted}/${month}/${day}`);
  };
  return (
    <div className="w-screen h-screen bg-slate-800 flex justify-center items-center">
      <form className="bg-white p-4 rounded-lg">
        <h1 className="w-full text-center text-2xl uppercase font-medium ">
          Generate form
        </h1>
        <div className="flex justify-center mt-2">
          <div className=" w-10 h-10 rounded-full overflow-hidden">
            <img
              className="w-full h-full"
              src="https://tse1.mm.bing.net/th?id=OIP.KkHfuU0j6A9-dYusQQh2GAHaIN&pid=Api&P=0&h=180"
              alt="logo"
            />
          </div>
        </div>
        <div className="p-2 flex flex-col space-y-4 mt-2 border-t-2 border-[rgba(0,0,0,.1)]">
          <div className="flex flex-col space-y-1">
            <label>Your name </label>
            <input
              onChange={(event) => {
                setName(event.target.value);
              }}
              className="outline-0 w-full rounded-sm p-1 border-solid border-2 border-[rgba(0,0,0,.3)]"
              type="text"
              required
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label>Day of birth</label>
            <input
              onChange={(event) => {
                setDay(event.target.value);
              }}
              className="outline-0 w-full rounded-sm pl-2 p-1 border-solid border-2 border-[rgba(0,0,0,.3)]"
              type="number"
              min={1}
            />
          </div>

          <div>
            <label>Month of birth </label>
            <select
              defaultValue={1} 
              className="bg-slate-200 rounded-sm p-1 font-normal"
              onChange={(event) => {
                setMonth(event.target.value);
              }}
            >
              <option value={1}>
                January
              </option>
              <option value={2}>February</option>
              <option value={3}>March</option>
              <option value={5}>May</option>
              <option value={6}>June</option>
              <option value={7}>July</option>
              <option value={8}>August</option>
              <option value={9}>September</option>
              <option value={10}>Octobor</option>
              <option value={11}>November</option>
              <option value={12}>December</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col mt-3">
          <button
            onClick={handleGenerateLink}
            className="hover:shadow-lg font-bold rounded-lg mb-2 bg-sky-300 w-fit h-fit p-2 mx-auto "
          >
            Generate Link
          </button>
          {link !== "" && (
            <div className="py-2 mb-2">{link}</div>
          )}
          <Link to={link}>
            <div className="underline w-full text-center">Visit Link</div>
          </Link>
        </div>
      </form>
      <div></div>
    </div>
  );
};

export default Generate;
