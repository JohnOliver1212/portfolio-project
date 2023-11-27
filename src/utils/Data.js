import { FaReact, FaNode, FaCss3Alt } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';

import Project1 from '../assets/Project1.png';
import Project2 from '../assets/Project2.png';


export const Skills = [
    {
        id: 0,
        tech: 'React JS',
        icon: <FaReact />
    },
    {
        id: 1,
        tech: 'Node JS',
        icon: <FaNode />
    },
    {
        id: 2,
        tech: 'CSS',
        icon: <FaCss3Alt />
    },
    {
        id: 3,
        tech: 'Javascript',
        icon: <SiJavascript />
    },
]

export const projectDetails = [
    {
        id: 0,
        project_name: "Login System",
        project_desc: "A login system verifies user identity through credentials like usernames/email and passwords, granting access to personalized or secure areas of websites or applications.",
        tech_stack: [ 'HTML', 'CSS', 'JavaScript', 'PHP'],
        project_img: Project1,
        project_url: 'http://loginform.42web.io/',
        reverse: false,
    },
    {
        id: 1,
        project_name: "Main Portfolio Website",
        project_desc: "A portfolio website typically showcases a person's or company's work, skills, and achievements through sections like About, Services, Gallery, Projects, Education, Experience, Reviews, and Contact, emphasizing visual appeal, user-friendly design, and possibly employing HTML, CSS, JavaScript, Bootstrap, React, or Vue.js to enhance interactivity and effectively communicate the creator's expertise and style to engage visitors.",
        tech_stack: [ 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
        project_img: Project2,
        project_url: 'http://extreme-com.vercel.app/',
        reverse: true,
    },
]

export const navLinks = [
    {
        id: 0,
        name: 'Home',
        href: 'Home'
    },
    {
        id: 1,
        name: 'Skills',
        href: 'Skills'
    },
    {
        id: 3,
        name: 'Projects',
        href: 'Projects'
    },
    {
        id: 4,
        name: 'Contact',
        href: 'Contact'
    }
]