import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function DateForm({ onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const fromDate = formData.get('from-date');
    const toDate = formData.get('to-date');
    onSubmit({fromDate, toDate});
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{display:"flex", flexDirection:"column", gap:"1rem", paddingTop:"2%"}}>
        <TextField
          id="from-date"
          label="From date"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          sx={{ width: '100%'}}
          name="from-date"
        />
        <TextField
          id="to-date"
          label="To date"
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          sx={{ width: '100%'}}
          name="to-date"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
        >
          Create Alert
        </Button>
      </Box>
    </ThemeProvider>
  );
}

export default DateForm;