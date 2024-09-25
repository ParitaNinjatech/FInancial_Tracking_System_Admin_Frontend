import React,{useState} from 'react'
import {
    Grid, Card, CardContent, Typography, InputLabel, TextField, MenuItem, Select, Button, TableContainer, Table, TableHead, TableRow,
    TableCell, TableBody, Switch, Box, EditIcon,IconButton
} from "../../common/Index";
import "./Agent.css";
function AgentList() {

    const [isEditing, setIsEditing] = useState(false);
    const products = [
        { name: 'Air Jordan', category: 'Shoes', sku: 31063, price: 125, qty: 942, status: 'Inactive' },
        { name: 'Amazon Fire TV', category: 'Electronics', sku: 5829, price: 263.49, qty: 587, status: 'Scheduled' },
        { name: 'Apple iPad', category: 'Electronics', sku: 35946, price: 248.39, qty: 468, status: 'Publish' },
        { name: 'Apple Watch Series 7', category: 'Accessories', sku: 46658, price: 799, qty: 851, status: 'Scheduled' },
        { name: 'BANGE Anti Theft Backpack', category: 'Accessories', sku: 41867, price: 79.99, qty: 519, status: 'Inactive' },
        { name: 'Canon EOS Rebel T7', category: 'Electronics', sku: 63474, price: 399, qty: 810, status: 'Scheduled' },
    ];

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
                {/* Top Dashboard Cards  */}
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

                {/* {/ Product Table  */}
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
                            height: '1000px',
                            marginTop: '20px',
                            borderRadius: '8px',
                            boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
                            padding: '20px',

                        }}
                    >
                        <div style={{ marginTop: 20 }}>
                            <Grid container spacing={2} alignItems="center">

                            </Grid>

                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>UserName</TableCell>
                                            <TableCell>Email</TableCell>
                                            <TableCell>Wallet Address</TableCell>
                                            <TableCell>Phone Number</TableCell>
                                            <TableCell>City</TableCell>
                                            <TableCell>State</TableCell>
                                            <TableCell>Actions</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {products.map((product) => (
                                            <TableRow key={product.sku}>
                                                <TableCell>{product.name}</TableCell>
                                                <TableCell>{product.category}</TableCell>
                                                <TableCell>
                                                    <Switch checked={product.status === 'Publish'} />
                                                </TableCell>
                                                <TableCell>{product.sku}</TableCell>
                                                <TableCell>${product.price}</TableCell>
                                                <TableCell>{product.qty}</TableCell>
                                                <TableCell>
                                                    <IconButton onClick={()=>setIsEditing(false)} className="edit-icon">
                                                        <EditIcon />
                                                    </IconButton>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </Box>
                </Box>
            </div>
        </div>

    )
}

export default AgentList
