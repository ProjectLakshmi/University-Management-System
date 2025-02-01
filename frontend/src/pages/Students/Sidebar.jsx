import React,{useState,useEffect} from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { BsGraphUp, BsPeople, BsPerson, BsFileText, BsBook, BsGraphDown, BsCalendar, BsGear, BsChatDots, BsCalendarEvent, BsQuestionSquare } from 'react-icons/bs';
import {SidebarNav,SidebarNavItem,SidebarContainer,SidebarHeader,SidebarIcon,Logo,StyledLink,ToggleButton,ToggleIcon} from '../../styles/SidebarStyles'

const StudentsSidebar=()=>{
    
        const [isOpen, setIsOpen] = useState(true);
      
        const toggleSidebar = () => {
          setIsOpen(!isOpen);
        }; 
    
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
                    <StyledLink to='/student/dashboard'>Dashboard</StyledLink>
                </SidebarNavItem>
                <SidebarNavItem>
                    <SidebarIcon>
                        <BsFileText />
                    </SidebarIcon>
                    <StyledLink to='/student/assignment'>Assignments</StyledLink>
                </SidebarNavItem>
                <SidebarNavItem>
                    <SidebarIcon>
                        <BsBook />
                    </SidebarIcon>
                    <StyledLink to='/student/exams'>Exams</StyledLink>
                </SidebarNavItem>
                <SidebarNavItem>
                    <SidebarIcon>
                        <BsGraphDown />
                    </SidebarIcon>
                    <StyledLink to='/student/performance'>Performance</StyledLink>
                </SidebarNavItem>
                <SidebarNavItem>
                    <SidebarIcon>
                        <BsCalendar />
                    </SidebarIcon>
                    <StyledLink to='/student/attendance'>Attendance</StyledLink>
                </SidebarNavItem>
                <SidebarNavItem>
                    <SidebarIcon>
                        <BsBook />
                    </SidebarIcon>
                    <StyledLink to='/student/library'>Library</StyledLink>
                </SidebarNavItem>
                <SidebarNavItem>
                    <SidebarIcon>
                        <BsChatDots />
                    </SidebarIcon>
                    <StyledLink to='/student/communication'>Announcements</StyledLink>
                </SidebarNavItem>
                <SidebarNavItem>
                    <SidebarIcon>
                        <BsGear />
                    </SidebarIcon>
                    <StyledLink to='/student/settings'>Profile</StyledLink>
                </SidebarNavItem>
            </SidebarNav>
            <ToggleButton onClick={toggleSidebar}>
                <ToggleIcon isOpen={isOpen}>*</ToggleIcon>
            </ToggleButton>
        </SidebarContainer>
    )
};

export default StudentsSidebar;