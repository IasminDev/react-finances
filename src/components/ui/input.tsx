import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends ComponentProps<"input"> {
  empty?: boolean;
}

export function Input({ empty, ...props }: InputProps) {
  return (
    <div
      className={twMerge(`border w-72
             ${empty ? "border-red-500" : "border-slate-400/10"} rounded-md`)}
    >
      <input
        {...props}
        required
        className={twMerge(
          "py-3 px-1.5 w-full h-12 bg-transparent rounded-md placeholder-slate-400 flex-1 outline-none border-0 text-sm focus:ring-1 focus:ring-slate-400/50"
        )}
      />
    </div>
  );
}
