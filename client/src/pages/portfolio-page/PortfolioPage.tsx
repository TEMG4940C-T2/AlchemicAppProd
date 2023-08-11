import React from 'react'
import './PortfolioPage.scss'
import BondTable from '../../components/bond-table/BondTable'
import MyLineChart from '../../components/line-chart/LineChart';
import { Grid, Select, TextField } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

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


export const PortfolioPage = () => {
    return (
        <div className='portfolio-page-container'>
            <div className='LHS-container' >
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <div className='total-assets-container'>
                        <div className='text-container'>
                            <h3>Total Assets - USD</h3>
                            <h1>$ 323,503,235.26</h1>
                            <h4>+6.50% Since last month</h4>
                        </div>
                    </div>
                    <div className='profit-loss-container'>
                        <div className='text-container'>
                            <h3>P/L Trend</h3>
                            <h1>+$ 503,235.26</h1>
                            <h4>Simple Yield +27.50%</h4>
                        </div>
                    </div>
                </div>
                <div className='top-holdings-container'>
                    <div className="portfolio-table-container" style={{height: "90%"}}>
                        <h2 className='table-title'>Top Holdings</h2>
                        <div>
                          <BondTable data={topHoldings} onRowSelected={() => {}}/>
                        </div>
                    </div>
                </div>

                <div className='high-prob-downward-mig-container'>
                    <div className="portfolio-table-container" style={{height: "90%"}}>
                        <h2 className='table-title' style={{ color: "#FF316A" }}>Potential Downward Migration</h2>
                        <div>
                          <BondTable data={topDownwardMigration} onRowSelected={() => {}}/>
                        </div>
                    </div>
                </div>

                <div className='high-prob-upward-mig-container'>
                    <div className="portfolio-table-container" style={{height: "90%"}}>
                        <h2 className='table-title' style={{ color: "#31EF44" }}>Potential Upward Migration</h2>
                        <div>
                          <BondTable data={topUpwardMigration} onRowSelected={() => {}}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='RHS-container'>
                <div className='yield-trend-graph-container'>
                    <div className='graph-container'>
                        <MyLineChart/>
                    </div>
                </div>
                <div className='what-if-container'>
                    <h1 className='what-if-title'>What-If Analysis</h1>
                    <div className='what-if-section'>
                      <h3 className='what-if-section-title'>Select a Bond</h3>
                      <div className='what-if-section-content'>
                      {/* TODO: create a `bond-select` selector and fix it */}
                        <Select
                            className='what-if-section-content'
                            placeholder={'Select a bond'}
                            // isSearchable={true}
                            // isClearable={true}
                            onChange={() => {}}
                        />
                      </div>
                    </div>
                    <hr />
                    <Grid container spacing={1}>
                        <Grid item className="what-if-field" xs={2}>
                          <h5>YTM</h5>
                        </Grid>
                        <Grid item className='what-if-value' xs={2}>
                          <div>6.90%</div>
                        </Grid>
                        <Grid item className="what-if-field" xs={2}>
                          <h5>Maturity</h5>
                        </Grid>
                        <Grid item className='what-if-value' xs={2}>
                          <div>30/10/2024</div>
                        </Grid>
                        <Grid item className="what-if-field" xs={2}>
                          <h5>Cr. Mig. Pred.</h5>
                        </Grid>
                        <Grid item className='what-if-value' xs={2}>
                          <div>Baa to A</div>
                        </Grid>
                        <Grid item className="what-if-field" xs={2}>
                          <h5>Bid</h5>
                        </Grid>
                        <Grid item className="what-if-value" xs={2}>
                          <div>99.67</div>
                        </Grid>
                        <Grid item className="what-if-field" xs={2}>
                          <h5>Ask</h5>
                        </Grid>
                        <Grid item className="what-if-value" xs={2}>
                          <div>99.31</div>
                        </Grid>
                        <Grid item className="what-if-field" xs={2}>
                          <h5>Cr. Spread Pred</h5>
                        </Grid>
                        <Grid item className="what-if-value" xs={2}>
                          <div>
                            <KeyboardArrowUpIcon style={{ color: "green" }} />
                            4.2 (+6%)
                          </div>
                        </Grid>
                    </Grid>
                    <div className='what-if-section'>
                      <h3 className='what-if-section-title'>Amount</h3>
                      <div className='what-if-amount'>
                        <div>USD</div>
                        <TextField
                          id="outlined-basic"
                          variant="outlined"
                          placeholder="Enter Amount"
                          style={{ width: "100%" }}
                        />
                      </div>
                    </div>
                    <hr />
                    <div className='what-if-section'>
                      <h3 className='what-if-section-title'>Holding Period</h3>
                      <div className='what-if-section-content'>
                        3 years
                      </div>
                    </div>
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                      <div className='predicted-npv-container'>
                        <div className='text-container'>
                          <h3>Predicted NPV - USD</h3>
                          <h1>$ 420,221,956.56</h1>
                          <h4>+18.50%</h4>
                        </div>
                    </div>
                    <div className='new-yield-container'>
                        <div className='text-container'>
                            <h3>New Yield</h3>
                            <h1>45.2%</h1>
                            <h4>+4.50%</h4>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    )
}