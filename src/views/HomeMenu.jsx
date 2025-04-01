import React from 'react'
import { Box, Typography, Button, Avatar } from '@mui/material'

function HomeMenu() {
  return (
    <>
        <Box sx={{height: '100vh', display: 'flex'}}>
            <Box sx={{width: '70%', boxShadow: 2, mx: 'auto', my:'auto', p:3}}>
                <Avatar src='https://img.securityinfowatch.com/files/base/cygnus/siw/image/2021/10/bigstock_Internet_Of_Things__Iot_Conce_413663834.6165ebd7685e3.png?auto=format,compress&fit=max&q=45&w=640&width=640'
                sx={{ width: 150, height: 150, mx: 'auto'}} />
                <Typography variant='h3' sx={{textAlign: 'center', mt: 2}}>
                    IoT Calculate by Aphasara SAU
                </Typography>
            </Box>
        </Box>
    </>
  )
}

export default HomeMenu