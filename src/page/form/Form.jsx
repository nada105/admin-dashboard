
import { Alert, Button, MenuItem, Snackbar, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React from 'react';
import { useForm } from "react-hook-form";


const regEmail=
/^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



const phoneNum=/^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}/;

const data = [
  {
    value: 'Admin',
    label: 'Admin',
  },
  {
    value: 'Manager',
    label: 'Manager',
  },
  {
    value: 'User',
    label: 'User',
  },

];



 const Form = () => {

  {/*--------------Validation FORM------------*/}

  
  const { register,handleSubmit,formState: { errors }} = useForm();


  {/*-----------------FUNCTION SNACKBAR-------------------*/}
  const [open, setOpen] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleClick = () =>{
    setOpen(true);
  };

 {/*----------------- END FUNCTION SNACKBAR-------------------*/}

  const onSubmit = () =>{
    handleClick();
  };

  return (
    
     /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <Box 
    onSubmit={handleSubmit(onSubmit)}
    component="form"
    sx={{
      display:"flex",flexDirection:"column",gap:3,
    }}
    noValidate
    autoComplete="off"
  >

    {/*-------------34an a5lihom ganb b3d-------------*/}
    <Stack sx={{gap:2}} direction={"row"}>


    <TextField sx={{flex:1}} label="First Name" variant="filled"  
    /*------------FOR MAKING VALIDATION ,TREE STEPS ARE IMPORTANT----------------*/
     error={Boolean(errors.firstName)} 
     helperText={errors.firstName? "This Field is Required" : null}
    {...register("firstName", { required: true, maxLength: 20 })} />



    <TextField sx={{flex:1}} label="Last Name" variant="filled"
        error={Boolean(errors.lastName)} 
        helperText={errors.lastName? "This Field is Required" : null}
       {...register("lastName", { required: true, maxLength: 20 })} /> 
    </Stack>



    <TextField  label="Email" variant="filled" 
           error={Boolean(errors.email)} 
           helperText={errors.email? "Plz Provide availd email" : null}
          {...register("email", { required: true, maxLength: 20 , pattern: regEmail })} /> 



    <TextField  label="Contact Number" variant="filled" 
     error={Boolean(errors.phoneNum)} 
     helperText={errors.phoneNum? "Plz Provide availd Phone Number" : null}
    {...register("phoneNum", { required: true, maxLength: 20 , pattern: phoneNum })}/>


    <TextField  label="Address 1" variant="filled" />
    <TextField  label="Address 2" variant="filled" />

    <TextField
          id="outlined-select-currency"
          select
          label="Role"
          defaultValue="Admin"
          variant="filled"
        >
          {data.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <Box sx={{textAlign:"right"}}>
          <Button variant='contained' type='submit'>
            Create New User
          </Button>

          {/*-------------------------ANACKBAR ROR ALERT-----------------*/ }
        <Snackbar anchorOrigin={{ vertical:"top", horizontal:"right" }} open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
        
          account created successfully
        </Alert>
      </Snackbar>


        </Box>
   
  </Box>
  )
}
export default Form;
