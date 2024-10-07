import { useEffect, useMemo, useState } from 'react'
import {
    Typography, TableContainer, Table, TableHead, TableRow,
    TableCell, TableBody, Box,
    IconButton, Paper, InputBase, SearchIcon
} from "../../common/Index";
import './ListTransaction.css';
import { Backend_EndPoint } from '../Constant/EndPoints';
import axios from 'axios';
import { format } from 'date-fns';

interface ListTrasaction {
    _id: string,
    txId: string,
    from: string,
    to: string,
    agentA: string,
    agentB: string,
    amount: string,
    index: number,
    Status: string,
    OTP: string,
    createdAt: string,
    updatedAt: string
}

function ListTransaction() {
    const [currentPage, setCurrentPage] = useState(0);
    const [listTrasaction, setListTransaction] = useState<ListTrasaction[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const itemsPerPage = 10;
    const token = localStorage.getItem('jwtToken');

    const FetchAllTrasaction = async () => {
        try {
            setIsLoading(true)
            if (token) {
                const response = await axios.get(`${Backend_EndPoint}api/v1/transaction/get-transactions`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });
                if (response.status === 200) {
                    setListTransaction(response.data)
                }
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false)
        }
    }

    const filteredTransactions = useMemo(() => {
        if (!searchTerm) return listTrasaction;
        return listTrasaction.filter(tx =>
            tx.txId.toLowerCase().includes(searchTerm.toLowerCase()) ||
            tx.from.toLowerCase().includes(searchTerm.toLowerCase()) ||
            tx.to.toLowerCase().includes(searchTerm.toLowerCase()) ||
            tx.agentA.toLowerCase().includes(searchTerm.toLowerCase()) ||
            tx.Status.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [listTrasaction, searchTerm]);

    const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
    const displayedTransaction = filteredTransactions.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

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
            FetchAllTrasaction()
        }
    }, [])
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
                >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="h4" sx={{ fontWeight: "bold" }}>Transaction List ({listTrasaction.length || 0})</Typography>

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
                </Box>

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
                        {
                            isLoading ? (<TableContainer>
                                <span className="loader2_transaction"></span>
                            </TableContainer>) :
                                displayedTransaction.length > 0 ? (
                                    <><TableContainer>
                                        <Table>
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell className='table-row'>No.</TableCell>
                                                    <TableCell className='table-row'>txId</TableCell>
                                                    <TableCell className='table-row'>From</TableCell>
                                                    <TableCell className='table-row'>To</TableCell>
                                                    <TableCell className='table-row'>Agent</TableCell>
                                                    <TableCell className='table-row'>Amount</TableCell>
                                                    <TableCell className='table-row'>Status</TableCell>
                                                    <TableCell className='table-row'>CreatedAt</TableCell>
                                                    <TableCell className='table-row'>UpdateAt</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {displayedTransaction.map((tx, i) => (
                                                    <TableRow key={i + 1}>
                                                        <TableCell>{currentPage * itemsPerPage + i + 1}</TableCell>
                                                        <TableCell>{tx.txId}</TableCell>
                                                        <TableCell>{(tx.from).slice(0, 6)}....{(tx.from).slice(-4)}</TableCell>
                                                        <TableCell>
                                                            {(tx.to).slice(0, 6)}....{(tx.to).slice(-4)}
                                                        </TableCell>
                                                        <TableCell>{(tx.agentA).slice(0, 6)}....{(tx.agentA).slice(-4)}</TableCell>
                                                        <TableCell>{tx.amount}</TableCell>
                                                        <TableCell>
                                                            <span
                                                                style={{
                                                                    color:
                                                                        tx.Status === 'Completed' ? 'blue' :
                                                                            tx.Status === 'Initiated' ? 'green' :
                                                                                tx.Status === 'Cancelled' ? 'red' : 'yellow',
                                                                    fontWeight: 'bold',
                                                                }}
                                                            >
                                                                {tx.Status}
                                                            </span>
                                                        </TableCell>

                                                        <TableCell>{format(new Date(tx.createdAt), 'd MMM, yyyy HH:mm aa')}</TableCell>
                                                        <TableCell>{format(new Date(tx.updatedAt), 'd MMM, yyyy HH:mm aa')}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
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
                                        </Box></>
                                ) : (
                                    <TableContainer>
                                        <h4 style={{ marginLeft: "45%" }}>Transaction Not Found</h4>
                                    </TableContainer>
                                )
                        }

                    </Box>
                </Box>
            </div>
        </div>
    )
}

export default ListTransaction
