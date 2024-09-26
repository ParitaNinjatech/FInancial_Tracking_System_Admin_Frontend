import React, { useState } from 'react'
import { Box, Typography, Grid, CardContent, Card, TableContainer, TableHead, Table, TableCell, TableRow, TableBody, CancelIcon, IconButton, CheckIcon } from '../../common/Index'
import "./AddAgent.css";

function AddAgent() {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 10;

    const requestList = [
        { UserName: 'Air Jordan', Email: 'Shoes@gmail.com', WalletAddress: "0xf326Dec1A1A5e18292B2E341B03cB23E2e08960B", Role: "Agent", CreatedAt: "26,sep 2024", Status: "Confirmed" },
        { UserName: 'Amazon Fire TV', Email: 'Electronics@gmail.com', WalletAddress: "0xf326Dec1A1A5e18292B2E341B03cB23E2e08960B", Role: "Agent", CreatedAt: "26,sep 2024", Status: "Pending" },
        { UserName: 'Apple iPad', Email: 'Electronics@gmail.com', WalletAddress: "0xf326Dec1A1A5e18292B2E341B03cB23E2e08960B", Role: "Agent", CreatedAt: "26,sep 2024", Status: "Confirmed" },
        { UserName: 'Apple Watch Series 7', Email: 'Accessories@gmail.com', WalletAddress: "0xf326Dec1A1A5e18292B2E341B03cB23E2e08960B", Role: "Agent", CreatedAt: "26,sep 2024", Status: "Pending" },
        { UserName: 'BANGE Anti Theft Backpack', Email: 'Accessories@gmail.com', WalletAddress: "0xf326Dec1A1A5e18292B2E341B03cB23E2e08960B", Role: "Agent", CreatedAt: "26,sep 2024", Status: "Confirmed" },
        { UserName: 'Canon EOS Rebel T7', Email: 'Electronics@gmail.com', WalletAddress: "0xf326Dec1A1A5e18292B2E341B03cB23E2e08960B", Role: "Agent", CreatedAt: "26,sep 2024", Status: "Confirmed" },
        { UserName: 'Air Jordan', Email: 'Shoes@gmail.com', WalletAddress: "0xf326Dec1A1A5e18292B2E341B03cB23E2e08960B", Role: "Agent", CreatedAt: "26,sep 2024", Status: "Confirmed" },
        { UserName: 'Amazon Fire TV', Email: 'Electronics@gmail.com', WalletAddress: "0xf326Dec1A1A5e18292B2E341B03cB23E2e08960B", Role: "Agent", CreatedAt: "26,sep 2024", Status: "Confirmed" },
        { UserName: 'Apple iPad', Email: 'Electronics@gmail.com', WalletAddress: "0xf326Dec1A1A5e18292B2E341B03cB23E2e08960B", Role: "Agent", CreatedAt: "26,sep 2024", Status: "Pending" },
        { UserName: 'Apple Watch Series 7', Email: 'Accessories@gmail.com', WalletAddress: "0xf326Dec1A1A5e18292B2E341B03cB23E2e08960B", Role: "Agent", CreatedAt: "26,sep 2024", Status: "Pending" },
        { UserName: 'BANGE Anti Theft Backpack', Email: 'Accessories@gmail.com', WalletAddress: "0xf326Dec1A1A5e18292B2E341B03cB23E2e08960B", Role: "Agent", CreatedAt: "26,sep 2024", Status: "Pending" },
        { UserName: 'Canon EOS Rebel T7', Email: 'Electronics@gmail.com', WalletAddress: "0xf326Dec1A1A5e18292B2E341B03cB23E2e08960B", Role: "Agent", CreatedAt: "26,sep 2024", Status: "Confirmed" },
        { UserName: 'Air Jordan', Email: 'Shoes@gmail.com', WalletAddress: "0xf326Dec1A1A5e18292B2E341B03cB23E2e08960B", Role: "Agent", CreatedAt: "26,sep 2024", Status: "Pending" },
        { UserName: 'Amazon Fire TV', Email: 'Electronics@gmail.com', WalletAddress: "0xf326Dec1A1A5e18292B2E341B03cB23E2e08960B", Role: "Agent", CreatedAt: "26,sep 2024", Status: "Confirmed" },
        { UserName: 'Apple iPad', Email: 'Electronics@gmail.com', WalletAddress: "0xf326Dec1A1A5e18292B2E341B03cB23E2e08960B", Role: "Agent", CreatedAt: "26,sep 2024", Status: "Pending" },
        { UserName: 'Apple Watch Series 7', Email: 'Accessories@gmail.com', WalletAddress: "0xf326Dec1A1A5e18292B2E341B03cB23E2e08960B", Role: "Agent", CreatedAt: "26,sep 2024", Status: "Confirmed" },
        { UserName: 'BANGE Anti Theft Backpack', Email: 'Accessories@gmail.com', WalletAddress: "0xf326Dec1A1A5e18292B2E341B03cB23E2e08960B", Role: "Agent", CreatedAt: "26,sep 2024", Status: "Pending" },
        { UserName: 'Canon EOS Rebel T7', Email: 'Electronics@gmail.com', WalletAddress: "0xf326Dec1A1A5e18292B2E341B03cB23E2e08960B", Role: "Agent", CreatedAt: "26,sep 2024", Status: "Pending" },
    ];
    const totalPages = Math.ceil(requestList.length / itemsPerPage);
    const displayedTransaction = requestList.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

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
                        width: " 99%"
                    }}
                >
                    <Typography variant="h4" sx={{ fontWeight: "bold" }}>Add Agent </Typography>
                    <Typography variant="body2">Dashboard / Add Agent </Typography>
                </Box>

                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" className='table-row'>Total Confirmed Request</Typography>
                                <Typography variant="h5">3000</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" className='table-row'>Total Pending Request</Typography>
                                <Typography variant="h5">60000</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>


                <Box
                    sx={{
                        padding: '20px',
                    }}
                >
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
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow >
                                        <TableCell className='table-row'>UserName</TableCell>
                                        <TableCell className='table-row'>Email</TableCell>
                                        <TableCell className='table-row'>Wallet Address</TableCell>
                                        <TableCell className='table-row'>Role</TableCell>
                                        <TableCell className='table-row'>CreatedAt</TableCell>
                                        <TableCell className='table-row'>Status</TableCell>
                                        <TableCell className='table-row'>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {displayedTransaction.map((tx: any, i: any) => (
                                        <TableRow key={i + 1}>
                                            <TableCell>{tx.UserName}</TableCell>
                                            <TableCell>{tx.Email}</TableCell>
                                            <TableCell>
                                                {(tx.WalletAddress).slice(0, 6)}....{(tx.WalletAddress).slice(-4)}
                                            </TableCell>
                                            <TableCell>{tx.Role}</TableCell>
                                            <TableCell>{tx.CreatedAt}</TableCell>
                                            <TableCell>
                                                <span
                                                    style={{
                                                        color: tx.Status === 'Confirmed' ? 'blue' : 'red',
                                                        fontWeight: 'bold'
                                                    }}
                                                >
                                                    {tx.Status}
                                                </span>
                                            </TableCell>
                                            <TableCell className='Action'>
                                                <IconButton onClick={() => { /* Edit logic here */ }}>
                                                    <CheckIcon />
                                                </IconButton>
                                                <IconButton onClick={() => { /* Delete logic here */ }}>
                                                    <CancelIcon />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>

                        {/* Pagination Controls */}
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
    )
}

export default AddAgent
