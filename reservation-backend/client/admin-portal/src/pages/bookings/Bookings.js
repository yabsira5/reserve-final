import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';
import NavBar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'managerName',
      headerName: 'Manager name',
      width: 150,
      editable: false,
    },
    {
      field: 'hotelName',
      headerName: 'Hotel name',
      width: 150,
      editable: false,
    },
    {
      field: 'priceperRoom',
      headerName: 'Price per Room',
      type: 'number',
      width: 140,
      editable: false,
    },
    {
      field: 'email',
      headerName: 'Email',
      type: 'email',
      width: 220,
      editable: false,
    },
    {
      field: 'bookedBy',
      headerName: 'Booked By',
      type: 'name',
      width: 160,
      editable: false,
    },
  ];
  
  const rows = [
    { id: 1, hotelName: 'Capital', managerName: 'Jon', priceperRoom: 35, email: "jonsnow@gmail.com", bookedBy: 'Yabs' },
    { id: 2, hotelName: 'Harmony', managerName: 'Cersei', priceperRoom: 42, email: "cerseilannister@gmail.com", bookedBy: 'Zabs'  },
    { id: 3, hotelName: 'Sheraton', managerName: 'Jaime', priceperRoom: 45, email: "jamielannister@gmail.com", bookedBy: 'Yoni'  },
    { id: 4, hotelName: 'Hilton', managerName: 'Arya', priceperRoom: 16, email: "aryastark@gmail.com", bookedBy: 'Yeabs'  },
    { id: 5, hotelName: 'Ghion', managerName: 'Daenerys', priceperRoom: null, email: "Targaryan@gmail.com", bookedBy: 'Sam'  },
    { id: 6, hotelName: 'Washington', managerName: null, priceperRoom: 150, email: "melissandre@gmail.com", bookedBy: 'Zeki'  },
    { id: 7, hotelName: 'Addis', managerName: 'Ferrara', priceperRoom: 44, email: "cliffordfererraw@gmail.com", bookedBy: 'Olly'  },
    { id: 8, hotelName: 'Hello', managerName: 'Rossini', priceperRoom: 36, email: "francesrossini@gmail.com", bookedBy: 'Tsedi'  },
    { id: 9, hotelName: 'Dero ', managerName: 'Harvey', priceperRoom: 65, email: "roxieharvey@gmail.com",bookedBy: 'Sosi'  },
  ];

export default function Bookings() {
  return (
    <>
    <div className="list">
        <Sidebar />

    <div className="listContainer">
        <NavBar />

        <div className="datatableTitle">
            <h2>Booking Table for Admin</h2>
        </div>

        <div style={{
            position: "absolute",
            top: 60,
            right: 0,
            padding: "5px",
            fontSize: "18px",
            cursor: "pointer",
        }}>
            <Link to="/bookings/newBooking" style={{ textDecoration: "none" }}>
                <Button
                    variant="contained"
                    sx={{mt: 6, mr: 3 }}
                >Add New Reservation</Button>
            </Link>
        </div>
        <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
        />
        </Box>
        </div>
        </div>
    </>
  );
}