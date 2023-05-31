import React, { useState } from 'react';
import sir from '../images/sir.png';
import Avatar from 'react-avatar-edit';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Avatar as MaterialUIAvatar} from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import {Box,Paper,Grid,Button} from '@mui/material';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
const Profile = () => {
  const [firstname,setfirstname]=useState('');
  const [lastname,setlastname]=useState('');
  const [email,setemail]=useState('');
  const [designation,setdesignation]=useState('');
  const [campus,setcampus]=useState('');
  const [department,setdepartment]=useState('');
  const [open, setOpen] = React.useState(false);
  const [imgCrop,setimgCrop]=useState(false);
  const [storeimg,setstoreimg]=useState([]);
  const saveImage=()=>{
    setstoreimg([...storeimg,{imgCrop}]);
    setOpen(false);
  }
  const onCrop=(view)=>{
    setimgCrop(view);
  }
  const onClose=()=>{
    setimgCrop(null);
  }

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className='mb-5'>
       <Box className='container-fluid'>
      <Paper elevation={5} sx={{padding:'30px',marginTop:'30px',marginLeft:'20px',marginRight:'20px'}}>
      <Grid container spacing={2} alignContent="center">
  <Grid item xs={12} md={3}  sx={{marginTop:'10px',marginLeft:'50px',marginRight:'50px',paddingTop:'2px',paddingBottom:'2px'}}>
  <div className='row mt-2'>
    {/* <div className='col-md-6 col-xs-12 mt-5 mb-1 '> */}
    {/* <Badge color='success' overlap="circular" badgeContent={<a className="nav-link" href="//#"><ModeEditIcon sx={{fontSize:'20px'}}/></a>}> */}
  <div className='col-md-6 col-xs-12  offset-md-6 mt-4'> 
  <IconButton onClick={handleClickOpen}><ModeEditIcon sx={{fontSize:'20px',color:'#346448',marginLeft:'6px'}}/></IconButton>
  </div>
  <div className='col-md-6 col-xs-12 offset-md-2 mb-1 '>
  <MaterialUIAvatar alt="Remy Sharp"
  src={imgCrop.length? imgCrop:sir}
 sx={{ bgcolor:' #346448',width:'170px',height:'170px',marginLeft:'12px'}}>
  <AccountCircleIcon sx={{width:'150px',height:'150px',color:'//#F5B204'}} />
</MaterialUIAvatar>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Update Profile Pic
        </BootstrapDialogTitle>
        <DialogContent >
         <Avatar width={400} height={300} onClose={onClose} onCrop={onCrop}/>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={saveImage}>
            Save 
          </Button>
        </DialogActions>
      </BootstrapDialog>
</div>
{/* </Badge> */}
{/* </div> */}
{/* <div className='col-md-4 col-xs-3  offset-md-1 mt-4'> */}
{/* </div> */}
  </div>
  <div className='row mr-10'>
<div className='col-md col-sx-12 '>
<p className=' mt-4 profileinfo'>Mr Muhammad Usman</p>
<p className='alignment mt-3 '>Department: Department of Computing</p>
<p className='alignment '>Islamabad Campus</p>
</div>
  </div>
  </Grid>
  <Grid item xs={12} md={8} >
  <Paper elevation={3} sx={{bgcolor:'#346448',padding:'40px',paddingRight:"30px",margin:"10px",marginRight:'30px',marginLeft:'5px'}}>
    <div className='row'>
      <div className='col-md-6'>
    <h3 className='personalinfo  row text-left '>Profile Info</h3>
      </div>
      <div className='col-md-1 offset-md-5'>
      <IconButton><ModeEditIcon className='edit' style={{color:'#FFFFFF'}}/></IconButton>
      </div>
    </div>
     <div className='row mb-1 mt-1'>
      <div className='col-md-4 '>
      <label for="FirstName" className="form-label mt-2 mr-6  row text-left text-white textstyle labelinfo ">First Name:</label>
      </div>
      <div className='col'>
      <input type="text" class="form-control form labelinfo" id="fname" placeholder="Enter First Name" name="FirstName" value={firstname} ></input>
        </div>
    </div>
    <div className='row mb-1'>
      <div className='col-md-4'>
      <label for="LastName" class="form-label mt-2 mr-6 text-white  row text-left textstyle labelinfo">Last Name:</label>
      </div>
      <div className='col'>
      <input type="text" class="form-control form labelinfo" id="lname" placeholder="Enter Last Name" name="LastName"value={lastname}></input>
        </div>
    </div>
    <div className='row mb-1'>
      <div className='col-md-4 '>
      <label for="designation" class="form-label mt-2 mr-6 text-white  row text-left textstyle labelinfo">Designation</label>
      </div>
      <div className='col'>
      <input type="text" class="form-control form labelinfo" id="designation" placeholder="Designation" name="designation"value={designation}></input>
        </div>
    </div>
    <div className='row mb-1'>
      <div className='col-md-4'>
      <label for="department" class="form-label mt-2 mr-6 text-white  row text-left textstyle labelinfo">Department:</label>
      </div>
      <div className='col'>
      <input type="text" class="form-control form labelinfo" id="department" placeholder="Enter Department" name="department"value={department}></input>
        </div>
    </div>
    <div className='row mb-1'>
      <div className='col-md-4'>
      <label for="email" class="form-label mt-2 mr-6 text-white  row text-left textstyle labelinfo">Email:</label>
      </div>
      <div className='col'>
      <input type="text" class="form-control form labelinfo" id="email" placeholder="Enter Email" name="email" value={email}></input>
        </div>
    </div>
    <div className='row mb-1'>
      <div className='col-md-4'>
      <label for="campus" class="form-label mt-2 mr-6 text-white  row text-left textstyle labelinfo">Campus:</label>
      </div>
      <div className='col'>
      <input type="text" class="form-control form labelinfo" id="campus" placeholder="Enter Campus" name="campus" value={campus}></input>
        </div>
    </div>
  </Paper>
  </Grid>
</Grid>
      </Paper>
    </Box>
    </div>
  )
}

export default Profile;
