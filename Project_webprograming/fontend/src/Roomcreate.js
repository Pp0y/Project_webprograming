import React, {useState} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Button, Grid, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Navbar from './Navbar';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useNavigate } from 'react-router-dom';
import { red,lightGreen,yellow } from '@mui/material/colors';

export default function Roomcreate() {
    const navigate = useNavigate
    const MySwal = withReactContent(Swal)
    const handleSubmit = event =>{
        event.preventDefault();
        var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "Room": Room,
  "Time": Time,
  "Date": Date,
  "Id_std": Id_std
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:8080/book", requestOptions)
  .then(response => response.json())
  .then(result =>{
    if (result['status'] === 'ok'){
        MySwal.fire({
        html: <i>Book Success</i>,
        icon: 'success',})
        .then ()
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
            Book Your Rooms
        </Typography>
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                   <TextField id="Id_std" label="ID Student" variant="outlined" fullWidth required onChange={(e) => setIdstd(e.target.value)}/>
                </Grid>
                <Grid item xs={12} >
                    <TextField id="Room" label="Room Number" variant="outlined" fullWidth required onChange={(e) => setRoom(e.target.value)}/>
                </Grid>
                <Grid item xs={12} >
                   <TextField id="Time" label="Time" variant="outlined" fullWidth required onChange={(e) => setTime(e.target.value)}/>
                </Grid>
                <Grid item xs={12} >
                   <TextField id="Date" label="Date" variant="outlined" fullWidth required onChange={(e) => setDate(e.target.value)}/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button type="submit" variant="contained" sx={{ bgcolor: lightGreen[500] }}> Book!! </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Button type ="submit" variant="contained" href = "/main" sx={{ bgcolor: red[500] }}> Cancle </Button>
                </Grid>
            </Grid>
        </form>
      </Container></Container>
    </React.Fragment>
  );
}