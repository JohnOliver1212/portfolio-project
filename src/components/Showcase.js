import React from 'react'
import { motion } from 'framer-motion'

//import global styles
import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    BlueText,
    IconContainer,
} from '../styles/Global.styled';

//import showcase style
import { ShowcaseImageCard,
ShowcaseParticleContainer,
} from '../styles/Showcase.styled';

// react icons
import { BsFacebook, BsInstagram , BsTwitter, BsGithub} from "react-icons/bs";

//assets
import ShowcaseImg from '../assets/showcase-img.png';   

import { fadeInLeftVariant, fadeInRightVariant } from '../utils/Variants';

const Showcase = () => {
    const handleIconClick = (url) => {
        window.open(url, '_blank'); 
    };
    return (
        <PaddingContainer
            id="Home"
            left="3%"
            right="10%"
            top="18%"
            bottom="10%"
            resposiveLeft="1rem"
            responsiveright="1rem"
            responsiveTop="8rem"
        >
            <FlexContainer align="left" fullWidthChild> 
                {/* --left-content-- */}
                <motion.div
                   variants={fadeInLeftVariant}
                   initial="hidden"
                   whileInView="visible"
                >
                    <Heading as="h4"  size="h4">Hello!</Heading>
                    <Heading
                        as="h2"
                        size="h2"
                        top="0.5rem"
                        bottom="1rem"
                    >
                        I'am <BlueText>John Oliver</BlueText></Heading>
                    <Heading as="h3" size="h3">I'm a <BlueText>Web Developer</BlueText></Heading>
                    <ParaText as="p" top="2rem" bottom="4rem">And I am passionate about web development, creating innovative solutions that elevate user experiences and drive impactful results.</ParaText>
                    <FlexContainer gap="20px" responsiveFlex>
                        <IconContainer color="blue" size="1.5rem" onClick={() => handleIconClick('https://www.facebook.com/Martillosjohn')}>
                            <BsFacebook />
                        </IconContainer>
                        <IconContainer color="blue" size="1.5rem" onClick={() => handleIconClick('https://twitter.com/Mxtal_fury')}>
                            <BsTwitter />
                        </IconContainer>
                        <IconContainer color="blue" size="1.5rem" onClick={() => handleIconClick('https://www.instagram.com')}>
                            <BsInstagram />
                        </IconContainer>
                        <IconContainer color="blue" size="1.5rem" onClick={() => handleIconClick('https://github.com/JohnOliver1212/JohnOliver1212')}>
                            <BsGithub />
                        </IconContainer>
                    </FlexContainer>
                </motion.div>
                <FlexContainer 
                    as={motion.div}
                    variants={fadeInRightVariant}
                    initial="hidden"
                    whileInView="visible"

                    justify="flex-end"
                >
                    <ShowcaseParticleContainer>
                        <ShowcaseImageCard>
                            <img src={ShowcaseImg} alt="Showcase" />
                        </ShowcaseImageCard>
                    </ShowcaseParticleContainer>
                </FlexContainer>
            </FlexContainer>
        </PaddingContainer>
    )
}

export default Showcase