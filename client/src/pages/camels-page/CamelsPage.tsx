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
    { ratio: 'Ratio1', value: "1%", status: 'Fair' },
    { ratio: 'Ratio2', value: "1%", status: 'Poor' },
    { ratio: 'Ratio3', value: "1%", status: 'Excellent' },
    // add more data as needed
    ];
    const profitabilityJPM = [
    { ratio: 'Ratio1', value: "1%", status: 'Fair' },
    { ratio: 'Ratio2', value: "1%", status: 'Poor' },
    { ratio: 'Ratio3', value: "1%", status: 'Excellent' },
    // add more data as needed
    ];
    const assetQualityJPM = [
    { ratio: 'Ratio1', value: "1%", status: 'Fair' },
    { ratio: 'Ratio2', value: "1%", status: 'Poor' },
    { ratio: 'Ratio3', value: "1%", status: 'Excellent' },
    // add more data as needed
    ];
    const fundingLiquidityJPM = [
    { ratio: 'Ratio1', value: "1%", status: 'Fair' },
    { ratio: 'Ratio2', value: "1%", status: 'Poor' },
    { ratio: 'Ratio3', value: "1%", status: 'Excellent' },
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
                            <h3>Capital Adequacy </h3>
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
                                </tbody>
                            </table>
                        </div>

                    </div>
                    <div className='profitability'>
                        <div className='settings-container'>
                            <h3>Profitability </h3>
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
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
                <div className='col2' style={{display:"flex", flexDirection:"column", width:"37.5%", height:"92%", marginTop: "2%", marginBottom:"4%", marginRight:"2%"}}>
                    <div className='asset-quality'>
                        <div className='settings-container'>
                            <h3>Asset Quality </h3>
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
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='funding-liquidity'>
                        <div className='settings-container'>
                            <h3>Funding and Liquidity </h3>
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
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className='col3' style={{display:"flex", flexDirection:"column", width:"25%", height:"92%", marginTop: "2%", marginBottom:"4%"}}>
                    <div className='news'> 
                        <h3>Today's News</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}