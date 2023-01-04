import React from 'react'
import "./table.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
    const rows = [
      {
        bookingId: 1143155,
        bookedHotel: "Capital Hotel",
        img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
        customerName: "John Smith",
        date: "1 March",
        price: 785,
        roomType: "Standard",
        status: "Approved",
      },
      {
        bookingId: 2235235,
        bookedHotel: "Hilton Hotel",
        img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
        customerName: "Michael Doe",
        date: "1 March",
        price: 900,
        roomType: "Deluxe",
        status: "Pending",
      },
      {
        bookingId: 2342353,
        bookedHotel: "Sheraton Hotel",
        img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
        customerName: "John Smith",
        date: "1 March",
        price: 35,
        roomType: "Standard",
        status: "Pending",
      },
      {
        bookingId: 2357741,
        bookedHotel: "Harmony Hotel",
        img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
        customerName: "Jane Smith",
        date: "1 March",
        price: 920,
        roomType: "Standard",
        status: "Approved",
      },
      {
        bookingId: 2342355,
        bookedHotel: "Harambe Hotel",
        img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
        customerName: "Harold Carol",
        date: "1 March",
        price: 2000,
        roomType: "Deluexe",
        status: "Pending",
      },
    ];
    return (
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 610 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Booking ID</TableCell>
              <TableCell className="tableCell">Booked Hotel</TableCell>
              <TableCell className="tableCell">Customer Name</TableCell>
              <TableCell className="tableCell">Date</TableCell>
              <TableCell className="tableCell">Price</TableCell>
              <TableCell className="tableCell">Room Type</TableCell>
              <TableCell className="tableCell">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="tableCell">{row.bookingId}</TableCell>
                <TableCell className="tableCell">
                  <div className="cellWrapper">
                    <img src={row.img} alt="" className="image" />
                    {row.bookedHotel}
                  </div>
                </TableCell>
                <TableCell className="tableCell">{row.customerName}</TableCell>
                <TableCell className="tableCell">{row.date}</TableCell>
                <TableCell className="tableCell">ETB {row.price}</TableCell>
                <TableCell className="tableCell">{row.roomType}</TableCell>
                <TableCell className="tableCell">
                  <span className={`status ${row.status}`}>{row.status}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };
  
  export default List;