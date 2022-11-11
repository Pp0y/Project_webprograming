import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {useState, useEffect } from 'react'
import ButtonGroup from '@mui/material/ButtonGroup';
import Navbar from './Navbar';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { red,lightGreen,yellow } from '@mui/material/colors';




function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


export default function Data() {
  const MySwal = withReactContent(Swal)
  const [items, setItems] = useState([]);

  useEffect(() => {
    BookGet()
  }, [])

  const BookGet = () =>{
    fetch("http://localhost:8080/readbook")
    .then(res => res.json())
    .then(
      (result) => {
        setItems(result);
      },
    )
  }

  const Roomupdate = id =>{
    window.location = '/update/' + id
  }

  const BookDelete = ID =>{
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "ID": ID
});

var requestOptions = {
  method: 'DELETE',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:8080/delete", requestOptions)
  .then(response => response.json())
  .then(result => {
        MySwal.fire({
        html: <i>Delete Success</i>,
        icon: 'error',})
    if (result['status'] === 'ok'){
        BookGet()
    }
  })
  .catch(error => console.log('error', error));
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ p : 2}}>
        <Navbar/>
          <TableContainer component={Paper}>
           <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
             <TableRow>
                 <TableCell>ID</TableCell>
                 <TableCell align="right">ID Student</TableCell>
                 <TableCell align="right">Room</TableCell>
                 <TableCell align="right">Time</TableCell>
                 <TableCell align="right">Date</TableCell>
                 <TableCell align="right">
                     <Button sx={{ bgcolor: lightGreen[500] }} variant="contained" href="/createroom">Create</Button>
                  </TableCell>
               </TableRow>
             </TableHead>
            <TableBody>
              {items.map((row) => (
             <TableRow
                 key={row.name}
                 sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
               >
               <TableCell component="th" scope="row">
                {row.ID}
              </TableCell>
              <TableCell align="right">{row.Id_std}</TableCell>
              <TableCell align="right">{row.Room}</TableCell>
              <TableCell align="right">{row.Time}</TableCell>
              <TableCell align="right">{row.Date}</TableCell>
              <TableCell align="right">
               <ButtonGroup variant="contained" aria-label="outlined button group">
                  <Button onClick = {() => Roomupdate(row.ID)} sx={{ bgcolor: yellow[800] }}>EDIT</Button>
                  <Button onClick = {() => BookDelete(row.ID)} sx={{ bgcolor: red[500] }}>DEL</Button>
                </ButtonGroup>
              </TableCell>
            </TableRow>
          ))}
            </TableBody>
           </Table>
         </TableContainer>
      </Container>
    </React.Fragment>
  );
}