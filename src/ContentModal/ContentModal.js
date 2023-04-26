import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./ContentModal.css"
import Experience from '../Pages/Experience';
import { ExperienceList } from '../Helpers/ExperienceDetails';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
};

export default function BasicModal({children,type,id}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // console.log(children);

  const handleClick=(e)=>{
    window.open(
      e.target.value,
      '_blank' // <- This is what makes it open in a new window.
    );
  }

  return (
    <div>
       <div onClick={handleOpen}>{children}</div> 
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='box' sx={style}>
          <Typography id="modal-modal-title" variant="h6">
          {type==='education' ?<b>Educational Details</b>  : <b>Company Details</b>}
          </Typography>
         <p>{ExperienceList[id].degree_position}</p>
         {
           type==="education" && <p>Percentage:{ExperienceList[id].percentage}</p>
         }
         
         {
           type==="education" ? <p>Visit Institute:<button onClick={(e)=>handleClick(e)} value={ExperienceList[id].website}>Visit</button></p> : <p>Visit Company:<button onClick={(e)=>handleClick(e)} value={ExperienceList[id].website}>Visit</button></p>
         }
         
        </Box>
      </Modal>
    </div>
  );
}