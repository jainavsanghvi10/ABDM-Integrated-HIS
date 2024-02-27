import PatientNavbar from "./PatientNavbar";
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import Skeleton from '@mui/material/Skeleton';
import Button from '@mui/material/Button';


const PatientProfile = () => {
    return (
        <>
            <PatientNavbar />

            <div className="container d-flex align-items-center p-5">
                {/* <div className="input-group mb-3">
                    <input type="text" className="form-control fw-bold p-3" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button className="btn btn-success fw-bold p-3" type="button" id="button-addon2">
                        <SearchIcon className="mx-2"/>
                        Search
                    </button>
                </div> */}
                <div className="w-50">
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                                m: 1,
                                width: 400,
                                height: 600,
                            },
                        }}
                    >
                        <Paper elevation={3}>
                            <div className="h-25 bg-blue mb-5">
                                <Avatar className="border" style={{ background: 'rgb(2,48,106)', left: '125px', top: '80px', height: '150px', width: '150px' }} alt="Remy Sharp" src="" />
                            </div>
                            <div className="d-flex flex-column align-items-center justify-content-center" style={{ marginTop: '100px' }}>
                                <QrCode2Icon style={{ height: '100px', width: '100px' }} />
                                <Skeleton className="mt-3 rounded" animation='wave' variant="rectangular" width={300} height={20} />
                                <Skeleton className="mt-3 rounded" animation='wave' variant="rectangular" width={300} height={20} />
                                <Skeleton className="mt-3 rounded" animation='wave' variant="rectangular" width={300} height={20} />
                                <Button variant="contained" style={{ backgroundColor: 'rgb(2,48,106)' }} className='my-5 fw-bold p-3 px-5 text-capitalize rounded-4'>
                                    Download ABHA Card
                                </Button>
                            </div>

                        </Paper>
                    </Box>

                </div>
                <div className="w-50">
                    <h3 className="fw-bold font-blue">Manage User Profile</h3>
                    <hr />

                    <div className="my-5">
                        <label for="basic-url" className="form-label fw-bold">Update Email Address:</label>
                        <input disabled type="text" className="mb-4 p-3 border-2 fw-bold" style={{ width: '500px' }} id="patient-email" placeholder="Email Address">
                        </input>

                        <label for="basic-url" className="form-label fw-bold">Update Mobile Number:</label>
                        <input disabled type="text" className="mb-4 p-3 border-2 fw-bold" style={{ width: '500px' }} id="patient-email" placeholder="Email Address">
                        </input>
                    </div>

                    <div className="my-5">
                        <label for="basic-url" className="form-label fw-bold">Link/ Unlink ABHA Number:</label>
                        <input disabled type="text" className="mb-4 p-3 border-2 fw-bold" style={{ width: '500px' }} id="patient-email" placeholder="Email Address">
                        </input>

                        <label for="basic-url" className="form-label fw-bold">Update Password:</label>
                        <input disabled type="text" className="mb-4 p-3 border-2 fw-bold" style={{ width: '500px' }} id="patient-email" placeholder="Email Address">
                        </input>
                    </div>

                    <div className="my-5">
                        <label for="basic-url" className="form-label fw-bold">Update Consent PIN:</label>
                        <input disabled type="text" className="mb-4 p-3 border-2 fw-bold" style={{ width: '500px' }} id="patient-email" placeholder="**************">
                        </input>
                    </div>
                </div>
            </div>
        </>
    );
}
export default PatientProfile;