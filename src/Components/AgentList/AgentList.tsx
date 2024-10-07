import { useEffect, useMemo, useState } from 'react'
import {
    Grid, Card, CardContent, Typography, TableContainer, Table, TableHead, TableRow,
    TableCell, TableBody, Box, Paper, InputBase, SearchIcon,
    IconButton
} from "../../common/Index";
import "./Agent.css";
import { Backend_EndPoint } from '../Constant/EndPoints';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { format } from 'date-fns';

interface AgentDetails {
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

function AgentList() {
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [agentList, setAgentList] = useState<AgentDetails[]>([]);
    const [totalActiveAgent, setTotalActiveAgent] = useState<number>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const itemsPerPage: number = 10;
    const token = localStorage.getItem('jwtToken');

    const FetchAllUser = async () => {
        try {
            setIsLoading(true);
            if (token) {
                const response = await axios.get(`${Backend_EndPoint}api/v1/user`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (response.status === 200) {
                    const agentsOnly = (response.data).filter((agent: AgentDetails) => agent.role === 'Agent');

                    setTotalActiveAgent(agentsOnly.length);
                    setAgentList(agentsOnly);
                }
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    const filteredAgent = useMemo(() => {
        if (!searchTerm) return agentList;
        return agentList.filter((agent: any) =>
            agent.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
            agent.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            agent.walletAddress.toLowerCase().includes(searchTerm.toLowerCase()) ||
            agent.phoneNumber.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [agentList, searchTerm]);

    const totalPages = Math.ceil(filteredAgent.length / itemsPerPage);
    const displayedAgents = filteredAgent.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

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

    const handleFocus = () => {
        setSearchTerm(''); 
    };


    useEffect(() => {
        if (token) {

            FetchAllUser();
        }
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
                        width: "100%"
                    }}
                >     <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant="h4" sx={{ fontWeight: "bold" }}>Agent List({agentList.length})</Typography>
                    <Paper
                            component="form"
                            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, marginLeft: "49%" }}
                        >
                           <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Search transactions"
                                inputProps={{ 'aria-label': 'search transactions' }}
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onFocus={handleFocus} 
                            />
                            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                        </Box>
                    <Typography variant="body2">Dashboard / Agent List</Typography>
                </Box>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" className='table-row'>Total Agent</Typography>
                                <Typography variant="h5" >{totalActiveAgent || 0}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" className='table-row'>Total Active Agent</Typography>
                                {totalActiveAgent || 0}
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                <Box
                    sx={{
                        flexGrow: 1,
                        backgroundColor: '#f4f4f4',
                        padding: '20px',
                    }}
                >
                    <Box
                        sx={{
                            backgroundColor: '#fff',
                            height: '80vh',
                            marginTop: '20px',
                            borderRadius: '8px',
                            boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
                            padding: '20px',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        {isLoading ? (
                            <TableContainer>
                                <span className="loader2_AgentList"></span>
                            </TableContainer>
                        ) : displayedAgents.length > 0 ? (
                            <>
                                <TableContainer sx={{ flexGrow: 1, overflowY: 'auto' }}>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell className='table-row'>No.</TableCell>
                                                <TableCell className='table-row'>UserName</TableCell>
                                                <TableCell className='table-row'>Email</TableCell>
                                                <TableCell className='table-row'>Wallet Address</TableCell>
                                                <TableCell className='table-row'>Phone Number</TableCell>
                                                <TableCell className='table-row'>CreatedAt</TableCell>
                                                <TableCell className='table-row'>UpdatedAt</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {displayedAgents.map((agent: any, i: any) => (
                                                <TableRow key={i + 1}>
                                                    <TableCell>{currentPage * itemsPerPage + i + 1}</TableCell>
                                                    <TableCell>{agent.username}</TableCell>
                                                    <TableCell>{agent.email}</TableCell>
                                                    <TableCell>
                                                        {(agent.walletAddress).slice(0, 6)}....{(agent.walletAddress).slice(-4)}
                                                    </TableCell>
                                                    <TableCell>{agent.phoneNumber}</TableCell>
                                                    <TableCell>{format(new Date(agent.createdAt), 'd MMM, yyyy HH:mm aa')}</TableCell>
                                                    <TableCell>{format(new Date(agent.updatedAt), 'd MMM, yyyy HH:mm aa')}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>

                                {/* Pagination Controls */}
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 'auto' }}>
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
                            </>
                        ) : (
                            <TableContainer>
                                <h4 style={{ marginLeft: "45%" }}>Agent Not Found</h4>
                            </TableContainer>
                        )}
                    </Box>
                </Box>
            </div>
        </div>
    );
}

export default AgentList;
