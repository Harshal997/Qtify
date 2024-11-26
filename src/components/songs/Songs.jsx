import React from 'react'
import { Section } from '../section/Section'

export const Songs = ({type, data, genres}) => {
  return (
    <Section type={type} data={data} genres={genres}/>
  )
}
