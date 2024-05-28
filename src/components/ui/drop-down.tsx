import { ComponentProps, useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface Option {
  value: string;
  label: string;
  color: string;
}

interface DropDownProps extends ComponentProps<'select'> {}

export function DropDown({...props}: DropDownProps) {
  const [value, setValue] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);
  const [focusedOption, setFocusedOption] = useState<number | null>(null);

  const handleOpenOptions = () => {
    setOpen(!open);
  };

  const handleOptionClick = (optionValue: string) => {
    setValue(optionValue);
    setOpen(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'ArrowDown') {
      setFocusedOption((prevFocusedOption) => prevFocusedOption + 1);
    } else if (event.key === 'ArrowUp') {
      setFocusedOption((prevFocusedOption) => prevFocusedOption - 1);
    } else if (event.key === 'Enter') {
      handleOptionClick(focusedOption);
    }
  };

  const options: Option[] = [
    { value: '1', label: 'Excellent', color: 'green-500' },
    { value: '2', label: 'Good', color: 'blue-500' },
    { value: '3', label: 'Fair', color: 'yellow-500' },
    { value: '4', label: 'Poor', color: 'red-500' },
  ];

  return (
    <div className="relative">
      <button
        className={twMerge(
          'block w-72 h-12 py-3 px-1.5 text-sm text-left border border-slate-400/10 rounded-md bg-slate-900 outline-none focus:ring-0 focus:border-slate-400/50 placeholder-slate-400',
          open ? 'active' : ''
        )}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={handleOpenOptions}
        onKeyDown={handleKeyDown}
      >
        {value ? (
          <span>
            <span
              className={`w-4 h-4 mr-1 ml-1 inline-block text-${options.find((option) => option.value === value).color}`}
              aria-hidden="true"
            >
              &#x25CF;
            </span>
            {options.find((option) => option.value === value).label}
          </span>
        ) : (
          'Select'
        )}
      </button>
      {open && (
        <ul
          className="absolute w-full bg-slate-900 border border-slate-400/10 rounded-md shadow-md"
          role="listbox"
          aria-activedescendant={focusedOption}
        >
          {options.map((option, index) => (
            <li
              key={option.value}
              className={twMerge(
                'py-3 px-1.5 cursor-pointer',
                focusedOption === index ? 'bg-slate-800' : ''
              )}
              role="option"
              aria-selected={focusedOption === index}
              onClick={() => handleOptionClick(option.value)}
              onMouseOver={() => setFocusedOption(index)}
            >
              <span
                className={`w-4 h-4 mr-2 inline-block text-${option.color}`}
                aria-hidden="true"
              >
                &#x25CF;
              </span>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
// import { ComponentProps, useState } from 'react'
// import { twMerge } from 'tailwind-merge'
// interface DropDownProps extends ComponentProps<'select'>{}
// export function DropDown({...props}:DropDownProps) {
//   const [status, setStatus] = useState('');
//     return (
//     <select    
//     className={twMerge(
//         'block w-72 h-12 py-3 px-1.5 text-sm border border-slate-400/10 rounded-md bg-slate-900 outline-none focus:ring-0 focus:border-slate-400/50 placeholder-slate-400'
//         )}
//     {...props} 
//     requerid
//     value={status}
//     onChange={(e) => setStatus(e.target.value)}
//     >
//       <option>Select:</option>
//       <option value="1">Excellent</option>
//       <option value="2">Good</option>
//       <option value="3">Fair</option>
//       <option value="4">Poor</option>
//     </select>
//     )
// }