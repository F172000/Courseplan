import {
    Grid,
    Button,
    IconButton,
    Card,
    Modal,
    Box,
    TextField,
  } from "@mui/material";
  import AddCircleIcon from "@mui/icons-material/AddCircle";
  import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
  import EditIcon from '@mui/icons-material/Edit';
  import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
  import React, { useState } from "react";
  import { DatePicker,DateTimePicker } from "@mui/x-date-pickers";
  import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
  import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
  import { useEffect } from 'react';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { useNavigate } from "react-router-dom";
  import moment from 'moment';
  import axios from 'axios';
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 480,
    bgcolor: "background.paper",
    border: "2px solid #346446",
    borderRadius: "5px",
    boxShadow: 24,
    p: 4
  };
 
  export default function Courseplan() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const navigate=useNavigate();

    const [week,setweek]=useState('');
    const [to,setto]=useState(null);
    const [from,setfrom]=useState(null);
    const [activity,setactivity]=useState('');
    const [topic,settopic]=useState('');
    const [data, setData] = useState([]);
    const handleDateChangeto = (date) => {
      setto(date.toISOString());
    };
    const handleDateChangefrom = (date) => {
      setfrom(date.toISOString());
    };
    async function insertcourseplan(e){
      handleClose();
e.preventDefault();
console.log("week:",week,"to:",to,"from:",from,"activity:",activity,"topic:",topic);
const url='http://localhost:5000/insertcourseplan';
const data={
  week:week,
  from:from,
  to:to,
  topic:topic,
  activity:activity
}
const result=await axios.post(url,data);
if(result.status!==200)
{
  alert('error');
}
toast(result.data.message,{
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
setweek('');
settopic('');
setactivity('');
setto(null);
setfrom(null);
const urll='http://localhost:5000/getcourseplan';
      axios.get(urll)
        .then(response => {
          console.log(response.data);
          setData(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }
    useEffect(() => {
      const urll='http://localhost:5000/getcourseplan';
      axios.get(urll)
        .then(response => {
          console.log(response.data);
          setData(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }, []);
    const handleDelete = (id) => {
      console.log(id);
      axios.delete('http://localhost:5000/deletecourseplan',{ data: { id: id } })
        .then(response => {
          console.log(response.data);
          setData(data.filter(row => row.id !== id));
          axios.get('http://localhost:5000/getcourseplan')
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
    const [editModalOpen, setEditModalOpen] = useState(false);
const [editedweek, setEditedweek] = useState('');
const [editedfrom, setEditedfrom] = useState(null);
const [editedto, setEditedto] = useState(null);
const [editedtopic, setEditedtopic] = useState('');
const [editedactivity, setEditedactivity] = useState('');
const [editRowId, setEditRowId] = useState('');
    const handleEdit = (row) => { 
const fromd =moment(row.fromdate, 'DD/MM/YYYY').format('YYYY-MM-DD');
const tod =moment(row.todate, 'DD/MM/YYYY').format('YYYY-MM-DD');
console.log(fromd,tod);
      setEditModalOpen(true);
      setEditedweek(row.week);
      setEditedto(tod);
  setEditedfrom(fromd);
      setEditedtopic(row.topicscovered);
      setEditedactivity(row.activity);
      setEditRowId(row.courseplanid);
      console.log(editedto,editedfrom,editedtopic);
    };
    const handleeditModalclose = () => setEditModalOpen(false);
    const handleSaveChanges = async (row) => {
      handleeditModalclose();
      if (!editedweek || !editedto || !editedfrom || !editedactivity || !editedtopic) {
        toast.error("Please fill in all fields.");
        return;
      }
        const url = `http://localhost:5000/updatecourseplan`;
        const updatedData = {
          id:editRowId,
          week:editedweek,
          from:editedfrom,
          to:editedto,
          topic:editedtopic,
          activity:editedactivity
        };
    console.log(updatedData);
        const response = await axios.put(url, updatedData);
        axios.get('http://localhost:5000/getcourseplan')
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
      // style={{height:'531px'}}
      <div className="m-3" >
        <Card style={{ padding: '30px',marginTop:'30px',marginBottom:'30px',marginLeft:'20px',marginRight:'20px' }}>
  
          <div className="m-4">
            <h3
              style={{
                textAlign: "center",
                fontWeight: "bold",
                color: "#346448",
              }}
            >
              SE242SP23 Software Engineering{" "}
            </h3>
          </div>
          <Grid container spacing={5} alignContent="center">
            <Grid item md={12}>
              <div className="row">
                <div className="col-md-4  col-xs-6 justify-content-start">
                  <h5
                    style={{
                    // marginLeft: "60px",
                      marginTop: "10px",
                      fontWeight: "bold",
                      color: "#346448",
                    }}
                  >
                    CoursePlan
                  </h5>
                </div>
  
                <div className="col-md-1 col-xs-6 offset-md-6">
                  <IconButton
                    onClick={handleOpen}
                    sx={{
                      marginLeft: "140px",
                      marginTop: "20px",
                      color: "#346448",
                    }}
                  >
                    <AddCircleIcon />
                  </IconButton>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <p className="d-flex justify-content-center mb-4 courseplanmodalhtag" >
                        CoursePlan
                      </p>
  
                      <TextField
                        required
                        className="mb-4 inputfield"
                        size="small"
                        color="success"
                        fullWidth
                        id="outlined-basic"
                        label="Weeks"
                        value={week}
                        onChange={(e)=>setweek(e.target.value)}
                        // value={author}
                        variant="outlined"
  
                        // onChange={(e) => setAuthor(e.target.value)}
                      />
                       
                    <div className="d-flex">
                    <Box style={{width:200,marginRight:'15px'}}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker className="mb-4 ml-3 fullwidthdatepicker inputfield" label="From" slotProps={{
                            textField: { color: "success", size: "small" },
                          }}
                          selected={from}
                          onChange={date=>handleDateChangefrom(date)}
                          format="DD/MM/YYYY"
                          />
      </DemoContainer>
    </LocalizationProvider>
    </Box>
  
   <Box style={{width:200}}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker className="mb-4 fullwidthdatepicker inputfield" label="To" slotProps={{
                            textField: { color: "success", size: "small" },
                          }}
                         selected={to}
                          onChange={date=>handleDateChangeto(date)}
                          format="DD/MM/YYYY"
                         />
      </DemoContainer>
    </LocalizationProvider>
    </Box>
    </div>               
               
                      <TextField
                        required
                        className="mb-4 inputfield"
                        size="small"
                        color="success"
                        fullWidth
                        id="outlined-basic"
                        label="Topics Covered"
                        variant="outlined"
                     value={topic}
                     onChange={(e)=>settopic(e.target.value)}
                      />
                      <TextField
                        required
                        className="mb-4 inputfield"
                        size="small"
                        color="success"
                        fullWidth
                        id="outlined-basic"
                        label="Activities"
                        // value={author}
                        variant="outlined"
                        value={activity}
                        onChange={(e)=>setactivity(e.target.value)}
                      />
                      <div className="row">
                        <div className="col-md-12 d-flex justify-content-center">
                        <Button
                        style={{
                          backgroundColor: "#346448",
                         padding:'7px 50px 7px 50px',
                        }}
                        variant="contained"
                        size="small" 
                        onClick={insertcourseplan}
                      >
                        Submit
                      </Button>
                        </div>
                      </div>
                    </Box>
                  </Modal>
                </div>
              </div>
              <div class="container table-responsive py-1">
                <table class="table table-bordered ">
                  <thead className="tableheader">
                    <tr>
                      <th scope="col" style={{ width: "3%" }}>
                        Weeks
                      </th>
                      <th scope="col" style={{ width: "15%" }}>
                        Days
                      </th>
                      <th scope="col" style={{ width: "40%" }}>
                        Topics Covered
                      </th>
                      <th scope="col" style={{ width: "10%" }}>
                        Activities
                      </th>
                      <th scope="col" style={{ width: "10%" }}>
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                  {data.map(row => (
                    <tr key={row.courseplanid}>
                      <td>{row.week}</td>
                      <td>{row.fromdate} - {row.todate}</td>
                      <td>{row.topicscovered}</td>
                      <td>{row.activity}</td>
                      <td> <IconButton onClick={()=>handleDelete(row.courseplanid)}><DeleteForeverIcon sx={{fontSize:'18px',color:'#346448'}}/></IconButton>
          <IconButton onClick={() => handleEdit(row)}><EditIcon sx={{fontSize:'18px',color:'#346448'}}/></IconButton></td>
                    </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Grid>
          </Grid>
          <Modal
  open={editModalOpen}
  onClose={() => setEditModalOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
  <p className="d-flex justify-content-center mb-4 courseplanmodalhtag" >
                       Edit CoursePlan
                      </p>
  
                      <TextField
                        required
                        className="mb-4 inputfield"
                        size="small"
                        color="success"
                        fullWidth
                        id="outlined-basic"
                        label="Weeks"
                        value={editedweek}
                        onChange={(e)=>setEditedweek(e.target.value)}
                        // value={author}
                        variant="outlined"
  
                        // onChange={(e) => setAuthor(e.target.value)}
                      />
                       
                    <div className="d-flex">
                    <Box style={{width:200,marginRight:'15px'}}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker className="mb-4 ml-3 fullwidthdatepicker inputfield" label="From" slotProps={{
                            textField: { color: "success", size: "small" },
                          }}
                          selected={editedfrom}
                          // selected={editedfrom}
                          onChange={date=>setEditedfrom(date.toISOString())}
                          format="DD/MM/YYYY"
                          />
      </DemoContainer>
    </LocalizationProvider>
    </Box>
  
   <Box style={{width:200}}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker className="mb-4 fullwidthdatepicker inputfield"  label="To" slotProps={{
                            textField: { color: "success", size: "small" }
                          }}
                          
                         selected={editedto}
                        //  selected={editedto}
                          onChange={date=>setEditedto(date.toISOString())}
                          format="DD/MM/YYYY"
                         />
      </DemoContainer>
    </LocalizationProvider>
    </Box>
    </div>               
                      <TextField
                        required
                        className="mb-4 inputfield"
                        size="small"
                        color="success"
                        fullWidth
                        id="outlined-basic"
                        label="Topics Covered"
                        variant="outlined"
                        value={editedtopic}
                        onChange={(e) => setEditedtopic(e.target.value)}
                      />
                      <TextField
                        required
                        className="mb-4 inputfield"
                        size="small"
                        color="success"
                        fullWidth
                        id="outlined-basic"
                        label="Activities"
                        variant="outlined"
                        value={editedactivity}
                        onChange={(e) => setEditedactivity(e.target.value)}
                      />
                      <div className="row">
                        <div className="col-md-12 d-flex justify-content-center">
                        <Button
                        style={{
                          backgroundColor: "#346448",
                         padding:'7px 50px 7px 50px',
                        }}
                        variant="contained"
                        size="small" 
                        onClick={handleSaveChanges}
                      >
                        save 
                      </Button>
                        </div>
                      </div>
  </Box>
</Modal>
          <div className="row">
            <div className="col d-flex justify-content-end">
              <Button
                variant="contained"
                className="weightbutton"
                  style={{
                    backgroundColor: "#346448",
                  // textAlign: "center",
                  paddingLeft: "30px",
                  paddingRight: "30px",
                  marginRight:'45px'
                }}
                onClick={()=>navigate('/setweight')}
              >
                Back
              </Button>
            </div>
          </div>
        </Card>
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
    );
  }
  