import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  
function TableDemo({data}) {
    
    return (
    
      <Table>
      <TableCaption>{data.name}</TableCaption>
      <TableHeader>
        <TableRow>
          {data.columns.map((column, index) => (
            <TableHead key={index} className={index === 0 ? "w-[100px]" : ""}>
              {column.charAt(0).toUpperCase() + column.slice(1)}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.rows.map((row, index) => (
          <TableRow key={index}>
            {data.columns.map((column, columnIndex) => (
              <TableCell
                key={columnIndex}
                className={columnIndex === 3 ? "text-right" : ""}
              >
                {row[column]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">
            {data.rows.reduce((acc, curr) => acc + curr.salary, 0)}
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
  }
  export default TableDemo;