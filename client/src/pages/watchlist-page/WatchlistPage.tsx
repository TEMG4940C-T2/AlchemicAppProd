import React, { useState, useEffect } from "react";

import "./WatchlistPage.scss";
import BondTable from "../../components/bond-table/BondTable";
import MyLineChart from "../../components/line-chart/LineChart";
import EWIMeter from "../../components/ewi-meter/EWIMeter";
import { Grid } from "@mui/material";
import CompanySelect from "../../components/company-select/CompanySelect";

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

interface Broker {
  company: string;
  name: string;
  desc: string;
  value: number;
  benchmark: number;
  segmentColors?: Array<string>;
}

const Indicators = [
  { id: 1, indicator: "ROAA", benchmark: 1.2 },
  { id: 2, indicator: "ROAE", benchmark: 12.5 },
  { id: 3, indicator: "CASA Ratio", benchmark: 30 },
  { id: 4, indicator: "Net Interest Margin", benchmark: 3 },
  { id: 5, indicator: "Efficiency Ratio", benchmark: 55 },
];

function calculateValuePercentages(benchmark_value) {
  return [
    0,
    benchmark_value * 0.5,
    benchmark_value * 1.5,
    benchmark_value * 2.0,
  ];
  // return [0, 0.2, 0.5, 1.0];
}

const metrics: Record<string, Array<Broker>> = {
  JPM: [
    {
      company: "JP Morgan",
      name: "ROAA",
      desc: "Current Assets / Current Liabilities",
      value: 1.22,
      benchmark: 1.2,
    },
    {
      company: "JP Morgan",
      name: "ROAE",
      desc: "(Current Assets - Inventory) / Current Liabilities",
      value: 15.4,
      benchmark: 12.5,
    },
    {
      company: "JP Morgan",
      name: "CASA Ratio",
      desc: "Total Debt / Total Assets",
      value: 0,
      benchmark: 30,
    },
    {
      company: "JP Morgan",
      name: "Net Interest Margin",
      desc: "Non-Performing Loan / Total Gross Loans",
      value: 3.39,
      benchmark: 3,
    },
    {
      company: "JP Morgan",
      name: "Efficiency Ratio",
      desc: "Total Debt / EBIT",
      value: 50,
      benchmark: 55,
    },
  ],
  MUFG: [
    {
      company: "Mitsubishi UFJ Financial Group",
      name: "ROAA",
      desc: "Current Assets / Current Liabilities",
      value: 0.28,
      benchmark: 1.2,
    },
    {
      company: "Mitsubishi UFJ Financial Group",
      name: "ROAE",
      desc: "(Current Assets - Inventory) / Current Liabilities",
      value: 5.94,
      benchmark: 12.5,
    },
  ],

  def: [],
};

const companyList = [
  { id: 1, commonName: "JPMorgan Chase", ticker: "JPM" },
  { id: 2, commonName: " Mitsubishi UFJ Financial Group", ticker: "MUFG" },
  { id: 3, commonName: "Bank of America", ticker: "BAC" },
  { id: 4, commonName: "Citigroup", ticker: "C" },
  { id: 5, commonName: "Wells Fargo", ticker: "WFC" },
  { id: 6, commonName: "Goldman Sachs", ticker: "GS" },
  // add more rows as needed
];

const DropdownComponent = () => {
  const [selectedCompany, setSelectedCompany] = useState("");

  const handleCompanyChange = (event) => {
    {
      setSelectedCompany(event.target.value);
    }
    console.log("Selected company: ", selectedCompany);
  };
};

export const WatchlistPage = () => {
  const [selectedCompany, setSelectedCompany] = useState("");

  const handleCompanyChange = (e) => {
    const selectedCompany = e;
    setSelectedCompany(e);
  };

  let selectedMetrics = metrics["def"];
  if (selectedCompany in metrics) {
    selectedMetrics = metrics[selectedCompany];
  }

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
          <div className="early-warning-indicators-title-contianer">
            <h1 className="early-warning-indicator-title">
              Early Warning Indicators
            </h1>
            <div className="company-select-container">
              <CompanySelect
                companyList={companyList}
                onCompanyChange={handleCompanyChange}
              />
            </div>
          </div>

          {/* a gauge chart from react-d3-speedometer
          https://www.npmjs.com/package/react-d3-speedometer
        
           */}
          {/* create a table of 2*3
            1st row: 3 gauges
            2nd row: 3 line charts
            */}
          <div className="EWI-container">
            <Grid
              container
              rowSpacing={20}
              columnSpacing={0}
              spacing={{ xs: 3, md: 2 }}
              columns={{ xs: 3, sm: 4, md: 12 }}
            >
              {Array.from(selectedMetrics).map((metric, index) => (
                <Grid item xs={0} sm={4} md={4} key={index}>
                  <div className="EWIMeter-container">
                    <EWIMeter
                      metricCompany={metric.company}
                      metricName={metric.name}
                      metricDesc={metric.desc}
                      quantity={metric.value}
                      segmentColors={metric.segmentColors}
                      lastUpdated={1}
                      stops={calculateValuePercentages(metric.benchmark)}
                      benchmark={metric.benchmark}
                    />
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};
