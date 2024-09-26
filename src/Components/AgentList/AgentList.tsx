import React,{useState} from 'react'
import {
    Grid, Card, CardContent, Typography, TableContainer, Table, TableHead, TableRow,
    TableCell, TableBody, Box, EditIcon,IconButton,DeleteIcon
} from "../../common/Index";
import "./Agent.css";
function AgentList() {

    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 10;
    
    
    const products = [
        { name: 'Air Jordan', Email: 'Shoes@gmail.com', WalletAddress: "0xf326Dec1A1A5e18292B2E341B03cB23E2e08960B", PhoneNumber: 1234567891, City: "Ahmedabad", State: 'Gujarat' },
        { name: 'Amazon Fire TV', Email: 'Electronics@gmail.com', WalletAddress: "0xf326Dec1A1A5e18292B2E341B03cB23E2e08960B", PhoneNumber: 1234567891, City: "Baroda", State: 'Gujarat' },
        { name: 'Apple iPad', Email: 'Electronics@gmail.com', WalletAddress: "0xf326Dec1A1A5e18292B2E341B03cB23E2e08960B", PhoneNumber: 1234567891, City: "Baroda", State: 'Gujarat' },
        { name: 'Apple Watch Series 7', Email: 'Accessories@gmail.com', WalletAddress: "0xf326Dec1A1A5e18292B2E341B03cB23E2e08960B", PhoneNumber: 1234567891, City: "Baroda", State: 'Gujarat' },
        { name: 'BANGE Anti Theft Backpack', Email: 'Accessories@gmail.com', WalletAddress: "0xf326Dec1A1A5e18292B2E341B03cB23E2e08960B", PhoneNumber: 1234567891, City: "Baroda", State: 'Gujarat' },
        { name: 'Canon EOS Rebel T7', Email: 'Electronics@gmail.com', WalletAddress: "0xf326Dec1A1A5e18292B2E341B03cB23E2e08960B", PhoneNumber: 1234567891, City: "Ahmedabad", State: 'Gujarat' },
        { name: 'Air Jordan', Email: 'Shoes@gmail.com', WalletAddress: "0xf326Dec1A1A5e18292B2E341B03cB23E2e08960B", PhoneNumber: 1234567891, City: "Ahmedabad", State: 'Gujarat' },
        { name: 'Amazon Fire TV', Email: 'Electronics@gmail.com', WalletAddress: "0xf326Dec1A1A5e18292B2E341B03cB23E2e08960B", PhoneNumber: 1234567891, City: "Baroda", State: 'Gujarat' },
        { name: 'Apple iPad', Email: 'Electronics@gmail.com', WalletAddress: "0xf326Dec1A1A5e18292B2E341B03cB23E2e08960B", PhoneNumber: 1234567891, City: "Baroda", State: 'Gujarat' },
        { name: 'Apple Watch Series 7', Email: 'Accessories@gmail.com', WalletAddress: "0xf326Dec1A1A5e18292B2E341B03cB23E2e08960B", PhoneNumber: 1234567891, City: "Baroda", State: 'Gujarat' },
        { name: 'BANGE Anti Theft Backpack', Email: 'Accessories@gmail.com', WalletAddress: "0xf326Dec1A1A5e18292B2E341B03cB23E2e08960B", PhoneNumber: 1234567891, City: "Baroda", State: 'Gujarat' },
        { name: 'Canon EOS Rebel T7', Email: 'Electronics@gmail.com', WalletAddress: "0xf326Dec1A1A5e18292B2E341B03cB23E2e08960B", PhoneNumber: 1234567891, City: "Ahmedabad", State: 'Gujarat' },
        { name: 'Air Jordan', Email: 'Shoes@gmail.com', WalletAddress: "0xf326Dec1A1A5e18292B2E341B03cB23E2e08960B", PhoneNumber: 1234567891, City: "Ahmedabad", State: 'Gujarat' },
        { name: 'Amazon Fire TV', Email: 'Electronics@gmail.com', WalletAddress: "0xf326Dec1A1A5e18292B2E341B03cB23E2e08960B", PhoneNumber: 1234567891, City: "Baroda", State: 'Gujarat' },
        { name: 'Apple iPad', Email: 'Electronics@gmail.com', WalletAddress: "0xf326Dec1A1A5e18292B2E341B03cB23E2e08960B", PhoneNumber: 1234567891, City: "Baroda", State: 'Gujarat' },
        { name: 'Apple Watch Series 7', Email: 'Accessories@gmail.com', WalletAddress: "0xf326Dec1A1A5e18292B2E341B03cB23E2e08960B", PhoneNumber: 1234567891, City: "Baroda", State: 'Gujarat' },
        { name: 'BANGE Anti Theft Backpack', Email: 'Accessories@gmail.com', WalletAddress: "0xf326Dec1A1A5e18292B2E341B03cB23E2e08960B", PhoneNumber: 1234567891, City: "Baroda", State: 'Gujarat' },
        { name: 'Canon EOS Rebel T7', Email: 'Electronics@gmail.com', WalletAddress: "0xf326Dec1A1A5e18292B2E341B03cB23E2e08960B", PhoneNumber: 1234567891, City: "Ahmedabad", State: 'Gujarat' },
    ];


    const totalPages = Math.ceil(products.length / itemsPerPage);
    const displayedProducts = products.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

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
                        width: "100%"
                    }}
                >
                    <Typography variant="h4" sx={{ fontWeight: "bold" }}>Agent List</Typography>
                    <Typography variant="body2">Dashboard / Agent List</Typography>
                </Box>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">Total Agent</Typography>
                                <Typography variant="h5">3000</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">Total User</Typography>
                                <Typography variant="h5">60000</Typography>
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
                                        <TableCell className='table-row'>Phone Number</TableCell>
                                        <TableCell className='table-row'>City</TableCell>
                                        <TableCell className='table-row'>State</TableCell>
                                        <TableCell className='table-row'>Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {displayedProducts.map((product) => (
                                        <TableRow key={product.WalletAddress}>
                                            <TableCell>{product.name}</TableCell>
                                            <TableCell>{product.Email}</TableCell>
                                            <TableCell>
                                                {(product.WalletAddress).slice(0, 6)}....{(product.WalletAddress).slice(-4)}
                                            </TableCell>
                                            <TableCell>{product.PhoneNumber}</TableCell>
                                            <TableCell>{product.City}</TableCell>
                                            <TableCell>{product.State}</TableCell>
                                            <TableCell className='Action'>
                                                <IconButton onClick={() => { /* Edit logic here */ }}>
                                                    <EditIcon />
                                                </IconButton>
                                                <IconButton onClick={() => { /* Delete logic here */ }}>
                                                    <DeleteIcon />
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
    );
}

export default AgentList;