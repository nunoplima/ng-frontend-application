import styled from 'styled-components'
import Link from 'next/link'

export const Button = styled(Link)(({ theme }) => `
  all: unset;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: capitalize;
  padding: 9px 20px;
  height: fit-content;
  margin-bottom: 3px;
  cursor: pointer;
  background-color: ${theme.colors.lighterBlack};
  border: 1px solid ${theme.colors.gold};
  border-radius: ${theme.radius.xs};

  :hover {
    color: ${theme.colors.gold};
    transition: color 400ms ease;
  }
`)