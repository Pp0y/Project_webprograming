import {useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Container } from '@mui/system';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SvgIcon from '@mui/material/SvgIcon';
import { indigo , yellow ,lightBlue} from '@mui/material/colors';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Avatar } from '@mui/material';


function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}


function Profile() {
  const [isLoaded, setIsLoaded] = useState(true);
  const [user, setUser] = useState([]);
  const MySwal = withReactContent(Swal)
  const navigate = useNavigate()
  console.log(user)

  useEffect(() => {
    const token = localStorage.getItem('token')
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);
    
    var requestOptions = {
      method: 'GET', 
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch("http://localhost:8080/users/profile", requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.status === 'ok'){
            setUser(result.user)
            setIsLoaded(false)
        } else if (result.status === 'forbidden'){
            MySwal.fire({
                html: <i>{result.message}</i>,
                icon: 'error'
            }).then ((value) => {
                 navigate('/login')
            })
        }
        console.log(result)
    })
      .catch(error => console.log('error', error));
  }, [])
const logout = () =>{
  localStorage.removeItem('token')
  navigate('/login')
}


  if (isLoaded) return (<div>Loading</div>)
    else{
        return (
          
            <div >
              <Container sx={{ flexGrow: 1 }} >
              <Box sx={{ flexGrow: 1 }}>
                 <AppBar position="static">
                  <Toolbar  sx={{ bgcolor: indigo[900]}} >
                   <Box
                       sx={{
                          '& > :not(style)': {
                          m: 2,
                        },
                       }}
                    >
                  <Button href = "/main">
                     <HomeIcon sx={{ color: yellow[100]}} fontSize="large" />
                  </Button>
              </Box>
          <Typography variant="h6" component="div" sx={{ color: yellow[800] , flexGrow: 1 }}>
            Books Rooms System
          </Typography>
           <Button color="inherit" onClick = {logout} sx={{ color: yellow[800]}}>Logout</Button>
                 </Toolbar>
                </AppBar>
                </Box>
                <br/>
                <Container>
                <Container fixed sx={{ bgcolor: indigo[100]}} >
              <div style = {{display: 'flex',alignItems: 'center',justifyContent: 'center',}}>{user[0].Id}</div> <br/>
              <div style = {{display: 'flex',alignItems: 'center',justifyContent: 'center',}}><Avatar src ={user[0].Avatar} alt={user[0].Id}  sx={{ width: 150, height: 150 }}/></div> <br/>
              <Typography variant="h6" gutterBottom sx= {{ color : indigo[700] }}>
               <div style = {{display: 'flex',alignItems: 'center',justifyContent: 'center',}} >Name : {user[0].Fullname}</div> <br/>
               <div style = {{display: 'flex',alignItems: 'center',justifyContent: 'center',}}>Username : {user[0].Username}</div>     
               </Typography>
              <br/></Container></Container></Container>
            </div>
        ) 
    }
}

export default Profile