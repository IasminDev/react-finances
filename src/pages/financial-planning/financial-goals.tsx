import dayjs from "dayjs";
import { Header } from "../../components/header/header";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { IconButton } from "../../components/ui/icon-button";

import { Table } from "../../components/ui/table/table";
import { TableHeader } from "../../components/ui/table/table-header";
import { TableRow } from "../../components/ui/table/table-row";
import { TableCell } from "../../components/ui/table/table-cell";

import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal } from 'lucide-react'

export function FinancialGoals(){
    return(
        <div className='flex flex-col gap-5'>
      <Header/>
      <div className='flex flex-wrap items-center px-5 gap-5 justify-center sm:justify-between mt-24'>
        <h2 className='roboto-medium text-xl'>Financial Goals</h2>
      </div>
      <div className='flex flex-col flex-wrap justify-center items-center sm:flex-row'>          
          <div className='flex flex-col p-2 gap-2'>
            <label id='description'>Description <span className="text-xs text-slate-400 ">(max 50 characters)</span></label>
            <Input
            type='text'
            id='description'
            placeholder='Description'
            maxLength={50}
            />
          </div>
          
          <div className='flex flex-col p-2 gap-2'>
            <label id='Value'>Value</label>
            <Input
            type='number'
            id='amount'
            placeholder='Amount'
            />
          </div>
          
          <div className='flex flex-col p-2 gap-2'>
            <label id='Date'>Date</label>
            <Input
            type='date'
            id='date'
            placeholder='Date'
            />
          </div>
      </div>      
      <Button>Insert</Button>

      <Table>
        <thead>
          <tr className='flex flex-col sm:table-row border-b border-slate-400/10'>   
            <TableHeader>Transaction</TableHeader>
            <TableHeader>Amount</TableHeader>
            <TableHeader>Date</TableHeader>
            <TableHeader style={{width:64}}></TableHeader>
          </tr>
        </thead>
      <tbody>
        <TableRow>
            <TableCell>Description</TableCell>
            <TableCell>$ 530.00</TableCell>
            <TableCell>{dayjs("12/30/2024").format('MM/DD/YYYY')}</TableCell>
            <TableCell>
              <IconButton>
                  <MoreHorizontal className='size-4'/>
              </IconButton>  
            </TableCell>
          </TableRow>
      </tbody>
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