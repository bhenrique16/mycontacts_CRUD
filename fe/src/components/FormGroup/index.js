
import { Container } from './styles'
import PropTypes from 'prop-types'


export default function FormGroup({ children }) {
  return (
    <Container >
      <Container>
        {children}
      </Container>
    </Container>
  )
};


FormGroup.propTypes = {
  children: PropTypes.node.isRequired,

}
