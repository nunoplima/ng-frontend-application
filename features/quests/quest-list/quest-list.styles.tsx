import styled from 'styled-components'

export const Container = styled.div(({ theme }) => `
  display: flex;
`)

export const InnerContainer = styled.div(({ theme }) => `
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 24px;
  row-gap: 24px;
  margin: 90px 28px 0 28px;

  @media (orientation: landscape) {
    width: unset;
    margin: 115px 0 0 0;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${theme.breakPoint.mobile}) and (max-width: ${theme.breakPoint.desktop}) {
    width: unset;
    margin: 115px 0 0 0;
    grid-template-columns: repeat(2, 1fr);
  }
`)