import { FC, ReactElement } from 'react';
import styled from 'styled-components';
import { Header, Footer, Messages } from './index';

const Container = styled.div`
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
`;

const Messenger: FC = (): ReactElement => 
  <Container>
    <Header />
    <Messages />
    <Footer />
  </Container>

export default Messenger;
