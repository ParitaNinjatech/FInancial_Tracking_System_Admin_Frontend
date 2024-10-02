import React, { useEffect, useState } from 'react';
import {
    Box, Typography, Grid, CardContent, Card, TableContainer, TableHead,
    Table, TableCell, TableRow, TableBody, IconButton
} from '../../common/Index';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckIcon from '@mui/icons-material/Check';
import "./AddAgent.css";
import { Backend_EndPoint } from '../Constant/EndPoints';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { format } from 'date-fns';

interface RequestDetails {
    _id: string,
    username: string,
    password: string,
    email: string,
    phoneNumber: string,
    walletAddress: string,
    role: string,
    isApproved: boolean,
    createdAt: string,
    updatedAt: string
}

function AddAgent() {
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [requestList, setRequestList] = useState<RequestDetails[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [totalConfirmAgent, setTotalConfirmAgent] = useState<number>();
    const [totalPendingAgent, setTotalPendingAgent] = useState<number>();
    const itemsPerPage: number = 10;
    const token = localStorage.getItem('jwtToken');

    const FetchData = async () => {
        try {
            setIsLoading(true);
            if (token) {
                const response = await axios.get(`${Backend_EndPoint}api/v1/user/waiting-users`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });
                if (response.status === 200) {
                    setRequestList(response.data);
                    setTotalPendingAgent(response.data.length);
                }
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    const FetchAllUser = async () => {
        try {
            if (token) {
                const response = await axios.get(`${Backend_EndPoint}api/v1/user`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (response.status === 200) {
                    setTotalConfirmAgent(response.data.length);
                }
            }
        } catch (error) {
            console.error(error);
        }
    };

    const totalPages = Math.ceil(requestList.length / itemsPerPage);
    const displayedRequest = requestList.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    const Approve = async (id: string) => {
        try {
            if (token) {
                const data = JSON.stringify({ "id": id });
                const response = await axios.post(`${Backend_EndPoint}api/v1/user/approve-user`, data, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (response.status === 201) {
                    toast.success(response.data.message);
                    setTimeout(() => {
                        FetchData();
                    }, 3000);
                }
            }
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                toast.error(error.response.data.error || "An error occurred");
            } else {
                toast.error("An unexpected error occurred");
            }
        }
    };

    const RejectUser = async (id: String) => {
        try {
            if (token) {
                const data = JSON.stringify({ "id": id });
                const response = await axios.post(`${Backend_EndPoint}api/v1/user/reject-user`, data, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });
                console.log(response, "response");

                if (response.status === 201) {
                    toast.success(response.data.message);
                    setTimeout(() => {
                        FetchData();
                    }, 3000);
                }
            }

        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                toast.error(error.response.data.error || "An error occurred");
            } else {
                toast.error("An unexpected error occurred");
            }
        }
    }
    useEffect(() => {
        FetchData();
        FetchAllUser();
    }, []);

    return (
        <div className='background-image'>
            <div className='box-Container'>
                <Box
                    sx={{
                        backgroundColor: '#fff',
                        padding: '15px',
                        borderRadius: '8px',
                        boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
                        marginBottom: '20px',
                        width: "99%"
                    }}
                >
                    <Typography variant="h4" sx={{ fontWeight: "bold" }}>Agent Requests</Typography>
                    <Typography variant="body2">Dashboard / Agent Requests</Typography>
                </Box>
                <ToastContainer />

                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" className='table-row'>Total Confirmed Request</Typography>
                                <Typography variant="h5">{totalConfirmAgent}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" className='table-row'>Total Pending Request</Typography>
                                <Typography variant="h5">{totalPendingAgent}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                <Box sx={{ padding: '20px' }}>
                    <Box
                        sx={{
                            backgroundColor: '#fff',
                            height: 'auto',
                            marginTop: '20px',
                            borderRadius: '8px',
                            boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
                            padding: '20px',
                        }}
                    >
                        {
                            isLoading ? (
                                <TableContainer>
                                    <span className="loader2"></span>
                                </TableContainer>
                            ) : displayedRequest.length > 0 ? (
                                <TableContainer>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell className='table-row'>No.</TableCell>
                                                <TableCell className='table-row'>UserName</TableCell>
                                                <TableCell className='table-row'>Email</TableCell>
                                                <TableCell className='table-row'>Wallet Address</TableCell>
                                                <TableCell className='table-row'>Role</TableCell>
                                                <TableCell className='table-row'>CreatedAt</TableCell>
                                                <TableCell className='table-row'>UpdatedAt</TableCell>
                                                <TableCell className='table-row'>Status</TableCell>
                                                <TableCell className='table-row'>Action</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {displayedRequest.map((tx, i) => (
                                                <TableRow key={i + 1}>
                                                    <TableCell>{currentPage * itemsPerPage + i + 1}</TableCell>
                                                    <TableCell>{tx.username}</TableCell>
                                                    <TableCell>{tx.email}</TableCell>
                                                    <TableCell>
                                                        {tx.walletAddress.slice(0, 6)}....{tx.walletAddress.slice(-4)}
                                                    </TableCell>
                                                    <TableCell>{tx.role}</TableCell>
                                                    <TableCell>{format(new Date(tx.createdAt), 'd MMM, yyyy HH:mm aa')}</TableCell>
                                                    <TableCell>{format(new Date(tx.updatedAt), 'd MMM, yyyy HH:mm aa')}</TableCell>
                                                    <TableCell>
                                                        <span
                                                            style={{
                                                                color: tx.isApproved ? 'blue' : 'red',
                                                                fontWeight: 'bold'
                                                            }}
                                                        >
                                                            {tx.isApproved ? 'Approved' : 'Not Approved'}
                                                        </span>
                                                    </TableCell>
                                                    <TableCell className='Action'>
                                                        <IconButton onClick={() => Approve(tx._id)}>
                                                            <CheckIcon />
                                                        </IconButton>
                                                        <IconButton onClick={() => RejectUser(tx._id)}>
                                                            <CancelIcon />
                                                        </IconButton>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            ) : (
                                <TableContainer>
                                    <h4 style={{marginLeft:"45%"}}>Request Not Found</h4>
                                </TableContainer>
                            )
                        }

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                            <button onClick={handlePrevPage} disabled={currentPage === 0}>
                                Previous
                            </button>
                            <Typography variant="body1">
                                Page {currentPage + 1} of {totalPages}
                            </Typography>
                            <button onClick={handleNextPage} disabled={currentPage === totalPages - 1}>
                                Next
                            </button>
                        </Box>
                    </Box>
                </Box>
            </div>
        </div>
    );
}

export default AddAgent;
