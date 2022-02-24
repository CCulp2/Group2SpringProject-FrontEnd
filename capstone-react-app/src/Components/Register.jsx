import Grid from '@mui/material'
import Item from '@mui/material'
import React from 'react'

export default function Register() {
  return (
    <Grid container spacing="2">
      <Grid item xs={8}>
        <Item>{/*Username Form*/}</Item>
      </Grid>
      <Grid item xs={2}>
        <Item>{/* Checkmark */}</Item>
      </Grid>
      <Grid item xs={8}>
        <Item>{/*Password Form*/}</Item>
      </Grid>
      <Grid item xs={2}>
        <Item>{/* Checkmark */}</Item>
      </Grid>
      <Grid item xs={8}>
        <Item>{/*Password Recheck*/}</Item>
      </Grid>
      <Grid item xs={2}>
        <Item>{/* Checkmark */}</Item>
      </Grid>
      <Grid item xs={8}>
        <Item>{/*Address Form*/}</Item>
      </Grid>
      <Grid item xs={2}>
        <Item>{/* Checkmark */}</Item>
      </Grid>
      <Grid item xs={12}>
        <Item>{/*Send Button*/}</Item>
      </Grid>
    </Grid>
  )
}
