import React from 'react';
import QrCode from 'react-native-qrcode';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutButtonText,
} from './style';

export default function Menu({ translateY }) {
  return (
    <Container style={{
      opacity: translateY.interpolate({
        inputRange: [0, 150],
        outputRange: [0, 1],
      }),
    }}
    >
      <Code>
        <QrCode
          value="https://github.com/jinascimento"
          size={80}
          fgColor="#FFF"
          bgColor="#8B10AE"
        />
      </Code>

      <Nav>
        <NavItem>
          <Icon name="help-outline" size={20} color="#FFF" />
          <NavText>Me ajuda</NavText>
        </NavItem>
        <NavItem>
          <Icon name="person-outline" size={20} color="#FFF" />
          <NavText>Meu perfil</NavText>
        </NavItem>
        <NavItem>
          <Icon name="smartphone" size={20} color="#FFF" />
          <NavText>Configurações</NavText>
        </NavItem>
      </Nav>

      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>Sair</SignOutButtonText>
      </SignOutButton>
    </Container>
  );
}
