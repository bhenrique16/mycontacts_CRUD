import ReactDOM from "react-dom";
import Proptypes from "prop-types";
import { Overlay, Container, Footer } from "./styles";
import Button from "../Button";

export default function Modal({ danger }) {
  return ReactDOM.createPortal(
    <Overlay>
      <Container danger={danger}>
        <h1>Titulo do moldal</h1>
        <p>Copo do modal</p>

        <Footer>
          <button type="button" className="cancel-button">
            Cancelar
          </button>
          <Button type="button" danger={danger}>
            Deletar
          </Button>
        </Footer>
      </Container>
    </Overlay>,
    document.getElementById("modal-root")
  );
}

Modal.Proptypes = {
  danger: Proptypes.bool,
};
Modal.Proptypes = {
  default: false,
};
