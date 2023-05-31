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
export default function Scoreboard() {
  const [clo, setCLO] = React.useState("");
  const [plo, setPLO] = React.useState("");

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
            Scoreboard
          </p>
</div>
         </div>

          <div
            className="table-responsive py-0 px-0"
            // style={{ paddingTop: 20, textAlign: "center" }}
            style={{ height: "600px", overflow: "auto", textAlign: "center" }}
          >
            <table className="table table-bordered score4 ">
              <thead>
                <tr className="score">
                  <th rowspan="2" colspan="3">
                    Participents
                  </th>
                  <th colspan="16">Quizzes</th>
                  <th colspan="16">Assignments</th>
                  <th colspan="16">Mid Term</th>
                  <th colspan="16">Final</th>
                </tr>
                <tr className="score1">
                  <th colspan="4">Quiz 1</th>
                  <th colspan="4">Quiz 2</th>
                  <th colspan="4">Quiz 3</th>
                  <th colspan="4">Quiz 4</th>

                  <th colspan="4">Assignment 1</th>
                  <th colspan="4">Assignment 2</th>
                  <th colspan="4">Assignment 3</th>
                  <th colspan="4">Assignment 4</th>

                  <th colspan="4">Question 1</th>
                  <th colspan="4">Question 2</th>
                  <th colspan="4">Question 3</th>
                  <th colspan="4">Question 4</th>

                  <th colspan="4">Question 1</th>
                  <th colspan="4">Question 2</th>
                  <th colspan="4">Question 3</th>
                  <th colspan="4">Question 4</th>
                </tr>
                <tr className="score2">
                  <th>Sr no.</th>
                  <th>Roll no.</th>
                  <th>Name</th>
                  <th>clo1</th>
                  <th>clo2</th>
                  <th>clo3</th>
                  <th>clo4</th>
                  <th>clo1</th>
                  <th>clo2</th>
                  <th>clo3</th>
                  <th>clo4</th>
                  <th>clo1</th>
                  <th>clo2</th>
                  <th>clo3</th>
                  <th>clo4</th>
                  <th>clo1</th>
                  <th>clo2</th>
                  <th>clo3</th>
                  <th>clo4</th>
                  <th>clo1</th>
                  <th>clo2</th>
                  <th>clo3</th>
                  <th>clo4</th>
                  <th>clo1</th>
                  <th>clo2</th>
                  <th>clo3</th>
                  <th>clo4</th>
                  <th>clo1</th>
                  <th>clo2</th>
                  <th>clo3</th>
                  <th>clo4</th>
                  <th>clo1</th>
                  <th>clo2</th>
                  <th>clo3</th>
                  <th>clo4</th> <th>clo1</th>
                  <th>clo2</th>
                  <th>clo3</th>
                  <th>clo4</th>
                  <th>clo1</th>
                  <th>clo2</th>
                  <th>clo3</th>
                  <th>clo4</th>
                  <th>clo1</th>
                  <th>clo2</th>
                  <th>clo3</th>
                  <th>clo4</th>
                  <th>clo1</th>
                  <th>clo2</th>
                  <th>clo3</th>
                  <th>clo4</th> <th>clo1</th>
                  <th>clo2</th>
                  <th>clo3</th>
                  <th>clo4</th>
                  <th>clo1</th>
                  <th>clo2</th>
                  <th>clo3</th>
                  <th>clo4</th>
                  <th>clo1</th>
                  <th>clo2</th>
                  <th>clo3</th>
                  <th>clo4</th>
                  <th>clo1</th>
                  <th>clo2</th>
                  <th>clo3</th>
                  <th>clo4</th>
                </tr>
              </thead>
              <tbody>
                <tr  className="score2">
                  <td>1</td>
                  <td>3866</td>
                  <td>Sidra Rehman </td>

                  <td>4</td>
                  <td>3</td>
                  <td>5</td>
                  <td>1</td>
                  <td>9</td>
                  <td>5</td>
                  <td>1</td>
                  <td>6</td>
                  <td>5</td>
                  <td>7</td>
                  <td>3</td>
                  <td>8</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr className="score2">
                  <td>1</td>
                  <td>3866</td>
                  <td>Sidra Rehman </td>

                  <td>4</td>
                  <td>3</td>
                  <td>5</td>
                  <td>1</td>
                  <td>9</td>
                  <td>5</td>
                  <td>1</td>
                  <td>6</td>
                  <td>5</td>
                  <td>7</td>
                  <td>3</td>
                  <td>8</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr className="score2">
                  <td>1</td>
                  <td>3866</td>
                  <td>Sidra Rehman </td>
                  <td>4</td>
                  <td>3</td>
                  <td>5</td>
                  <td>1</td>
                  <td>9</td>
                  <td>5</td>
                  <td>1</td>
                  <td>6</td>
                  <td>5</td>
                  <td>7</td>
                  <td>3</td>
                  <td>8</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr className="score2">
                  <td>1</td>
                  <td>3866</td>
                  <td>Sidra Rehman </td>
                  <td>4</td>
                  <td>3</td>
                  <td>5</td>
                  <td>1</td>
                  <td>9</td>
                  <td>5</td>
                  <td>1</td>
                  <td>6</td>
                  <td>5</td>
                  <td>7</td>
                  <td>3</td>
                  <td>8</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr className="score2">
                  <td>1</td>
                  <td>3866</td>
                  <td>Sidra Rehman </td>
                  <td>4</td>
                  <td>3</td>
                  <td>5</td>
                  <td>1</td>
                  <td>9</td>
                  <td>5</td>
                  <td>1</td>
                  <td>6</td>
                  <td>5</td>
                  <td>7</td>
                  <td>3</td>
                  <td>8</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr className="score2">
                  <td>1</td>
                  <td>3866</td>
                  <td>Sidra Rehman </td>
                  <td>4</td>
                  <td>3</td>
                  <td>5</td>
                  <td>1</td>
                  <td>9</td>
                  <td>5</td>
                  <td>1</td>
                  <td>6</td>
                  <td>5</td>
                  <td>7</td>
                  <td>3</td>
                  <td>8</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr className="score2">
                  <td>1</td>
                  <td>3866</td>
                  <td>Sidra Rehman </td>
                  <td>4</td>
                  <td>3</td>
                  <td>5</td>
                  <td>1</td>
                  <td>9</td>
                  <td>5</td>
                  <td>1</td>
                  <td>6</td>
                  <td>5</td>
                  <td>7</td>
                  <td>3</td>
                  <td>8</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr className="score2">
                  <td>1</td>
                  <td>3866</td>
                  <td>Sidra Rehman </td>
                  <td>4</td>
                  <td>3</td>
                  <td>5</td>
                  <td>1</td>
                  <td>9</td>
                  <td>5</td>
                  <td>1</td>
                  <td>6</td>
                  <td>5</td>
                  <td>7</td>
                  <td>3</td>
                  <td>8</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr className="score2">
                  <td>2</td>
                  <td>3277</td>
                  <td>Syeda Wajiha Zahra </td>
                  <td>1</td>
                  <td>6</td>
                  <td>5</td>
                  <td>7</td>
                  <td>3</td>
                  <td>8</td>
                  <td>4</td>
                  <td>3</td>
                  <td>5</td>
                  <td>1</td>
                  <td>9</td>
                  <td>5</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr className="score2">
                  <td>1</td>
                  <td>3866</td>
                  <td>Sidra Rehman </td>
                  <td>4</td>
                  <td>3</td>
                  <td>5</td>
                  <td>1</td>
                  <td>9</td>
                  <td>5</td>
                  <td>1</td>
                  <td>6</td>
                  <td>5</td>
                  <td>7</td>
                  <td>3</td>
                  <td>8</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr className="score2">
                  <td>1</td>
                  <td>3866</td>
                  <td>Sidra Rehman </td>
                  <td>4</td>
                  <td>3</td>
                  <td>5</td>
                  <td>1</td>
                  <td>9</td>
                  <td>5</td>
                  <td>1</td>
                  <td>6</td>
                  <td>5</td>
                  <td>7</td>
                  <td>3</td>
                  <td>8</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}
