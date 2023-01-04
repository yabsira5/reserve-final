import React, {useState} from 'react'
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import "../managerlist/managerList.css"

const NewBooking = () => {

    const defaultValues = {
        name: "",
        age: 0,
        gender: "",
        os: "",
        favoriteNumber: 0,
      };

    const [formValues, setFormValues] = useState(defaultValues);
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
          ...formValues,
          [name]: value,
        });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formValues);
      };
  return (
    <>
    <div className='list'>
        <Sidebar />

    <div className='listContainer'>
        <Navbar />

        <div className="datatableTitle">
            <h2>Add New Booking Information</h2>
        </div>

        <form onSubmit={handleSubmit}>

        <Grid container 
            direction="column" 
            rowSpacing={2} 
            columnSpacing={{xs: 1, sm: 2, md: 3}}
            justifyContent="center"
            alignItems="start"
        >
          <Grid item xs={6} md={4}>
            <TextField
              id="name-input"
              name="name"
              label="Name"
              type="text"
              value={formValues.name}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={4} md={4}>
            <TextField
              id="age-input"
              name="age"
              label="Age"
              type="number"
              value={formValues.age}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6} md={4}>
            <FormControl>
              <FormLabel>Gender</FormLabel>
              <RadioGroup
                name="gender"
                value={formValues.gender}
                onChange={handleInputChange}
                row
              >
                <FormControlLabel
                  key="male"
                  value="male"
                  control={<Radio size="small" />}
                  label="Male"
                />
                <FormControlLabel
                  key="female"
                  value="female"
                  control={<Radio size="small" />}
                  label="Female"
                />
                <FormControlLabel
                  key="other"
                  value="other"
                  control={<Radio size="small" />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl>
              <Select
                name="os"
                value={formValues.os}
                onChange={handleInputChange}
              >
                <MenuItem key="mac" value="mac">
                  Mac
                </MenuItem>
                <MenuItem key="windows" value="windows">
                  Windows
                </MenuItem>
                <MenuItem key="linux " value="linux">
                  Linux
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
          
          <Button variant="contained" color="primary" type="submit" sx={{mt: 6, mr: 3, ml: 4}}>
          Submit
        </Button>

        </Grid>
    </form>
    </div>
    </div>
    </>
  );
}

export default NewBooking;