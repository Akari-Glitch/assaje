import React from 'react'
import { TitleStyles } from '../../styles/menu/TtitleStyles'

interface Props {
  title: String;
}

function Title(props: Props) {
  return (
    <TitleStyles>{props.title}</TitleStyles>
  )
}

export default Title