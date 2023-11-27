import React from "react";
import { motion }from 'framer-motion';

// global styles
import {
    PaddingContainer,
    Heading,
    BlueText,
    FlexContainer, 
    Button,
} from '../styles/Global.styled';

// footer styles
import {
    ContactForm,
    FormLabel,
    FormInput,
}   from '../styles/Footer.styled';

import { fadeInBottomVariant } from "../utils/Variants";
 
const Footer = () => {
    return (
        <PaddingContainer
            id="Contact"
            top="5%"
            bottom="10%"
        >   
        <br />
            <Heading 
                as={motion.div}
                variants={fadeInBottomVariant}
                initial="hidden"
                whileInView="visible"
                size="h4"
                align="center"
            >
                MY CONTACT
            </Heading>

            <Heading
                as={motion.h2}
                variants={fadeInBottomVariant}
                initial="hidden"
                whileInView="visible"
                size="h2"
                align="center"
                top="0.5rem"
            >
                Contact <BlueText>Me Here</BlueText>
            </Heading>

            <PaddingContainer top="3rem">
                <FlexContainer justify="center">
                    <ContactForm 
                        as={motion.form}
                        variants={fadeInBottomVariant}
                        initial="hidden"
                        whileInView="visible"
                    >
                        
                        <PaddingContainer bottom="2rem">
                            <FormLabel>Name:</FormLabel>
                                <FormInput 
                                    type="text"
                                    placeholder="Enter Your Name"
                                    required
                                />
                        </PaddingContainer>

                        <PaddingContainer bottom="2rem">
                            <FormLabel>Email:</FormLabel>
                                <FormInput 
                                    type="text"
                                    placeholder="Enter Your Email"
                                    required
                                />
                        </PaddingContainer>

                        <PaddingContainer bottom="2rem">
                            <FormLabel>Message:</FormLabel>
                                <FormInput 
                                    as="textarea"
                                    placeholder="Enter Your Message"
                                    required
                                />
                        </PaddingContainer>

                        <FlexContainer justify="center" responsiveFlex>
                            <Button>Send Message</Button>
                        </FlexContainer>
                        <br />
                        <Heading as="h4" size="h4" align="center">
                            &nbsp; 2023 <BlueText>John Oliver</BlueText> | All Rights Reserved.
                        </Heading>

                    </ContactForm>
                </FlexContainer>
            </PaddingContainer>
        </PaddingContainer>
    )
}

export default Footer