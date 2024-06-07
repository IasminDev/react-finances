import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ComponentProps<"button"> {
  disable?: boolean;
}

export function Button({ disable, ...props }: ButtonProps) {
  return (
    <div className="flex items-center justify-center">
      <button
        {...props}
        className={twMerge(
          `py-3 px-1.5 w-24 border border-slate-400/10 rounded-md shadow-2xl 
          roboto-bold text-md text-slate-400 drop-shadow-xl 
          hover:border-slate-400 hover:text-slate-50 cursor-pointer`,
          props.className,
          props.disabled &&
            "hover:border-slate-400/10 hover:text-slate-400 cursor-not-allowed",
          disable &&
            "hover:border-slate-400/10 hover:text-slate-400 cursor-not-allowed"
        )}
      ></button>
    </div>
  );
}
