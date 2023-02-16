import styled from 'styled-components'

export const Container = styled.div(({ theme }) => `
  max-width: 755px;
  height: 635px;
  margin-top: 33px;
  border: solid 1px ${theme.colors.lightGrey};
  border-radius: calc(5px + ${theme.radius.xl});
  background-color: ${theme.colors.lighterBlack};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`)
