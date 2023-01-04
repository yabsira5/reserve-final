import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from '@mui/material';
import "./GuestList.css";

const columns = [
  { field: 'id', headerName: 'ID', width: 40 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: false, //if changed to true, you can edit by double clicking
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: false, //if changed to true, you can edit by double clicking
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 50,
    editable: false, //if changed to true, you can edit by double clicking
  },
  {
    field: 'email',
    headerName: 'Email',
    type: 'email',
    width: 220,
    editable: false, //if changed to true, you can edit by double clicking
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, email: "jonsnow@gmail.com" },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, email: "cerseilannister@gmail.com" },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, email: "jamielannister@gmail.com" },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, email: "aryastark@gmail.com" },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, email: "Targaryan@gmail.com" },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150, email: "melissandre@gmail.com" },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, email: "cliffordfererraw@gmail.com" },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, email: "francesrossini@gmail.com" },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, email: "roxieharvey@gmail.com" },
];

export default function GuestList() {
  return (
    
  <>  
        <div className="datatable">
        <div className="datatableTitle">
            <h2>List of Guests</h2>
            <Link to="/users/new" className="link">
          Add New
        </Link>
    </div>
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
        
    </>
  );
}