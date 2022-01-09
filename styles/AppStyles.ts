import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  overflow: hidden;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Content = styled.div<{ pt: number }>`
  padding-top: ${({ pt }) => pt + 'px'};
`;

export const FlexContainer = styled.div<{ justify?: string; align?: string }>`
  justify-content: ${({ justify }) => (justify ? justify : 'flex-start')};
  align-items: ${({ align }) => (align ? align : 'stretch')};
  display: flex;
`;
