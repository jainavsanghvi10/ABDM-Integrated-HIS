import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import PatientNavbar from './Patient/PatientNavbar';
import Rating from '@mui/material/Rating';
import doctorpic from '../assets/images/doctorpic.jpeg'
import SortIcon from '@mui/icons-material/Sort';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



export default function OverflowCard() {

  const [value, setValue] = React.useState(4.3);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const [date, setDate] = React.useState(dayjs('2022-04-17'));
  const [time, setTime] = React.useState(dayjs('2022-04-17T15:30'));

  return (

    <>
      <PatientNavbar />



      <div className='container pt-4 px-5'>
        <div class="d-flex mx-3">
          <div class="me-4">
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>

          <Button
            startIcon={<SortIcon />}
            variant='contained'
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            Sort
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>None</MenuItem>
            <MenuItem onClick={handleClose}>Distance</MenuItem>
            <MenuItem onClick={handleClose}>Rating</MenuItem>
          </Menu>
        </div>
      </div>

      <div className="container d-flex flex-wrap px-5">
        <Card variant="outlined" className='m-3 shadow' sx={{ width: 320 }}>
          <CardOverflow>
            <AspectRatio ratio="2">
              <img src={doctorpic} loading="lazy" alt="" />
            </AspectRatio>
          </CardOverflow>
          <CardContent>
            <Typography level="title-md">Dr. Anup Mishra</Typography>
            <Typography level="body-sm">Cardiac Surgeon</Typography>
          </CardContent>
          <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
            <Divider inset="context" />
            <CardContent orientation="horizontal">
              <Typography level="body-xs" fontWeight="md" textColor="text.secondary">
                6.3 kms away
              </Typography>
              <Divider orientation="vertical" />
              {/* <Typography level="body-xs" fontWeight="md" textColor="text.secondary">
                4.3
              </Typography> */}
              <Rating name="read-only" value={value} readOnly />
            </CardContent>
            {/* <Button variant="contained" style={{ backgroundColor: 'rgb(2,48,106)' }} className='fw-bold text-capitalize mb-2'>Pick Slot</Button> */}
            <Button onClick={handleOpenModal} variant="outlined" style={{ color: 'rgb(2,48,106)' }} className='w-100 mb-2 fw-bold text-capitalize'>Pick Slot</Button>
            <div>
              <Modal
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <h4 className="fw-bold font-blue mb-5">Pick a Slot</h4>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Select Date"
                      value={date}
                      onChange={(newValue) => setDate(newValue)}
                    />
                    <TimePicker
                      label="Select Time"
                      value={time}
                      onChange={(newValue) => setTime(newValue)}
                    />
                  </LocalizationProvider>
                  <Button variant="contained" style={{ backgroundColor: 'rgb(2,48,106)' }} className='mx-3 fw-bold p-3 px-5 text-capitalize rounded-4'>Book Slot</Button>

                </Box>
              </Modal>
            </div>
          </CardOverflow>
        </Card>

      </div>
    </>
  );
}
