import dayjs from "dayjs";
import { useState } from 'react';
import { useSelectContext } from "../../context/drop-down-context";

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

import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal } from 'lucide-react'

interface Transaction {
  description: string;
  amount: number;
  status: string;
  date: string;
}

export function Debt(){
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState<number>(0.00);
  const [date, setDate] = useState('');
  const { select, setSelect } = useSelectContext();

  const handleInsert = () => {
    console.log('Description:', description);
    console.log('Amount:', amount);
    console.log('Status:', select);
    console.log('Date:', date);

    if (!description) {
      alert('Please enter a description');
      return;
    }
    if (amount <= 0 || isNaN(amount)) {
      alert('Please enter a valid amount greater than 0');
      return;
    }
    if (!select) {
      alert('Please select a status');
      return;
    }
    if (!date) {
      alert('Please select a date');
      return;
    }

    const newTransaction: Transaction = {
      description,
      amount,
      status: select,
      date
    }

    setTransactions([...transactions, newTransaction])
    setDescription('')
    setAmount(0.00)
    setDate('')
    setSelect('')
  }

    return(
      <div className='flex flex-col gap-5'>
        <Header/>
        <div className='flex flex-wrap items-center px-5 gap-5 justify-center sm:justify-between mt-24'>
          <h2 className='roboto-medium text-xl'>Debt</h2>
        </div>     
        <div className='flex flex-col flex-wrap justify-center items-center sm:flex-row'>          
          <div className='flex flex-col p-2 gap-2'>
            <label id='description'>Description <span className="text-xs text-slate-400 ">(max 50 characters)</span></label>
            <Input
            type='text'
            id='description'
            placeholder='Description'
            maxLength={50}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          
          <div className='flex flex-col p-2 gap-2'>
            <label id='Value'>Value</label>
            <Input
            type='number'
            id='amount'
            placeholder='Amount'
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
            />
          </div>
          
          <div className='flex flex-col p-2 gap-2'>
            <label id='Status'>Status</label>
            <DropDown/>
          </div>
          
          <div className='flex flex-col p-2 gap-2'>
            <label id='Date'>Date</label>
            <Input
            type='date'
            id='date'
            placeholder='Date'
            value={date}
            onChange={(e) => setDate(e.target.value)}
            />
          </div>
      </div>    
      <Button className='z-0' onClick={handleInsert}>Insert</Button>

      <Table>
        <thead>
            <tr className='hidden sm:table-row border-b border-slate-400/10'>
            <TableHeader>Transaction</TableHeader>
            <TableHeader>Amount</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Date</TableHeader>
            <TableHeader style={{width:64}}></TableHeader>
          </tr>
        </thead>
        {transactions.map((transaction, index) => (
              <TransactionRow key={index} transaction={transaction} />
        ))}
      <tfoot>
        <tr className='flex flex-col sm:table-row'>
          <TableCell colSpan={2}>
              <span>Showing 1 transactions</span>
          </TableCell>
          <TableCell >
              <span>Page X of Y</span>
          </TableCell>
          <TableCell colSpan={2}>
              <div className='flex justify-center gap-1.5'>
                <IconButton>
                    <ChevronsLeft className='size-4'/>
                </IconButton>
                <IconButton>
                    <ChevronLeft className='size-4'/>
                </IconButton>
                <IconButton>
                    <ChevronRight className='size-4'/>
                </IconButton>
                <IconButton>
                    <ChevronsRight className='size-4'/>
                </IconButton>
            </div>
          </TableCell>
        </tr>
      </tfoot>
      </Table>
    </div>
  )    
}
function TransactionRow({ transaction }: { transaction: Transaction }) {
  const statusColorMap : any = {
    'Paid': 'bg-green-500',
    'Pending': 'bg-blue-500',
    'Cancelled': 'bg-yellow-500',
    'Overdue': 'bg-red-500',
    '': 'bg-gray-500' // Default color if no status is selected
  };
  return (
    <tbody>
      <TableRow className='flex flex-col sm:hidden'>
        <TableHeader>Transaction</TableHeader>
        <TableCell>{transaction.description}</TableCell>
        <TableHeader>Amount</TableHeader>
        <TableCell>${transaction.amount.toFixed(2)}</TableCell>
        <TableHeader>Status</TableHeader>
        <TableCell>
          <StatusSpan className={statusColorMap[transaction.status]}>
            {transaction.status}
          </StatusSpan>
        </TableCell>
        <TableHeader>Date</TableHeader>
        <TableCell>{dayjs(transaction.date).format('MM/DD/YYYY')}</TableCell>
        <TableCell>
          <IconButton>
            <MoreHorizontal className='size-4'/>
          </IconButton>
        </TableCell>
      </TableRow>

      <TableRow className='hidden sm:table-row'>
      <TableCell>{transaction.description}</TableCell>
      <TableCell>${transaction.amount.toFixed(2)}</TableCell>
      <TableCell>
        <StatusSpan className={statusColorMap[transaction.status]}>
          {transaction.status}
        </StatusSpan>
      </TableCell>
      <TableCell>{dayjs(transaction.date).format('MM/DD/YYYY')}</TableCell>
      <TableCell>
        <IconButton>
          <MoreHorizontal className='size-4'/>
        </IconButton>
      </TableCell>
    </TableRow>
  </tbody>
  );
}
