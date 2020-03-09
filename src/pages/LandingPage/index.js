import React from 'react';
import { Form } from '@unform/web';

import Input from '../../Components/Input';
import InputMask from '../../Components/InpuMask';
import {
  Container,
  Content,
  Banner,
  Benefits,
  ListBenefits,
  BoxForm,
} from './styles';

export default function LandingPage() {
  return (
    <Container>
      <header>
        <img src="" alt="logo" />
      </header>
      <Content>
        <Banner>
          <h1>Franquia Bom Cupom</h1>
          <h3>Mais que a penas cumpons de descontos</h3>
          <p>
            A Bom Cupom nasceu em 2017 com o objetivo de fomentar o comércio
            local. A empresa é franqueadora de um modelo de negócios que
            viabiliza a entrega de cupons de desconto físicos para estimular as
            vendas nos bairros.
          </p>
          <p>
            A Bom Cupom pretende transformar seu modelo de negócios atualmente
            físico em um modelo digital. Os cupons de desconto deixarão de ser
            entregues no verso das notas fiscais e passarão a ser entregues
            digitalmente, dentro de um aplicativo.
          </p>
        </Banner>
        <Benefits>
          <p>
            Além dos cupons de desconto, a Bom Cupom pretende desenvolver outras
            funcionalidades, ajudando os estabelecimentos a se relacionar de
            forma mais profunda com seus clientes.
          </p>
          <ListBenefits>
            <li>
              Um mesmo estabelecimento oferecer diversos cupons de desconto
            </li>
            <li>Pagamento pelo app</li>
            <li>Cartão fidelidade virtual</li>
            <li>Descontos relâmpagos em itens estratégicos</li>
            <li>Geofencing</li>
            <li>
              Controle de dados de consumo e histórico dos clientes dos
              estabelecimentos
            </li>
            <li>Pesquisas de NPS do estabelecimento com os usuários</li>
            <li>
              Página do estabelecimento personalizada de acordo com suas
              preferências
            </li>
          </ListBenefits>
        </Benefits>
        <BoxForm>
          <Form>
            <Input name="name" label="Nome" placeholder="Nome" />
            <Input name="email" label="E-mail" placeholder="E-mail" />
            <Input name="password" label="Senha" placeholder="Senha" />
            <InputMask
              name="birthDate"
              label="Data de nascimento"
              placeholder="Data de nascimento"
            />
            <Input name="sex" label="Sexo" placeholder="Sexo" />
          </Form>
        </BoxForm>
      </Content>
    </Container>
  );
}
