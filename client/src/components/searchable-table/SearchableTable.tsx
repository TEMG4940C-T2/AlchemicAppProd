import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const useStyles = makeStyles({
  root: {
    '& ::-webkit-scrollbar': {
      width: '12px',
    },
    '& ::-webkit-scrollbar-thumb': {
      backgroundColor: '#888',
      borderRadius: '6px',
    },
    '& ::-webkit-scrollbar-thumb:hover': {
      backgroundColor: '#555',
    },
  },
});

export default function DataTable({ columns, rows, onRowSelect }) {
  const classes = useStyles();
  const [searchText, setSearchText] = React.useState('');
  const [filteredRows, setFilteredRows] = React.useState([]);

  React.useEffect(() => {
    setFilteredRows(
      rows.filter((row) =>
        Object.keys(row).some((field) =>
          String(row[field])
            .toLowerCase()
            .includes(searchText.toLowerCase())
        )
      )
    );
  }, [rows, searchText]);

  const handleRowClick = (params) => {
    onRowSelect(params.row);
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <div
        className={classes.root}
        style={{ display: 'flex', flexDirection: 'column', height: '100%', gap:"1rem", padding:"2%", width: '100%' }}
      >
        <TextField
          id="search"
          label="Search"
          type="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          sx={{
            backgroundColor: "#1D232C",
            borderRadius: '16px',
            border: "0px",
            
          }}
        />
        <div>
          <DataGrid
            rows={filteredRows}
            columns={columns}
            onRowClick={handleRowClick}
            hideFooterPagination
            hideFooter
            sx={{
              backgroundColor: "#1D232C",
              borderRadius: '16px',
              border: "0px",
              
            }}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}