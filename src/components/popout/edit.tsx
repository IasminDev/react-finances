import {
  ComponentProps,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Button } from "../ui/button";
import { twMerge } from "tailwind-merge";
import { useSelectContext } from "../../context/drop-down-context";
import { DropDown } from "../ui/drop-down";
import { Input } from "../ui/input";
import { api } from "../../lib/server";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { Transaction } from "../../pages/financial-planning/savings";
import { Goal } from "../../pages/financial-planning/financial-goals";

dayjs.extend(utc);

interface EditProps extends ComponentProps<"div"> {
  openEdit?: boolean;
  savings?: boolean;
  revenueId?: number;
  debts?: boolean;
  debtId?: number;
  goals?: boolean;
  goalId?: number;
  userId?: string;
  userToken?: string;
  selectValue?: string;
  transaction?: Transaction;
  goal?: Goal;
  setOpenEditProps: Dispatch<SetStateAction<boolean>>;
}

export function Edit({
  openEdit,
  savings,
  revenueId,
  debts,
  debtId,
  goals,
  goalId,
  userId,
  userToken,
  selectValue,
  transaction,
  goal,
  setOpenEditProps,
}: EditProps) {
  const [description, setDescription] = useState(
    transaction?.description || goal?.description || ""
  );
  const [value, setValue] = useState(
    goal?.value || ""
  );
  const [amount, setAmount] = useState<string | number>(
    transaction?.amount || ""
  );
  const [date, setDate] = useState(
    transaction?.date || goal?.date || ""
  );
  const { select, setSelect } = useSelectContext();

  useEffect(() => {
    if (selectValue !== undefined) {
      setSelect(selectValue);
    }
  }, [selectValue, setSelect]);

  const handleEdit = () => {
    if (savings) {
      const formatDateForBackend = (date: string): string => {
        const formattedDate = dayjs(date).utc().format();
        return formattedDate;
      };
      const updateData = {
        description: description,
        amount: amount,
        date: formatDateForBackend(date),
        status: select,
      };
      api
        .put(`/${userId}/revenues/${revenueId}`, updateData, {
          headers: { token: `Bearer ${userToken}` },
        })
        .then((response) => {
          const updatedTransaction = response.data.saving;
          setDescription("");
          setAmount("");
          setDate("");
          setSelect("");
          setOpenEditProps(false);
          return updatedTransaction;
        })
        .catch((error) => {
          console.error("Error updating transaction:", error);
        });
    }
    else if (debts) {
      const formatDateForBackend = (date: string): string => {
        const formattedDate = dayjs(date).utc().format();
        return formattedDate;
      };
      const updateData = {
        description: description,
        amount: amount,
        date: formatDateForBackend(date),
        status: select,
      };
      api
        .put(`/${userId}/debts/${debtId}`, updateData, {
          headers: { token: `Bearer ${userToken}` },
        })
        .then((response) => {
          const updatedTransaction = response.data.debt;
          setDescription("");
          setAmount("");
          setDate("");
          setSelect("");
          setOpenEditProps(false);
          return updatedTransaction;
        })
        .catch((error) => {
          console.error("Error updating transaction:", error);
        });
    }
    else if (goals) {
      const formatDateForBackend = (date: string): string => {
        const formattedDate = dayjs(date).utc().format();
        return formattedDate;
      };
      const updateData = {
        description: description,
        value: value,
        date: formatDateForBackend(date),
      };
      api
        .put(`/${userId}/goals/${goalId}`, updateData, {
          headers: { token: `Bearer ${userToken}` },
        })
        .then((response) => {
          const updatedTransaction = response.data.goal;
          setDescription("");
          setValue("");
          setDate("");
          setOpenEditProps(false);
          return updatedTransaction;
        })
        .catch((error) => {
          console.error("Error updating transaction:", error);
        });
    }
  };
  return (
    <div
      className={twMerge(
        `fixed inset-0 flex items-center justify-center z-50`,
        openEdit ? "flex" : "hidden"
      )}
    >
      <div className="w-80 h-50 bg-slate-700 rounded-md border border-white/10 p-4 flex flex-col items-center justify-between">
        <div className="flex flex-col flex-wrap justify-center items-center sm:flex-row">
          <div className="flex flex-col p-2 gap-2">
            <label id="description">
              Description{" "}
              <span className="text-xs text-slate-400 ">
                (max 50 characters)
              </span>
            </label>
            <Input
              type="text"
              id="description"
              placeholder="Description"
              maxLength={50}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex flex-col p-2 gap-2">
            <label id="Value">Value</label>
            <Input
              type="number"
              id="amount"
              placeholder="Amount"
              value={amount.toString()||value.toString()}
              onChange={(e) => {
                if(savings || debts){
                  const newAmount = parseFloat(e.target.value);
                  setAmount(isNaN(newAmount) ? "" : newAmount);
                }
                if(goals){
                  const newValue = parseFloat(e.target.value);
                  setValue(isNaN(newValue) ? "" : newValue);
                }
              }}
            />
          </div>
          <div
            className={twMerge(`flex-col p-2 gap-2`, goals ? "hidden" : "flex")}
          >
            <label id="Status">Status</label>
            <DropDown value={select} />
          </div>

          <div className="flex flex-col p-2 gap-2">
            <label id="Date">Date</label>
            <Input
              type="date"
              id="date"
              placeholder="Date"
              value={dayjs(date).format("YYYY-MM-DD")}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>

        <p className="mb-4 text-center">
          Are you sure you want to edit this {goals ? "goal" : "transaction"}?
        </p>
        <div className="flex space-x-2">
          <Button onClick={handleEdit}>Confirm</Button>
          <Button onClick={() => setOpenEditProps(false)}>Cancel</Button>
        </div>
      </div>
    </div>
  );
}
