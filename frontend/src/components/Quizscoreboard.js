import React from "react";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import { Stack } from "@mui/system";
import GradingIcon from '@mui/icons-material/Grading';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import PieChartIcon from "@mui/icons-material/PieChart";
import PreviewIcon from '@mui/icons-material/Preview';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AssessmentIcon from "@mui/icons-material/Assessment";
import GroupsIcon from '@mui/icons-material/Groups';
export default function Quizscoreboard() {
  return (
    <div>
      <div className="m-5">
        <Card style={{ padding: '30px 20px 20px 20px',marginTop:'30px',marginBottom:'30px',marginLeft:'5px',marginRight:'5px' }}>
        <div className='d-flex justify-content-center'style={{ color: "#346448" }}>
        <Stack spacing={1} direction="row" style={{ marginBottom: "50px" }}>
              <Chip
                icon={<GroupsIcon/>}
                label="Participants"
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
                label="Add Assessment"
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
                label=" Attendance"
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
                icon={<GradingIcon />}
                label="Add Assessment Marks"
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
              {/* <Chip
                component="a"
                href="#basic-chip"
                clickable
                color="success"
                size="medium"
                icon={<AssessmentIcon />}
                style={{ marginRight: "20px" }}
                label="Final Exam"
                variant="outlined"
                sx={{padding:'10px'}}
              /> */}
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
          <div className="row">
<div className="col-md-12 d-flex justify-content-start">
<p className="scoreboardheading">
           Quiz 1
          </p>
</div>
<div className="row">
    <div className="col-md-12 d-flex justify-content-start">
    <p className="subtitlesinQ1scoreboard">Total Marks: 30</p>
    </div>
</div>
<div className="row">
    <div className="col-md-12 d-flex justify-content-start">
    <p className="subtitlesinQ1scoreboard">CLO: clo 1 , clo 2</p>
    </div>
</div>
         </div>
          <div className="table-responsive py-0 px-0" 
            style={{ height: "500px", overflow: "auto", textAlign: "center" }}
          >
            <table className="table table-bordered assessmentmarkquiz4">
              <thead>
                <tr className="assessmentmarkquiz assessmentmarkquiz2">
                  <th rowspan="2">Reg no.</th>
                  <th rowspan="2">Name </th>
                  <th colspan="2">Question 1 </th>
                  <th colspan="2">Question 2</th>
                  <th colspan="2">Question 3 </th>
                  <th colspan="2">Question 4 </th>
                  <th colspan="2">Question 5 </th>
                  <th colspan="2">Question 6 </th>
                  <th colspan="2">Question 5 </th>
                  <th colspan="2">Question 6 </th>
                  <th rowspan="2">Obtained marks </th>
                </tr>
                <tr className="assessmentmarkquiz1">
                  <th>Part 1 </th>
                  <th>Part 2 </th>
                  <th>Part 1 </th>
                  <th>Part 2 </th>
                  <th>Part 1 </th>
                  <th>Part 2 </th>
                  <th>Part 1 </th>
                  <th>Part 2 </th>
                  <th>Part 1 </th>
                  <th>Part 2 </th>
                  <th>Part 1 </th>
                  <th>Part 2 </th>
                  <th>Part 1 </th>
                  <th>Part 2 </th>
                  <th>Part 1 </th>
                  <th>Part 2 </th>
                </tr>
              </thead>
              <tbody>
                <tr className="assessmentmarkquiz2">
                  <td>3866</td>
                  <td>Sidra Rehman</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                  <td>1</td>
                  <td>4</td>
                  <td>0</td>
                  <td>4</td>
                  <td>0</td>
                  <td>4</td>
                  <td>0</td>
                  <td>4</td>
                  <td>0</td>
                  <td>14</td>
                </tr>
                <tr className="assessmentmarkquiz2">
                  <td>3277</td>
                  <td>Syeda Wajiha Zahra</td>
                  <td>3</td>
                  <td>2</td>
                  <td>1</td>
                  <td>2</td>
                  <td>1</td>
                  <td>0</td>
                  <td>4</td>
                  <td>0</td>
                  <td>4</td>
                  <td>0</td>
                  <td>4</td>
                  <td>0</td>
                  <td>11</td>
                </tr>
                <tr className="assessmentmarkquiz2">
                  <td>3277</td>
                  <td>Syeda Wajiha Zahra</td>
                  <td>3</td>
                  <td>2</td>
                  <td>1</td>
                  <td>2</td>
                  <td>1</td>
                  <td>0</td>
                  <td>4</td>
                  <td>0</td>
                  <td>4</td>
                  <td>0</td>
                  <td>4</td>
                  <td>0</td>
                  <td>11</td>
                </tr>
                <tr className="assessmentmarkquiz2">
                  <td>3277</td>
                  <td>Syeda Wajiha Zahra</td>
                  <td>3</td>
                  <td>2</td>
                  <td>1</td>
                  <td>2</td>
                  <td>1</td>
                  <td>0</td>
                  <td>4</td>
                  <td>0</td>
                  <td>4</td>
                  <td>0</td>
                  <td>4</td>
                  <td>0</td>
                  <td>11</td>
                </tr>
                <tr className="assessmentmarkquiz2">
                  <td>3277</td>
                  <td>Syeda Wajiha Zahra</td>
                  <td>3</td>
                  <td>2</td>
                  <td>1</td>
                  <td>2</td>
                  <td>1</td>
                  <td>0</td>
                  <td>4</td>
                  <td>0</td>
                  <td>4</td>
                  <td>0</td>
                  <td>4</td>
                  <td>0</td>
                  <td>11</td>
                </tr>
                <tr className="assessmentmarkquiz2">
                  <td>3277</td>
                  <td>Syeda Wajiha Zahra</td>
                  <td>3</td>
                  <td>2</td>
                  <td>1</td>
                  <td>2</td>
                  <td>1</td>
                  <td>0</td>
                  <td>4</td>
                  <td>0</td>
                  <td>4</td>
                  <td>0</td>
                  <td>4</td>
                  <td>0</td>
                  <td>11</td>
                </tr>
                <tr className="assessmentmarkquiz2">
                  <td>3277</td>
                  <td>Syeda Wajiha Zahra</td>
                  <td>3</td>
                  <td>2</td>
                  <td>1</td>
                  <td>2</td>
                  <td>1</td>
                  <td>0</td>
                  <td>4</td>
                  <td>0</td>
                  <td>4</td>
                  <td>0</td>
                  <td>4</td>
                  <td>0</td>
                  <td>11</td>
                </tr>
                <tr className="assessmentmarkquiz2">
                  <td>3277</td>
                  <td>Syeda Wajiha Zahra</td>
                  <td>3</td>
                  <td>2</td>
                  <td>1</td>
                  <td>2</td>
                  <td>1</td>
                  <td>0</td>
                  <td>4</td>
                  <td>0</td>
                  <td>4</td>
                  <td>0</td>
                  <td>4</td>
                  <td>0</td>
                  <td>11</td>
                </tr>
                <tr className="assessmentmarkquiz2">
                  <td>3277</td>
                  <td>Syeda Wajiha Zahra</td>
                  <td>3</td>
                  <td>2</td>
                  <td>1</td>
                  <td>2</td>
                  <td>1</td>
                  <td>0</td>
                  <td>4</td>
                  <td>0</td>
                  <td>4</td>
                  <td>0</td>
                  <td>4</td>
                  <td>0</td>
                  <td>11</td>
                </tr>
                <tr className="assessmentmarkquiz2">
                  <td>3277</td>
                  <td>Syeda Wajiha Zahra</td>
                  <td>3</td>
                  <td>2</td>
                  <td>1</td>
                  <td>2</td>
                  <td>1</td>
                  <td>0</td>
                  <td>4</td>
                  <td>0</td>
                  <td>4</td>
                  <td>0</td>
                  <td>4</td>
                  <td>0</td>
                  <td>11</td>
                </tr>
                <tr className="assessmentmarkquiz2">
                  <td>3277</td>
                  <td>Syeda Wajiha Zahra</td>
                  <td>3</td>
                  <td>2</td>
                  <td>1</td>
                  <td>2</td>
                  <td>1</td>
                  <td>0</td>
                  <td>4</td>
                  <td>0</td>
                  <td>4</td>
                  <td>0</td>
                  <td>4</td>
                  <td>0</td>
                  <td>11</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}

