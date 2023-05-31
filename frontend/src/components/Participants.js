import React ,{useState} from "react";
import GroupsIcon from '@mui/icons-material/Groups';
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import AssessmentIcon from "@mui/icons-material/Assessment";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import PieChartIcon from "@mui/icons-material/PieChart";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import { Link } from "react-router-dom";
import PreviewIcon from '@mui/icons-material/Preview';
import PersonIcon from '@mui/icons-material/Person';
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import GradingIcon from '@mui/icons-material/Grading';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Chip from "@mui/material/Chip";
import { Stack } from "@mui/system";
// import CSVReader from 'react-csv-reader';
import Modal from '@mui/material/Modal';
import axios from 'axios';

const b = {
  color: "#346448",
  width: "100%",
  borderRadius: "13px",
};
export default function Participants() {
  const [clo, setCLO] = React.useState("");
  const [plo, setPLO] = React.useState("");
  const [openenroll, setopenenroll] = React.useState(false);
  const handleopenenroll = () => setopenenroll(true);
  const handleCloseenroll = () => setopenenroll(false);
  const [openclo, setopenclo] = React.useState(false);
  const handleopenclo = () => setopenclo(true);
  const handleCloseclo = () => setopenclo(false);
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
  const style1 = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #346448',
    borderRadius:'5px',
    boxShadow: 24,
    // backgroundImage:'diamond-gradient(circle at bottom right, #346448, #F5F5F5)',
    p: 4,
  }
  const [csvData, setCsvData] = useState(null);
  const handleFileChange = (event) => {
    setCsvData(event.target.files[0]);
  };
  const handleFileUpload = (data) => {
    setCsvData(data);
  };

  const handleUpload = () => {
    if (csvData) {
      const formData = new FormData();
      formData.append('csvFile', csvData);
const url='http://localhost:5000/upload';
      const result=axios
        .post(url, formData)
        .then((response) => {
          console.log(response.data); // Success message from the server
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  return (
    <div>
      <div className="m-5">
        <Card style={{ padding: 50 }}>
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

          <div>
              <Card className="shadow-inner" style={{ marginTop: "15px", backgroundColor:'#F5F5F5' }}>
                <div className="row m-2">
                <div className="col-md-12 mt-1 d-flex justify-content-start " style={{ paddingLeft: "35px" }}>
                    <PersonIcon
                      style={{
                        fontSize: "30px",
                        marginTop: "3px",
                        color: "#346448",
                      }}
                    />
                    <p className="participants">Atish Hassan / 3358</p>
                  </div>
                  <div className="col-md-12 mt-1 d-flex justify-content-start " style={{ paddingLeft: "35px" }}>
                    <PersonIcon
                      style={{
                        fontSize: "30px",
                        marginTop: "3px",
                        color: "#346448",
                      }}
                    />
                    <p className="participants">Atish Hassan / 3358</p>
                  </div>
                  <div className="col-md-12 mt-1 d-flex justify-content-start " style={{ paddingLeft: "35px" }}>
                    <PersonIcon
                      style={{
                        fontSize: "30px",
                        marginTop: "3px",
                        color: "#346448",
                      }}
                    />
                    <p className="participants">Atish Hassan / 3358</p>
                  </div>
                  <div className="col-md-12 mt-1 d-flex justify-content-start " style={{ paddingLeft: "35px" }}>
                    <PersonIcon
                      style={{
                        fontSize: "30px",
                        marginTop: "3px",
                        color: "#346448",
                      }}
                    />
                    <p className="participants">Atish Hassan / 3358</p>
                  </div>
                  <div className="col-md-12 mt-1 d-flex justify-content-start " style={{ paddingLeft: "35px" }}>
                    <PersonIcon
                      style={{
                        fontSize: "30px",
                        marginTop: "3px",
                        color: "#346448",
                      }}
                    />
                    <p className="participants">Atish Hassan / 3358</p>
                  </div>
                  <div className="col-md-12 mt-1 d-flex justify-content-start " style={{ paddingLeft: "35px" }}>
                    <PersonIcon
                      style={{
                        fontSize: "30px",
                        marginTop: "3px",
                        color: "#346448",
                      }}
                    />
                    <p className="participants">Atish Hassan / 3358</p>
                  </div>
                  <div className="col-md-12 mt-1 d-flex justify-content-start " style={{ paddingLeft: "35px" }}>
                    <PersonIcon
                      style={{
                        fontSize: "30px",
                        marginTop: "3px",
                        color: "#346448",
                      }}
                    />
                    <p className="participants">Atish Hassan / 3358</p>
                  </div>
                </div>
              </Card>
          </div>
        </Card>
      </div>
    </div>
  );
}
