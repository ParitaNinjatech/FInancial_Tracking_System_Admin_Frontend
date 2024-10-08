import React from "react";
import {
  Box,
  Typography,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "../../common/Index";
import "./Dashboard.css";

function Dashboard() {
  const data = [
    { name: "Jan", uv: 4000, pv: 2400 },
    { name: "Feb", uv: 3000, pv: 1398 },
    { name: "Mar", uv: 2000, pv: 9800 },
    { name: "Apr", uv: 2780, pv: 3908 },
    { name: "May", uv: 1890, pv: 4800 },
    { name: "Jun", uv: 2390, pv: 3800 },
    { name: "Jul", uv: 3490, pv: 4300 },
  ];
  return (
    <div className="background-image">
      <div className="box-Container">
        <Box
          sx={{
            backgroundColor: "#fff",
            padding: "15px",
            borderRadius: "8px",
            boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
            marginBottom: "20px",
            width: " 99%",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Admin Panel
          </Typography>
          <Typography variant="body2">Dashboard</Typography>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            backgroundColor: "#f4f4f4",
            padding: "20px",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h4" color="error">
                5645
              </Typography>
              <Typography variant="subtitle1">Chrome</Typography>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h4" color="warning">
                4250
              </Typography>
              <Typography variant="subtitle1">Mozilla</Typography>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h4" color="primary">
                3450
              </Typography>
              <Typography variant="subtitle1">Safari</Typography>
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h4" color="secondary">
                2500
              </Typography>
              <Typography variant="subtitle1">Explorer</Typography>
            </Box>
          </Box>

          {/* Chart */}
          <Box
            sx={{
              backgroundColor: "#fff",
              height: "300px",
              marginTop: "20px",
              borderRadius: "8px",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
              padding: "20px",
            }}
          >
            <LineChart width={600} height={250} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="uv" stroke="#00D2FF" />
            </LineChart>
          </Box>

          <Box
            sx={{
              backgroundColor: "#fff",
              height: "300px",
              marginTop: "20px",
              borderRadius: "8px",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
              padding: "20px",
            }}
          >
            <LineChart width={600} height={250} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="uv" stroke="#00D2FF" />
            </LineChart>
          </Box>
        </Box>
      </div>
    </div>
  );
}

export default Dashboard;
