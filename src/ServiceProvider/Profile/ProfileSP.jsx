import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

function ProfileSP() {
    return (
        <>
            <div className='d-flex justify-content-center align-items-center pt-5'>
                <Accordion defaultExpanded>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3-content"
                        id="panel3-header"
                    >

                    </AccordionSummary>
                    <AccordionDetails>
                        <label htmlFor="profile" >
                            <input id='profile' type="file" style={{ display: 'none' }} />
                            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135823.png" alt="no image" style={{ width: "200px", height: '200px', borderRadius: '5' }} />
                        </label>
                    </AccordionDetails>
                    <AccordionActions>
                        <Button>Cancel</Button>
                        <Button>Submit</Button>
                    </AccordionActions>
                </Accordion>
            </div> </>
    )
}

export default ProfileSP