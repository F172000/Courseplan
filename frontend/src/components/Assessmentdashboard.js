import React from "react";
import GroupsIcon from '@mui/icons-material/Groups';
import Card from "@mui/material/Card";
import AssessmentIcon from "@mui/icons-material/Assessment";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import PieChartIcon from "@mui/icons-material/PieChart";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import PreviewIcon from '@mui/icons-material/Preview';
import { Link } from "react-router-dom";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import GradingIcon from '@mui/icons-material/Grading';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Chip from "@mui/material/Chip";
import { Stack } from "@mui/system";

const b = {
  color: "#346448",
  width: "100%",
  borderRadius: "13px",
};
export default function Assessmentdashboard() {
  const [clo, setCLO] = React.useState("");
  const [plo, setPLO] = React.useState("");

  return (
    <div>
      <div className="m-5">
        <Card style={{ padding: 50 }}>
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

          <div>
            <Link to="/quizform" style={{ textDecoration: "none" }}>
              <Card className="shadow-inner" style={{ marginTop: "15px", backgroundColor:'#F5F5F5' }}>
                <div className="row m-2">
                  <div className="col-1  mt-1" style={{ paddingLeft: "35px" }}>
                    <AssessmentIcon
                      style={{
                        fontSize: "30px",
                        marginTop: "3px",
                        color: "#346448",
                      }}
                    />
                  </div>
                  <div className="col-11 mt-2" style={{ paddingLeft: "0" }}>
                    <p className="coursedashpara">Add Quiz</p>
                  </div>
                </div>
              </Card>
            </Link>
            <Link to="/labassessments" style={{ textDecoration: "none" }}>
              <Card className="shadow-inner" style={{ marginTop: "15px", backgroundColor:'#F5F5F5' }}>
                <div className="row m-2">
                  <div className="col-1 mt-1 " style={{ paddingLeft: "35px" }}>
                    <AssessmentIcon
                      style={{
                        fontSize: "30px",
                        marginTop: "3px",
                        color: "#346448",
                      }}
                    />
                  </div>
                  <div className="col-11 mt-2" style={{ paddingLeft: "0" }}>
                    <p className="coursedashpara">Add Lab Work</p>
                  </div>
                </div>
              </Card>
            </Link>
            <Link to="/Dashboard/Quiz1" style={{ textDecoration: "none" }}>
              <Card className="shadow-inner" style={{ marginTop: "15px", backgroundColor:'#F5F5F5' }}>
                <div className="row m-2">
                  <div className="col-1 mt-1 " style={{ paddingLeft: "35px" }}>
                    <AssessmentIcon
                      style={{
                        fontSize: "30px",
                        marginTop: "3px",
                        color: "#346448",
                      }}
                    />
                  </div>
                  <div className="col-11 mt-2" style={{ paddingLeft: "0" }}>
                    <p className="coursedashpara">Add MidTerm Exam</p>
                  </div>
                </div>
              </Card>
            </Link>
            <Link to="/Dashboard/Quiz1" style={{ textDecoration: "none" }}>
              <Card className="shadow-inner" style={{ marginTop: "15px", backgroundColor:'#F5F5F5' }}>
                <div className="row m-2">
                  <div className="col-1 mt-1 " style={{ paddingLeft: "35px" }}>
                    <AssessmentIcon
                      style={{
                        fontSize: "30px",
                        marginTop: "3px",
                        color: "#346448",
                      }}
                    />
                  </div>
                  <div className="col-11 mt-2" style={{ paddingLeft: "0" }}>
                    <p className="coursedashpara">Add FinalTerm Exam</p>
                  </div>
                </div>
              </Card>
            </Link>
            <Link to="/Dashboard/Quiz1" style={{ textDecoration: "none" }}>
              <Card className="shadow-inner" style={{ marginTop: "15px", backgroundColor:'#F5F5F5'}}>
                <div className="row m-2">
                  <div className="col-1 mt-1 " style={{ paddingLeft: "35px" }}>
                    <AssessmentIcon
                      style={{
                        fontSize: "30px",
                        marginTop: "3px",
                        color: "#346448",
                      }}
                    />
                  </div>
                  <div className="col-11 mt-2" style={{ paddingLeft: "0" }}>
                    <p className="coursedashpara">Add Project</p>
                  </div>
                </div>
              </Card>
            </Link>
            <Link to="/Dashboard/Quiz1" style={{ textDecoration: "none" }}>
              <Card className="shadow-inner" style={{ marginTop: "15px", backgroundColor:'#F5F5F5' }}>
                <div className="row m-2">
                  <div className="col-1 mt-1 " style={{ paddingLeft: "35px" }}>
                    <AssessmentIcon
                      style={{
                        fontSize: "30px",
                        marginTop: "3px",
                        color: "#346448",
                      }}
                    />
                  </div>
                  <div className="col-11 mt-2" style={{ paddingLeft: "0" }}>
                    <p className="coursedashpara">Add Lab Exam</p>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
