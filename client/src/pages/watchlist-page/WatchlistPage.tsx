import React from "react";
import "./WatchlistPage.scss";
import BondTable from "../../components/bond-table/BondTable";
import MyLineChart from "../../components/line-chart/LineChart";

const yourWatchlist = [
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
];

export const WatchlistPage = () => {
  return (
    <div className="watchlist-page-container">
      <h1>Watchlists</h1>
      <div className="table-container">
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <div className="your-watchlist-table">
            <div style={{ height: "90%" }}>
              <h2 className="table-title">Your Watchlist</h2>
              <BondTable data={yourWatchlist} onRowSelected={() => {}} />
            </div>
          </div>
          <div className="top-winners">
            <div style={{ height: "90%" }}>
              <h2 className="table-title">Top Gainers</h2>
              <BondTable data={yourWatchlist} onRowSelected={() => {}} />
            </div>
          </div>
        </div>
        <div className="early-warning-indicators">
          <h1 className="early-warning-indicator-title">
            Early Warning Indicators
          </h1>
        </div>
      </div>
    </div>
  );
};
