import React from 'react';
import styled from 'react-emotion';

const NavigationMenu = styled('header')`
  margin-bottom: 1.45rem;
  border-bottom: solid 1px rgba(0, 0, 0, .60);
`;

const TitleContainer = styled('div')`
  margin: 0 auto;
  max-width: 960px;
  font-size: 1.6rem;
  padding: 1.45rem 1.0875rem;
`;

const Title = styled('h1')`
  margin: 0;
`;

const MediumTitle = styled('h2')`
  font-size: 1.2rem;
  font-weight: normal;
  color: rgba(0, 0, 0, .60);
  margin: 0;
`;

const text = 'Software Developer';

const Header = ({ siteTitle }) => (
  <NavigationMenu>
    <TitleContainer>
      <Title>
        {siteTitle}
      </Title>
      <MediumTitle>
        {text}
      </MediumTitle>
    </TitleContainer>
  </NavigationMenu>
);

export default Header
