import React from 'react'
import './SideNavigation.scss'
import { MdPerson3 } from "react-icons/md";
import { MdDashboardCustomize } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineStock } from "react-icons/ai";
import { AiFillSetting } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { BiSolidBriefcase } from "react-icons/bi";
import { AiFillDashboard } from "react-icons/ai";
import { Link } from 'react-router-dom'
// create a side navigation component
// it should have icons for each of the following:
// Company Analysis, Bonds, Watchlist, Profile and settings and the bottom
// Clicking on each icon should redirect to the appropriate page
// it should have a company logo at the top

export const SideNavigation = () => {
    return (
        <div className="side-navigation">
            <Link className='link' to="camels"> <MdDashboardCustomize className='icon'/> CAMELS </Link>
            <Link className='link' to="bond-overview"> <AiOutlineStock className='icon'/>Overview</Link>
            <Link className='link' to="watchlist"> <AiFillEye className='icon'/>Watchlist </Link>
            <Link className='link' to="portfolio"> <BiSolidBriefcase className='icon'/>Portfolio </Link>
            <Link className='link' to="ewi-settings"> <AiFillDashboard className='icon'/>EWI</Link>
            <Link className='link' to="profile"> <MdPerson3 className='icon'/>Profile </Link>
            <Link className='link' to="settings"> <AiFillSetting className='icon'/>Settings </Link>
        </div>
    )
}
