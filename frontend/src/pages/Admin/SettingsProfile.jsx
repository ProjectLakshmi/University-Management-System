import React,{useState,useEffect} from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import {ProfileContainer,SidebarContainer,Content,ProfileHeader,ProfileDetails,ProfileLabel,ProfileInfo,EditButton,ProfileDetail, Label,Value} from '../../styles/SettingsProfileStyles'

const SettingProfile=()=>{
    const teacherinfo={
        name:'Lakshmi',
        email:'lajs@gmail.com',
        phone:'23412111',
        address:'abx-xyz',
        qualification:'btech'
    };
    return(
        <ProfileContainer>
            <SidebarContainer>
                <Sidebar />
            </SidebarContainer>
            <Content>
                <ProfileHeader>Profile Details:</ProfileHeader>
                <ProfileDetails>
                    <ProfileLabel>Name:</ProfileLabel>
                    <ProfileInfo>{teacherinfo.name}</ProfileInfo>
                    <ProfileLabel>Email:</ProfileLabel>
                    <ProfileInfo>{teacherinfo.email}</ProfileInfo>
                    <ProfileLabel>Phone:</ProfileLabel>
                    <ProfileInfo>{teacherinfo.phone}</ProfileInfo>
                    <ProfileLabel>Address:</ProfileLabel>
                    <ProfileInfo>{teacherinfo.address}</ProfileInfo>
                    <ProfileLabel>Qualification:</ProfileLabel>
                    <ProfileInfo>{teacherinfo.qualification}</ProfileInfo>
                </ProfileDetails>
                <EditButton>Edit Profile</EditButton>
            </Content>
        </ProfileContainer>
    )
}
export default SettingProfile;