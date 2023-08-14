import React, {useState, useEffect} from 'react'
import './EwiSettingsPage.scss'
import SearchBar from '../../components/company-searchbar/CompanySearchbar'
import WatchlistButton  from '../../components/button/Button'
import {BiDotsVerticalRounded} from 'react-icons/bi'
import SearchableTable from '../../components/searchable-table/SearchableTable'
import SelectEwi from '../../components/select-ewi/SelectEwi'
import BenchmarkSlider from '../../components/slider/Slider'
import DateForm from '../../components/date-form/DateForm'
import {BsDot} from 'react-icons/bs';


type Alert = {
    company: {name: string, ticker: string} | null,
    indicator: {indicator: string, benchmark: number} | null,
    sliderValue: any | null, // Replace `any` with the actual type of your slider value
    dates: {fromDate: string, toDate: string},
  };

const columns1 = [
    { field: 'id', hide: true },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'ticker', headerName: 'Ticker', width: 150 },
  ];
  
const rows1 = [
    { id: 1, name: 'JPMorgan Chase', ticker: 'JPM' },
    { id: 2, name: 'Bank of America', ticker: 'BAC' },
    { id: 3, name: 'Citigroup', ticker: 'C' },
    { id: 4, name: 'Wells Fargo', ticker: 'WFC' },
    { id: 5, name: 'Goldman Sachs', ticker: 'GS' },
    // add more rows as needed
];
const columns2 = [
    { field: 'id', hide: true },
    { field: 'indicator', headerName: 'Indicator', width: 150 },
  ];
  
const rows2 = [
    { id: 1, indicator: 'ROAA', benchmark: 1.2},
    { id: 2, indicator: 'ROAE', benchmark:12.5},
    { id: 3, indicator: 'CASA Ratio', benchmark:30},
    { id: 4, indicator: 'Net Interest Margin', benchmark:3},
    { id: 5, indicator: 'Efficiency Ratio', benchmark:55},
    // add more rows as needed
];

export const EwiSettingsPage= () => {
    
    const [selectedCompany, setSelectedCompany] = useState<any | null>(null);
    useEffect(() => {
        console.log("selected Company", selectedCompany)
    }, [selectedCompany])

    const [selectedIndicator, setSelectedIndicator] = useState<any | null>(null);
    useEffect(() => {
        console.log("selected Indicator", selectedIndicator)
    }, [selectedIndicator])
    
    
    const [selectedEwiAlert, setSelectedEwiAlert] = useState<any | null>("exceeds");
    useEffect(() => {
        console.log("selected EWI Alert", selectedEwiAlert)
    }, [selectedEwiAlert])

    const [selectedEwiSlider, setSelectedEwiSlider] = useState<any | null>(null);
    useEffect(() => {
        console.log("EWI Slider value", selectedEwiSlider)
    }, [selectedEwiSlider])

    
    const [alerts, setAlerts] = useState<Alert[]>([]);
    const handleFormSubmit = (data) => {
            const newAlert = {
                company: selectedCompany,
                indicator: selectedIndicator,
                sliderValue: selectedEwiSlider,
                ewiAlert: selectedEwiAlert,
                dates: data,
            };
            setAlerts((prevAlerts) => [...prevAlerts, newAlert]);
    };



    return (

        <div className='ewi-settings-container'>
            <div className='ewi-top' style={{height: "8%", marginBottom:"1%" ,padding: "2% 2%", background:"#1D232C", borderRadius:"15px" }}>
                <h1>EWI Settings</h1>
            </div>

            <div style={{display:"flex", gap:"1rem", height:"80%"}}>
                <div style={{display:"flex", flexDirection:"column", paddingBottom:"1%", gap:"1rem", width:"70%", background:"#1D232C", borderRadius:"15px"}}>
                    <h2>Add Alerts</h2>
                    <div style={{display:"flex",height:"50%", justifyContent:"center", gap:"1rem"}}>
                        <div style={{width: "48%", background:"#161B21", borderRadius:"15px" }}>
                            <SearchableTable columns={columns1} rows={rows1} onRowSelect={setSelectedCompany} />
                        </div>
                        <div style={{width: "48%", background:"#161B21", borderRadius:"15px" }}>
                            <SearchableTable columns={columns2} rows={rows2} onRowSelect={setSelectedIndicator} />
                        </div>
                    </div>
                    <div style={{display:"flex", flexDirection:"column", alignSelf:"center", width: "97%", height:"50%", background:"#161B21", borderRadius:"15px"}}>
                        <div style={{padding:"2% 2%", width: "100%"}}>
                            {selectedCompany && <h1>{selectedCompany.name} ({selectedCompany.ticker})</h1>}
                            {!selectedCompany && <h2 style={{textAlign:"left"}}>Please select a company</h2>}
                        </div>
                        <div style={{padding:"2% 2%", width: "100%"}}>
                            <div style={{display:"flex", justifyContent:"space-around", paddingBottom:"2%"}}>
                                <span style={{color:"#76797D", fontWeight:"500"}}>Indicator</span>
                                <span style={{color:"#76797D", fontWeight:"500"}}>Custom Number</span>
                            </div>
                            <div style={{display:"flex", justifyContent:"space-between", alignItems:"flex-start", height:"30%", paddingTop:"2%", borderTop:"3px solid #3B4758", borderBottom:"3px solid #3B4758"}}>
                                <div style={{width: "30%", marginLeft: "5%"}}>
                                    {selectedIndicator && <h2>{selectedIndicator.indicator}</h2>}
                                    {!selectedIndicator && <h2>Please select an indicator</h2>}
                                </div>
                                <div style={{display:"flex", justifyContent:"center", width: "30%", height:"50%"}}>
                                    <SelectEwi onOptionSelect={setSelectedEwiAlert} />
                                </div>
                                <div style={{width: "30%", marginRight: "5%"}}>
                                    <BenchmarkSlider onChange={setSelectedEwiSlider} benchmark={selectedIndicator?.benchmark}/>
                                </div>
                            </div>
                            <div style={{height:"40%"}}>
                                <DateForm onSubmit={handleFormSubmit}/>
                            </div>
                        </div>

                    </div>

                </div>
                <div className='ewi-alerts' style={{display:"flex", flexDirection:"column", width:"30%", background:"#1D232C", borderRadius:"15px", gap:"1rem", padding: "1% 1%"}}>
                    
                    <h2>My Alerts</h2>
                    {alerts.map((alert:any, index:any) => (
                        <div key={index} style={{background:"#161B21", padding: "2% 2%", borderRadius:"15px"}}>
                            <div style={{display: "flex", alignItems:"center", color:"#EEF0F4"}}> <h2>{alert.company?.name} ({alert.company?.ticker})</h2> </div>
                            <div style={{display: "flex",  alignItems:"center", justifyContent:"space-between"}}> 
                                <div style={{display: "flex",  alignItems:"center", color:"#DDE1E8", fontWeight:'500'}}> <BsDot size={"2rem"} style={{color:"#F932B5"}} /> {alert.indicator?.indicator} {alert.ewiAlert} {alert.sliderValue} </div>
                                <h3>Until: {alert.dates.toDate}</h3>
                            </div>
                        </div>
                    ))}
                 </div>

            </div>
        </div>
    )
}