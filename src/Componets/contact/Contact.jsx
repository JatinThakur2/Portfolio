import "./contact.scss"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import React from 'react';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import emailjs from "emailjs-com";

export default function Contact() {
    
        const [value, setValue] = React.useState('');
      
        const handleChange = (event) => {
          setValue(event.target.value);
        };

        const [open, setOpen] = React.useState(false);
        
        const handleClickOpen = () => {
          setOpen(true);
        };
        
        const handleClose = () => {
          setOpen(false);
        };
    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_knlpirc', 'template_o5kdr7f', e.target, 'user_cG6AR5EZzAOISW1CTApsZ')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            
            </div>
            <div className="right">
                <h2>Contact</h2>
       
            
                <Box component="form"
                    sx={{'& > :not(style)': { m: 1, width: '50ch',  }, }}
                            noValidate
                            autoComplete="off" onSubmit={sendEmail} >
     
                    <TextField id="outlined-basic" type="text" label="Name" variant="outlined" name="name" value={value} onChange={handleChange} />
                    <TextField id="outlined-basic" type="email" label="Email Address" variant="outlined" name="email" />
                    <TextField id="outlined-basic" type="text" label="Subject" variant="outlined" name="subject" />
                    <TextField id="outlined-basic" multiline rows={4} type="text" label="Your message" variant="outlined" name="message" />
{/* <form onSubmit={sendEmail} >
                            <input type="text" placeholder="Name" name="name"/>
                            <input type="email" placeholder="Email Address" name="email"/>
                            <input type="text" placeholder="Subject" name="subject"/> 
                            <textarea placeholder="Your message" name="message"></textarea>
                              </form> */}
                            <button type="submit" className="btn" value="" onClick={handleClickOpen} disabled={!value}>Send Message</button>                       
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle> Thank You</DialogTitle>
                        <DialogContent>
                            <DialogContentText>For reaching out. I will reply soon</DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary" autoFocus>Close</Button>
                        </DialogActions>
                    </Dialog>
              </Box>
     
     
                </div>
        </div>
    )
}
