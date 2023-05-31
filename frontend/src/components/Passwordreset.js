import React from 'react';
import {Grid,Paper,Button, TextField} from '@mui/material';
const Passwordreset = () => {
  return (
    <div>
      <Paper elevation={1}sx={{padding:'30px',marginTop:'30px',marginBottom:'30px',marginLeft:'35%',marginRight:'35%'}}>
      <div className='row mb-3'>
<div className='col-md-12 d-flex justify-content-center'>
<p className='modalhtag'>Reset Password</p>
</div>
          </div>
        <div className='row'>
          <div class="col">
      <label for="assessmentname" class="form-label modalcontent">Enter Current Password</label>
      <input type="password" class="form-control text-start mb-3 Popup" id="assessmentname" />
    </div>
         </div>
         <div className='row'>
          {/* <div className='col-md-7'>
            <label for="weight">Enter Assessment Weight:</label>
          </div> */}
           <div class="col">
      <label for="assessmentmarks" class="form-label modalcontent">Enter New Password</label>
      <input type="password" class="form-control text-start mb-3 Popup" id="assessmentmarks"/>
    </div>
    </div>
    <div className='row'>
          {/* <div className='col-md-7'>
            <label for="weight">Enter Assessment Weight:</label>
          </div> */}
           <div class="col">
      <label for="assessmentmarks" class="form-label modalcontent">Enter Confirm Password</label>
      <input type="password" class="form-control text-start mb-3 Popup" id="assessmentmarks" />
    </div>
         </div>
        <div className='row mt-3'>
          <div className='col-md-12 d-flex justify-content-center'>
            <Button  className='rounded' variant='contained'sx={{bgcolor:' #346448'}}>Save Changes</Button>
          </div>
        </div>
      </Paper>
    </div>
  )
}

export default Passwordreset;
