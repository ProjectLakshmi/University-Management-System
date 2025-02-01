import React,{useState,useEffect} from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import{PerformanceContainer, Content, PerformanceContent, PerformanceHeader, SchoolPerformance, IndividualPerformance }from '../../styles/PerformanceStyles'



const CheckPerformanceSection=()=>{

  const schoolPerformanceData = {
    averageScore: 85,
    totalStudents: 100,
  };

  const individualPerformanceData = [
    { id: 1, name: 'John Doe', score: 90 },
    { id: 2, name: 'Jane Smith', score: 85 },
    { id: 3, name: 'Michael Johnson', score: 92 },
  ];
return(
  <PerformanceContainer>
  <Sidebar />
  <Content>
    <PerformanceContent>
      <PerformanceHeader>School Performance</PerformanceHeader>
      <SchoolPerformance>
        <p>Average Score: {schoolPerformanceData.averageScore}</p>
        <p>Total Students: {schoolPerformanceData.totalStudents}</p>
      </SchoolPerformance>
      <PerformanceHeader>Individual Performance</PerformanceHeader>
      <IndividualPerformance>
      {individualPerformanceData.map((student) => (
              <p key={student.id}>
                {student.name}: {student.score}
              </p>
            ))}
      </IndividualPerformance>
    </PerformanceContent>
  </Content>
</PerformanceContainer>
    )
}
export default CheckPerformanceSection;