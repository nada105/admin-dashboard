import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { columns, rows } from "./Data";



 const Contact = () => {
  return (
 
    <Box sx={{ height: 700, width: '100%', mx:"auto" ,my:'auto'}}>
    <DataGrid 
    slots={{ toolbar: GridToolbar }}
    rows={rows} 
// @ts-ignore
    columns={columns} />

  </Box>
)
}
export default Contact;
