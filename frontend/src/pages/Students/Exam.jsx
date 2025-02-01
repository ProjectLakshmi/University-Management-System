import React,{useState,useEffect,useRef} from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import {ExamContainer,
    SidebarContainer,
    Content,
    ExamHeader,
    ExamResultsContainer,
    ExamSubject,
    ExamResult,
    ExamChartContainer} from '../../styles/ExamStyles'
import {Bar} from 'react-chartjs-2'


const ExamSection=()=>{
    const chartRef = useRef(null);

    const examResultsData = {
        subjects: ['Math', 'Science', 'English', 'History'],
        results: [80, 75, 90, 85] // Sample results out of 100
      };

      const barChartData = {
        labels: examResultsData.subjects,
        datasets: [
            {
              label: 'Exam Results',
              backgroundColor: '#007bff',
              borderColor: '#007bff',
              borderWidth: 1,
              hoverBackgroundColor: '#0056b3',
              hoverBorderColor: '#0056b3',
              data: examResultsData.results
            }
          ]
        };

        const chartOptions = {
            scales: {
              y: {
                type: 'linear',
                beginAtZero: true,
                max: 100
              }
            }
          };
    return(
        <ExamContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <ExamHeader>Exam Results</ExamHeader>
        <ExamResultsContainer>
          {examResultsData.subjects.map((subject, index) => (
            <div key={index}>
              <ExamSubject>{subject}</ExamSubject>
              <ExamResult>Score: {examResultsData.results[index]}%</ExamResult>
            </div>
          ))}
          <ExamChartContainer>
            <Bar
              ref={chartRef}
              data={barChartData}
              options={chartOptions}
            />
          </ExamChartContainer>
        </ExamResultsContainer>
      </Content>
    </ExamContainer>
  );
    
}
export default ExamSection;