import styled from 'styled-components'
import Image from 'next/image'

export const Header = styled.div(({ theme }) => `
  position: relative;
  border-top-left-radius: ${theme.radius.xl};
  border-top-right-radius: ${theme.radius.xl};
  height: 40%;
  overflow: hidden;
  margin: 5px 5px 0 5px;
`)

export const CloseIcon = styled(Image)`
  position: absolute;
  right: 10px;
  top: 10px;
`

export const HeaderImage = styled(Image)`
  object-fit: cover;
`