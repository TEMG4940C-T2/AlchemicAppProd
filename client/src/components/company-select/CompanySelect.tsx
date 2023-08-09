import React, { useState } from 'react';
import Select from 'react-select';


function CompanySelect({ onCompanyChange, companyList }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const tickers = [{label:"All", value:"All"}].concat(companyList.map(company => ({ label: company.commonName, value: company.ticker })));

  const handleChange = option => {
    setSelectedOption(option);
    onCompanyChange(option.value); // pass to parent
    // Do something with the selected option
    console.log(`Option selected:`, option);
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
    }
  }
  return (
    <Select
      value={selectedOption}
      onChange={handleChange}
      options={tickers}
      theme={darkTheme}
      styles={customStyles}
      placeholder={"Company"}
    />
  );
}

export default CompanySelect;