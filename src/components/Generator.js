import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Form, ProgressBar } from 'react-bootstrap';
import axios from 'axios';
import OtpInput from 'react-otp-input';
import Button from '@mui/material/Button';
import JSEncrypt from 'jsencrypt';

import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import Skeleton from '@mui/material/Skeleton';

const Generator = () => {
	const [step, setStep] = useState(1);
    const navigate = useNavigate();
	const [formData, setFormData] = useState({});
	const [aadhaarNumber, setaadhaarNumber] = useState(undefined);
	const [mobileNumber, setMobileNumber] = useState(undefined);
	const [otp, setOtp] = useState('');
	const [txnId, setTxnId] = useState('');
	const [healthIdNumber, setHealthIdNumber] = useState('');
	// const [publicKey, setPublicKey] = useState('');
    const [otpDialogState, setOtpDialogState] = useState(false);
	
    // useEffect(() => {
	// const fetchPublicKey = async () => {
	//     try {
	//         const response = await axios.post('http://localhost:8087/abhaGenerator/publicKey');
	//         const publicKeyData = response.data; // Assuming the response contains a publicKey field
	//         console.log('Public Key:', publicKeyData);
	//         setPublicKey(publicKeyData);
	//     } catch (error) {
	//         console.error('Error fetching public key:', error);
	//     }
	// };

	// fetchPublicKey();
	// }, []);

	const encrypt = (plainText) => {
		const encryptor = new JSEncrypt();
		const publicKey = `-----BEGIN PUBLIC KEY-----
        MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAstWB95C5pHLXiYW59qyO4Xb+59KYVm9Hywbo77qETZVAyc6VIsxU+UWhd/k/YtjZibCznB+HaXWX9TVTFs9Nwgv7LRGq5uLczpZQDrU7dnGkl/urRA8p0Jv/f8T0MZdFWQgks91uFffeBmJOb58u68ZRxSYGMPe4hb9XXKDVsgoSJaRNYviH7RgAI2QhTCwLEiMqIaUX3p1SAc178ZlN8qHXSSGXvhDR1GKM+y2DIyJqlzfik7lD14mDY/I4lcbftib8cv7llkybtjX1AayfZp4XpmIXKWv8nRM488/jOAF81Bi13paKgpjQUUuwq9tb5Qd/DChytYgBTBTJFe7irDFCmTIcqPr8+IMB7tXA3YXPp3z605Z6cGoYxezUm2Nz2o6oUmarDUntDhq/PnkNergmSeSvS8gD9DHBuJkJWZweG3xOPXiKQAUBr92mdFhJGm6fitO5jsBxgpmulxpG0oKDy9lAOLWSqK92JMcbMNHn4wRikdI9HSiXrrI7fLhJYTbyU3I4v5ESdEsayHXuiwO/1C8y56egzKSw44GAtEpbAkTNEEfK5H5R0QnVBIXOvfeF4tzGvmkfOO6nNXU3o/WAdOyV3xSQ9dqLY5MEL4sJCGY1iJBIAQ452s8v0ynJG5Yq+8hNhsCVnklCzAlsIzQpnSVDUVEzv17grVAw078CAwEAAQ==
                            -----END PUBLIC KEY-----`;
		encryptor.setPublicKey(publicKey);
		const ciphertext = encryptor.encrypt(plainText);
		console.log('Plain Text:', plainText);
		console.log('Encrypted Text:', ciphertext);
		return ciphertext;
	};

	const handleAadhaarOTP = async () => {
		console.log('Aadhaar Number:', aadhaarNumber);
		try {
			// Encrypt Aadhaar number
			let encryptedAadhaarNumber = encrypt(aadhaarNumber);
			const data = {
				aadhaar: encryptedAadhaarNumber,
			};

			// POST request to the server API
			const response = await axios.post(
				'http://localhost:8087/abhaGenerator/generateOTP',
				data
			);
            setOtpDialogState(true);
			const txnId = response.data;
			setTxnId(txnId);
			console.log('Transaction ID:', txnId);
		} catch (error) {
			alert('Invalid');
		}
	};

	const handleMobileOTP = () => {
		console.log('Mobile Number:', mobileNumber);
		const data = {
			mobile: parseInt(mobileNumber),
			txnId: txnId,
		};

		// POST request to the server API
		axios
			.post('http://localhost:8087/abhaGenerator/generateMobileOTP', data)
			.then((response) => {
				response = response.data;
                const txnId = response.txnId;
				// setTxnId(txnId);
				console.log('Transaction ID:', txnId);
                if(!response.mobileLinked){
                    setOtpDialogState(true);
                }else{
                    alert('Mobile Number already linked');
                }
			})
			.catch((error) => {
				alert('Invalid');
			});
	};

	const handleAbhaGeneration = () => {
		const data = {
			txnId: txnId,
		};

		// POST request to the server API
		axios
			.post('http://localhost:8087/abhaGenerator/generateAbhaNumber', data)
			.then((response) => {
				const healthId = response.data;
				setHealthIdNumber(healthId);
				console.log('Health ID Number:', healthId);
                alert('Your Health ID / ABHA Number is ', healthId);
			})
			.catch((error) => {
				alert('Invalid');
			});
	};

	const handleNext = () => {
		if (step == 1) {
			console.log(aadhaarNumber);
			console.log(otp);
			let encryptedOTP = encrypt(otp);
			let data = {
				otp: encryptedOTP,
				txnId: txnId,
			};
			// POST request to the server API
			if(otpDialogState){
            axios
				.post('http://localhost:8087/abhaGenerator/verifyOTP', data)
				.then((response) => {
					const txnId = response.data;
					// setTxnId(txnId);
					console.log('Transaction ID:', txnId);
                })
				.catch((error) => {
					alert('Invalid OTP');
				});
            }
            setOtpDialogState(false);
            setStep(step + 1);
		} else {
			console.log(mobileNumber);
			let encryptedOTP = encrypt(otp);
			let data = {
				otp: encryptedOTP,
				txnId: txnId,
			};
			// POST request to the server API
			if(otpDialogState){
                axios
                    .post('http://localhost:8087/abhaGenerator/verifyMobileOTP', data)
                    .then((response) => {
                        const txnId = response.data;
                        // setTxnId(txnId);
                        console.log('Transaction ID:', txnId)
                    })
                    .catch((error) => {
                        alert('Invalid OTP');
                    });
            }
            setOtpDialogState(false);
            setStep(step + 1);
		}
	};

	const handlePrevious = () => {
		setStep(step - 1);
        setOtpDialogState(false);
	};

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
        navigate("/patient/register")
	};

	return (
		<Form onClick={handleSubmit} className='container p-5'>
			<ProgressBar striped animated variant='success' now={(step / 3) * 100} />
			{step === 1 && (
				<Form.Group controlId='formStep1'>
					<div className='p-5 d-flex flex-column align-items-center '>
						<h3 className='fw-bold font-blue mb-5'>Link Adhaar Number</h3>
						{/* <label for="exampleFormControlInput1" class="form-label">Enter Mobile Number</label> */}
						<input
							type='tel'
							className='form-control py-3 border-2 fw-bold'
							style={{ width: '500px' }}
							id='mobile-number'
							placeholder='Enter Adhaar Number'
							size='10'
							value={aadhaarNumber}
							onChange={(e) => setaadhaarNumber(e.target.value)}></input>

						<Button
							variant='outlined'
							style={{ color: 'rgb(2,48,106)' }}
							className='my-3 fw-bold text-capitalize'
							onClick={handleAadhaarOTP}>
							Send OTP
						</Button>
                        {otpDialogState ? (
							<>
						<p className='text-muted mt-4 fw-bold'>Enter OTP</p>

						<div className='w-50'>
							<OtpInput
								value={otp}
								onChange={setOtp}
								numInputs={6}
								// renderSeparator={<span>-</span>}
								renderInput={(props) => <input {...props} />}
								inputStyle='m-2 fw-bold text-muted fs-3 w-100 border-1 rounded'
								containerStyle='mx-5'
								// inputType='tel'
							/>
						</div>
                        </>
                        ) : null}

						{/* <Button variant="contained" style={{ backgroundColor: 'rgb(2,48,106)' }} className='my-3 fw-bold p-3 px-5 text-capitalize rounded-4'>Sign Up</Button> */}
					</div>
				</Form.Group>
			)}
			{step === 2 && (
				<Form.Group controlId='formStep2'>
					<div className='p-5 d-flex flex-column align-items-center '>
						<h3 className='fw-bold font-blue mb-5'>Link Mobile Number</h3>
						{/* <label for="exampleFormControlInput1" class="form-label">Enter Mobile Number</label> */}
						<input
							type='tel'
							className='form-control py-3 border-2 fw-bold'
							style={{ width: '500px' }}
							id='mobile-number'
							placeholder='Enter Mobile Number'
							size='10'
							value={mobileNumber}
							onChange={(e) => setMobileNumber(e.target.value)}></input>

						<Button
							variant='outlined'
							style={{ color: 'rgb(2,48,106)' }}
							className='my-3 fw-bold text-capitalize'
							onClick={handleMobileOTP}>
							Send OTP
						</Button>

						{otpDialogState ? (
							<>
								<p className='text-muted mt-4 fw-bold'>Enter OTP</p>
								<div className='w-50'>
									<OtpInput
										value={otp}
										onChange={setOtp}
										numInputs={6}
										// renderSeparator={<span>-</span>}
										renderInput={(props) => <input {...props} />}
										inputStyle='m-2 fw-bold text-muted fs-3 w-100 border-1 rounded'
										containerStyle='mx-5'
										// inputType='tel'
									/>
								</div>
							</>
						) : null}

						{/* <Button variant="contained" style={{ backgroundColor: 'rgb(2,48,106)' }} className='my-3 fw-bold p-3 px-5 text-capitalize rounded-4'>Sign Up</Button> */}
					</div>
				</Form.Group>
			)}
			{step === 3 && (
				<Form.Group controlId='formStep3'>
					<div className='w-100 p-5 text-center'>
						<h3 className='fw-bold font-blue mb-5'>Generate ABHA Number</h3>
						<Box
							sx={{
								display: 'flex',
								flexWrap: 'wrap',
								justifyContent: 'center',
								'& > :not(style)': {
									m: 1,
									width: 400,
									height: 600,
								},
							}}>
							<Paper elevation={3}>
								<div className='h-25 bg-blue mb-5'>
									<Avatar
										className='border'
										style={{
											background: 'rgb(2,48,106)',
											left: '125px',
											top: '80px',
											height: '150px',
											width: '150px',
										}}
										alt='Remy Sharp'
										src=''
									/>
								</div>
								<div
									className='d-flex flex-column align-items-center justify-content-center'
									style={{ marginTop: '100px' }}>
									<QrCode2Icon style={{ height: '100px', width: '100px' }} />
									<Skeleton
										className='mt-3 rounded'
										animation='wave'
										variant='rectangular'
										width={300}
										height={20}
									/>
									<Skeleton
										className='mt-3 rounded'
										animation='wave'
										variant='rectangular'
										width={300}
										height={20}
									/>
									<Skeleton
										className='mt-3 rounded'
										animation='wave'
										variant='rectangular'
										width={300}
										height={20}
									/>
									<Button
										variant='contained'
										style={{ backgroundColor: 'rgb(2,48,106)' }}
										className='my-5 fw-bold p-3 px-5 text-capitalize rounded-4'
										onClick={handleAbhaGeneration}>
										Generate ABHA Number
									</Button>
								</div>
							</Paper>
						</Box>
					</div>
				</Form.Group>
			)}
			<div className='d-flex justify-content-around'>
				{step > 1 && (
					<Button
						variant='outlined'
						style={{ color: 'rgb(2,48,106)' }}
						className='my-3 fw-bold text-capitalize'
						onClick={handlePrevious}>
						Previous
					</Button>
				)}
				{step < 3 ? (
					<Button
						variant='contained'
						style={{ backgroundColor: 'rgb(2,48,106)' }}
						className='my-3 fw-bold p-3 px-5 text-capitalize'
						onClick={handleNext}>
						Next
					</Button>
				) : (
					<Button
						variant='contained'
						style={{ backgroundColor: 'rgb(2,48,106)' }}
						className='my-3 fw-bold p-3 px-5 text-capitalize'
						type='submit'>
						Submit
					</Button>
				)}
			</div>
		</Form>
	);
};

export default Generator;
