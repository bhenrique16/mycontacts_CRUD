import { Link } from 'react-router-dom'

import { Container, Header, ListContainer, Card, InputSearchContainer } from "./styles";
import arrow from "../../assets/images/icons/arrow.svg";
import edit from "../../assets/images/icons/edit.svg";
import trash from "../../assets/images/icons/trash.svg";
import Modal from '../../components/Modal';
import Loader from '../../components/Loader';

export default function Home() {
  return (
    <Container>
      {/* <Loader /> */}
      {/* <Modal danger /> */}
      <InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome" />
      </InputSearchContainer>
      <Header>
        <strong>3 contatos</strong>
        <Link to="/new">Novo contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button" className="sort-button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Bruno Henrique</strong>
              <small>instagram</small>
            </div>
            <span>bruno@bh.com.br</span>
            <span>(61)9999-9999</span>
          </div>

          <div className="actions">
            <Link to="/edit/123">
              <img src={edit} alt="edit" />
            </Link>

            <button>
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>

      </ListContainer>
    </Container>
  )
};


fetch('http://localhost:3001/contacts', {
  method: 'GET',
  headers: new Headers({
    'X-App-ID': '123',
  }),
})
  .then((response) => {
    console.log('response', response);

  })
  .catch((error) => {
    console.log('erro', error);
  })
