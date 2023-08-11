import React, {useState} from 'react'
import './EwiSettingsPage.scss'
import SearchBar from '../../components/company-searchbar/CompanySearchbar'
import WatchlistButton  from '../../components/button/Button'
import {BiDotsVerticalRounded} from 'react-icons/bi'
import SearchableTable from '../../components/searchable-table/SearchableTable'

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

export const EwiSettingsPage= () => {
    const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
    const [selectedCAMEL, setSelectedCAMEL] = useState<string | null>("Overview");
    
    const handleChange = (event, newValue) => {
        setSelectedCAMEL(newValue);
        console.log(selectedCAMEL)
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
                            <h2>Berkshire</h2>
                            <SearchableTable columns={columns1} rows={rows1} />
                        </div>
                        <div style={{width: "48%", background:"#161B21", borderRadius:"15px" }}>
                            <h2>net interest margin</h2>
                        </div>
                    </div>
                    <div style={{display:"flex", alignSelf:"center", width: "97%", height:"50%", background:"#161B21", borderRadius:"15px"}}>
                    </div>

                </div>
                <div className='ewi-alerts' style={{display:"flex", flexDirection:"column", width:"30%", background:"#1D232C", borderRadius:"15px"}}>
                    <h2>My Alerts</h2>
                 </div>

            </div>
        </div>
    )
}