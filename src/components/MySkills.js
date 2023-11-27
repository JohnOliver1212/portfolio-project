import React from "react";
import { motion } from 'framer-motion';

//global styles
import {
    FlexContainer,
    PaddingContainer,
    Heading,
    IconContainer,
    ParaText,
    BlueText,
} from '../styles/Global.styled';

//My Skills styles
import {
    SkillsCardContainer,
    SkillsCard,
} from '../styles/MySkills.styled';

import { Skills } from "../utils/Data";

import { fadeInLeftVariant, fadeInRightVariant } from "../utils/Variants";

const MySkills = () => {
    return (
        <PaddingContainer
            id="Skills"
            top="10%"
            bottom="10%"
            responsiveLeft="1rem"
            responsiveRight="1rem"
        >
            <FlexContainer 
                responsiveFlex
                responsiveDirection="column-reverse"
                fullWidthChild>
                {/* --left-section--*/}
                <SkillsCardContainer 
                    as={motion.div}
                    variants={fadeInLeftVariant}
                    initial="hidden"
                    whileInView="visible"
                >
                    {Skills.map((skill) => (
                        <SkillsCard>
                            <IconContainer size="5rem" color="blue">
                                {skill.icon}
                            </IconContainer>
                            <Heading as="h4" size="h4">
                                {skill.tech}
                            </Heading>
                        </SkillsCard>
                    ))}
                </SkillsCardContainer>

                {/* --right-section-- */}
                <motion.div
                    as={motion.div}
                    variants={fadeInRightVariant}
                    initial="hidden"
                    whileInView="visible"
                >
                    <Heading as="h4" size="h4">
                        MY SKILLS
                    </Heading>

                    <Heading as="h2" size="h2" top="0.5rem">
                        What <BlueText>Can i offer</BlueText>
                    </Heading>

                    <ParaText top="2rem" bottom="1.5rem">
                        As a developer, I have a wide range of experience in front-end developemnt. I am proficient
                        in Javascript, React, PHP, HTML and CSS. My strong experience in building responsive and dynamic 
                        user interfaces using React and PHP has allowed me to create engaging and interactive web applications. 
                    </ParaText>

                    <ParaText>
                        I have experience in using React for building scalabale and maintainable application. This has allowed 
                        me to create efficient and sustainable code that adept to the changing needs of a business.   
                    </ParaText>
                </motion.div>
            </FlexContainer>

        </PaddingContainer>
    )
}

export default MySkills