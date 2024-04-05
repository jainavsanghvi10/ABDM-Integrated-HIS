import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import Button from '@mui/material/Button';

import doctorpic from '../assets/images/doctorpic.jpeg'

import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';

import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import VerifiedIcon from '@mui/icons-material/Verified';


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const drawerWidth = 240;

export default function PermanentDrawerLeft() {

  const [rate, setRate] = React.useState(4.3);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <div className='d-flex w-100 align-items-center'>
            <span className='fw-bold me-5'>Filters:</span>
            <select className="mx-2 form-select" aria-label="Default select example">
              <option selected>Gender</option>
              <option value="1">Male</option>
              <option value="2">Female</option>
              <option value="3">Others</option>
            </select>

            <select className="mx-2 form-select" aria-label="Default select example">
              <option selected>Rating</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
            </select>

            <select className="mx-2 form-select" aria-label="Default select example">
              <option selected>Experience</option>
              <option value="1">5+  years</option>
              <option value="2">10+ years</option>
              <option value="3">15+ years</option>
            </select>

            <select className="mx-2 form-select" aria-label="Default select example">
              <option selected>Fees</option>
              <option value="1">₹0 - ₹500</option>
              <option value="2">Above ₹500</option>
              <option value="3">Above ₹1000</option>
            </select>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <div className='container d-flex'>
              <div>
                <Avatar
                  alt="Remy Sharp"
                  src={doctorpic}
                  sx={{ width: 128, height: 128 }}
                />
              </div>
              <div className='ms-5'>
                <h4>Dr. Supraja Chandrasekar</h4>
                <p className='m-0'>Pediatrician</p>
                <p className='m-0' style={{ fontSize: 'smaller' }}>21 years experience overall</p>
                <p className='m-0 mt-2 fw-bold text-secondary' style={{ fontSize: 'smaller' }}>Kanakpura Road,Bangalore </p>
                <p className='m-0' style={{ fontSize: 'smaller' }}>₹600 Consultation fee at clinic</p>

              </div>

              <div className='ms-5'>
                <div className='mb-2'>
                  <VerifiedIcon className='me-2' color='success' fontSize='small' />
                  <span style={{ fontSize: 'smaller' }}>Medical Registration Verified</span>
                </div>
                <Rating className='ms-5' name="read-only" value={rate} readOnly />
                <div className='mt-4'>
                  <Button variant="contained" style={{ width: '200px', backgroundColor: 'rgb(2,48,106)' }} className='ms-3 fw-bold text-capitalize'>Book Clinic Visit</Button>
                </div>
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <p className='text-center'>Book an appointment for Consultation</p>

            <Box sx={{ width: '100%' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs variant='scrollable' centered scrollButtons="auto" value={value} onChange={handleChange} aria-label="basic tabs example">
                  <Tab label="05/04/2024" {...a11yProps(0)} />
                  <Tab label="06/04/2024" {...a11yProps(1)} />
                  <Tab label="07/04/2024" {...a11yProps(2)} />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                <div className='w-75'>
                  <div className='my-2 d-flex align-items-center'>
                    <div className='w-25'>
                      <p className='m-0 fw-bold text-secondary'>Morning</p>
                    </div>
                    <div className='d-flex flex-wrap '>
                      <Button variant='outlined'>06:00 AM</Button>
                      <Button variant='outlined'>06:15 AM</Button>
                      <Button variant='outlined'>06:30 AM</Button>
                      <Button variant='outlined' disabled>06:45 AM</Button>
                    </div>
                  </div>
                  <div className='my-2 d-flex align-items-center'>
                    <div className='w-25'>
                      <p className='m-0 fw-bold text-secondary'>Afternoon</p>
                    </div>
                    <div className='d-flex flex-wrap '>
                      <Button variant='outlined'>01:00 PM</Button>
                      <Button variant='outlined'>02:00 PM</Button>
                      <Button variant='outlined'>03:00 PM</Button>
                      <Button variant='outlined' disabled>04:00 PM</Button>
                    </div>
                  </div>
                  <div className='my-2 d-flex align-items-center'>
                    <div className='w-25'>
                      <p className='m-0 fw-bold text-secondary'>Evening</p>
                    </div>
                    <div className='d-flex flex-wrap '>
                      <Button variant='outlined'>07:00 PM</Button>
                      <Button variant='outlined'>08:00 PM</Button>
                      <Button variant='outlined'>08:20 PM</Button>
                      <Button variant='outlined' disabled>06:00 PM</Button>
                    </div>
                  </div>
                </div>


              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                Item Two
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                Item Three
              </CustomTabPanel>
            </Box>

          </AccordionDetails>
        </Accordion>
        {/* <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Accordion 2
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion> */}
      </Box>
    </Box>
  );
}