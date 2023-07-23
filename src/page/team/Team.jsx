
import { DataGrid} from '@mui/x-data-grid';
import {  rows } from "./Data";
import { Box, Typography, useTheme } from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";





 const Team = () => {
  const Theme=useTheme();
   const columns = [
    { field: 'id', headerName: 'Id', width: 150 , with:33,align:"center" ,headerAlign:"center"},
    { field: 'name', headerName: 'Name', width: 150 ,align:"center" ,headerAlign:"center"},
    { field: 'email', headerName: 'Email', width: 150 , flex:1,align:"center",headerAlign:"center"},
    { field: 'age', headerName: 'Age', width: 150,align:"center" ,headerAlign:"center"},
    { field: 'phone', headerName: 'Phone', width: 150 , flex:1,align:"center",headerAlign:"center"},
    { field: 'access', headerName: 'Access', width: 150 , flex:1,align:"center",headerAlign:"center",
    renderCell:({row:{access}})=>{
        return(
            <Box sx={{
              p:"5px", width:"99px", borderRadius:"3px",textAlign:"center",display:"flex",justifyContent:"space-evenly",
              backgroundColor:access === "Admin" ? Theme.palette.primary.dark : access=== "Manager"? Theme.palette.secondary.dark : "#3da58a",
            }}>
              {access==="Admin" && (<AdminPanelSettingsOutlined fontSize='small' sx={{color:"#fff"}}/>)} 
              {access==="Manager" && (<LockOpenOutlined fontSize='small' sx={{color:"#fff"}}/>)} 
              {access==="User" && (<  SecurityOutlined fontSize='small' sx={{color:"#fff"}}/>)} 
              
                <Typography variant="body1" sx={{fontSize:"13px" ,color:"#fff"}}>{access}</Typography>
            </Box>
        )
    }
},
   
  ];

  return (
 
      <Box sx={{ height: 600, width: '100%', mx:"auto" ,my:'auto'}}>
      <DataGrid rows={rows} 
// @ts-ignore
      columns={columns} />
 
    </Box>
  )
}
export default Team;
