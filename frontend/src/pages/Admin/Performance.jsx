import React,{useState,useEffect} from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import {PerformanceContainer,Content,PerformanceContent,PerformanceHeader,SchoolPerformance,IndividualPerformance} from '../../styles/PerformanceStyles'

const Performance=()=>{

const schoolPerformanceData={
    averageScore:87,
    totalStudent:100
};

const individualPerformanceData=[
{id:1,name:'Johan Doe',score:89},
{id:2,name:'Ram Mohan',score:34},
{id:3,name:'Sita',score:56},
];


    return(
        <PerformanceContainer>
            <Sidebar />
            <Content>
                <PerformanceContent>
                    <PerformanceHeader>School Performance</PerformanceHeader>
                    <SchoolPerformance>
                        <p>Average Score:{schoolPerformanceData.averageScore}</p>
                        <p>Total Students:{schoolPerformanceData.totalStudent}</p>
                    </SchoolPerformance>
                    <PerformanceHeader>Individual Performance</PerformanceHeader>
                    <IndividualPerformance>
                        {individualPerformanceData.map((student)=>{
                            <p key={student.id}>
                                {student.name}:{student.score}
                            </p>
                        })}
                    </IndividualPerformance>
                </PerformanceContent>
            </Content>
        </PerformanceContainer>
    )
}
export default Performance;