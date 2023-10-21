import React from "react";
import Card from "components/card";
import InputInformation from "./InputInfo";
import { useState } from "react";

const CreateVocab = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleInput = (value) => {
    console.log("Dữ liệu từ input:", value);
    // Thực hiện xử lý dữ liệu từ input tại đây
  };

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    console.log("Dữ liệu từ select box:", value);
    // Thực hiện xử lý dữ liệu từ select box tại đây
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Thực hiện xử lý dữ liệu từ cả input và select box
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <Card extra={"w-full p-4 h-full"}>
        <div className="mx-5 mb-8 w-full">
          <h4 className="text-xl font-bold text-navy-700 text-green-400 dark:text-white">
            Create
          </h4>
          <p className="mt-2 text-base text-gray-600">
            This is where you can create new vocabulary to practice.
          </p>
        </div>
        {/* Project 1 */}
        <div className="flex h-full">
          <div className=" my-5 mx-5 w-full items-center  justify-between bg-white">
            <label className="font-medium">
              New word <label className="ml-2 text-red-400">*</label>
            </label>
            <div className="word mt-5">
              <InputInformation
                Children={"cuisine"}
                onInputChange={handleInput}
              />
            </div>
          </div>

          <div className=" mx-5 my-5 w-full items-center  justify-between bg-white">
            <label className="font-medium">
              Meaning <label className="ml-2 text-red-400">*</label>
            </label>
            <div className="mean mt-5">
              <InputInformation
                Children={"a country or region's style of cooking"}
                onInputChange={handleInput}
              />
            </div>
          </div>
        </div>
        <div className="flex h-full">
          <div className=" mx-5 my-5 w-full items-center  justify-between bg-white">
            <label className="font-medium">
              Example <label className="ml-2 text-red-400">*</label>
            </label>
            <div className="example mt-5">
              <InputInformation
                Children={"There more to Italian cuisine than pizza"}
                onInputChange={handleInput}
              />
            </div>
          </div>

          <div className=" mx-5 my-5 w-full items-center  justify-between bg-white">
            <label className="font-medium">
              Choose <label className="ml-2 text-red-400">*</label>
            </label>
            <div className="choosing mt-5">
              <div className="relative  mb-4 w-full">
                <select
                  value={selectedOption}
                  onChange={handleSelectChange}
                  class="w-full border-b-2 border-gray-400  required:ring-red-500 focus:border-green-500 focus:outline-none"
                >
                  <option value="choose">-Choose type-</option>
                  <option value="Noun">Noun</option>
                  <option value="Verb">Verb</option>
                  <option value="Adjective">Adjective</option>
                  <option value="Adverb">Adverb</option>
                  <option value="Phrasal verb">Phrasal verb</option>
                  <option value="Preposition">Preposition</option>
                  <option value="Conjunction">Conjunction</option>
                  <option value="Idiom">Idiom</option>
                  <option value="Slang">Slang</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex h-full">
          <div className=" mx-5 my-5 w-full items-center  justify-between bg-white">
            <label className=" font-medium">Pronounce</label>
            <div className="pronounce mt-5">
              <InputInformation
                Children={"/kwi'zi:n/"}
                onInputChange={handleInput}
              />
            </div>
          </div>

          <div className=" mx-5 my-5 w-full items-center  justify-between bg-white">
            <label className="font-medium">Image URL</label>
            <div className="image-url mt-5">
              <InputInformation
                Children={"https:unsplash.com/photos/JgiIOA"}
                onInputChange={handleInput}
              />
            </div>
          </div>
        </div>
        <div className="text-center transition-all hover:scale-105">
          <a
            href="/"
            className="rounded-full bg-green-400 py-3 px-10 text-base font-semibold text-white"
          >
            <button type="submit">Create</button>
          </a>
        </div>
      </Card>
    </form>
  );
};

export default CreateVocab;
