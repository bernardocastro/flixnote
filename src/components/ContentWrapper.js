import styled from "styled-components";

const ContentWrapper = styled.div`
  display: grid;
  gap: 20px;
  width: 900px; /* Tamanho fixo do conteúdo */
  max-width: 90vw; /* Para não ficar muito grande em telas pequenas */
  padding: 20px;
  border-radius: 10px;
`;

export default ContentWrapper;