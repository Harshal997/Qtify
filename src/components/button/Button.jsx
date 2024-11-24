import React from 'react'
import { Button } from '@mui/material'

export default function ButtonComp({text}) {
  return (
    <Button variant="contained" sx={{backgroundColor: 'black', color: "#34C94B", fontFamily: 'Poppins', borderRadius: 3, fontWeight: 'bold'}}>{text}</Button>
  )
}
