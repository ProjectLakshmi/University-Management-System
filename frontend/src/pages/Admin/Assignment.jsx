import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AssignmentsContainer, Content, AssignmentsContent, AssignmentsHeader, AssignmentList, AssignmentItem, AddAssignmentForm, AddAssignmentInput, AddAssignmentButton, AddAssignmentTextArea } from '../../styles/AssignmentsStyles';

const Assignment = () => {
    const [newAssignment, setNewAssignment] = useState({ title: '', description: '', grade: '', deadline: '' });
    const [assignments, setAssignments] = useState([]);

    useEffect(() => {
        fetchAssignments();
    }, []);

    const fetchAssignments = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/v1/assignments/getall');
            setAssignments(response.data.assignments);
        } catch (error) {
            console.error('Error fetching assignments:', error);
        }
    };

    const handleAddAssignment = async (e) => {
        e.preventDefault();
        if (newAssignment.title.trim() !== '' && newAssignment.description.trim() !== '' && newAssignment.grade.trim() !== '' && newAssignment.deadline.trim() !== '') {
            try {
                const response = await axios.post('http://localhost:4000/api/v1/assignments', newAssignment);
                // Display success toast message
                toast.success('Assignment added successfully');
                // Add the new assignment to the list
                setAssignments([...assignments, response.data.assignment]);
                // Clear the form
                setNewAssignment({ title: '', description: '', grade: '', deadline: '' });
            } catch (error) {
                console.error('Error adding assignment:', error);
                // Display error toast message
                toast.error('Error adding assignment');
            }
        }
    };
    return (
        <AssignmentsContainer>
            <Sidebar />
            <Content>
                <AssignmentsContent>
                    <AssignmentsHeader>Assignmnets</AssignmentsHeader>
                    <AddAssignmentForm onSubmit={handleAddAssignment}>
                        <AddAssignmentInput type="text" placeholder="Enter Assignment Title" value={newAssignment.title}
                            onChange={(e) => setNewAssignment({ ...newAssignment, title: e.target.value })} />
                        <AddAssignmentTextArea placeholder="Enter Assignment Discription" value={newAssignment.description}
                            onChange={(e) => setNewAssignment({ ...newAssignment, description: e.target.value })}></AddAssignmentTextArea>
                        <AddAssignmentInput type="text" placeholder="Enter Grade" value={newAssignment.grade}
                            onChange={(e) => setNewAssignment({ ...newAssignment, grade: e.target.value })} />
                        <AddAssignmentInput type="text" placeholder="Enter assignment Deadline" value={newAssignment.deadline}
                            onChange={(e) => setNewAssignment({ ...newAssignment, deadline: e.target.value })} />
                        <AddAssignmentButton type="submit">Add Assignment</AddAssignmentButton>
                    </AddAssignmentForm>
                    <AssignmentList>
                        {assignments.map((assignment) => (
                            <AssignmentItem key={assignment.id}>
                                <strong>{assignment.title}: </strong>
                                {assignment.description}, {assignment.grade}, {assignment.deadline}
                            </AssignmentItem>
                        ))}
                    </AssignmentList>
                </AssignmentsContent>
            </Content>
        </AssignmentsContainer>
    )
}
export default Assignment;