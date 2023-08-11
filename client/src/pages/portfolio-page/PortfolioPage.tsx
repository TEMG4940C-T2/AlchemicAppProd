import React from 'react'
import './PortfolioPage.scss'
import BondTable from '../../components/bond-table/BondTable'
import MyLineChart from '../../components/line-chart/LineChart';

const fake_data = [
  { date: '2020-01-01', yield: 3.2, rating: 'Aa2', treasuryYield: 2.1 },
  { date: '2020-02-01', yield: 2.8, rating: 'Aa2', treasuryYield: 2.2 },
  { date: '2020-03-01', yield: 2.5, rating: 'Aa2', treasuryYield: 2.3 },
  { date: '2020-04-01', yield: 2.3, rating: 'Baa1', treasuryYield: 2.4 },
  { date: '2020-05-01', yield: 2.4, rating: 'Baa1', treasuryYield: 2.5 },
  { date: '2020-06-01', yield: 2.6, rating: 'Baa1', treasuryYield: 2.6 },
  { date: '2020-07-01', yield: 2.7, rating: 'Baa1', treasuryYield: 2.7 },
  { date: '2020-08-01', yield: 2.9, rating: 'Baa1', treasuryYield: null },
  { date: '2020-09-01', yield: 3.0, rating: 'B1', treasuryYield: 2.9 },
  { date: '2020-10-01', yield: 3.1, rating: 'B1', treasuryYield: 3.0 },
  { date: '2020-11-01', yield: 3.3, rating: 'B1', treasuryYield: 3.1 },
  { date: '2020-12-01', yield: 3.5, rating: 'B1', treasuryYield: 3.2 },
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
                        <h2 className='table-title'>High Probability of Downward Migration in Your Holdings</h2>
                        <div>
                          <BondTable data={topDownwardMigration} onRowSelected={() => {}}/>
                        </div>
                    </div>
                </div>

                <div className='high-prob-upward-mig-container'>
                    <div className="portfolio-table-container" style={{height: "90%"}}>
                        <h2 className='table-title'>High Probability of Upward Migration in Your Holdings</h2>
                        <div>
                          <BondTable data={topUpwardMigration} onRowSelected={() => {}}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='RHS-container'>
                <div className='yield-trend-graph-container'>
                    <div className='graph-container'>
                        <MyLineChart graphData={fake_data}/>
                    </div>
                </div>
                <div className='what-if-container'>
                    <h1>WHAT-IF Analysis</h1>
                </div>
            </div>


        </div>
    )
}