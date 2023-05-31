import React from 'react'
import {Paper,Button,Grid, TextField, IconButton,MenuItem,Card} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { useState } from 'react';
import Chip from "@mui/material/Chip";
import { Stack } from "@mui/system";
import GradingIcon from '@mui/icons-material/Grading';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import PieChartIcon from "@mui/icons-material/PieChart";
import PreviewIcon from '@mui/icons-material/Preview';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AssessmentIcon from "@mui/icons-material/Assessment";
import GroupsIcon from '@mui/icons-material/Groups';

const Labform = () => {
  const [quiz,setquiz]=useState({
    number: 1,
    totalMarks: "",
    questions: [
      {
        no: 1,
        clo: "", // input type number
        marks: "", // input type number
        parts: [
          {
            no: 1,
            clo: "",
            marks: ""
          }
        ]
      }
    ]
  });

  const addParts = (questIndex) => {
    const newQuiz = { ...quiz };
    const currentQuestionObject = newQuiz.questions[questIndex];
    console.log("question index object", currentQuestionObject);
    currentQuestionObject.parts.push({
      no: currentQuestionObject.parts.length + 1,
      clo: 0,
      marks: 0
    });
    const newQuizToUpdate = {
      ...quiz
    };
    newQuizToUpdate.questions[questIndex] = currentQuestionObject;
    setquiz(newQuizToUpdate);
  };

  const addQuestion = () => {
    const newQuiz = { ...quiz };
    newQuiz.questions.push({
      no: newQuiz.questions.length + 1,
      clo: "", // input type number
      marks: "", // input type number
      parts: []
    });
    setquiz(newQuiz);
  };

  const handleMarksChange = (event, index, isQuestion) => {
    const newQuiz = { ...quiz };
    if (isQuestion) {
      newQuiz.questions[index].marks = event.target.value;
    } else {
      const questionIndex = Math.floor(index / 10);
      const partIndex = index % 10;
      newQuiz.questions[questionIndex].parts[partIndex].marks = event.target.value;
    }
    setquiz(newQuiz);
  };
  const handleQuiz1TotalMarksChange = (event) => {
    const newQuiz = { ...quiz }; // create a new copy of the quiz object
    newQuiz.totalMarks = event.target.value; // update the marks for the first question of quiz1
    setquiz(newQuiz); // update the state of the quiz object// update the state of quiz1TotalMarks
  }
  const handleCloChange = (event, index, isQuestion) => {
    const newQuiz = { ...quiz };
    if (isQuestion) {
      newQuiz.questions[index].clo = event.target.value;
    } else {
      const questionIndex = Math.floor(index / 10);
      const partIndex = index % 10;
      newQuiz.questions[questionIndex].parts[partIndex].clo = event.target.value;
    }
    setquiz(newQuiz);
  };
  const handleRemoveQuestion = (questionIndex) => {
    const newQuiz = { ...quiz };
    newQuiz.questions.splice(questionIndex, 1);
    newQuiz.questions.forEach((question, index) => {
      question.no = index + 1;
    });
    setquiz(newQuiz);
  };
  const handleRemoveParts = (questionIndex, partIndex) => {
    const newQuiz = { ...quiz };
    newQuiz.questions[questionIndex].parts.splice(partIndex, 1);
    newQuiz.questions[questionIndex].parts.forEach((part, index) => {
      part.no = index + 1;
    });
    setquiz(newQuiz);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(quiz);
  };
  return (
    <div>
     <Paper elevation={1} sx={{padding:'30px',marginTop:'30px',marginLeft:'20px',marginRight:'20px'}}>
     <div className='d-flex justify-content-center'style={{ color: "#346448" }}>
        <Stack spacing={1} direction="row" style={{ marginBottom: "50px" }}>
              <Chip
                icon={<GroupsIcon/>}
                label="Participants"
                component="a"
                href="#basic-chip"
                clickable
                color="success"
                size="medium"
                variant="outlined"
                sx={{
                  marginRight: "20px",
                  border: "1px solid white",
                  backgroundColor: "#346448",
                  color: "white",
                  padding:'10px',
                  "&:hover": {
                    backgroundColor: "white",
                    color: "#346448",
                    border: "1px solid #346448",
                    "& .MuiChip-icon": {
                      color: "#346448",
                    },
                  },
                  "& .MuiChip-icon": {
                    color: "white",
                  },
                }}
              />
              <Chip
                icon={<MenuBookIcon />}
                label=" SE201"
                component="a"
                href="#basic-chip"
                clickable
                color="success"
                size="medium"
                variant="outlined"
                sx={{
                  marginRight: "20px",
                  border: "1px solid white",
                  backgroundColor: "#346448",
                  color: "white",
                  padding:'10px',
                  "&:hover": {
                    backgroundColor: "white",
                    color: "#346448",
                    border: "1px solid #346448",
                    "& .MuiChip-icon": {
                      color: "#346448",
                    },
                  },
                  "& .MuiChip-icon": {
                    color: "white",
                  },
                }}
              />
              <Chip
                icon={<PieChartIcon />}
                label="Scoreboard"
                variant="outlined"
                component="a"
                href="#basic-chip"
                clickable
                color="success"
                size="medium"
                sx={{
                  marginRight: "20px",
                  border: "1px solid white",
                  backgroundColor: "#346448",
                  color: "white",
                  padding:'10px',
                  "&:hover": {
                    backgroundColor: "white",
                    color: "#346448",
                    border: "1px solid #346448",
                    "& .MuiChip-icon": {
                      color: "#346448",
                    },
                  },
                  "& .MuiChip-icon": {
                    color: "white",
                  },
                }}
              />
              <Chip
                icon={<AssessmentIcon />}
                label="Create Assessment"
                variant="outlined"
                component="a"
                href="#basic-chip"
                clickable
                color="success"
                size="medium"
                sx={{
                  marginRight: "20px",
                  border: "1px solid white",
                  backgroundColor: "#346448",
                  color: "white",
                  padding:'10px',
                  "&:hover": {
                    backgroundColor: "white",
                    color: "#346448",
                    border: "1px solid #346448",
                    "& .MuiChip-icon": {
                      color: "#346448",
                    },
                  },
                  "& .MuiChip-icon": {
                    color: "white",
                  },
                }}
              />
              <Chip
                icon={<HowToRegIcon  />}
                component="a"
                clickable
                color="success"
                size="medium"
                label="Add Attendance"
                variant="outlined"
                sx={{
                  marginRight: "20px",
                  border: "1px solid white",
                  backgroundColor: "#346448",
                  color: "white",
                  padding:'10px',
                  "&:hover": {
                    backgroundColor: "white",
                    color: "#346448",
                    border: "1px solid #346448",
                    "& .MuiChip-icon": {
                      color: "#346448",
                    },
                  },
                  "& .MuiChip-icon": {
                    color: "white",
                  },
                }}
              />
               <Chip
                icon={<HowToRegIcon  />}
                component="a"
                clickable
                color="success"
                size="medium"
                label="View Attendance"
                variant="outlined"
                sx={{
                  marginRight: "20px",
                  border: "1px solid white",
                  backgroundColor: "#346448",
                  color: "white",
                  padding:'10px',
                  "&:hover": {
                    backgroundColor: "white",
                    color: "#346448",
                    border: "1px solid #346448",
                    "& .MuiChip-icon": {
                      color: "#346448",
                    },
                  },
                  "& .MuiChip-icon": {
                    color: "white",
                  },
                }}
              />
             <Chip
                component="a"
                href="#basic-chip"
                clickable
                color="success"
                size="medium"
                icon={<PreviewIcon />}
                label="View Course CLO's"
                variant="outlined"
                sx={{
                  marginRight: "20px",
                  border: "1px solid white",
                  backgroundColor: "#346448",
                  color: "white",
                  padding:'10px',
                  "&:hover": {
                    backgroundColor: "white",
                    color: "#346448",
                    border: "1px solid #346448",
                    "& .MuiChip-icon": {
                      color: "#346448",
                    },
                  },
                  "& .MuiChip-icon": {
                    color: "white",
                  },
                }}
              />
            </Stack>
          </div>
     <Card elevation={5} sx={{padding:'50px',marginTop:'30px',marginBottom:'30px',marginLeft:'20%',marginRight:'20%',backgroundColor:'#F5F5F5'}}>
      <Grid container spacing={2} justifyContent={'center'} alignItems={'center'}  >
<Grid item  md={12}>
    <h6 align='center' className='quizheading'>Lab No {quiz.number}.</h6>
</Grid>
<Grid item md={2} className='d-flex justify-content-start quizcontent'>
    <p >Total Marks:</p>
</Grid>
<Grid item md={10} >
<TextField fullWidth type='number' variant='outlined' value={quiz.totalMarks} onChange={(event)=>handleQuiz1TotalMarksChange(event)} size='small' className='inputfield' placeholder='Enter Marks'></TextField>
</Grid>
<Grid item md={12} className='mt-1' >
  <div className='row'>
    <div className='col mt-1 d-flex justify-content-start quizcontent'>
    <p>Add Questions</p>
    </div>
    <div className='col d-flex justify-content-end'>
    <IconButton onClick={addQuestion}><AddCircleIcon className='plusiconbutton'/></IconButton>
    </div>
  </div>
</Grid>
{quiz.questions.map((ques, questionIndex) => {
  return(
    <>
<Grid item md={12} className=' mt-1'>
<div className='row'>
    <div className='col mt-1 d-flex justify-content-start quizcontent'>
    <p>Question {questionIndex+1}:</p>
    </div>
    <div className='col d-flex justify-content-end'>
    <IconButton onClick={(questionIndex)=>handleRemoveQuestion(questionIndex)}><CancelIcon className='plusiconbutton'/></IconButton>
    </div>
  </div>
</Grid>
<Grid item md={2} className='mt-1 d-flex justify-content-start quizcontent'>
<p>CLO:</p>
</Grid>
<Grid item md={10} >
<TextField fullWidth variant='filled' size='small'select className='inputfield' value={ques.clo} onChange={(event)=>handleCloChange(event,questionIndex,true)} placeholder='Select CLO'>
<MenuItem value={0}>None</MenuItem>
<MenuItem value={1}>CLO 1</MenuItem>
<MenuItem value={2}>CLO 2</MenuItem>
<MenuItem value={3}>CLO 3</MenuItem>
<MenuItem value={4}>CLO 4</MenuItem>
</TextField>
</Grid>
<Grid item md={2} className='mt-1 d-flex justify-content-start quizcontent'>
    <p>Total Marks:</p>
</Grid>
<Grid item md={10} >
<TextField fullWidth type='number' variant='outlined' value={ques.marks} onChange={(event)=>handleMarksChange(event,questionIndex,true)} size='small' className='inputfield' placeholder='Enter Marks'></TextField>
</Grid>
<Grid item md={12} className='mt-1' >
  <div className='row'>
    <div className='col mt-1 d-flex justify-content-start quizcontent'>
    <p>Add Parts of Question {questionIndex+1}:</p>
    </div>
    <div className='col d-flex justify-content-end'>
    <IconButton onClick={()=>addParts(questionIndex)}><AddCircleIcon className='plusiconbutton'/></IconButton>
    </div>
  </div>
</Grid>
{ques.parts.map((part, partIndex) => {
              return (
                <>
<Grid item md={12} >
<div className='row'>
    <div className='col mt-1 d-flex justify-content-start quizcontent'>
    <p>Part {part.no}:</p>
    </div>
    <div className='col d-flex justify-content-end'>
    <IconButton onClick={()=>handleRemoveParts(questionIndex,partIndex)}><CancelIcon className='plusiconbutton'/></IconButton>
    </div>
  </div>
</Grid>
<Grid item md={2} className='mt-1 d-flex justify-content-start quizcontent'>
<p>CLO:</p>
</Grid>
<Grid item md={10} >
<TextField fullWidth  variant="filled" size='small' value={part.clo} onChange={(event)=>handleCloChange(event,partIndex,false)} select className='inputfield'>
<MenuItem value={0}>None</MenuItem>
<MenuItem value={1}>CLO 1</MenuItem>
<MenuItem value={2}>CLO 2</MenuItem>
<MenuItem value={3}>CLO 3</MenuItem>
<MenuItem value={4}>CLO 4</MenuItem>
</TextField>
</Grid>
<Grid item md={2} className='mt-1 d-flex justify-content-start quizcontent'>
    <p>Total Marks:</p>
</Grid>
<Grid item md={10} >
<TextField fullWidth type='number' variant='outlined' size='small' value={part.marks} onChange={(event)=>handleMarksChange(event,partIndex,false)} className='inputfield'placeholder='Enter Marks' ></TextField>
</Grid>
</>
   );
  })}
  </>
   );
  })}
<Grid item md={12} sx={{ display: 'flex', justifyContent: 'end' }}>
<Button onClick={(event)=>handleSubmit(event)} variant='contained' className='quizbutton'sx={{paddingLeft:'30px',paddingRight:'30px', backgroundColor: '#346448',marginRight:'10px' }} >Cancel</Button>
<Button onClick={(event)=>handleSubmit(event)} variant='contained' className='quizbutton'sx={{paddingLeft:'30px',paddingRight:'30px', backgroundColor: '#346448' }} >Save</Button>
    </Grid>
      </Grid>
      </Card>
     </Paper>
    </div>
  )
}

export default Labform;