import styled from "styled-components";

const Wrapper = styled.div`
  background-color: lightblue;
`;

const Title = styled.h1`
  color: red;
`;

const StyleComp = () => {
  return (
    <Wrapper>
      <Title>Styled Component</Title>
    </Wrapper>
  );
};

export default StyleComp;
