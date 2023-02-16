import styled from 'styled-components'
import Image from 'next/image'

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 7px 15px 0 15px;
`

export const Content = styled.div``

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const LeftTitleDecorationIcon = styled(Image)``

export const RightTitleDecorationIcon = styled(Image)`
  transform: rotate(180deg);
`

export const Title = styled.div(({ theme }) => `
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  padding: 0 10px;
  font-family: ${theme.fontFamily.secondary};
  color: ${theme.colors.white};
`)

export const Details = styled.div(({ theme }) => `
  display: grid;
  grid-template-columns: 78px auto 78px auto;
  row-gap: 10px;
  margin: 10px 0 15px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
`)

export const Label = styled.p(({ theme }) => `
  color: ${theme.colors.gold};
`)

export const Data = styled.p(({ theme }) => `
  color: ${theme.colors.white};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`)

export const Description = styled.p(({ theme }) => `
  color: ${theme.colors.grey};
`)
