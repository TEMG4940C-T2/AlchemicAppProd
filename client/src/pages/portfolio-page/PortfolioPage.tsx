import React, { useEffect, useState } from 'react'
import './PortfolioPage.scss'
import BondTable from '../../components/bond-table/BondTable'
import MyLineChart from '../../components/line-chart/LineChart';
import WhatIfForm from '../../components/what-if-form/WhatIfForm';
import SearchableTable from '../../components/searchable-table/SearchableTable'
import { FaArrowRight } from 'react-icons/fa';


const whatIfColumns = [
  { field: 'id', hide: true },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'ticker', headerName: 'Ticker', width: 150 },
  { field: 'spread', headerName: 'Spread', width: 150 },
  { field: 'moodysRating', headerName: 'Moodys Rating', width: 150 },
  { field: 'crMigPred', headerName: 'cr. Mig Prediction', width: 150 },
  { field: 'crSpreadPred', headerName: 'cr. Spread Prediction', width: 150 },
];


const whatIfRows = [
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
]

const topHoldings = [
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
]

const topDownwardMigration = [{
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
const topUpwardMigration = [{
  id: 11,
  name: "NVIDIA GLOBAL CONVERTIBLE BOND FUND",
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
  id: 12,
  name: "NVIDIA GLOBAL CONVERTIBLE BOND FUND",
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
  id: 13,
  name: "NVIDIA GLOBAL CONVERTIBLE BOND FUND",
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
  id: 14,
  name: "NVIDIA GLOBAL CONVERTIBLE BOND FUND",
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
  id: 15,
  name: "NVIDIA GLOBAL CONVERTIBLE BOND FUND",
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

// Default values for the form
const defaultValuesF = {
  id: 15,
  name: "NVIDIA GLOBAL CONVERTIBLE BOND FUND",
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
};


export const PortfolioPage = () => {

  const [prediction, setPrediction] = useState(null);

  const handlePrediction = (predictedRating) => {
    setPrediction(predictedRating);
  };



  const [defaultValues, setDefaultValues] = useState(defaultValuesF);
  const [selectedBond, setSelectedBond] = useState(defaultValuesF);
  useEffect(() => {
    console.log(selectedBond);
    setDefaultValues(selectedBond)
    console.log("defaultvalues", defaultValues)
  }, [selectedBond]);



  return (
    <div className='portfolio-page-container'>
      <div style={{ display: "flex", gap: "1rem", width: "100%" }}>
        <div className='LHS-container' style={{ gap: "1rem" }}>
          <div style={{ display: "flex", gap: "1rem", height: "10%" }}>
            <div className='total-assets-container'>
              <div className='text-container' style={{ padding: "2% 2%" }}>
                <h3>Total Assets - USD</h3>
                <h1>$ 323,503,235.26</h1>
                <h4><span style={{ color: "#10D096" }}>+6.50%</span> Since last month</h4>
              </div>
            </div>
          </div>
          <div className='top-holdings-container' style={{ borderRadius: "15px", height: "30%" }}>
            <div className="portfolio-table-container" style={{ height: "100%", padding: "2% 2%", borderRadius: "15px" }}>
              <div>
                <h2 className='table-title'>Top Holdings</h2>
              </div>
              <div style={{ height: "100%" }}>
                <BondTable data={topHoldings} onRowSelected={() => { }} />
              </div>
            </div>
          </div>

          <div className='high-prob-downward-mig-container' style={{ borderRadius: "15px", height: "30%" }}>
            <div className="portfolio-table-container" style={{ height: "100%", padding: "2% 2%", borderRadius: "15px" }}>
              <div>
                <h2 className='table-title'>Potential Downward Migration</h2>
              </div>
              <div style={{ height: "100%" }}>
                <BondTable data={topDownwardMigration} onRowSelected={() => { }} />
              </div>
            </div>
          </div>

          <div className='high-prob-upward-mig-container' style={{ borderRadius: "15px", height: "30%" }}>
            <div className="portfolio-table-container" style={{ height: "100%", padding: "2% 2%", borderRadius: "15px" }}>
              <div>
                <h2 className='table-title'>Potential Upward Migration</h2>
              </div>
              <div style={{ height: "100%" }}>
                <BondTable data={topUpwardMigration} onRowSelected={() => { }} />
              </div>
            </div>
          </div>
        </div>

        <div className='RHS-container' style={{ width: "100%", gap: "1rem" }}>
          <div className='profit-loss-container' style={{backgroundColor: "#1D232C", width: "100%", borderRadius:'15px' }}>
            <div className='text-container' style={{ padding: "2% 2%", width: "100%" }}>
              <h3>P/L Trend</h3>
              <h1 style={{ color: "#10D096" }}>+$ 503,235.26</h1>
              <h4 style={{ color: "#10D096" }}>Simple Yield +27.50%</h4>
            </div>
          </div>

        <div style={{backgroundColor: "#1D232C", height:"40%", borderRadius:"15px"}}>
          <SearchableTable columns={whatIfColumns} rows={whatIfRows} onRowSelect={setSelectedBond} />
        </div>
        <div style={{backgroundColor: "#1D232C", padding: "2% 2%", height:"40%", borderRadius:"15px" }}>
          <h2 style={{ paddingBottom: "2%", color:"#13AADA", textAlign:"left" }}> What If?</h2>
          <WhatIfForm defaultValues={defaultValues} onPrediction={handlePrediction} />
        </div>
        <div style={{backgroundColor: "#1D232C", borderRadius:"15px",  minHeight:"20%" }}>
            <div style={{ padding: "2% 2%"}}>
              <div className='bond-selected-predictions'>
                <div className='bond-selected-credit-migration' style={{ padding: "4% 4%" }}>
                  <h2> Probability of Credit Migration </h2>
                  <div className='bond-selected-credit-migration-stats' style={{ padding: "4% 4%", fontSize: "1.5rem" }}>
                    {prediction && (<>
                      <div style={{ paddingRight: "4%", borderRight: "2px solid #707070" }}>
                        <p className='bond-selected-credit-percentage'>60%</p>
                      </div>
                      <p className='bond-selected-credit-moodysRating'>A1</p>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <FaArrowRight size={20} color={"#FFFFFF"} />
                      </div>
                      <p className='bond-selected-credit-crMigPred'>A2</p>
                    </>)}
                  </div>
                </div>
                <div className='bond-selected-credit-spread' style={{ padding: "4% 4%"}}>
                  <h2>Credit Spread Prediction</h2>
                  <div className='bond-selected-credit-spread-stats' style={{ padding: "4% 4%" }}>
                    {prediction && (<>
                      <div style={{ display: "flex", justifyContent: "center", width: "100%", fontSize: "1.5rem" }}>
                        <div style={{ borderRight: "2px solid #707070", paddingRight: "4%" }}>
                          <p className='bond-selected-credit-percentage'>88%</p>
                        </div>
                        <div style={{ paddingLeft: "4%" }}>
                          <p className='bond-selected-credit-crSpreadPred' style={{ color: "#7DC1FF" }}>8.0 (+2%)</p>
                        </div>
                      </div>
                    </>)}
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>

    </div>
    </div >
  )
}