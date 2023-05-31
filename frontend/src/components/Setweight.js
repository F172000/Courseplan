// eslint-disable-next-line
import { Paper,Grid,Button, IconButton,Typography,Modal,Box, TextField} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { InsertChart } from '@mui/icons-material';
const Setweight = () => {
  // const [insertrow,setinsertrow]=useState([{assessmenttype:"",weight:"",date:""}]);
  // const [insertrow2,setinsertrow2]=useState([{assessmenttype:"",weight:"",date:""}]);
  // const handleChange = (index, event) => {
  //   const newrow = [...insertrow];
  //   newrow[index][event.target.name]= event.target.value;
  //   setinsertrow(newrow);
  //   console.log(newrow);
  // };
  // const handleChange2 = async (index, event) => {
  //   event.preventDefault();
  //   const newrow2 = [...insertrow2];
  //   newrow2[index][event.target.name]= event.target.value;
  //   setinsertrow2(newrow2);
  //   console.log(insertrow2);
  //   const weightdata={
  //    dataArray:insertrow2
  //   };
  //   const url='http://localhost:5000/register';
  //   const regweight=await axios.post(url,weightdata);
  //     console.log("data",regweight);
  //   if(regweight.status!==200)
  //   {
  //     alert("error");
  //   }    
  //   console.log("newrow",newrow2);
  // };
  // const addtable2row = () => {
  //   setinsertrow2([
  //     ...insertrow2,
  //     { assessmenttype: "", weight: "",date:"" }
  //   ]);
  // };
  // const removetable2row = (lineNoToDelete) => {
  //   const filter = insertrow2.filter((row, index) => index !== lineNoToDelete);
  //   setinsertrow2(filter);
  // };
  // const addtablerow = () => {
  //   setinsertrow([
  //     ...insertrow,
  //     {  assessmenttype: "", weight: "",date:"" }
  //   ]);
  // };
  // const logQuestions = () => {
  //   console.log(insertrow);
  // };

  // const removerow = (lineNoToDelete) => {
  //   const filter = insertrow.filter((row, index) => index !== lineNoToDelete);
  //   setinsertrow(filter);
  // };
  const [theassessmenttype,settheassessmenttype]=useState();
  const [theweight,settheweight]=useState();
async function insert (e){
e.preventDefault();
console.log({theassessmenttype,theweight});
const url='http://localhost:5000/register';
const data={
  assessmentType:theassessmenttype,
  weight:theweight,
  assessplanid:2
}
const assessdata=await axios.post(url,data);
 axios.get('http://localhost:5000/users')
          .then(response => {
            setData(response.data);
          })
          .catch(error => {
            console.error(error);
          });
if(assessdata.status!==200){
  alert("error");
}
// alert(assessdata.data.message);
toast(assessdata.data.message,{
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  style: {
    background: "#346448", // Replace #ff0000 with your desired background color
    color: "#ffffff" // Replace #ffffff with your desired text color
  }
  });
console.log(assessdata);
  }
  const [data, setData] = useState([]);
  useEffect(() => {
    const url='http://localhost:5000/users';
    axios.get(url)
      .then(response => {
        console.log(response.data);
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  const handleDelete = (id) => {
    // const url='http://localhost:5000/delete';
    // const data={
    //   id:id
    // }
    console.log(id);
    axios.delete('http://localhost:5000/delete',{ data: { id: id } })
      .then(response => {
        console.log(response.data);
        setData(data.filter(row => row.id !== id));
        axios.get('http://localhost:5000/users')
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
          console.error(error);
        });
      })
      .catch(error => {
        console.error(error);
      });
  }
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #346448',
    borderRadius:'5px',
    boxShadow: 24,
    p: 4,
  };
  const [theory, settheory] = React.useState(false);
  const handletheoryopen = () => settheory(true);
  const handletheoryclose = () => settheory(false);
  const [lab, setlab] = React.useState(false);
  const handlelabopen = () => setlab(true);
  const handlelabclose = () => setlab(false);
  function addtheory(e){
    insert(e);
    handletheoryclose();
  }
  function addlab(){
    handlelabclose();
  }
  const navigate=useNavigate();
  const theoryWeight = data.reduce((total, row) => {
    if (row.assessplanid === 2) {
      return total + row.weight;
    }
    return total;
  }, 0);
  const percentage = Math.floor(theoryWeight / 100) * 100;
     
const [editModalOpen, setEditModalOpen] = useState(false);
const [editedAssessmentType, setEditedAssessmentType] = useState('');
const [editedWeight, setEditedWeight] = useState('');
const [editRowId, setEditRowId] = useState('');
const handleEdit = (row) => {
  setEditModalOpen(true);
  setEditedAssessmentType(row.type);
  setEditedWeight(row.weight);
  setEditRowId(row.plandistid);
};
const handleeditModalclose = () => setEditModalOpen(false);
const handleSaveChanges = async (row) => {
  handleeditModalclose();
    const url = `http://localhost:5000/update`;
    const updatedData = {
      id:editRowId,
      assessmentType: editedAssessmentType,
      weight: editedWeight
    };
console.log(updatedData);
    const response = await axios.put(url, updatedData);
    axios.get('http://localhost:5000/users')
          .then(response => {
            setData(response.data);
          })
          .catch(error => {
            console.error(error);
          });
    if(response.status!==200){
      alert("error");
    }
    // alert(response.data.message);
    toast(response.data.message,{
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: {
        background: "#346448", // Replace #ff0000 with your desired background color
        color: "#ffffff" // Replace #ffffff with your desired text color
      }
      });
};
  return (
    <div >
      <Paper elevation={1}sx={{padding:'30px',marginTop:'30px',marginBottom:'30px',marginLeft:'20px',marginRight:'20px'}}>
        <div className='row'>
          <div className='col-md-6 offset-md-4 mb-5 coursename'>
            SE242SP23 Software Engineering
          </div>
        </div>
      <Grid container spacing={5} alignContent="center">
<Grid item md={6} >
<div className='row'>
    <div className='col-md-4'>
<h5 class='weightportion'>Theory Portion</h5>
</div>
<div className='col-md-1 col-xs-12 offset-md-6'>
<IconButton onClick={handletheoryopen} sx={{marginLeft:'20px',marginTop:'20px',color:'#346448'}}><AddCircleIcon/></IconButton>
<Modal
        open={theory}
        onClose={handletheoryclose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* <Box sx={style}>
        <div className='row'>
          <div className='col'>
            <label for="assessmentype">Enter Assessment Type:</label>
          </div>
         </div>
         <div className='row'>
          <div className='col-md-12 mb-3'>
<TextField color='success'variant='outlined'fullWidth size='small'placeholder='Assignment'value={theassessmenttype}onChange={(e)=>settheassessmenttype(e.target.value)}></TextField>
          </div>
         </div>
         <div className='row'>
          <div className='col-md-7'>
            <label for="weight">Enter Assessment Weight:</label>
          </div>
         </div>
         <div className='row'>
          <div className='col-md-12'>
          <TextField color='success' variant='outlined'fullWidth size='small'placeholder='0'value={theweight}onChange={(e)=>settheweight(e.target.value)}></TextField>
          </div>
         </div>
        <div className='row mt-3'>
          <div className='col-md-12 d-flex justify-content-end'>
            <Button onClick={insert} variant='contained'sx={{bgcolor:' #346448'}}>Add </Button>
          </div>
        </div>
        </Box> */}
          <Box sx={style}>
          <div className='row mb-3'>
<div className='col-md-12 d-flex justify-content-center'>
<p className='setweightmodalhtag'>Theory Portion</p>
</div>
          </div>
        <div className='row'>
          <div class="col">
       <TextField
                        required
                        className="mb-4 inputfield"
                        size="small"
                        color="success"
                        type='text'
                        fullWidth
                        id="outlined-basic"
                        label="Enter Assessment Name"
                        variant="outlined"
                        value={theassessmenttype}onChange={(e)=>settheassessmenttype(e.target.value)}
                      />
    </div>
         </div>
         <div className='row'>
           <div class="col">
      <TextField
                        required
                        className="mb-4 inputfield"
                        size="small"
                        color="success"
                        type='number'
                        fullWidth
                        id="outlined-basic"
                        label="Enter Assessment Marks"
                        variant="outlined"
                        value={theweight}onChange={(e)=>settheweight(e.target.value)}
                      />
    </div>
         </div>
        <div className='row mt-2'>
          <div className='col-md-12 d-flex justify-content-center'>
            <Button  onClick={(event)=>addtheory(event)} className='rounded' variant='contained'sx={{bgcolor:' #346448',padding:'7px 60px 7px 60px'}}>Add</Button>
          </div>
        </div>
        </Box>
      </Modal>
</div>
</div>
      <div class="container table-responsive py-1"> 
<table class="table table-bordered ">
  <thead className='tableheader'>
    <tr>
      <th scope="col"style={{width:"30%"}}>Assessment Type</th>
      <th scope="col">Weight</th>
      <th scope="col" >Action</th>
    </tr>
  </thead>
  <tbody>
{/* {insertrow.map((val,index)=>( */}
{data.map(row => (
    <tr key={row.plandistid}>
      <td>{row.type}</td>
      <td>{row.weight}</td>
        <td>
          <IconButton onClick={()=>handleDelete(row.plandistid)}><DeleteForeverIcon sx={{fontSize:'18px',color:'#346448'}}/></IconButton>
          <IconButton onClick={() => handleEdit(row)}><EditIcon sx={{fontSize:'18px',color:'#346448'}}/></IconButton>
          </td>
    </tr>
))}
  {/*  ))} */}
  </tbody>
</table>
</div>
<Modal
  open={editModalOpen}
  onClose={() => setEditModalOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <div className='row mb-3'>
      <div className='col-md-12 d-flex justify-content-center'>
        <p className='setweightmodalhtag'>Edit Assessment</p>
      </div>
    </div>
    <div className='row'>
      <div class="col">
        <TextField
          required
          className="mb-4 inputfield"
          size="small"
          color="success"
          type='text'
          fullWidth
          id="outlined-basic"
          label="Enter Assessment Name"
          variant="outlined"
          value={editedAssessmentType}
          onChange={(e) => setEditedAssessmentType(e.target.value)}
        />
      </div>
    </div>
    <div className='row'>
      <div class="col">
        <TextField
          required
          className="mb-4 inputfield"
          size="small"
          color="success"
          type='number'
          fullWidth
          id="outlined-basic"
          label="Enter Assessment Marks"
          variant="outlined"
          value={editedWeight}
          onChange={(e) => setEditedWeight(e.target.value)}
        />
      </div>
    </div>
    <div className='row mt-2'>
      <div className='col-md-12 d-flex justify-content-center'>
        <Button onClick={handleSaveChanges} className='rounded' variant='contained' sx={{ bgcolor: ' #346448', padding: '7px 60px 7px 60px' }}>Save Changes</Button>
      </div>
    </div>
  </Box>
</Modal>

<div className='row mb-1'>
<div className='col-md-4 Total'>
  <h6 className='Total'>Total Theory Weightage:</h6>
</div>
<div className='col-md-1 Marks'>
  <h6 className='Marks'>{theoryWeight}</h6>
</div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped active" role="progressbar"
  aria-valuenow={percentage} aria-valuemin="0" aria-valuemax="100" style={{width:"40%",backgroundColor:'#346448'}}>
    {percentage}%
  </div>
</div>
</Grid>
<Grid item md={6}>
  <div className='row'>
    <div className='col-md-3'>
<h5 class='weightportion'>Lab Portion</h5>
</div>
<div className='col-md-1 col-xs-12 offset-md-7'>
<IconButton onClick={handlelabopen}sx={{marginLeft:'20px',marginTop:'20px',color:'#346448'}}><AddCircleIcon/></IconButton>
<Modal
        open={lab}
        onClose={handlelabclose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className='row mb-3'>
<div className='col-md-12 d-flex justify-content-center'>
<p className='setweightmodalhtag'>Lab Portion</p>
</div>
          </div>
        <div className='row'>
          <div class="col">
          <TextField
                        required
                        className="mb-4 inputfield"
                        size="small"
                        color="success"
                        type='text'
                        fullWidth
                        id="outlined-basic"
                        label="Enter Assessment Name"
                        // value={author}
                        variant="outlined"
                        // onChange={(e) => setAuthor(e.target.value)}
                      />
    </div>
         </div>
         <div className='row'>
          {/* <div className='col-md-7'>
            <label for="weight">Enter Assessment Weight:</label>
          </div> */}
           <div class="col">
           <TextField
                        required
                        className="mb-4 inputfield"
                        size="small"
                        color="success"
                        type='number'
                        fullWidth
                        id="outlined-basic"
                        label="Enter Assessment Marks"
                        // value={author}
                        variant="outlined"
                        // onChange={(e) => setAuthor(e.target.value)}
                      />
    </div>
         </div>
        <div className='row mt-2'>
          <div className='col-md-12 d-flex justify-content-center'>
            <Button onClick={addlab}className='rounded' variant='contained'sx={{bgcolor:' #346448',padding:'7px 60px 7px 60px'}}>Add</Button>
          </div>
        </div>
        </Box>
      </Modal>
</div>
</div>
<div class="container table-responsive py-1"> 
<table class="table table-bordered ">
  <thead className='tableheader'>
    <tr>
      <th scope="col"style={{width:"30%"}}>Assessment Type</th>
      <th scope="col">Weight</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {/* {insertrow2.map((val,index)=>( */}
     <tr>
     <td></td>
     <td></td>
       <td><IconButton ><DeleteForeverIcon sx={{fontSize:'18px',color:'#346448'}}/></IconButton>
       <IconButton><EditIcon sx={{fontSize:'18px',color:'#346448'}}/></IconButton>
       </td>
   </tr>
       {/* ))} */}
  </tbody>
</table>
</div>
<div className='row mb-1'>
<div className='col-md-4 Total'>
  <h6 className='Total'>Total Lab Weightage:</h6>
</div>
<div className='col-md-1 Marks'>
  <h6 className='Marks'>0</h6>
</div>
</div>
<div class="progress">
  <div class="progress-bar progress-bar-striped active" role="progressbar"
  aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width:"40%",backgroundColor:'#346448'}}>
    40%
  </div>
</div>
</Grid>
</Grid>
<div className='row mt-3'>
          <div className='col-md-12 d-flex justify-content-end mt-5 coursename'>
           <Button onClick={()=>navigate('/dashboard')} variant='contained'className='weightbutton' sx={{paddingRight:'30px',paddingLeft:'30px',backgroundColor:'#346448',marginRight:'20px'}}>Cancel</Button>
           <Button onClick={()=>navigate('/dashboard')} variant='contained'className='weightbutton' sx={{paddingRight:'30px',paddingLeft:'30px',backgroundColor:'#346448'}}>Save</Button>
          </div>
        </div>
</Paper>
<ToastContainer position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark" />
    </div>
  )
}

export default Setweight;
