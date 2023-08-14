import React, {useState} from 'react'
import './CamelsPage.scss'
import SearchBar from '../../components/company-searchbar/CompanySearchbar'
import WatchlistButton  from '../../components/button/Button'
import {BiDotsVerticalRounded} from 'react-icons/bi'

export const CamelsPage= () => {
    const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
    const [selectedCAMEL, setSelectedCAMEL] = useState<string | null>("Overview");
    
    const handleChange = (event, newValue) => {
        setSelectedCAMEL(newValue);
        console.log(selectedCAMEL)
      };
    
    
    const capitalAdequacyJPM = [
    { ratio: 'E/A', value: "7.85%", status: 'Avg: 8.89% Std: 8.82%', color: "default" },
    { ratio: 'T1 Cap Ratio', value: "15.9%", status: 'Avg: 14.0% Std: 3.95%', color: "default" },
    // { ratio: 'T1 Cap', value: "24610338 M", status: 'Avg: 6.86e13 Std: ' },
    // add more data as needed
    ];
    const profitabilityJPM = [
    { ratio: 'ROA', value: "1.29%", status: 'Avg: 0.93% Std: 10.0%', color: "default" },
    { ratio: 'NIM', value: "1.39%", status: 'Avg: 2.45% Std: 2.92%', color: "default" },
    { ratio: 'ROE', value: "16.4%", status: 'Avg: 8.46% Std: 37.6%', color: "default" },
    // add more data as needed
    ];
    const assetQualityJPM = [
    { ratio: 'NPL/GL', value: "0.86%", status: 'Avg: 4.59% Std: 25.8%', color: "default" },
    { ratio: 'LLR/NPL', value: "177", status: 'Avg: 1.80 Std: 10.38', color: "TwoStdAbove" },
    { ratio: 'EaR', value: "8.71%", status: 'Avg: 42.3% Std: 100%', color: "default" },
    { ratio: 'NPL/TL', value: "3.14%", status: 'Avg: 27.6% Std: 74.5%', color: "default" },
    { ratio: 'NPL/TA', value: "0.24%", status: 'Avg: 2.29% Std: 4.83%', color: "default" },
    // add more data as needed
    ];
    const fundingLiquidityJPM = [
    { ratio: 'NL/CD', value: "43.1%", status: 'Avg: 1.74 Std: 18.96', color: "TwoStdAbove" },
    { ratio: 'CD/TL', value: "71.3%", status: 'Avg: 75.7% Std: 19.2%', color: "default" },
    { ratio: 'DSCR', value: "1.40%", status: 'Avg: 1.01% Std: 10.2%', color: "default" },
    { ratio: 'LA/TA', value: "37.0%", status: 'Avg: 21.9% Std: 13.3%', color: "TwoStdAbove" },
    { ratio: 'Security/Asset', value: "17.8%", status: 'Avg: 14.7% Std: 11.2%', color: "default" },
    // add more data as needed
    ];

    const capitalAdequacyMitsu = [
    { ratio: 'E/A', value: "4.55%", status: "Avg: 8.89% Std: 8.82%", color:"default"},
    { ratio: 'T1 Cap Ratio', value: "12.4%", status: "Avg: 14.0% Std: 3.95%", color:"default"},
    // { ratio: 'T1 Cap', value: "1546437796 M", status: "Avg: 6.86e13 Std:"},
    // add more data as needed
    ];
    const profitabilityMitsu = [
    { ratio: 'ROA', value: "1.29%", status: "Avg: 0.93% Std: 10.0%", color:"default"},
    { ratio: 'NIM', value: "1.39%", status: "Avg: 2.45% Std: 2.92%", color:"default"},
    { ratio: 'ROE', value: "16.4%", status: "Avg: 8.46% Std: 37.6%", color:"default"},
    // add more data as needed
    ];
    const assetQualityMitsu = [
    { ratio: 'NPL/GL', value: "1.33%", status: "Avg: 4.59% Std: 25.8%", color:"default"},
    { ratio: 'LLR/NPL', value: "-83.0", status: "Avg: 1.80 Std: 10.38", color:"OneStdBelow"},
    { ratio: 'EaR', value: "15.8%", status: "Avg: 42.3% Std: 100%", color:"default"},
    { ratio: 'NPL/TL', value: "8.64%", status: "Avg: 27.6% Std: 74.5%", color:"default"},
    { ratio: 'NPL/TA', value: "0.39%", status: "Avg: 2.29% Std: 4.83%", color:"default"},
    // add more data as needed
    ];
    const fundingLiquidityMitsu = [
    { ratio: 'NL/CD', value: "48.2%", status: "Avg: 1.74 Std: 18.96", color:"OneStdAbove"},
    { ratio: 'CD/TL', value: "63.4%", status: "Avg: 75.7% Std: 19.2%", color:"default"},
    { ratio: 'DSCR', value: "0.34%", status: "Avg: 1.01% Std: 10.2%", color:"default"},
    { ratio: 'LA/TA', value: "50.0%", status: "Avg: 21.9% Std: 13.3%", color:"OneStdAbove"},
    { ratio: 'Security/Asset', value: "20.4%", status: "Avg: 14.7% Std: 11.2%", color:"default"},
    // add more data as needed
    ];
    return (

        <div className='camels-settings-container'>
            <div className='top-half' style={{ height:"20%", display:"flex", flexDirection: "column", gap: "1.25rem"}}>
                <div style={{display:"flex", flexDirection:"column", width: "100%", padding:"2% 1%", background:"#1D232C", borderRadius:"15px"  }}>
                    <h1 className='title'>CAMELS </h1>
                    <div  style={{maxWidth:"20%"}}> 
                        <SearchBar setSelectedCompany={setSelectedCompany}/>
                    </div>
                </div>
                <div style={{display:"flex", height:"100%", width: "100%", gap:"1rem", padding:"2% 1%", background:"#1D232C", borderRadius:"15px"  }}>
                    <h1>
                        {selectedCompany ? selectedCompany : "Please Select a Company"}
                    </h1>
                    <div className='watchlist-btn' style={{marginLeft: "auto"}}>
                        <WatchlistButton text="watchlist"/>
                    </div>
                </div>
            </div>
            <div className='bottom-half' style={{width:"100%", height:"80%", display:"flex"}}>
                <div className='col1' style={{display:"flex", flexDirection:"column", width:"37.5%", height:"92%", marginTop: "2%", marginBottom:"4%", marginRight:"2%" }}>
                    <div className='capital-adequacy'>
                        <div className='settings-container'>
                            <h3 style={{fontSize:"1.5rem", fontWeight:"600"}}>Capital Adequacy </h3>
                            <div className="settings-icon">
                                <BiDotsVerticalRounded/> {/* This is the HTML entity for the vertical ellipsis (three dots) icon */}
                            </div>
                        </div>
                        <div>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Ratio</th>
                                        <th>Value</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {selectedCompany == "JPMorgan Chase & Co (JPM)" && capitalAdequacyJPM.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.ratio}</td>
                                        <td className={`${item.color}`}>{item.value}</td>
                                        <td>
                                        <div className={`status`}>
                                            {item.status}
                                        </div>
                                        </td>
                                    </tr>
                                    ))}
                                    {selectedCompany == "Mitsubishi UFJ Financial Group Inc (MUFG)" && capitalAdequacyMitsu.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.ratio}</td>
                                        <td className={`${item.color}`}>{item.value}</td>
                                        <td>
                                        <div className={`status`}>
                                            {item.status}
                                        </div>
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    </div>
                    <div className='profitability'>
                        <div className='settings-container'>
                            <h3 style={{fontSize:"1.5rem", fontWeight:"600"}}>Profitability </h3>
                            <div className="settings-icon">
                                <BiDotsVerticalRounded/> {/* This is the HTML entity for the vertical ellipsis (three dots) icon */}
                            </div>
                        </div>
                        <div>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Ratio</th>
                                        <th>Value</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {selectedCompany == "JPMorgan Chase & Co (JPM)" && profitabilityJPM.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.ratio}</td>
                                        <td className={`${item.color}`}>{item.value}</td>
                                        <td>
                                        <div className={`status`}>
                                            {item.status}
                                        </div>
                                        </td>
                                    </tr>
                                    ))}
                                    {selectedCompany == "Mitsubishi UFJ Financial Group Inc (MUFG)" && profitabilityMitsu.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.ratio}</td>
                                        <td className={`${item.color}`}>{item.value}</td>
                                        <td>
                                        <div className={`status`}>
                                            {item.status}
                                        </div>
                                        </td>
                                    </tr>
                                    ))}



                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
                <div className='col2' style={{display:"flex", flexDirection:"column", width:"37.5%", height:"92%", marginTop: "2%", marginBottom:"4%", marginRight:"2%"}}>
                    <div className='asset-quality'>
                        <div className='settings-container'>
                            <h3 style={{fontSize:"1.5rem", fontWeight:"600"}}>Asset Quality </h3>
                            <div className="settings-icon">
                                <BiDotsVerticalRounded/> {/* This is the HTML entity for the vertical ellipsis (three dots) icon */}
                            </div>
                        </div>
                        <div>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Ratio</th>
                                        <th>Value</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {selectedCompany == "JPMorgan Chase & Co (JPM)" && assetQualityJPM.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.ratio}</td>
                                        <td className={`${item.color}`}>{item.value}</td>
                                        <td>
                                        <div className={`status`}>
                                            {item.status}
                                        </div>
                                        </td>
                                    </tr>
                                    ))}
                                    {selectedCompany == "Mitsubishi UFJ Financial Group Inc (MUFG)" && assetQualityMitsu.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.ratio}</td>
                                        <td className={`${item.color}`}>{item.value}</td>
                                        <td>
                                        <div className={`status`}>
                                            {item.status}
                                        </div>
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='funding-liquidity'>
                        <div className='settings-container'>
                            <h3 style={{fontSize:"1.5rem", fontWeight:"600"}}>Funding and Liquidity </h3>
                            <div className="settings-icon">
                                <BiDotsVerticalRounded/> {/* This is the HTML entity for the vertical ellipsis (three dots) icon */}
                            </div>
                        </div>
                        <div>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th>Ratio</th>
                                        <th>Value</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {selectedCompany == "JPMorgan Chase & Co (JPM)" && fundingLiquidityJPM.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.ratio}</td>
                                        <td className={`${item.color}`}>{item.value}</td>
                                        <td>
                                        <div className={`status`}>
                                            {item.status}
                                        </div>
                                        </td>
                                    </tr>
                                    ))}
                                    {selectedCompany == "Mitsubishi UFJ Financial Group Inc (MUFG)" && fundingLiquidityMitsu.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.ratio}</td>
                                        <td className={`${item.color}`}>{item.value}</td>
                                        <td>
                                        <div className={`status`}>
                                            {item.status}
                                        </div>
                                        </td>
                                    </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className='col3' style={{display:"flex", flexDirection:"column", width:"25%", height:"92%", marginTop: "2%", marginBottom:"4%"}}>
                    <div className='news' style={{paddingTop:"6%"}}> 
                        <h3 style={{fontSize:"1.5rem", fontWeight:"600", paddingBottom:"5%"}}>Today's News</h3>
                        {selectedCompany == "JPMorgan Chase & Co (JPM)" && <div style={{display:"flex", flexDirection:"column", backgroundColor:"#161B21", padding:"2% 2%", borderRadius:"15px"}}>
                            <img style={{borderRadius:"15px"}} className='news-img' src={"https://nairametrics.com/wp-content/uploads/2022/01/CBN.jpg"}/>
                            <span style={{fontSize:"1.5rem", fontWeight:"500", width:"100%", overflow:"hidden", color:"#FFFFFF", letterSpacing:"0.05rem", padding:"2% 0%"}}> Nigeria Central Bank Reveals Deals With Goldman, JPMorgan </span>
                            <span style={{fontSize:"1.25rem", fontWeight:"400", width:"100%", overflow:"hidden", color:"#FFFFFF", letterSpacing:"0.05rem", lineHeight:"2rem"}}> Nigeria’s central bank disclosed large dollar deals with JP Morgan and Goldman Sachs in documents that also confirmed it broke limits on lending to the government.
Annual financial statements, published for the first time since 2015, refer to two securities lending agreements with JP Morgan Chase & Co. for $7 billion in 2021 and two of $500 million with Goldman Sachs Group Inc. </span>
                        </div>}
                        {selectedCompany == "Mitsubishi UFJ Financial Group Inc (MUFG)" && <div style={{display:"flex", flexDirection:"column", backgroundColor:"#161B21", padding:"2% 2%", borderRadius:"15px"}}>
                            <img style={{borderRadius:"15px"}} className='news-img' src={"https://www.ft.com/__origami/service/image/v2/images/raw/https%253A%252F%252Fcms-image-bucket-production-ap-northeast-1-a7d2.s3.ap-northeast-1.amazonaws.com%252Fimages%252F7%252F4%252F7%252F5%252F46245747-3-eng-GB%252FCropped-168968304120230718N%2520MUFG%2520Morgan%2520Stanley.jpg?width=700&fit=cover&gravity=faces&dpr=2&quality=medium&source=nar-cms"}/>
                            <span style={{fontSize:"1.5rem", fontWeight:"500", width:"100%", overflow:"hidden", color:"#FFFFFF", letterSpacing:"0.05rem", padding:"2% 0%"}}> MUFG and Morgan Stanley expand 15-year-old brokerage alliance </span>
                            <span style={{fontSize:"1.25rem", fontWeight:"400", width:"100%", overflow:"hidden", color:"#FFFFFF", letterSpacing:"0.05rem", lineHeight:"2rem"}}> TOKYO -- Mitsubishi UFJ Financial Group and Morgan Stanley on Tuesday announced a revamp of their nearly 15-year-old partnership, reinforcing the relationship amid a changing of the guard at the top. </span>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}