import React from 'react'
import { Paper,Grid,Card,CardActionArea,CardMedia,CardContent,Typography} from '@mui/material';
import sir from '../images/sir.png';
 import c1 from '../images/c1.png';
 import c2 from '../images/c2.png';
 import c3 from '../images/c3.png';
 import Slider from "react-slick";
 import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';
 import AutoStoriesIcon from '@mui/icons-material/AutoStories';
 import CoPresentIcon from '@mui/icons-material/CoPresent';
 import GradingIcon from '@mui/icons-material/Grading';
 import {Link} from 'react-router-dom';
 import {
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";

const Dashboard = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div>
<div class="container-fluid">
<Paper elevation={1} sx={{paddingBottom:'15px',marginTop:'30px',marginLeft:'20px',marginRight:'20px'}}>
<Grid container spacing={2} alignContent="start">
<Grid item md={2} xs={12} sx={{marginTop:'2px',marginLeft:'25px',marginBottom:'2px'}}>
  <img className='teacherpic'src={sir} alt='teacher'></img>
  </Grid>
<Grid item md={3} className='mt-2'xs={12}>
  <h3 className='heading' >Muhammad Usman</h3>
  <p className='para'>Designation: Assistant Professor</p>
  <p className='para'>Department: Department of Computing</p>
  <p className='para'>Email: usman@gmail.com</p>
  <p className='para'>Campus: Islamabad Campus</p>
</Grid>
</Grid>
</Paper>
<Paper elevation={1} sx={{padding:'30px',marginTop:'30px',marginLeft:'20px',marginRight:'20px'}}>
<Grid container spacing={2} alignContent="center">
<Grid item md={12} >
  <h5 class='coursassi mb-4'>Assigned Assessments Weightage Courses</h5>
        <Slider {...settings}>
          <div>
            <Link to='/coursedashboard' style={{textDecoration: 'none'}}>
          <Card sx={{ maxWidth: 270 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={c1}
          alt="green iguana"
        >
        </CardMedia>
        <div style={{position: "absolute", color: "white",top: 35
        ,marginLeft:'15px'}}className='corstext'>SE242SP23</div>
        <div className='corstext2'style={{position: "absolute", color: "white",top: 60
        ,marginLeft:'15px'}}>Software Engineering</div>
         <div className='corstext3'style={{position: "absolute",top: 125
        ,marginLeft:'18px'}}>Department of Computing</div>
        <CardContent>
          <p className='course' gutterBottom component="div">
            Mr Muhammad Usman
          </p>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
          </div>
          <div>
          <Card sx={{ maxWidth: 270 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={c2}
          alt="green iguana"
        >
        </CardMedia>
        <div style={{position: "absolute", color: "white",top: 35
        ,marginLeft:'15px'}}className='corstext'>SE242SP23</div>
        <div className='corstext2'style={{position: "absolute", color: "white",top: 60
        ,marginLeft:'15px'}}>Software Engineering</div>
         <div className='corstext3'style={{position: "absolute",top: 125
        ,marginLeft:'18px'}}>Department of Computing</div>
        <CardContent>
        <p className='course' gutterBottom component="div">
            Mr Muhammad Usman
          </p>
        </CardContent>
      </CardActionArea>
    </Card>
          </div>
          <div>
          <Card sx={{ maxWidth: 270 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={c3}
          alt="green iguana"
        >
        </CardMedia>
        <div style={{position: "absolute", color: "white",top: 35
        ,marginLeft:'15px'}}className='corstext'>SE242SP23</div>
        <div className='corstext2'style={{position: "absolute", color: "white",top: 60
        ,marginLeft:'15px'}}>Software Engineering</div>
         <div className='corstext3'style={{position: "absolute",top: 125
        ,marginLeft:'18px'}}>Department of Computing</div>
        <CardContent>
        <p className='course' gutterBottom component="div">
            Mr Muhammad Usman
          </p>
        </CardContent>
      </CardActionArea>
    </Card>
          </div>
          <div>
          <Card sx={{ maxWidth: 270 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={c1}
          alt="green iguana"
        >
        </CardMedia>
        <div style={{position: "absolute", color: "white",top: 35
        ,marginLeft:'15px'}}className='corstext'>SE242SP23</div>
        <div className='corstext2'style={{position: "absolute", color: "white",top: 60
        ,marginLeft:'15px'}}>Software Engineering</div>
         <div className='corstext3'style={{position: "absolute",top: 125
        ,marginLeft:'18px'}}>Department of Computing</div>
        <CardContent>
        <p className='course' gutterBottom component="div">
            Mr Muhammad Usman
          </p>
        </CardContent>
      </CardActionArea>
    </Card>
          </div>
          <div>
          <Card sx={{ maxWidth: 270 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={c1}
          alt="green iguana"
        >
        </CardMedia>
        <div style={{position: "absolute", color: "white",top: 35
        ,marginLeft:'15px'}}className='corstext'>SE242SP23</div>
        <div className='corstext2'style={{position: "absolute", color: "white",top: 60
        ,marginLeft:'15px'}}>Software Engineering</div>
         <div className='corstext3'style={{position: "absolute",top: 125
        ,marginLeft:'18px'}}>Department of Computing</div>
        <CardContent>
        <p className='course' gutterBottom component="div">
            Mr Muhammad Usman
          </p>
        </CardContent>
      </CardActionArea>
    </Card>
          </div>
          <div>
          <Card sx={{ maxWidth: 270 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={c1}
          alt="green iguana"
        >
        </CardMedia>
        <div style={{position: "absolute", color: "white",top: 35
        ,marginLeft:'15px'}}className='corstext'>SE242SP23</div>
        <div className='corstext2'style={{position: "absolute", color: "white",top: 60
        ,marginLeft:'15px'}}>Software Engineering</div>
         <div className='corstext3'style={{position: "absolute",top: 125
        ,marginLeft:'18px'}}>Department of Computing</div>
        <CardContent>
        <p className='course' gutterBottom component="div">
            Mr Muhammad Usman
          </p>
        </CardContent>
      </CardActionArea>
    </Card>
          </div>
          <div>
          <Card sx={{ maxWidth: 270 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={c1}
          alt="green iguana"
        >
        </CardMedia>
        <div style={{position: "absolute", color: "white",top: 35
        ,marginLeft:'15px'}}className='corstext'>SE242SP23</div>
        <div className='corstext2'style={{position: "absolute", color: "white",top: 60
        ,marginLeft:'15px'}}>Software Engineering</div>
         <div className='corstext3'style={{position: "absolute",top: 125
        ,marginLeft:'18px'}}>Department of Computing</div>
        <CardContent>
        <p className='course' gutterBottom component="div">
            Mr Muhammad Usman
          </p>
        </CardContent>
      </CardActionArea>
    </Card>
          </div>
          <div>
          <Card sx={{ maxWidth: 270 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={c1}
          alt="green iguana"
        >
        </CardMedia>
        <div style={{position: "absolute", color: "white",top: 35
        ,marginLeft:'15px'}}className='corstext'>SE242SP23</div>
        <div className='corstext2'style={{position: "absolute", color: "white",top: 60
        ,marginLeft:'15px'}}>Software Engineering</div>
         <div className='corstext3'style={{position: "absolute",top: 125
        ,marginLeft:'18px'}}>Department of Computing</div>
        <CardContent>
        <p className='course' gutterBottom component="div">
            Mr Muhammad Usman
          </p>
        </CardContent>
      </CardActionArea>
    </Card>
          </div>
        </Slider>
</Grid>
<Grid item md={12} >
  <h5 class='coursassi mb-4 mt-1'>Unassigned Assessments Weightage Courses</h5>
        <Slider {...settings}>
          <div>
            <Link to='/setweight' style={{textDecoration: 'none'}}>
          <Card sx={{ maxWidth: 270 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={c1}
          alt="green iguana"
        >
        </CardMedia>
        <div style={{position: "absolute", color: "white",top: 35
        ,marginLeft:'15px'}}className='corstext'>SE242SP23</div>
        <div className='corstext2'style={{position: "absolute", color: "white",top: 60
        ,marginLeft:'15px'}}>Software Engineering</div>
         <div className='corstext3'style={{position: "absolute",top: 125
        ,marginLeft:'18px'}}>Department of Computing</div>
        <CardContent>
          <p className='course' gutterBottom component="div">
            Mr Muhammad Usman
          </p>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
          </div>
          <div>
          <Card sx={{ maxWidth: 270 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={c2}
          alt="green iguana"
        >
        </CardMedia>
        <div style={{position: "absolute", color: "white",top: 35
        ,marginLeft:'15px'}}className='corstext'>SE242SP23</div>
        <div className='corstext2'style={{position: "absolute", color: "white",top: 60
        ,marginLeft:'15px'}}>Software Engineering</div>
         <div className='corstext3'style={{position: "absolute",top: 125
        ,marginLeft:'18px'}}>Department of Computing</div>
        <CardContent>
        <p className='course' gutterBottom component="div">
            Mr Muhammad Usman
          </p>
        </CardContent>
      </CardActionArea>
    </Card>
          </div>
          <div>
          <Card sx={{ maxWidth: 270 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={c3}
          alt="green iguana"
        >
        </CardMedia>
        <div style={{position: "absolute", color: "white",top: 35
        ,marginLeft:'15px'}}className='corstext'>SE242SP23</div>
        <div className='corstext2'style={{position: "absolute", color: "white",top: 60
        ,marginLeft:'15px'}}>Software Engineering</div>
         <div className='corstext3'style={{position: "absolute",top: 125
        ,marginLeft:'18px'}}>Department of Computing</div>
        <CardContent>
        <p className='course' gutterBottom component="div">
            Mr Muhammad Usman
          </p>
        </CardContent>
      </CardActionArea>
    </Card>
          </div>
          <div>
          <Card sx={{ maxWidth: 270 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={c1}
          alt="green iguana"
        >
        </CardMedia>
        <div style={{position: "absolute", color: "white",top: 35
        ,marginLeft:'15px'}}className='corstext'>SE242SP23</div>
        <div className='corstext2'style={{position: "absolute", color: "white",top: 60
        ,marginLeft:'15px'}}>Software Engineering</div>
         <div className='corstext3'style={{position: "absolute",top: 125
        ,marginLeft:'18px'}}>Department of Computing</div>
        <CardContent>
        <p className='course' gutterBottom component="div">
            Mr Muhammad Usman
          </p>
        </CardContent>
      </CardActionArea>
    </Card>
          </div>
          <div>
          <Card sx={{ maxWidth: 270 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={c1}
          alt="green iguana"
        >
        </CardMedia>
        <div style={{position: "absolute", color: "white",top: 35
        ,marginLeft:'15px'}}className='corstext'>SE242SP23</div>
        <div className='corstext2'style={{position: "absolute", color: "white",top: 60
        ,marginLeft:'15px'}}>Software Engineering</div>
         <div className='corstext3'style={{position: "absolute",top: 125
        ,marginLeft:'18px'}}>Department of Computing</div>
        <CardContent>
        <p className='course' gutterBottom component="div">
            Mr Muhammad Usman
          </p>
        </CardContent>
      </CardActionArea>
    </Card>
          </div>
          <div>
          <Card sx={{ maxWidth: 270 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={c1}
          alt="green iguana"
        >
        </CardMedia>
        <div style={{position: "absolute", color: "white",top: 35
        ,marginLeft:'15px'}}className='corstext'>SE242SP23</div>
        <div className='corstext2'style={{position: "absolute", color: "white",top: 60
        ,marginLeft:'15px'}}>Software Engineering</div>
         <div className='corstext3'style={{position: "absolute",top: 125
        ,marginLeft:'18px'}}>Department of Computing</div>
        <CardContent>
        <p className='course' gutterBottom component="div">
            Mr Muhammad Usman
          </p>
        </CardContent>
      </CardActionArea>
    </Card>
          </div>
          <div>
          <Card sx={{ maxWidth: 270 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={c1}
          alt="green iguana"
        >
        </CardMedia>
        <div style={{position: "absolute", color: "white",top: 35
        ,marginLeft:'15px'}}className='corstext'>SE242SP23</div>
        <div className='corstext2'style={{position: "absolute", color: "white",top: 60
        ,marginLeft:'15px'}}>Software Engineering</div>
         <div className='corstext3'style={{position: "absolute",top: 125
        ,marginLeft:'18px'}}>Department of Computing</div>
        <CardContent>
        <p className='course' gutterBottom component="div">
            Mr Muhammad Usman
          </p>
        </CardContent>
      </CardActionArea>
    </Card>
          </div>
          <div>
          <Card sx={{ maxWidth: 270 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={c1}
          alt="green iguana"
        >
        </CardMedia>
        <div style={{position: "absolute", color: "white",top: 35
        ,marginLeft:'15px'}}className='corstext'>SE242SP23</div>
        <div className='corstext2'style={{position: "absolute", color: "white",top: 60
        ,marginLeft:'15px'}}>Software Engineering</div>
         <div className='corstext3'style={{position: "absolute",top: 125
        ,marginLeft:'18px'}}>Department of Computing</div>
        <CardContent>
        <p className='course' gutterBottom component="div">
            Mr Muhammad Usman
          </p>
        </CardContent>
      </CardActionArea>
    </Card>
          </div>
        </Slider>
</Grid>
</Grid>
</Paper>
<Paper elevation={1} sx={{padding:'30px',marginTop:'30px',marginLeft:'20px',marginRight:'20px'}}>
<Grid container spacing={2} alignContent="start">
<Grid item md={12} sx={{marginTop:'2px',marginBottom:'2px'}}>
<h5 class='coursassi'>Quick Links</h5>
<Table
                    component={Paper}
                    style={{
                      backgroundColor: " #F5F5F5",
                      padding: 10,
                      marginTop: 10,
                    }}
                  >
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <div className=" row  ">
                            <div
                              className="col-1"
                              style={{ paddingLeft: "30px" }}
                            >
                              <Avatar
                                style={{
                                  width: "100%",
                                  height: "90%",
                                  backgroundColor: "#346448",
                                }}
                              >
                                <ThumbsUpDownIcon style={{ color: "white" }} />
                              </Avatar>
                            </div>
                            <div className="col-11 mt-2">
                              <h6
                                style={{
                                  color: "#346448",
                                  fontWeight: "bold",
                                  font: 'Mplus 1p'
                                }}
                              >
                                Course Feedback
                              </h6>
                              <p style={{ fontSize: "13px", font: 'Mplus 1p' }}>
                                Give course feedback.
                              </p>
                            </div>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className=" row  ">
                            <div
                              className="col-1"
                              style={{ paddingLeft: "30px" }}
                            >
                              <Avatar
                                style={{
                                  width: "100%",
                                  height: "90%",
                                  backgroundColor: "#346448",
                                }}
                              >
                                <CoPresentIcon style={{ color: "white" }} />
                              </Avatar>
                            </div>
                            <div className="col-11 mt-2">
                              <h6
                                style={{
                                  color: "#346448",
                                  fontWeight: "bold",
                                  font: 'Mplus 1p',
                                }}
                              >
                                Student Attendance
                              </h6>
                              <p style={{ fontSize: "13px", font: 'Mplus 1p' }}>
                                Mark Student Attendance.
                              </p>
                            </div>
                          </div>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <div className=" row  ">
                            <div
                              className="col-1"
                              style={{ paddingLeft: "30px" }}
                            >
                              <Avatar
                                style={{
                                  width: "100%",
                                  height: "90%",
                                  backgroundColor: "#346448",
                                }}
                              >
                                <GradingIcon style={{ color: "white" }} />
                              </Avatar>
                            </div>
                            <div className="col-11 mt-2">
                              <h6 
                                style={{
                                  color: "#346448",
                                  fontWeight: "bold",
                                  font: 'Mplus 1p',
                                }}
                              >
                                Course Scoreboard
                              </h6>
                              <p style={{ fontSize: "13px", font: "Mplus 1" }}>
                                Mark Student Assessments Marks.
                              </p>
                            </div>
                          </div>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
</Grid>
</Grid>
</Paper>
     </div>
     </div>
  );
}

export default Dashboard;
