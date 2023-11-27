import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// global styles
import {
    FlexContainer,
    PaddingContainer,
    Container,
    BlueText,
}   from '../styles/Global.styled';

// Navbar styles
import {
    NavbarContainer,
    Logo,
    MenuIcon,
} from '../styles/Navbar.styled';

import { GiHamburgerMenu } from 'react-icons/gi';
import { theme } from '../utils/Theme';
import NavMenu from "./layouts/NavMenu";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        //
        const onScroll = () => {
            window.pageYOffset > 50 ? setSticky(true) : setSticky(false);
        }
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    },[])

    return (
        <NavbarContainer bgColor={ sticky ? theme.colors.primary: 'transparent' }
        >
            <PaddingContainer
                top="1.2rem"
                bottom="1.2rem"
                responsiveLeft="1rem"
                responsiveRight="1rem"
            >
                <Container>
                        <FlexContainer justify="space-between" responsiveFlex>
                            {/* --logo-- */}
                            <Logo>
                            ϟ Oli<BlueText>Ver ϟ</BlueText>
                            </Logo>

                            <MenuIcon
                                as={motion.a}
                                whileHover={{scale: 1.2}}

                                onClick={() => { setOpenMenu(true) }}
                            >
                                <GiHamburgerMenu />
                            </MenuIcon>
                        </FlexContainer>
                </Container>
                <AnimatePresence>
                    {openMenu && <NavMenu setOpenMenu={setOpenMenu}/>}
                </AnimatePresence>
            </PaddingContainer>
        </NavbarContainer>
    )
}

export default Navbar