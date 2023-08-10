import React, {useState} from 'react'
import './EwiSettingsPage.scss'
import SearchBar from '../../components/company-searchbar/CompanySearchbar'
import WatchlistButton  from '../../components/button/Button'
import {BiDotsVerticalRounded} from 'react-icons/bi'

export const EwiSettingsPage= () => {
    const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
    const [selectedCAMEL, setSelectedCAMEL] = useState<string | null>("Overview");
    
    const handleChange = (event, newValue) => {
        setSelectedCAMEL(newValue);
        console.log(selectedCAMEL)
      };
      

    return (

        <div className='ewi-settings-container'>
            Ewi settings page
        </div>
    )
}