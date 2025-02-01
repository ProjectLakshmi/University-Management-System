import React from "react";
import {Navbar , Logo ,NavigationLinks, NavLink,ButtonsContainer,LoginButton ,GuestButton,HomeContainer,SchoolInfo,SchoolImage,Title,LoremTextContainer,AdminRegisterLink} from '../styles/styles';
import {LoremIpsum} from 'lorem-ipsum';
import bg from '../assets/bg.png';
import bg1 from '../assets/bg1.png';
import wallpaper    from '../assets/wallpaper.png';
import {Link,useNavigate} from 'react-router-dom';

const lorem=new LoremIpsum();

const Home= ()=>{

    const texts = [
        "Welcome to JC Bose University of Science and Technology, where innovation meets tradition. Our campus is a thriving hub of learning, creativity, and discovery, designed to empower every student to achieve their full potential. Together, we shape the future, one idea at a time.",
        "At JC Bose University of Science and Technology, we take pride in offering an inclusive and dynamic environment where students from all walks of life come together to learn, grow, and succeed. Explore your passions, unlock your talents, and create memories that will last a lifetime.",
        "Discover a world of opportunities at JC Bose University of Science and Technology. From groundbreaking research to vibrant campus life, our institution is dedicated to nurturing intellectual curiosity and fostering academic excellence for every student.",
        "At JC Bose University of Science and Technology, we believe education is the key to transforming lives. Our commitment to excellence ensures you receive the knowledge, skills, and experiences needed to thrive in a fast-changing world.",
        "Join the JC Bose University of Science and Technology family and be part of a community that inspires innovation, celebrates diversity, and empowers students to make a difference. Your dreams are our mission, and we are here to help you achieve them."
    ];
    function getRandomText() {
        const randomIndex = Math.floor(Math.random() * texts.length);
        return texts[randomIndex];
    }

    const navigate=useNavigate();
    const LoremText=lorem.generateParagraphs(1);

    const handleLoginClick =()=>{
navigate('/choose-user')
    };
    return(
        <>

<Navbar>
    <Logo src={bg1} alt="Logo"/>
    <NavigationLinks>
        <NavLink href="#">About Us</NavLink>
        <NavLink href="#">Products</NavLink>
        <NavLink href="#">Contact Us</NavLink>
    </NavigationLinks>
    <ButtonsContainer>
        <LoginButton onClick={handleLoginClick}>Sign In</LoginButton>
        <GuestButton onClick={handleLoginClick}>Guest Mode</GuestButton>
    </ButtonsContainer>
</Navbar>
<HomeContainer>
    <SchoolInfo>
        <Title>College Management System</Title>
        <LoremTextContainer>
            <p>{getRandomText()}</p>
        </LoremTextContainer>
        <AdminRegisterLink>Admin Register</AdminRegisterLink>
    </SchoolInfo>
    <SchoolImage src={wallpaper} alt="Pupils" />
</HomeContainer>

        </>
    )
}
export default Home;