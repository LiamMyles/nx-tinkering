import styled from 'styled-components';
import logo from './logo.svg';

/* eslint-disable-next-line */
export interface ReactComponentProps {}

const StyledReactComponent = styled.div`
  color: pink;
`;

export function ReactComponent(props: ReactComponentProps) {
  return (
    <StyledReactComponent>
      <h1>Welcome to react-component!</h1>
      <img src={logo} alt="nice little logo" />
    </StyledReactComponent>
  );
}

export default ReactComponent;
