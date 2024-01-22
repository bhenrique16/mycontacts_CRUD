
import { Container } from './styles'
import PropTypes from 'prop-types'


export default function FormGroup({ children, error }) {
  return (
    <Container >
      <Container>
        {children}
        {error && <small>{error}</small>}
      </Container>
    </Container>
  )
};


FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.string,


}

FormGroup.defaultProps = {
  error: null,
}
