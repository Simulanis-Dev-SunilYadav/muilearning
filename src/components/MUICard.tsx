import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

const MUICard = () => {
  return (
    <>
      <Box width={`300px`}>
        <Card>
          <CardMedia
            component={`img`}
            height={140}
            image='https://source.unsplash.com/random/'
            alt='Unspalsh image'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component={`div`}>
              React
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi nisi deleniti facilis accusantium explicabo
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">
              Share
            </Button>
            <Button size="small">
              Learn more
            </Button>
          </CardActions>
        </Card>
      </Box>
    </>
  )
}

export default MUICard
