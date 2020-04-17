import React, { useRef, useState } from 'react';

/* modulos externos */
import { Form } from '@unform/web';
import * as Yup from 'yup';
import toaster from 'toasted-notes';
import { useHistory } from 'react-router-dom';
import Loader from 'react-loader-spinner';

/* modulos internos */
import api from '../../services/api';
import Input from '../../Components/Input';
import InputMask from '../../Components/InpuMask';
import Select from '../../Components/Select';
import {
  Container,
  Content,
  Banner,
  Benefits,
  BoxForm,
  ListTwoPesson,
} from './styles';

export default function LandingPage() {
  const refForm = useRef(null);
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  document.title = 'Bom Cupom | Landing Page';

  async function handleSubmit(data, { reset }) {
    try {
      /* validação de erros para o form */
      refForm.current.setErrors({});
      setLoading(true);

      const schema = Yup.object().shape({
        name: Yup.string().required('Campo obrigatório'),
        email: Yup.string()
          .email('Insira um e-mail válido')
          .required('Campo obrigatório'),
        password: Yup.string()
          .min(6, 'Campo mínimo de 6 caracteres')
          .required('Campo obrigatório'),
        birthDate: Yup.string().required('Campo obrigatório'),
        sex: Yup.string().required('Campo obrigatório'),
      });

      await schema.validate(data, { abortEarly: false });
      const { name, password, email, birthDate, sex } = data;
      await api.post('user', {
        name,
        password,
        email,
        birthDate,
        sex,
      });

      setLoading(false);
      /* caso status ok, redireciona para a página ThankYouPage */
      history.push('/success');
    } catch (err) {
      /* verifica se o erro é no backend */
      setLoading(false);

      if (err.name === 'Error') {
        toaster.notify('Erro ao cadastrar. Veirifique a data ou e-mail', {
          position: 'top-right',
          duration: 4000,
          type: 'error',
        });
      }
      const validationErrors = {};
      /* verifica se o erro é na validação */
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });

        refForm.current.setErrors(validationErrors);
      }
    }
    /* reseta os valores nos forms */
  }

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
            <h2>Mais que apenas cupons de descontos</h2>
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
        <BoxForm loading={loading}>
          <section>
            Faça parte da revolução dos cupons de descontos e adquira já a sua
            franquia.
            <div>
              <p>Mais de 120 franquias pelo Brasil</p>
              <p>
                Cerca de 93% dos franqueados indicariam a BomCupom pra um amigo
              </p>
              <p>Presentes em 21 estados do Brasil</p>
            </div>
          </section>
          <div>
            <h1>Cadastre-se</h1>
            <Form onSubmit={handleSubmit} ref={refForm}>
              <Input name="name" label="Seu nome" placeholder="Nome Completo" />
              <Input
                label="Seu email para contato"
                name="email"
                placeholder="exemplo@email.com"
              />
              <Input
                type="password"
                name="password"
                label="Sua senha"
                placeholder="**********"
              />
              <InputMask
                name="birthDate"
                label="Sua data de nascimento"
                placeholder="Data de nascimento"
                mask="99/99/9999"
              />
              <Select name="sex" label="Seu sexo" placeholder="Sexo">
                <option defaultValue="" />
                <option value="masculino">masculino</option>
                <option value="feminino">feminino</option>
              </Select>
              <button type="submit" disabled={loading}>
                {loading ? (
                  <Loader
                    type="ThreeDots"
                    height={22}
                    width={60}
                    color="#ffffff"
                  />
                ) : (
                  'CADASTRAR'
                )}
              </button>
            </Form>
          </div>
        </BoxForm>
      </Content>
    </Container>
  );
}
