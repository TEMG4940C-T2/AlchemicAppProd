import React, { useState, useEffect } from 'react';

import './BondOverviewPage.scss'
import CountrySelect from '../../components/country-select/CountrySelect'
import CompanySelect from '../../components/company-select/CompanySelect'
import BondTableOverview from '../../components/bond-table-overview/BondTableOverview';
import Button from '../../components/button/Button';
import MyLineChart from '../../components/line-chart/LineChart';
import {FaArrowRight} from 'react-icons/fa';


  export const BondOverviewPage = () => {
    const [selectedCompany, setSelectedCompany] = useState<string|null>("All");  
    const [selectedRow, setSelectedRow] = useState<any | null>(false);
  
    
    const [rawData, setRawData] = useState<any>([]);
    useEffect(() => {
      fetch('data/bonds_data_frontend.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        return response.json();
      })
      .then(data => setRawData(data))
      .catch(error => {
          console.error('Error:', error);
        });
      }, []);
      


    const [selectedCountry, setSelectedCountry] = useState<string|null>("All");
    const [companyList, setCompanyList] = useState<any[]>([]);  
    useEffect(() => {
      if (selectedCountry) {
        let companies: { ticker: any; commonName: any; }[] = [];
        if (selectedCountry === 'All') {
          for (let country in rawData) {
            companies = companies.concat(Object.entries(rawData[country]).map(([ticker, data]:any) => {
              return {
                ticker: ticker,
                commonName: data[0].CommonName
              };
            }));
          }
        } else {
          companies = Object.entries(rawData[selectedCountry]).map(([ticker, data]:any) => {
            return {
              ticker: ticker,
              commonName: data[0].CommonName
            };
          });
        }
        console.log(companies)
        setCompanyList(companies);
      } else {
        setCompanyList([]);
      }
    }, [selectedCountry]);
  


    const [data, setData] = useState<any>([]);
    useEffect(() => {
      if (selectedCountry && selectedCompany) {
          if (selectedCountry === 'All' && selectedCompany === 'All') {
            // Flatten the raw data object to an array and set the data
            const allData = Object.values(rawData).flatMap((country: any) => Object.values(country).flat());
            setData(allData);
          }  else if (selectedCountry === 'All') {
            // Flatten the raw data object to an array and filter by ticker
            const allData = Object.values(rawData).flatMap((country: any) => Object.values(country).flat());
            const filteredData = allData.filter((bond: any) => bond.Ticker === selectedCompany);
            setData(filteredData);
          } else if (selectedCompany === 'All') {
              // Get all companies from the specific country and flatten the array
              const allData = Object.values(rawData[selectedCountry]).flat();
              setData(allData);
            } else {
              // Get specific company from the specific country
              const companyData = rawData[selectedCountry][selectedCompany];
              if (companyData) {
                setData(companyData);
              } else {
                setData([]);
              }
            }
          } else {
            setData([]);
          }
  }, [selectedCompany, selectedCountry]);



    const handleCountryChange = (selectedCountry) => {
      setSelectedCountry(selectedCountry);
      console.log('Selected country: ', selectedCountry);
    };
    
    const handleCompanyChange = (selectedCompany) => {
      setSelectedCompany(selectedCompany);
      console.log('Selected company: ', selectedCompany);
    };
  

    // const data = bonds_data;
    const fake_data = [
        {
          id: 1,
          name: "MS1 INVF Global Convertible Bond Fund",
          ticker: "LU12345678",
          cpn: "4.15",
          maturity: "30/10/2025",
          spread: "6.31",
          ytm: "8.960%",
          moodysRating: "Aaa",
          crMigPred: "Aa1",
          crMigCL: "52%",
          crSpreadPred: "4.2 (+6%)",
          crSpreadSL: "88%",
        },
        {
          id: 2,
          name: "MS2 INVF Global Convertible Bond Fund",
          ticker: "LU12345678",
          cpn: "4.15",
          maturity: "30/10/2025",
          spread: "6.31",
          ytm: "8.960%",
          moodysRating: "Ba1",
          crMigPred: "Ba2",
          crMigCL: "52%",
          crSpreadPred: "4.2 (+6%)",
          crSpreadSL: "88%",
        },
        {
          id: 3,
          name: "MS3 INVF Global Convertible Bond Fund",
          ticker: "LU12345678",
          cpn: "4.15",
          maturity: "30/10/2025",
          spread: "6.31",
          ytm: "8.960%",
          moodysRating: "Caa1",
          crMigPred: "B2",
          crMigCL: "52%",
          crSpreadPred: "4.2 (+6%)",
          crSpreadSL: "88%",
        },
        {
          id: 4,
          name: "MS4 INVF Global Convertible Bond Fund",
          ticker: "LU12345678",
          cpn: "4.15",
          maturity: "30/10/2025",
          spread: "6.31",
          ytm: "8.960%",
          moodysRating: "Caa1",
          crMigPred: "Caa1",
          crMigCL: "52%",
          crSpreadPred: "4.2 (+6%)",
          crSpreadSL: "88%",
        },
        {
          id: 5,
          name: "CREDIT SUISSE (LUX) GLOBAL CONVERTIBLE BOND FUND",
          ticker: "LU12345678",
          cpn: "4.15",
          maturity: "30/10/2025",
          spread: "6.31",
          ytm: "8.960%",
          moodysRating: "Aaa",
          crMigPred: "Caa2",
          crMigCL: "80%",
          crSpreadPred: "4.2 (+6%)",
          crSpreadSL: "88%",
        },
        {
          id: 6,
          name: "CREDIT SUISSE (LUX) GLOBAL CONVERTIBLE BOND FUND",
          ticker: "LU12345678",
          cpn: "4.15",
          maturity: "30/10/2025",
          spread: "6.31",
          ytm: "8.960%",
          moodysRating: "Aaa",
          crMigPred: "Caa2",
          crMigCL: "80%",
          crSpreadPred: "4.2 (+6%)",
          crSpreadSL: "88%",
        },
        {
          id: 7,
          name: "CREDIT SUISSE (LUX) GLOBAL CONVERTIBLE BOND FUND",
          ticker: "LU12345678",
          cpn: "4.15",
          maturity: "30/10/2025",
          spread: "6.31",
          ytm: "8.960%",
          moodysRating: "Aaa",
          crMigPred: "Caa2",
          crMigCL: "80%",
          crSpreadPred: "4.2 (+6%)",
          crSpreadSL: "88%",
        },
        {
          id: 8,
          name: "CREDIT SUISSE (LUX) GLOBAL CONVERTIBLE BOND FUND",
          ticker: "LU12345678",
          cpn: "4.15",
          maturity: "30/10/2025",
          spread: "6.31",
          ytm: "8.960%",
          moodysRating: "Aaa",
          crMigPred: "Caa2",
          crMigCL: "80%",
          crSpreadPred: "4.2 (+6%)",
          crSpreadSL: "88%",
        },
        {
          id: 9,
          name: "CREDIT SUISSE (LUX) GLOBAL CONVERTIBLE BOND FUND",
          ticker: "LU12345678",
          cpn: "4.15",
          maturity: "30/10/2025",
          spread: "6.31",
          ytm: "8.960%",
          moodysRating: "Aaa",
          crMigPred: "Caa2",
          crMigCL: "80%",
          crSpreadPred: "4.2 (+6%)",
          crSpreadSL: "88%",
        },
        {
          id: 10,
          name: "CREDIT SUISSE (LUX) GLOBAL CONVERTIBLE BOND FUND",
          ticker: "LU12345678",
          cpn: "4.15",
          maturity: "30/10/2025",
          spread: "6.31",
          ytm: "8.960%",
          moodysRating: "Aaa",
          crMigPred: "Caa2",
          crMigCL: "80%",
          crSpreadPred: "4.2 (+6%)",
          crSpreadSL: "88%",
        },

      ];

    const handleRowSelected = (row) => {
        if (row) {
            setSelectedRow(row);
            console.log("selectedrow", selectedRow);
        } else {
            setSelectedRow(null);
        }
    };


    const [graphData, setGraphData] = useState<{ date: any; yield: any; rating: any; treasuryYield: any; }[]>([]);
    useEffect(() => {
        if (selectedRow && selectedRow.RIC == "606822BK9=") {
            console.log("based selectedrow", selectedRow);
            fetch(`data/${selectedRow.RIC}.json`)
            .then(response => {
              if (!response.ok) {
                throw new Error('Failed to fetch');
              }
              return response.json();
            })
            .then(convertGraphData)
            .catch(error => {
              console.error('Error:', error);
            });
          }
        else if (selectedRow && selectedRow.RIC == "46625HHV5=") {
            console.log("based selectedrow", selectedRow);
            fetch(`data/${selectedRow.RIC}.json`)
            .then(response => {
              if (!response.ok) {
                throw new Error('Failed to fetch');
              }
              return response.json();
            })
            .then(convertGraphData)
            .catch(error => {
              console.error('Error:', error);
            });
          }
      }, [selectedRow]);

    function convertGraphData(data){
      let convertedData = Object.entries(data).map(([date, data]:any) => ({
        date,
        yield: data.YTM,
        rating: data.Rating,
        treasuryYield: data.TreasuryYield
      }));
      setGraphData(convertedData)
      console.log("graph data", graphData)
    }

    

    return (
        <div className='bond-page-container'>
            <div className='top-container' style={{width:"98%"}}>
              <h1>Bonds</h1>
              <div className='bond-filter-container'>
                  <div className='bond-filter-item'> 
                      <CountrySelect onCountryChange={handleCountryChange} />
                  </div>
                  <div className='bond-filter-item'> 
                      <CompanySelect companyList={companyList} onCompanyChange={handleCompanyChange} />
                  </div>
              </div>
            </div>
            <div className='bond-table-container'>
                <BondTableOverview data={data ? data: fake_data} onRowSelected={handleRowSelected} />
            </div>
            <div className='bond-selected-item-graph-container'>
                <div className='bond-selected-container'>
                    <div className='bond-selected-item'>
                            <div className='bond-selected-title'>
                                <div className='bond-selected-title-text' style={{padding:"4% 2%"}}>
                                    {selectedRow && selectedRow.RIC == "606822BK9=" &&(<>
                                    <p style={{fontSize:"2rem"}} className='bond-selected-name'>{selectedRow.CommonName}</p>
                                    <p style={{fontSize:"1.5rem"}} className='bond-selected-ticker'>{selectedRow.ISIN}</p>
                                    <div style={{color:"#7DC1FF", fontWeight:'600', paddingTop:"4%", display:"flex", flexDirection:"column", gap:"1rem"}}>
                                      <div style={{display:"flex", justifyContent:"space-between"}}>
                                        <span>YTM:</span><span style={{color:"white"}}> 8.960%</span>
                                        <span>Maturity:</span><span style={{color:"white"}}> {selectedRow.Maturity}</span>
                                      </div>
                                    </div> 
                                    </>)}
                                    {selectedRow && selectedRow.RIC == "46625HHV5=" &&(<>
                                    <p style={{fontSize:"2rem"}} className='bond-selected-name'>{selectedRow.CommonName}</p>
                                    <p style={{fontSize:"1.5rem"}} className='bond-selected-ticker'>{selectedRow.ISIN}</p>
                                    <div style={{color:"#7DC1FF", fontWeight:'600', paddingTop:"4%", display:"flex", flexDirection:"column", gap:"1rem"}}>
                                        <div style={{display:"flex", justifyContent:"space-between"}}>
                                          <span>YTM:</span><span style={{color:"white"}}> 8.960%</span>
                                          <span>Maturity:</span><span style={{color:"white"}}> {selectedRow.Maturity}</span>
                                        </div>
                                    </div> 
                                    </>)}
                                    {!selectedRow && (<>
                                     <h2> Please Select a Bond</h2>
                                    </>)}
                                </div>
                                <div className='bond-selected-title-watchlist-button'>
                                    {selectedRow && selectedRow.RIC == "606822BK9=" &&(<>
                                      <Button text={"Watchlist +"}/>
                                    </>)}
                                    {selectedRow && selectedRow.RIC == "46625HHV5=" &&(<>
                                      <Button text={"Watchlist +"}/>
                                    </>)}
                                </div>
                            </div>
                            <div className='bond-selected-predictions'>
                                <div className='bond-selected-credit-migration' style={{padding: "4% 4%"}}>
                                    <h2> Probability of Credit Migration </h2>
                                    <div className='bond-selected-credit-migration-stats' style={{padding: "4% 4%", fontSize:"1.5rem"}}>
                                        {selectedRow && selectedRow.RIC == "606822BK9=" &&(<>
                                        <div style={{paddingRight:"4%", borderRight:"2px solid #707070"}}>
                                          <p className='bond-selected-credit-percentage'>60%</p>
                                        </div>
                                        <p className='bond-selected-credit-moodysRating'>{selectedRow.MoodysRating}</p>
                                        <div style={{display:"flex", alignItems:"center"}}>
                                          <FaArrowRight size={20} color={"#FFFFFF"}  />
                                        </div>
                                        <p className='bond-selected-credit-crMigPred'>A2</p>
                                        </>)}
                                        {selectedRow && selectedRow.RIC == "46625HHV5=" &&(<>
                                          <div style={{paddingRight:"4%", borderRight:"2px solid #707070"}}>
                                            <p className='bond-selected-credit-percentage'>52%</p>
                                          </div>
                                            <p className='bond-selected-credit-moodysRating'>{selectedRow.MoodysRating}</p>
                                          <div style={{display:"flex", alignItems:"center"}}>
                                            <FaArrowRight size={20} color={"#FFFFFF"}  />
                                          </div>
                                          <p className='bond-selected-credit-crMigPred'>Aa3</p>
                                        </>)}
                                    </div>
                                </div>
                                <div className='bond-selected-credit-spread' style={{padding: "4% 4%"}}>
                                    <h2>Credit Spread Prediction</h2>
                                    <div className='bond-selected-credit-spread-stats' style={{padding: "4% 4%"}}>
                                        {selectedRow && selectedRow.RIC == "606822BK9=" && <>
                                        <div style={{display:"flex", justifyContent:"center", width:"100%", fontSize:"1.5rem"}}>
                                          <div style={{borderRight: "2px solid #707070", paddingRight:"4%"}}>
                                            <p className='bond-selected-credit-percentage'>88%</p>
                                          </div>
                                          <div style={{paddingLeft:"4%"}}>
                                            <p className='bond-selected-credit-crSpreadPred' style={{color:"#7DC1FF"}}>8.0 (+2%)</p>
                                          </div>
                                        </div>
                                        </>}
                                        {selectedRow && selectedRow.RIC == "46625HHV5=" && <>
                                        <div style={{display:"flex", justifyContent:"center", width:"100%", fontSize:"1.5rem"}}>
                                          <div style={{borderRight: "2px solid #707070", paddingRight:"4%"}}>
                                            <p className='bond-selected-credit-percentage'>85%</p>
                                          </div>
                                          <div style={{paddingLeft:"4%"}}>
                                            <p className='bond-selected-credit-crSpreadPred' style={{color:"#7DC1FF"}}>7.8 (-2%)</p>
                                          </div>
                                        </div>
                                        </>}
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <div className='bond-selected-graph'>
                    <h2 className='bond-selected-graph-title'>Yield Comparison</h2>
                    <MyLineChart graphData={graphData}/>
                </div>
            </div>
        </div>
    )
}