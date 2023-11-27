import React from "react";
import { motion } from 'framer-motion'

// global styles
import {
    PaddingContainer,
    Heading,
    BlueText,
} from '../styles/Global.styled';

import { projectDetails } from "../utils/Data";
import Project from "./layouts/Project";

import { fadeInTopVariant } from "../utils/Variants";

const MyProjects = () => {
    return (
        <PaddingContainer
            id="Projects"
            top="8%"
            bottom="8%"
            responsiveTop="20%"
            responsiveLeft="rem"
            responsiveRight="1rem"
        >
            <Heading 
                as={motion.h4} 
                variants={fadeInTopVariant}
                initial="hidden"
                whileInView="visible"
                size="h4"
            >
                MY PROJECTS
            </Heading>

            <Heading 
                as={motion.h2} 
                variants={fadeInTopVariant}
                initial="hidden"
                whileInView="visible"
                size="h2"
            > 
                What <BlueText>Have i built</BlueText>
            </Heading>

            {projectDetails.map((project) => (
                <PaddingContainer key={project.id} top="5rem" bottom="5rem">
                    <Project data={project} />
                </PaddingContainer>
            ))}
        </PaddingContainer>
    )
}

export default MyProjects