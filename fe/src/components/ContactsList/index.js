import { Container, Header, ListContainer, Card } from "./styles";
import arrow from '../../assets/images/icon/arrow.svg';
export default function ContactsList() {
  return (
    <Container>
      <Header >
        <strong>3 contatos</strong>
        <a href="/">Novo contato</a>
      </Header>

      <ListContainer>
        <header>
          <button type="button" className="sort-button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>

        <Card>
          ...
        </Card>


      </ListContainer>
    </Container>

  )
};
