import React, {useState} from 'react'
import './CamelsPage.scss'
import SearchBar from '../../components/company-searchbar/CompanySearchbar'
import { Link, Route, Routes} from 'react-router-dom';
import { Overview } from '../../components/camels-components/overview/Overview';
import { Capitalization } from '../../components/camels-components/capitalization/Capitalization';
import { AssetQuality } from '../../components/camels-components/asset-quality/AssetQuality';
import { Profitability } from '../../components/camels-components/profitability/Profitability';
import { FundingLiquidity } from '../../components/camels-components/funding-and-liquidity/FundingLiquidity';
import { ManagementSupport } from '../../components/camels-components/management-and-support/ManagmentSupport';
import { EwiSettings } from '../../components/camels-components/EWI-settings/EwiSettings';

import { Tabs, Tab } from '@mui/material';

export const CamelsPage = () => {
    const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
    const [selectedCAMEL, setSelectedCAMEL] = useState<string | null>("Overview");


    const handleChange = (event, newValue) => {
        setSelectedCAMEL(newValue);
        console.log(selectedCAMEL)
      };

    return (
        <div className='camels-page-container'>
            <SearchBar setSelectedCompany={setSelectedCompany}/>
            <div>
                <Tabs  onChange={handleChange}>
                    <Tab label="Overview" value="Overview" />
                    <Tab label="Capitalization" value="Capitalization" />
                    <Tab label="AssetQuality" value="AssetQuality" />
                    <Tab label="Profitability" value="Profitability" />
                    <Tab label="FundingLiquidity" value="FundingLiquidity" />
                    <Tab label="ManagementSupport" value="ManagementSupport" />
                    <Tab label="EwiSettings" value="EwiSettings" />
                </Tabs>
                {selectedCAMEL === "Overview" && <Overview />}
                {selectedCAMEL === "Capitalization" && <Capitalization />}
                {selectedCAMEL === "AssetQuality" && <AssetQuality />}
                {selectedCAMEL === "Profitability" && <Profitability />}
                {selectedCAMEL === "FundingLiquidity" && <FundingLiquidity />}
                {selectedCAMEL === "ManagementSupport" && <ManagementSupport />}
                {selectedCAMEL === "EwiSettings" && <EwiSettings />}
            </div>
        </div>
    )
}