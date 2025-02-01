import { useState } from 'react';
import {AdminRegisterContainer,FormContainer,InputFeild,SubmitButton} from '../styles/AdminRegisterStyles';


const AdminRegister=()=>{

const[email,setEmail]=useState('');
const[password,setPassword]=useState('');

const handleRegister=()=>{
    console.log('Admin Registeration',{email,password})
}

    return(
        <AdminRegisterContainer>
            <h2>Admin Register</h2>
            <FormContainer>
                <InputFeild type='email' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} required />
                <InputFeild type='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} required />
                <SubmitButton type='text' onClick={handleRegister}>Register</SubmitButton>
            </FormContainer>
        </AdminRegisterContainer>
    )
}

export default AdminRegister;