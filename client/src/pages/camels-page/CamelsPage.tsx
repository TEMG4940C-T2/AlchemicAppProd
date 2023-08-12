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
    { ratio: 'E/A', value: "7.85%", status: 'Fair' },
    { ratio: 'T1 Cap Ratio', value: "15.9%", status: 'Poor' },
    { ratio: 'T1 Cap', value: "24610338 M", status: 'Excellent' },
    // add more data as needed
    ];
    const profitabilityJPM = [
    { ratio: 'ROA', value: "1.29%", status: 'Fair' },
    { ratio: 'NIM', value: "1.39%", status: 'Poor' },
    { ratio: 'ROE', value: "16.4%", status: 'Excellent' },
    // add more data as needed
    ];
    const assetQualityJPM = [
    { ratio: 'NPL/GL', value: "0.86%", status: 'Fair' },
    { ratio: 'LLR/NPL', value: "177%", status: 'Poor' },
    { ratio: 'EaR', value: "8.71%", status: 'Excellent' },
    { ratio: 'NPL/TL', value: "3.14%", status: 'Excellent' },
    { ratio: 'NPL/TA', value: "0.24%", status: 'Excellent' },
    // add more data as needed
    ];
    const fundingLiquidityJPM = [
    { ratio: 'NL/CD', value: "43.1%", status: 'Fair' },
    { ratio: 'CD/TL', value: "71.3%", status: 'Poor' },
    { ratio: 'DSCR', value: "1.40%", status: 'Excellent' },
    { ratio: 'LA/TA', value: "37.0%", status: 'Excellent' },
    { ratio: 'Security/Asset', value: "17.8%", status: 'Excellent' },
    // add more data as needed
    ];

    const capitalAdequacyMitsu = [
    { ratio: 'E/A', value: "4.55%", status: 'Fair' },
    { ratio: 'T1 Cap Ratio', value: "12.4%", status: 'Poor' },
    { ratio: 'T1 Cap', value: "1546437796 M", status: 'Excellent' },
    // add more data as needed
    ];
    const profitabilityMitsu = [
    { ratio: 'ROA', value: "1.29%", status: 'Fair' },
    { ratio: 'NIM', value: "1.39%", status: 'Poor' },
    { ratio: 'ROE', value: "16.4%", status: 'Excellent' },
    // add more data as needed
    ];
    const assetQualityMitsu = [
    { ratio: 'NPL/GL', value: "1.33%", status: 'Fair' },
    { ratio: 'LLR/NPL', value: "-83.0%", status: 'Poor' },
    { ratio: 'EaR', value: "15.8%", status: 'Excellent' },
    { ratio: 'NPL/TL', value: "8.64%", status: 'Excellent' },
    { ratio: 'NPL/TA', value: "0.39%", status: 'Excellent' },
    // add more data as needed
    ];
    const fundingLiquidityMitsu = [
    { ratio: 'NL/CD', value: "48.2%", status: 'Fair' },
    { ratio: 'CD/TL', value: "63.4%", status: 'Poor' },
    { ratio: 'DSCR', value: "0.34%", status: 'Excellent' },
    { ratio: 'LA/TA', value: "50.0%", status: 'Excellent' },
    { ratio: 'Security/Asset', value: "20.4%", status: 'Excellent' },
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
                        {selectedCompany ? selectedCompany : "Company Name"}
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
                                        <td>{item.value}</td>
                                        <td>
                                        <div className={`status ${item.status}`}>
                                            {item.status}
                                        </div>
                                        </td>
                                    </tr>
                                    ))}
                                    {selectedCompany == "Mitsubishi UFJ Financial Group Inc (MUFG)" && capitalAdequacyMitsu.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.ratio}</td>
                                        <td>{item.value}</td>
                                        <td>
                                        <div className={`status ${item.status}`}>
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
                                        <td>{item.value}</td>
                                        <td>
                                        <div className={`status ${item.status}`}>
                                            {item.status}
                                        </div>
                                        </td>
                                    </tr>
                                    ))}
                                    {selectedCompany == "Mitsubishi UFJ Financial Group Inc (MUFG)" && profitabilityMitsu.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.ratio}</td>
                                        <td>{item.value}</td>
                                        <td>
                                        <div className={`status ${item.status}`}>
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
                                        <td>{item.value}</td>
                                        <td>
                                        <div className={`status ${item.status}`}>
                                            {item.status}
                                        </div>
                                        </td>
                                    </tr>
                                    ))}
                                    {selectedCompany == "Mitsubishi UFJ Financial Group Inc (MUFG)" && assetQualityMitsu.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.ratio}</td>
                                        <td>{item.value}</td>
                                        <td>
                                        <div className={`status ${item.status}`}>
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
                                        <td>{item.value}</td>
                                        <td>
                                        <div className={`status ${item.status}`}>
                                            {item.status}
                                        </div>
                                        </td>
                                    </tr>
                                    ))}
                                    {selectedCompany == "Mitsubishi UFJ Financial Group Inc (MUFG)" && fundingLiquidityMitsu.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.ratio}</td>
                                        <td>{item.value}</td>
                                        <td>
                                        <div className={`status ${item.status}`}>
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
                    <div className='news'> 
                        <h3 style={{fontSize:"1.5rem", fontWeight:"600"}}>Today's News</h3>
                        {selectedCompany == "JPMorgan Chase & Co (JPM)" &&
                        <img className='news-img' src={"https://nairametrics.com/wp-content/uploads/2022/01/CBN.jpg"}/>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}