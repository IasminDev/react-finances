import { ComponentProps } from "react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { useSelectContext } from "../../context/drop-down-context";

interface Option {
  value: string;
  label: string;
  color: string;
}

interface DropDownProps extends ComponentProps<"button"> {
  empty?: boolean;
}

export function DropDown({ empty, ...props }: DropDownProps) {
  const { select, setSelect } = useSelectContext();

  const [open, setOpen] = useState<boolean>(false);
  const [focusedOption, setFocusedOption] = useState<number>(0);

  const handleOpenOptions = () => {
    setOpen(!open);
  };

  const handleOptionClick = (optionValue: string) => {
    setOpen(false);
    setSelect(optionValue);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowDown") {
      setFocusedOption((prevFocusedOption) => prevFocusedOption + 1);
    } else if (event.key === "ArrowUp") {
      setFocusedOption((prevFocusedOption) => prevFocusedOption - 1);
    } else if (event.key === "Enter") {
      const selectedOption = options[focusedOption];
      if (selectedOption) {
        handleOptionClick(selectedOption.value);
      }
    }
  };

  const options: Option[] = [
    { value: "Paid", label: "Paid", color: "text-green-500" },
    { value: "Pending", label: "Pending", color: "text-blue-500" },
    { value: "Cancelled", label: "Cancelled", color: "text-yellow-500" },
    { value: "Overdue", label: "Overdue", color: "text-red-500" },
  ];


  return (
    <div className="relative">
      <button
        {...props}
        className={twMerge(
          `block w-72 h-12 py-3 px-1.5 text-sm text-left border ${
            empty ? "border-red-500" : "border-slate-400/10"
          } rounded-md bg-slate-900 
          outline-none focus:ring-0 focus:border-slate-400/50 placeholder-slate-400`,
          open ? "active" : ""
        )}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={handleOpenOptions}
        onKeyDown={handleKeyDown}
      >
        {select ? (
          <div>
            <div
              className={`w-4 h-4 mr-1 ml-1 inline-block ${
                options.find((option) => option.value === select)?.color ?? ""
              }`}
              aria-hidden="true"
              >
              &#x25CF;
            </div>
            {options.find((option) => option.value === select)?.label ?? ""}
          </div>
        ) : (
          "Select"
          )}
      </button>
        {open && (
          <ul
          className="absolute z-40 w-full bg-slate-900 border border-slate-400/10 rounded-md shadow-md"
            role="listbox"
            aria-activedescendant={focusedOption.toString()}
          >
            {options.map((option, index) => (
              <li
                key={option.value}
                className={twMerge(
                  "py-3 px-1.5 cursor-pointer",
                  focusedOption === index ? "bg-slate-800" : ""
                )}
                role="option"
                aria-selected={focusedOption === index}
                onClick={() => handleOptionClick(option.value)}
                onMouseOver={() => setFocusedOption(index)}
              >
                <div
                  className={`w-4 h-4 mr-2 inline-block ${option.color}`}
                  aria-hidden="true"
                >
                  &#x25CF;
                </div>
                {option.label}
              </li>
            ))}
          </ul>
      )}
      {open && (        
        <div className="fixed z-30 inset-0 bg-slate-950/70" onClick={()=>setOpen(false)}/>
       
      )}
    </div>
  );
}
