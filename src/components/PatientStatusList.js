import React, { useState } from 'react';
// import Button from '@mui/material/Button';

import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';


import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Stack from '@mui/joy/Stack';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

import Add from '@mui/icons-material/Add';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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

const PatientStatusList = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const [time, setTime] = React.useState(dayjs('2022-04-17T15:30'));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="container d-flex flex-column align-items-center p-5">
        <h3 className="fw-bold font-blue">Manage Appointment Slots</h3>
        <hr style={{ width: '300px' }} />

        <div className='d-flex align-items-center'>
        <span className='me-3 fw-bold'>Add Time Slot : </span>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker 
          value={time}
          onChange={(newValue) => setTime(newValue)}/>
        </LocalizationProvider >
        </div>

        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs variant='scrollable' centered scrollButtons="auto" value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="05/04/2024" {...a11yProps(0)} />
              <Tab label="06/04/2024" {...a11yProps(1)} />
              <Tab label="07/04/2024" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>

            <div className='container'>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col" className='text-white p-3' style={{ backgroundColor: 'rgb(2,48,106)' }}>Slot</th>
                    <th scope="col" className='text-white p-3' style={{ backgroundColor: 'rgb(2,48,106)' }}>Patient ID</th>
                    <th scope="col" className='text-white p-3' style={{ backgroundColor: 'rgb(2,48,106)' }}>Patient Name</th>
                    <th scope="col" className='text-white p-3' style={{ backgroundColor: 'rgb(2,48,106)' }}>Patient Status</th>
                    <th scope="col" className='text-white p-3' style={{ backgroundColor: 'rgb(2,48,106)' }}>In Date</th>
                    <th scope="col" className='text-white p-3' style={{ backgroundColor: 'rgb(2,48,106)' }}>Out Date</th>
                    <th scope="col" className='text-white p-3' style={{ backgroundColor: 'rgb(2,48,106)' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">06:00</th>
                    <td>Rahul Jain</td>
                    <td>Doctor</td>
                    <td>New Department</td>
                    <td>New Designation</td>
                    <td>New Role</td>
                    <td>
                      <IconButton aria-label="delete" size='small'>
                        <DeleteIcon fontSize="inherit" color='secondary' />
                      </IconButton>

                      <IconButton onClick={() => setOpen(true)} aria-label="delete" size='small'>
                        <EditIcon fontSize="inherit" color='secondary' />
                      </IconButton>


                    </td>
                  </tr>
                </tbody>
              </table>
            </div>


          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            Item Two
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            Item Three
          </CustomTabPanel>
        </Box>

        {/* <Button
                    variant="outlined"
                    style={{ color: 'rgb(2,48,106)' }}
                    className='my-3 fw-bold p-3 text-capitalize'
                    startDecorator={<Add />}
                    onClick={() => setOpen(true)}
                >
                    Add Appointment Slot
                </Button> */}
        <Modal open={open} onClose={() => setOpen(false)}>
          <ModalDialog>
            <DialogTitle>Add a new HealthWorker</DialogTitle>
            <DialogContent>Fill in the information of the HealthWorker.</DialogContent>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setOpen(false);
              }}
            >
              <Stack spacing={2}>

                <FormControl>
                  <FormLabel>Slot</FormLabel>
                  <Input autoFocus required />
                </FormControl>
                <FormControl>
                  <FormLabel>Patient ID</FormLabel>
                  <Input required />
                </FormControl>
                <FormControl>
                  <FormLabel>Patient Name</FormLabel>
                  <Input required />
                </FormControl>
                <FormControl>
                  <FormLabel>Patient Status</FormLabel>
                  <Select >
                    <Option value="dog">Dog</Option>
                    <Option value="cat">Cat</Option>
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel>In Date</FormLabel>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker />
                  </LocalizationProvider >
                </FormControl>

                <FormControl>
                  <FormLabel>Out Date</FormLabel>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker />
                  </LocalizationProvider >
                </FormControl>
                <Button type="submit">Submit</Button>
              </Stack>

            </form>
          </ModalDialog>
        </Modal>



      </div>
    </>
  )
}

export default PatientStatusList;