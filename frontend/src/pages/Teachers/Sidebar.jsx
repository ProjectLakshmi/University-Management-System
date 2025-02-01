import React,{useState,useEffect} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {BsGraphUp,BsPeople,BsPerson,BsFileText,BsBook,BsGraphDown,BsCalendar,BsGear,BsChatDots,BsCalendarEvent,BsQuestionSquare} from "react-icons/bs";
import {SidebarContainer,SidebarHeader,SidebarNav,SidebarNavItem,StyledLink,SidebarIcon,Logo,ToggleButton,ToggleIcon} from '../../styles/SidebarStyles';

const Sidebar=()=>{
    const[isOpen,setIsOpen]=useState(true);
    const toggleSidebar=()=>{
        setIsOpen(!isOpen)
    }

    return(
        <SidebarContainer style={{width:isOpen?'250px':'30px'}}>
            <SidebarHeader>
                <Logo  src="../assets/bg1.pg" alt="Logo"/>
            </SidebarHeader>
            <SidebarNav>
                <SidebarNavItem>
                    <SidebarIcon>
                        <BsGraphUp />
                    </SidebarIcon>
                    <StyledLink to='/teacher/dashboard'>Dashboard</StyledLink>
                </SidebarNavItem>
                <SidebarNavItem>
                    <SidebarIcon>
                        <BsPeople />
                    </SidebarIcon>
                    <StyledLink to='/teachers/classes'>Classes</StyledLink>
                </SidebarNavItem>
                <SidebarNavItem>
                    <SidebarIcon>
                        <BsPerson />
                    </SidebarIcon>
                    <StyledLink to='/teachers/students'>Students</StyledLink>
                </SidebarNavItem>
                <SidebarNavItem>
                    <SidebarIcon>
                        <BsPerson />
                    </SidebarIcon>
                    <StyledLink to='/teachers/teachers'>Teachers</StyledLink>
                </SidebarNavItem>
                <SidebarNavItem>
                    <SidebarIcon>
                        <BsFileText />
                    </SidebarIcon>
                    <StyledLink to='/teachers/assignmnets'>Assignments</StyledLink>
                </SidebarNavItem>
                <SidebarNavItem>
                    <SidebarIcon>
                        <BsBook />
                    </SidebarIcon>
                    <StyledLink to='/teachers/exams'>Exams</StyledLink>
                </SidebarNavItem>
                <SidebarNavItem>
                    <SidebarIcon>
                        <BsGraphDown />
                    </SidebarIcon>
                    <StyledLink to='/teachers/performance'>Performance</StyledLink>
                </SidebarNavItem>
                <SidebarNavItem>
                    <SidebarIcon>
                        <BsCalendar />
                    </SidebarIcon>
                    <StyledLink to='/teachers/attendance'>Attendance</StyledLink>
                </SidebarNavItem>
                <SidebarNavItem>
                    <SidebarIcon>
                        <BsChatDots />
                    </SidebarIcon>
                    <StyledLink to='/teachers/communication'>Announcements</StyledLink>
                </SidebarNavItem>
                <SidebarNavItem>
                    <SidebarIcon>
                        <BsCalendarEvent />
                    </SidebarIcon>
                    <StyledLink to='/teachers/events'>events and Calendar</StyledLink>
                </SidebarNavItem>
                <SidebarNavItem>
                    <SidebarIcon>
                        <BsGear />
                    </SidebarIcon>
                    <StyledLink to='/teachers/settings'>settings and Profile</StyledLink>
                </SidebarNavItem>
            </SidebarNav>
            <ToggleButton onClick={toggleSidebar}>
                <ToggleIcon isOpen={isOpen}>*</ToggleIcon>
            </ToggleButton>
        </SidebarContainer>
    )
}
export default Sidebar;