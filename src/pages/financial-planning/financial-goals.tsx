import dayjs from "dayjs";
import { useState } from "react";

import { Header } from "../../components/header/header";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { IconButton } from "../../components/ui/icon-button";

import { Table } from "../../components/ui/table/table";
import { TableHeader } from "../../components/ui/table/table-header";
import { TableRow } from "../../components/ui/table/table-row";
import { TableCell } from "../../components/ui/table/table-cell";

import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
} from "lucide-react";

interface Goal {
  description: string;
  value: number;
  date: string;
}

export function FinancialGoals() {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [description, setDescription] = useState<string>("");
  const [value, setValue] = useState<string | number>("");
  const [date, setDate] = useState<string>("");
  const [infoDesc, setInfoDesc] = useState<string>("");
  const [infoValue, setInfoValue] = useState<string>("");
  const [infoDate, setInfoDate] = useState<string>("");

  const handleInsert = () => {
    if (!description) {
      setInfoDesc("Please enter a description");
      return;
    } else {
      setInfoDesc("");
    }
    if (typeof value !== "number" || value <= 0 || isNaN(value)) {
      setInfoValue("Please enter a valid value greater than 0");
      return;
    } else {
      setInfoValue("");
    }
    if (!date) {
      setInfoDate("Please select a date");
      return;
    } else {
      setInfoDate("");
    }

    const newGoal: Goal = {
      description,
      value,
      date,
    };

    setGoals([...goals, newGoal]);
    setDescription("");
    setValue("");
    setDate("");
    setInfoDesc("");
    setInfoValue("");
    setInfoDate("");
  };

  return (
    <div className="flex flex-col gap-5">
      <Header />
      <div className="flex flex-wrap items-center px-5 gap-5 justify-center sm:justify-between mt-24">
        <h2 className="roboto-medium text-xl">Financial Goals</h2>
      </div>
      <div className="flex flex-col flex-wrap justify-center items-center sm:flex-row">
        <div className="flex flex-col p-2 gap-2">
          <label id="description">
            Description{" "}
            <span className="text-xs text-slate-400 ">(max 50 characters)</span>
          </label>
          <Input
            empty={!!infoDesc}
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
            empty={!!infoValue}
            type="number"
            id="value"
            placeholder="Value"
            value={value.toString()}
            onChange={(e) => {
              const newValue = parseFloat(e.target.value);
              setValue(isNaN(newValue) ? "" : newValue);
            }}
          />
        </div>

        <div className="flex flex-col p-2 gap-2">
          <label id="Date">Date</label>
          <Input
            empty={!!infoDate}
            type="date"
            id="date"
            placeholder="Date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>
      <p className="text-md text-center drop-shadow-lg">
        {infoDesc}
        {infoValue}
        {infoDate}
      </p>
      <Button
        className="z-0"
        onClick={handleInsert}
        disable={!!infoDesc || !!infoValue || !!infoDate}
      >
        Insert
      </Button>

      <Table>
        <thead>
          <tr className="hidden sm:table-row border-b border-slate-400/10">
            <TableHeader>Goal</TableHeader>
            <TableHeader>Value</TableHeader>
            <TableHeader>Date</TableHeader>
            <TableHeader style={{ width: 64 }}></TableHeader>
          </tr>
        </thead>
        {goals.map((goal, index) => (
          <GoalRow key={index} goal={goal} />
        ))}
        <tfoot>
          <tr className="flex flex-col sm:table-row">
            <TableCell colSpan={1} className="text-center">
              <span>Showing {goals.length} goals</span>
            </TableCell>
            <TableCell className="text-center">
              <span>Page X of Y</span>
            </TableCell>
            <TableCell colSpan={2}>
              <div className="flex justify-center gap-1.5">
                <IconButton>
                  <ChevronsLeft className="size-4" />
                </IconButton>
                <IconButton>
                  <ChevronLeft className="size-4" />
                </IconButton>
                <IconButton>
                  <ChevronRight className="size-4" />
                </IconButton>
                <IconButton>
                  <ChevronsRight className="size-4" />
                </IconButton>
              </div>
            </TableCell>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
}

function GoalRow({ goal }: { goal: Goal }) {
  return (
    <tbody>
      <TableRow className="flex flex-col p-2 sm:hidden">
        <div className="flex justify-between">
          <TableHeader>Goal</TableHeader>
          <TableCell>{goal.description}</TableCell>
        </div>
        <div className="flex justify-center">
          <hr className="w-60 p-1 border-white/10" />
        </div>
        <div className="flex justify-between">
          <TableHeader>Value</TableHeader>
          <TableCell>$ {goal.value.toFixed(2)}</TableCell>
        </div>
        <div className="flex justify-center">
          <hr className="w-60 p-1 border-white/10" />
        </div>
        <div className="flex justify-between">
          <TableHeader>Date</TableHeader>
          <TableCell>{dayjs(goal.date).format("MM/DD/YYYY")}</TableCell>
        </div>
        <div className="flex justify-center">
          <hr className="w-60 p-1 border-white/10" />
        </div>
        <TableCell className="flex items-center">
          <IconButton>
            <MoreHorizontal className="size-4" />
          </IconButton>
        </TableCell>
      </TableRow>

      <TableRow className="hidden sm:table-row">
        <TableCell>{goal.description}</TableCell>
        <TableCell>$ {goal.value.toFixed(2)}</TableCell>
        <TableCell>{dayjs(goal.date).format("MM/DD/YYYY")}</TableCell>
        <TableCell>
          <IconButton>
            <MoreHorizontal className="size-4" />
          </IconButton>
        </TableCell>
      </TableRow>
    </tbody>
  );
}
