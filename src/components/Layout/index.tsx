import React from 'react';

import SideBar from '../SideBar';

import Main from '../Main';

import MenuBar from '../MenuBar';

import { Container, Wrapper } from './styles';

// import { Container } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <Main />
        <SideBar />
      </Wrapper>
    </Container>
  );
};

export default Layout;
