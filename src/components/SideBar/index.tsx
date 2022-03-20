import React from 'react';

import List from '../List';

import FollowSuggestion from '../FollowSuggestion';

import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>
      <Body>
        <List
          title="Talvez você curta"
          elements={[
            <FollowSuggestion name="Lai" nickname="@cervejalongneck" />,
            <FollowSuggestion name="Alisu" nickname="@duckGesonel" />,
            <FollowSuggestion
              name="Marcos Alencar"
              nickname="@marcosalencaar"
            />,
          ]}
        />
        <List
          title="Talvez você curta"
          elements={[<News />, <News />, <News />]}
        />
        <List
          title="Talvez você curta"
          elements={[<News />, <News />, <News />]}
        />
        <List
          title="Talvez você curta"
          elements={[<News />, <News />, <News />]}
        />
        <List
          title="Talvez você curta"
          elements={[<News />, <News />, <News />]}
        />
        <List
          title="Talvez você curta"
          elements={[<News />, <News />, <News />]}
        />
      </Body>
    </Container>
  );
};

export default SideBar;
