import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useSelectContext } from "../../context/drop-down-context";
import { jwtDecode } from "jwt-decode";

import { Header } from "../../components/header/header";
import { Input } from "../../components/ui/input";
import { DropDown } from "../../components/ui/drop-down";
import { Button } from "../../components/ui/button";
import { IconButton } from "../../components/ui/icon-button";

import { Table } from "../../components/ui/table/table";
import { TableHeader } from "../../components/ui/table/table-header";
import { TableRow } from "../../components/ui/table/table-row";
import { TableCell } from "../../components/ui/table/table-cell";
import { StatusSpan } from "../../components/ui/table/status";

import { PencilIcon, Trash2Icon } from "lucide-react";

import { Delete } from "../../components/popout/delete";
import { Edit } from "../../components/popout/edit";
import { useNavigate } from "react-router-dom";
import { api } from "../../lib/server";
import { DecodedToken, Transaction } from "../../types/type";

export function Debt() {
  const user = localStorage.getItem("user") as string | null;
  const decoded: DecodedToken = user
    ? jwtDecode<DecodedToken>(user)
    : { id: null, token: "" };
  const userId = decoded?.id;

  const navigate = useNavigate();

  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState<string | number>("");
  const [date, setDate] = useState("");
  const { select, setSelect } = useSelectContext();
  const [infoDesc, setInfoDesc] = useState<string>("");
  const [infoAmount, setInfoAmount] = useState<string>("");
  const [infoSelect, setInfoSelect] = useState<string>("");
  const [infoDate, setInfoDate] = useState<string>("");
  const [modal, setModal] = useState<boolean>(false);
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [openEdit, setOpenEdit] = useState<boolean>(false);

  type Status = "Paid" | "Pending" | "Cancelled" | "Overdue" | "";
  const statusColorMap: { [key in Status]: string } = {
    Paid: "bg-green-500",
    Pending: "bg-blue-500",
    Cancelled: "bg-yellow-500",
    Overdue: "bg-red-500",
    "": "bg-gray-500", // Default color if no status is selected
  };

  useEffect(() => {
    if (user) {
      if (userId) {
        api
          .get(`/${userId}/debts`, {
            headers: { token: `Bearer ${user}` },
          })
          .then(function (response) {
            return response.data;
          })
          .then((data) => {
            setTransactions(data.debts);
          })
          .catch(function (error) {
            console.log("Error fetching debts:", error);
          });
      }
    } else {
      navigate("/log-in-account");
    }
  }, [user, userId, navigate, transactions]);

  const handleInsert = () => {
    if (user) {
      if (!description) {
        setInfoDesc("Please enter a description");
        return;
      } else {
        setInfoDesc("");
      }
      if (typeof amount !== "number" || amount <= 0 || isNaN(amount)) {
        setInfoAmount("Please enter a valid amount greater than 0");
        return;
      } else {
        setInfoAmount("");
      }
      if (!select) {
        setInfoSelect("Please select a status");
        return;
      } else {
        setInfoSelect("");
      }
      if (!date) {
        setInfoDate("Please select a date");
        return;
      } else {
        setInfoDate("");
      }
      try {
        if (userId) {
          api
            .post(
              `/${userId}/debts`,
              {
                description,
                amount,
                status: select,
                date: new Date(date).toISOString(),
              },
              {
                headers: { token: `Bearer ${user}` },
              }
            )
            .then(function (response) {
              console.log(response);

              const newTransaction: Transaction = {
                id: response.data.id,
                description,
                amount,
                status: select,
                date,
              };

              setTransactions([...transactions, newTransaction]);
              setDescription("");
              setAmount("");
              setDate("");
              setSelect("");
              setInfoDesc("");
              setInfoAmount("");
              setInfoSelect("");
              setInfoDate("");
            })
            .catch(function (error) {
              console.log("Error fetching debts:", error);
            });
        }
      } catch (error) {
        console.log("Error decoding token:", error);
      }
    } else {
      navigate("/log-in-account");
    }
  };

  const handleOpenDelete = (index: number) => {
    if (user) {
      setOpenDelete(true);
      setModal(true);
      setModalIndex(index);
    } else {
      navigate("/log-in-account");
    }
  };

  const handleOpenEdit = (index: number) => {
    if (user) {
      setOpenEdit(true);
      setModal(true);
      setModalIndex(index);
    } else {
      navigate("/log-in-account");
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <Header />
      <div className="flex flex-wrap items-center px-5 gap-5 justify-center sm:justify-between mt-24">
        <h2 className="roboto-medium text-xl">Debt</h2>
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
            empty={!!infoAmount}
            type="number"
            id="amount"
            placeholder="Amount"
            value={amount.toString()}
            onChange={(e) => {
              const newAmount = parseFloat(e.target.value);
              setAmount(isNaN(newAmount) ? "" : newAmount);
            }}
          />
        </div>
        <div className="flex flex-col p-2 gap-2">
          <label id="Status">Status</label>
          <DropDown empty={!!infoSelect} />
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
      <p className="text-md text-center text-red-500 drop-shadow-lg">
        {infoDesc}
        {infoAmount}
        {infoSelect}
        {infoDate}
      </p>
      <Button
        className="z-0"
        onClick={handleInsert}
        disable={!!infoDesc || !!infoAmount || !!infoSelect || !!infoDate}
      >
        Insert
      </Button>

      <Table>
        <thead>
          <tr className="hidden sm:table-row border-b border-slate-400/10">
            <TableHeader>Transaction</TableHeader>
            <TableHeader>Amount</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Date</TableHeader>
            <TableHeader style={{ width: 64 }}></TableHeader>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction, index) => {
            const transactionStatus = transaction.status as Status;
            return (
              <TableRow key={index} className="flex flex-col p-2 sm:hidden">
                <div className="flex justify-between">
                  <TableHeader>Transaction</TableHeader>
                  <TableCell>{transaction.description}</TableCell>
                </div>
                <div className="flex justify-center">
                  <hr className="w-60 p-1 border-white/10" />
                </div>
                <div className="flex justify-between">
                  <TableHeader>Amount</TableHeader>
                  <TableCell>$ {transaction.amount.toFixed(2)}</TableCell>
                </div>
                <div className="flex justify-center">
                  <hr className="w-60 p-1 border-white/10" />
                </div>
                <div className="flex justify-between">
                  <TableHeader>Status</TableHeader>
                  <TableCell>
                    <StatusSpan className={statusColorMap[transactionStatus]}>
                      {transaction.status}
                    </StatusSpan>
                  </TableCell>
                </div>
                <div className="flex justify-center">
                  <hr className="w-60 p-1 border-white/10" />
                </div>
                <div className="flex justify-between">
                  <TableHeader>Date</TableHeader>
                  <TableCell>
                    {dayjs(transaction.date).format("MM/DD/YYYY")}
                  </TableCell>
                </div>
                <div className="flex justify-center">
                  <hr className="w-60 p-1 border-white/10" />
                </div>
                <TableCell className="flex gap-3 items-center">
                  <IconButton>
                    <PencilIcon
                      onClick={() => handleOpenEdit(index)}
                      className="size-4"
                    />
                  </IconButton>
                  {modal && modalIndex === index && (
                    <Edit
                      debts={true}
                      debtId={transaction.id}
                      userId={userId || undefined}
                      userToken={user || undefined}
                      transaction={transactions[modalIndex] || undefined}
                      selectValue={select}
                      openEdit={openEdit}
                      setOpenEditProps={setOpenEdit}
                    />
                  )}
                  <IconButton>
                    <Trash2Icon
                      onClick={() => handleOpenDelete(index)}
                      className="size-4"
                    />
                  </IconButton>
                  {modal && modalIndex === index && (
                    <Delete
                      debts={true}
                      debtId={transaction.id}
                      userId={userId || undefined}
                      userToken={user || undefined}
                      openDelete={openDelete}
                      setOpenDeleteProps={setOpenDelete}
                    />
                  )}
                </TableCell>
              </TableRow>
            );
          })}

          {transactions.map((transaction, index) => {
            const transactionStatus = transaction.status as Status;
            return (
              <TableRow key={index} className="hidden sm:table-row">
                <TableCell>{transaction.description}</TableCell>
                <TableCell>$ {transaction.amount.toFixed(2)}</TableCell>
                <TableCell>
                  <StatusSpan className={statusColorMap[transactionStatus]}>
                    {transaction.status}
                  </StatusSpan>
                </TableCell>
                <TableCell>
                  {dayjs(transaction.date).format("MM/DD/YYYY")}
                </TableCell>
                <TableCell className="flex gap-3 items-center">
                  <IconButton>
                    <PencilIcon
                      onClick={() => handleOpenEdit(index)}
                      className="size-4"
                    />
                  </IconButton>
                  {modal && modalIndex === index && (
                    <Edit
                      debts={true}
                      debtId={transaction.id}
                      userId={userId || undefined}
                      userToken={user || undefined}
                      transaction={transactions[modalIndex] || undefined}
                      selectValue={select}
                      openEdit={openEdit}
                      setOpenEditProps={setOpenEdit}
                    />
                  )}
                  <IconButton>
                    <Trash2Icon
                      onClick={() => handleOpenDelete(index)}
                      className="size-4"
                    />
                  </IconButton>
                  {modal && modalIndex === index && (
                    <Delete
                      debts={true}
                      debtId={transaction.id}
                      userId={userId || undefined}
                      userToken={user || undefined}
                      openDelete={openDelete}
                      setOpenDeleteProps={setOpenDelete}
                    />
                  )}
                </TableCell>
              </TableRow>
            );
          })}
        </tbody>

        <tfoot>
          <tr className="flex flex-col sm:table-row">
            <TableCell colSpan={5} className="text-center">
              <span>Showing {transactions.length} transactions</span>
            </TableCell>
          </tr>
        </tfoot>
      </Table>
      {openEdit && (
        <div className="fixed z-40 inset-0 bg-slate-950/70 cursor-pointer" />
      )}
      {openDelete && (
        <div className="fixed z-40 inset-0 bg-slate-950/70 cursor-pointer" />
      )}
    </div>
  );
}
