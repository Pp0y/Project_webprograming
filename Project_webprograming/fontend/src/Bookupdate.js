import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Button, Grid, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { red,lightGreen,yellow } from '@mui/material/colors';
import Navbar from './Navbar';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


export default function Bookupdate() {
  const { ID } = useParams();
  const MySwal = withReactContent(Swal)

useEffect(() => {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("http://localhost:8080/readbook/"+ID, requestOptions)
    .then(response => response.json())
    .then(result => {
      if (result['status']==='ok'){
        setIdstd(result['Books']['Id_std'])
        setRoom(result['Books']['Room'])
        setTime(result['Books']['Time'])
        setDate(result['Books']['Date'])
      }
    })
    .catch(error => console.log('error', error));
}, [ID])

    const handleSubmit = event =>{
        event.preventDefault();
        var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
   "ID" :  Number(ID),
  "Room": Room,
  "Time": Time,
  "Date": Date,
  "Id_std": Id_std
});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:8080/edit", requestOptions)
  .then(response => response.json())
  .then(result =>{
   
    if (result['status'] === 'ok'){
        MySwal.fire({
          html: <i>{result.message}</i>,
          icon: 'success'
        }).then()
        window.location.href ="/main"
    }
  })
  .catch(error => console.log('error', error));
    }
    const [Id_std, setIdstd] = useState('');
    const [Room, setRoom] = useState('');
    const [Time, setTime] = useState('');
    const [Date, setDate] = useState('');
    return (
    <React.Fragment>
      <CssBaseline />
      <Navbar/>
      <br/>
      <Container maxWidth="sm" sx={{P: 2}} >
      <Container maxWidth="sm" sx={{P: 2}} >
        <Typography variant='h6' gutterBottom component="div">
            Edit Your Book
        </Typography>
        <br/>
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                   <TextField id="Id_std" label="ID Student" variant="outlined" fullWidth required 
                   onChange={(e) => setIdstd(e.target.value)}
                   value={Id_std}/>
                </Grid>
                <Grid item xs={12} >
                    <TextField id="Room" label="Room Number" variant="outlined" fullWidth required
                     onChange={(e) => setRoom(e.target.value)}
                     value={Room}/>
                </Grid>
                <Grid item xs={12} >
                   <TextField id="Time" label="Time" variant="outlined" fullWidth required 
                    onChange={(e) => setTime(e.target.value)}
                    value={Time}/>
                </Grid>
                <Grid item xs={12} >
                   <TextField id="Date" label="Date" variant="outlined" fullWidth required
                    onChange={(e) => setDate(e.target.value)}
                    value={Date}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button type="submit" variant="contained" sx={{ bgcolor: yellow[800] }}> Edit </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button type ="submit" variant="contained" href ="/main" sx={{ bgcolor: red[500] }}> Cancle </Button>
                </Grid>
            </Grid>
        </form>
      </Container></Container>
    </React.Fragment>
  );
}