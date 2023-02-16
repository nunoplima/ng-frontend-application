import styled from 'styled-components'

export const Footer = styled.div(({ theme }) => `
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: flex-end;
  padding: 0 15px 24px 15px;
  font-family: ${theme.fontFamily.secondary};
  color: ${theme.colors.white};
`)

export const FooterInnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

export const RewardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const RewardsTitle = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  text-transform: capitalize;
`

export const ExpWrapper = styled.div(({ theme }) => `
  border: 1px solid ${theme.colors.gold};
  background: linear-gradient(180deg, rgba(7, 15, 29, 0) 0%, rgba(54, 77, 137, 0.4) 100%);
  height: 58px;
  width: 58px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  margin-top: 7px;
`)

export const ExpIcon = styled.img``

export const Experience = styled.div`
  font-weight: 700;
  font-size: 8px;
  line-height: 11px;
`
