import { Children } from "react";
const InputInformation = ({ Children }) => {
  return (
    <div className="relative  mb-4 w-full">
      <input
        type="text"
        id="inputField"
        required=""
        placeholder=" "
        className=" w-full border-b-2 border-gray-400 placeholder-gray-500 required:ring-red-500 focus:border-green-500 focus:outline-none"
      />
      <label
        htmlFor="inputField"
        className=" pointer-events-none absolute left-0 top-0 text-base font-medium text-gray-600 transition-all duration-300"
      >
        {Children}
      </label>
    </div>
  );
};

export default InputInformation;
