import React from 'react';

import { Container, Banner, Image } from './styles';

export default function ThankyouPage() {
  return (
    <Container>
      <Banner>
        <img
          src="http://inova.gov.br/wp-content/themes/inovagov2.1.1/img/sucesso.png"
          alt="cupons"
        />
        <h1>Cadastro realizado com sucesso</h1>
        <h3>Bem-vindo à revolução</h3>
        <Image>
          <img
            className="image-2"
            src="https://www.bomcupom.com/wp-content/themes/bomcupom-novo/assets/images/ciclo-benefico.png"
            alt="logo"
          />
        </Image>
      </Banner>
    </Container>
  );
}
