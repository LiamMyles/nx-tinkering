import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ReactComponentProps {}

const StyledReactComponent = styled.div`
  color: pink;
`;

export function ReactComponent(props: ReactComponentProps) {
  return (
    <StyledReactComponent>
      <h1>Welcome to react-component!</h1>
    </StyledReactComponent>
  );
}

export default ReactComponent;
