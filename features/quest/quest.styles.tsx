import styled from 'styled-components'

export const Container = styled.div(({ theme }) => `
  height: 635px;
  margin: 90px 28px 0 28px;
  border: solid 1px ${theme.colors.lightGrey};
  border-radius: calc(5px + ${theme.radius.xl});
  background-color: ${theme.colors.lighterBlack};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  @media (orientation: landscape) {
    max-width: 755px;
    margin: 33px 0 0 0;
  }
`)
