import React from 'react';
import { Form } from '@unform/web';
import {} from 'react-icons/fa';

import Input from '../../Components/Input';
import InputMask from '../../Components/InpuMask';
import {
  Container,
  Content,
  Banner,
  Benefits,
  BoxForm,
  ListTwoPesson,
} from './styles';

export default function LandingPage() {
  return (
    <Container>
      <header>
        <img
          src="https://www.bomcupom.com/wp-content/themes/bomcupom-novo/assets/images/bomcupom-marca.png"
          alt="logo"
        />
      </header>
      <Content>
        <Banner>
          <div>
            <img
              src="https://www.bomcupom.com/wp-content/themes/bomcupom-novo/assets/images/smilefacesgreen.png"
              alt="cupons"
            />
            <h1>Franquia Bom Cupom</h1>
            <h2>Mais que a penas cumpons de descontos</h2>
            <h3>
              Faça parte da revolução dos cupons de descontos e adquira já a sua
              franquia.
            </h3>
          </div>
        </Banner>
        <Benefits>
          <div>
            <h1 id="h1-1">Benefícios</h1>
            <ListTwoPesson>
              <li>
                <h1>Descontos</h1>
                <div>
                  <span>
                    Faça sua compra em qualquer um dos nossos Veiculadores
                    parceiros.
                  </span>
                  <span>
                    Após a compra, guarde a sua notinha com os descontos.
                  </span>
                  <span>
                    Use o desconto no nosso Anunciante parceiro. É só pegar e
                    usar.
                  </span>
                </div>
              </li>
              <li>
                <h1>Franquias </h1>
                <div>
                  <span>
                    Não precisa de ponto comercial. Você pode trabalhar de casa,
                    sem a necessidade de uma equipe. Com isso, seus custos
                    operacionais são baixos.
                  </span>
                  <span>
                    Nosso modelo de negócios trata-se de uma micro franquia.
                    Portanto o investimento é baixo e o payback estimado é de 3
                    a 7 meses.
                  </span>
                  <span>
                    Por se tratar de uma inovação, a aceitação entre os
                    estabelecimentos é muito boa e, com isso, a taxa de
                    conversão nas negociações é alta.
                  </span>
                </div>
              </li>
            </ListTwoPesson>
          </div>
        </Benefits>
        <BoxForm>
          <section>
            Faça parte da revolução dos cupons de descontos e adquira já a sua
            franquia.
            <div>
              <span>Mais de 120 franquias pelo Brasil</span>
              <span>
                Cerca de 93% dos franqueados indicariam a BomCupom pra um amigo
              </span>
              <span>Presentes em 21 estados do Brasil</span>
            </div>
          </section>
          <div>
            <h1>Cadastre-se</h1>
            <Form>
              <Input name="name" label="Seu nome" placeholder="Nome Completo" />
              <Input
                name="email"
                label="Seu email para contato"
                placeholder="exemplo@exemplo.com"
              />
              <Input
                name="password"
                label="Sua senha"
                placeholder="**********"
              />
              <InputMask
                name="birthDate"
                label="Sua data de nascimento"
                placeholder="Data de nascimento"
              />
              <Input name="sex" label="Seu sexo" placeholder="Sexo" />
              <button type="submit">Registrar</button>
            </Form>
          </div>
        </BoxForm>
      </Content>
    </Container>
  );
}
