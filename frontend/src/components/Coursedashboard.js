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
export default function Coursedashboard() {
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

          <div>
            <Link to="/assessmentdashboard" style={{ textDecoration: "none" }}>
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
                    <p className="coursedashpara">Create Assessments</p>
                  </div>
                </div>
              </Card>
            </Link>
            <Link to="/Scoreboard" style={{ textDecoration: "none" }}>
              <Card className="shadow-inner" style={{ marginTop: "15px", backgroundColor:'#F5F5F5' }}>
                <div className="row m-2">
                  <div className="col-1 mt-1 " style={{ paddingLeft: "35px" }}>
                    <PieChartIcon
                      style={{
                        fontSize: "30px",
                        marginTop: "3px",
                        color: "#346448",
                      }}
                    />
                  </div>
                  <div className="col-11 mt-2" style={{ paddingLeft: "0" }}>
                    <p className="coursedashpara">Scoreboard</p>
                  </div>
                </div>
              </Card>
            </Link>
            <Link to="/Dashboard/Quiz1" style={{ textDecoration: "none" }}>
              <Card className="shadow-inner" style={{ marginTop: "15px", backgroundColor:'#F5F5F5' }}>
                <div className="row m-2">
                  <div className="col-1 mt-1 " style={{ paddingLeft: "35px" }}>
                    <BeenhereIcon
                      style={{
                        fontSize: "30px",
                        marginTop: "3px",
                        color: "#346448",
                      }}
                    />
                  </div>
                  <div className="col-11 mt-2" style={{ paddingLeft: "0" }}>
                    <p className="coursedashpara">Add Attendance</p>
                  </div>
                </div>
              </Card>
            </Link>
            <Link to="/participants" style={{ textDecoration: "none" }}>
              <Card className="shadow-inner" style={{ marginTop: "15px", backgroundColor:'#F5F5F5' }}>
                <div className="row m-2">
                  <div className="col-1 mt-1 " style={{ paddingLeft: "35px" }}>
                    <GroupsIcon
                      style={{
                        fontSize: "30px",
                        marginTop: "3px",
                        color: "#346448",
                      }}
                    />
                  </div>
                  <div className="col-11 mt-2" style={{ paddingLeft: "0" }}>
                    <p className="coursedashpara">Participants</p>
                  </div>
                </div>
              </Card>
            </Link>
            <Link to="/Dashboard/Quiz1" style={{ textDecoration: "none" }}>
              <Card className="shadow-inner" style={{ marginTop: "15px", backgroundColor:'#F5F5F5' }}>
                <div className="row m-2">
                  <div className="col-1 mt-1 " style={{ paddingLeft: "35px" }}>
                    <BeenhereIcon
                      style={{
                        fontSize: "30px",
                        marginTop: "3px",
                        color: "#346448",
                      }}
                    />
                  </div>
                  <div className="col-11 mt-2" style={{ paddingLeft: "0" }}>
                    <p className="coursedashpara">View Attendance</p>
                  </div>
                </div>
              </Card>
            </Link>
            <Link to="/courseplan" style={{ textDecoration: "none" }}>
              <Card className="shadow-inner" style={{ marginTop: "15px", backgroundColor:'#F5F5F5' }}>
                <div className="row m-2">
                  <div className="col-1 mt-1 " style={{ paddingLeft: "35px" }}>
                    <HistoryEduIcon
                      style={{
                        fontSize: "30px",
                        marginTop: "3px",
                        color: "#346448",
                      }}
                    />
                  </div>
                  <div className="col-11 mt-2" style={{ paddingLeft: "0" }}>
                    <p className="coursedashpara">Set Course Content</p>
                  </div>
                </div>
              </Card>
            </Link>
            <Link onClick={handleopenclo} style={{ textDecoration: "none" }}>
              <Card className="shadow-inner" style={{ marginTop: "15px", backgroundColor:'#F5F5F5'}}>
                <div className="row m-2">
                  <div className="col-1 mt-1 " style={{ paddingLeft: "35px" }}>
                    <PreviewIcon
                      style={{
                        fontSize: "30px",
                        marginTop: "3px",
                        color: "#346448",
                      }}
                    />
                  </div>
                  <div className="col-11 mt-2" style={{ paddingLeft: "0" }}>
                    <p className="coursedashpara">View Course CLO's</p>
                  </div>
                </div>
              </Card>
            </Link>
            <Modal
        open={openclo}
        onClose={handleCloseclo}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style1}>
      <div className="row">
<div className="clo-md-12 d-flex justify-content-center cloheading">
Course Learning Outcomes
</div>
      </div>
      <div className="row">
<div className="clo-md-12 d-flex justify-content-center clodescription">
{/* <p>4. Create test cases for the elaborated user stories. [C,3] [PLO-2] </p> */}
<ul>
  <li>Identify appropriate software process models for real-world problems. [C,3] [PLO-2].</li>
  <li>Elaborate user stories using usecase and activity diagrams. [C,3] [PLO-2].</li>
  <li>Design the elaborated user stories using simple design techniques. [C,3] [PLO-2].</li>
  <li>Create test cases for the elaborated user stories. [C,3] [PLO-2].</li>
</ul>
</div>
      </div>
        </Box>
      </Modal>
            <Link onClick={handleopenenroll} style={{ textDecoration: "none" }}>
              <Card className="shadow-inner" style={{ marginTop: "15px", backgroundColor:'#F5F5F5' }}>
                <div className="row m-2">
                  <div className="col-1 mt-1 " style={{ paddingLeft: "35px" }}>
                    <PersonAddAlt1Icon
                      style={{
                        fontSize: "30px",
                        marginTop: "3px",
                        color: "#346448",
                      }}
                    />
                  </div>
                  <div className="col-11 mt-2" style={{ paddingLeft: "0" }}>
                    <p className="coursedashpara">Enroll Students</p>
                  </div>
                </div>
              </Card>
            </Link>
            <Modal
        open={openenroll}
        onClose={handleCloseenroll}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        {/* <CSVReader
        onFileLoaded={handleFileUpload}
        onChange={(event)=>handleFileChange(event)}
        parserOptions={{ header: true, skipEmptyLines: true }}
      />   */}
        <input type="file" onChange={handleFileChange} />
      <div className="row mt-2">
        <div className="col-md-12 justify-content-center">
          <Button variant='contained'sx={{bgcolor:'#346448'}} onClick={handleUpload}>upload</Button>
        </div>
      </div>
        </Box>
      </Modal>
          </div>
        </Card>
      </div>
    </div>
  );
}
