import React,{useState,useEffect} from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import{ProfileContainer,SidebarContainer,Content,ProfileHeader,ProfileInfo,ProfileDetail,Label,Value }from '../../styles/SettingsProfileStyles'
import { SidebarHeader } from "../../styles/SidebarStyles";


const ProfileSection=()=>{

    const studentProfile={
        name:'lakshmi',
       age:34,
       grade:'11th',
       school:'Xyz public school',
       email:'abc@gmail.com'
    }

    return(
      <ProfileContainer>
        <SidebarContainer>
            <Sidebar />
        </SidebarContainer>
        <SidebarHeader>Profile</SidebarHeader>
        <ProfileInfo>
            <ProfileDetail>
                <Label>Name:</Label>
                <Value>{studentProfile.name}</Value>
            </ProfileDetail>
            <ProfileDetail>
                <Label>Age:</Label>
                <Value>{studentProfile.age}</Value>
            </ProfileDetail>
            <ProfileDetail>
                <Label>Grade:</Label>
                <Value>{studentProfile.grade}</Value>
            </ProfileDetail>
            <ProfileDetail>
                <Label>Email:</Label>
                <Value>{studentProfile.email}</Value>
            </ProfileDetail>
            <ProfileDetail>
                <Label>School:</Label>
                <Value>{studentProfile.school}</Value>
            </ProfileDetail>
        </ProfileInfo>
      </ProfileContainer>
    )
}
export default ProfileSection;