import React, { useState } from 'react';
import Select from 'react-select';

// List of OECD countries for dropdown
const countries = [
  { name: 'All', code: 'All' },
  { name: 'Australia', code: 'AUS' },
  { name: 'Austria', code: 'AUT' },
  { name: 'Belgium', code: 'BEL' },
  { name: 'Canada', code: 'CAN' },
  { name: 'Chile', code: 'CHL' },
  { name: 'Colombia', code: 'COL' },
  { name: 'Denmark', code: 'DNK' },
  { name: 'Finland', code: 'FIN' },
  { name: 'France', code: 'FRA' },
  { name: 'Germany', code: 'DEU' },
  { name: 'Hungary', code: 'HUN' },
  { name: 'Iceland', code: 'ISL' },
  { name: 'Ireland', code: 'IRL' },
  { name: 'Italy', code: 'ITA' },
  { name: 'Japan', code: 'JPN' },
  { name: 'Korea', code: 'KOR' },
  { name: 'Luxembourg', code: 'LUX' },
  { name: 'Mexico', code: 'MEX' },
  { name: 'Netherlands', code: 'NLD' },
  { name: 'Norway', code: 'NOR' },
  { name: 'Poland', code: 'POL' },
  { name: 'Portugal', code: 'PRT' },
  { name: 'Slovak Republic', code: 'SVK' },
  { name: 'Spain', code: 'ESP' },
  { name: 'Sweden', code: 'SWE' },
  { name: 'Switzerland', code: 'CHE' },
  { name: 'Turkey', code: 'TUR' },
  { name: 'United Kingdom', code: 'GBR' },
  { name: 'United States', code: 'USA' },
].map(country => ({ label: country.name, value: country.code }));

function CountrySelect({ onCountryChange }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = option => {
    setSelectedOption(option);
    onCountryChange(option.value); // pass to parent
  };

  const darkTheme = theme => ({
    ...theme,
    colors: {
      ...theme.colors,
      primary25: '#171c23',
      primary: '#101318',
      neutral0: '#3B4758',
      neutral80: '#EEF0F4',
    },
  });

  const customStyles = {
    control: (base, state) => ({
      ...base,
      border: '0px',
      boxShadow: 'none',
    }),
    option: (styles) => {
        return {...styles, color: '#EEF0F4'};
    },
    menu: (styles) => ({ 
      ...styles, 
      zIndex: 9999 
    })
  }
  return (
    <Select
      value={selectedOption}
      onChange={handleChange}
      options={countries}
      theme={darkTheme}
      styles={customStyles}
      placeholder={"Country"}
    />

   
  );
}

export default CountrySelect;