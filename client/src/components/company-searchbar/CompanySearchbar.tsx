import React, { useState, ChangeEvent, FunctionComponent } from 'react';
import Autosuggest from 'react-autosuggest';
import './CompanySearchbar.scss'


interface SearchBarProps {
  setSelectedCompany: (company: string) => void;
}
// Imagine you have a list of companies that you'd like to autocomplete from:
const companies = [
  'JPMorgan Chase & Co (JPM)',
  'Mitsubishi UFJ Financial Group Inc (MUFG)',
  'BNP Paribas SA (BNP)',
  'HSBC Holdings plc (HSBC)',
  'Credit Agricole SA (ACA)',
  'Barclays PLC (BARC)',
  'Danske Bank A/S (DANSKE)',
  'Deutsche Bank AG (DBK)',
  'UniCredit S.p.A. (UCG)',
  'Societe Generale SA (GLE)',
  'Royal Bank of Canada (RY)',
  'Bank of Nova Scotia (BNS)',
  'Toronto-Dominion Bank (TD)',
  'Commonwealth Bank of Australia (CBA)',
  'Westpac Banking Corporation (WBC)',
  'National Australia Bank Ltd. (NAB)',
  'Australia and New Zealand Banking Group Limited (ANZ)',
  'ING Groep N.V. (INGA)',
  'Santander Group (SAN)',
  'BBVA (BBVA)',
  'Nordea Bank Abp (NDA-FI)',
  'Credit Suisse Group AG (CSGN)',
  'UBS Group AG (UBSG)'
  // add more companies here
  ];

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : companies.filter(comp =>
    comp.toLowerCase().slice(0, inputLength) === inputValue
  );
};

const SearchBar: FunctionComponent<SearchBarProps> = ({ setSelectedCompany }) => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const onChange = (event: ChangeEvent<any>, { newValue }: any) => {
    setValue(newValue);
    setSelectedCompany(newValue);
  };
  
  // Autosuggest will call this function every time you need to update suggestions.
  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  // When suggestion is clicked, Autosuggest needs to populate the input
  // based on the clicked suggestion.
  const getSuggestionValue = suggestion => suggestion;

  // Use your imagination to render suggestions.
  const renderSuggestion = suggestion => (
    <div className="suggestion">
      {suggestion}
    </div>
  );

  const inputProps = {
    placeholder: 'Type a company name',
    value,
    onChange: onChange
  };

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={inputProps}
      theme={{  // Add the classes here
        input: 'searchBar',
        suggestionsContainer: 'suggestionsContainer',
      }}
    />
  );
}

export default SearchBar;