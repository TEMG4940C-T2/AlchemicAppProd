import * as React from 'react';
import Slider from '@mui/material/Slider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  components: {
    MuiSlider: {
      styleOverrides: {
        mark: {
          backgroundColor: '#F932B5',
          height: 16,
          width: 4,
          marginTop: -7,
        },
        markActive: {
          opacity: 1,
        },
      },
    },
  },
});

function BenchmarkSlider({ onChange, benchmark }) {
  const handleChange = (event, newValue) => {
    onChange(newValue);
  };

  const marks = [
    {
      value: benchmark,
      label: `${benchmark}%`,
    },
  ];

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ width: '100%' }}>
        <Slider
          defaultValue={benchmark}
          valueLabelDisplay="auto"
          aria-label="Benchmark slider"
          step={1}
          marks={marks}
          min={Math.max(0, benchmark - 20)}
          max={benchmark + 20}
          onChange={handleChange}
        />
      </Box>
    </ThemeProvider>
  );
}

export default BenchmarkSlider;