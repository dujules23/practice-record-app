import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const DateModal = ({ isShowing, setIsShowing }) => (
  
    <Modal
        open={isShowing}
        onClose={setIsShowing}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={style}>
        {console.log(isShowing)}
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Input Your Practice Time! 
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
    </Modal>
);

export default DateModal;