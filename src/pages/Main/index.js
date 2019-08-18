import React from 'react';

import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
// eslint-disable-next-line no-unused-vars
import { Container } from './styles';

export default function Main() {
  return (
    <Container>
      <Header />
      <Content>
        <Card>
          <CardhHeader></CardhHeader>
          <CardContent></CardContent>
          <CardFooter></CardFooter>
        </Card>
      </Content>

      <Tabs />
    </Container>
  );
}
