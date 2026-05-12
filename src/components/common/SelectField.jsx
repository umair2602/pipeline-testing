import React, { useState, useEffect, useRef } from "react";
import ChevronDownIcon from "@/icons/ChevronDownIcon";
import CheckIcon from "@/icons/CheckIcon";

const SelectField = ({
  options = [],
  value = null,
  placeholder = "Select an option",
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value);
  const dropdown = useRef(null);

  const selectedOption = options.find(
    (option) => option.value === selectedValue,
  )?.label;

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedValue(option.value);
    setIsOpen(false);
    if (onChange) {
      onChange(option.value);
    }
  };

  const closeDropdown = (event) => {
    if (dropdown.current && !dropdown.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", closeDropdown);
    return () => {
      window.removeEventListener("click", closeDropdown);
    };
  }, []);

  return (
    <div
      ref={dropdown}
      className="relative w-full sm:w-[170px] cursor-pointer select-none"
      onClick={toggleDropdown}
    >
      <div className="text-[13px] font-bold border leading-[15.87px] text-primary py-[7px] ps-[20px] pe-[12px] border-primary rounded h-[30px] flex justify-between items-center">
        <div>{selectedOption ? selectedOption : placeholder}</div>
        <ChevronDownIcon />
      </div>
      {isOpen && (
        <ul className="absolute left-0 w-full mt-[10px] py-[10px] bg-white rounded max-h-[12.6rem] overflow-y-auto scrollbar-hide z-10 drop-shadow-md">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => selectOption(option)}
              className={`text-[12px] text-dark-blue leading-[14.65px] py-[8px] ps-[20px] pe-[12px] cursor-pointer hover:bg-[#416dff0b] font-medium h-[30px] flex justify-between items-center ${
                option.value === selectedValue
                  ? "bg-[#416CFF1A] text-primary"
                  : ""
              }`}
            >
              <div>{option.label}</div>

              {option.value === selectedValue && <CheckIcon />}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectField;
