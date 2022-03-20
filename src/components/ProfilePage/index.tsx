import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

// import { Container } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>

        <h1>Maria Fernanda</h1>
        <h2>@mrmzqueen</h2>

        <p>Its a rock fact</p>

        <ul>
          <li>
            <LocationIcon /> São Paulo, Brasil
          </li>
          <li>
            <CakeIcon /> Nascido(a) em 16 de setembro de 2001
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>59</strong>
          </span>
          <span>
            <strong>47</strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
