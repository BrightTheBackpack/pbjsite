import theme from '../lib/theme'
import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/react'
import Link from 'next/link'
import logo from '../pages/logo.png'
const waveFlag = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-5deg);
  }
`

const waveFlagScaled = keyframes`
  from {
    transform: scale(.875) rotate(0deg);
  }
  to {
    transform: scale(.875) rotate(-5deg);
  }
`

const scrolled = props =>
  props.scrolled &&
  css`
    transform: scale(0.875);
    height: 56px;
    &:hover,
    &:focus {
      animation: ${waveFlagScaled} 0.5s linear infinite alternate;
    }
  `

const Base = styled('a')`
  background-image: url(https://media.discordapp.net/attachments/1171930951111147642/1172394512644059228/PBJ_logo_upscaled_and_transparent.png?ex=65602879&is=654db379&hm=07c7bcef85988789cfcd51e202724337da26a0354e411b3cb5cf63446aa27ae3&=&width=598&height=449);
  background-repeat: no-repeat;
  background-position: top left;
  background-size: contain;
  cursor: pointer;
  flex-shrink: 0;
  width: 112px;
  height: 48px;
  transition: ${3 / 16}s cubic-bezier(0.375, 0, 0.675, 1) transform;
  transform-origin: top left;
  @media (min-width: ${theme.breakpoints[1]}) {
    width: 172px;
    height: 64px;
  }
  &:hover,
  &:focus {
    animation: ${waveFlag} 0.5s linear infinite alternate;
  }
  @media (prefers-reduced-motion: reduce) {
    animation: none !important;
  }
  ${scrolled};
`

const Flag = props => (
  <Link href="/" passHref>
    <Base href="https://hackclub.com/" title="Homepage" {...props} />
  </Link>
)

export default Flag
