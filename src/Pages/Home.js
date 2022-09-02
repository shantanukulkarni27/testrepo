import * as React from 'react';
import { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Button from '@mui/material/Button'
import Header from "../Component/Header"
import Box from "@mui/material/Box"
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';

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

export default function Home() {
  const [modal, setModal] = useState(false)
  const [title, setTitle] = useState(false)

  const onModalClick = () => {
    setModal(!modal)
  }
  const handleClose = () => {
    setModal(false)
  }
  const onSubmit = () => {
    setTitle(!title)
  }
  return (
    <>
      <Box data-testid="background" sx={{ backgroundImage: `${modal ? '' : 'url(background.jpeg)'}`, width: "100%", height: "100vh", backgroundSize: 'cover' }}>
        <Box >
          <Header />
        </Box>

        <Box >
          <Button sx={{ mt: 5 }} variant="contained" data-testid="modalButton" onClick={() => onModalClick()}>Modal</Button>
          <Modal
            open={modal}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            data-testid="my-modal"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {title ? "header set" : "Not Set"}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
              <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Button data-testid="changeHead" onClick={() => onSubmit()} sx={{ mt: 3, width: '30%' }} variant="contained">Change</Button>
              </Box>
            </Box>
          </Modal>
        </Box>
        <Box>
        </Box>

        <Box style={{ position: 'absolute', bottom: 0, display: 'flex', justifyContent: 'center', width: '100%' }} sx={{ mt: 1, pb: '15px' }} spacing={2}>
          <Pagination count={10} color="primary" sx={{ color: 'white' }} />
        </Box>
      </Box>
    </>
  );
}
