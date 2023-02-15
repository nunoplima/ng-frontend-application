import styled from 'styled-components'
import Image from 'next/image'

export const Container = styled.div(({ theme }) => `
  display: flex;
  flex-direction: column;
  height: 222px;
  cursor: pointer;
  border: solid 1px ${theme.colors.lightGrey};
  border-radius: calc(6px + ${theme.radius.l});
  background-color: ${theme.colors.lighterBlack};
  padding: ${theme.radius.l};
`)

export const Header = styled.div(({ theme }) => `
  position: relative;
  flex: 1;
  border-radius: ${theme.radius.l};
  overflow: hidden;
`)

export const HeaderImage = styled(Image)`
  object-fit: cover;
`

export const Body = styled.div`
  flex: 1;
  padding: 8px 6px 0 6px;
`

export const Title = styled.div(({ theme }) => `
  font-size: 14px;
  line-height: 19px;
  text-transform: capitalize;
  color: ${theme.colors.white};
  font-family: ${theme.fontFamily.secondary};
`)

export const Content = styled.div`
  margin-top: 8px;
  display: grid;
  grid-template-columns: 64px minmax(80px, 1fr) 78px auto;
  row-gap: 10px;
`

export const Swords = styled.div`
  display: flex;
`

export const SwordIcon = styled(Image)``

export const Label = styled.p(({ theme }) => `
  color: ${theme.colors.gold};
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
`)

export const Data = styled.p(({ theme }) => `
  color: ${theme.colors.white};
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`)

export const ColoredData = styled(Data)(({ theme }) => `
  color: ${theme.colors.blue};
`)
