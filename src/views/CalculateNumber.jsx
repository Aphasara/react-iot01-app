import { Height } from '@mui/icons-material'
import React from 'react'
import { Box, Typography, Avatar, TextField,FormControl, Button, Select, MenuItem } from '@mui/material'

function CalculateNumber() {
  return (
    <>
        <Box sx={{Height: '100vh', display: 'flex'}}>
            <Box sx={{width: '70%', boxShadow: 2 , mx: 'auto', my:'auto', p:5}}>
                <Avatar src='https://img.securityinfowatch.com/files/base/cygnus/siw/image/2021/10/bigstock_Internet_Of_Things__Iot_Conce_413663834.6165ebd7685e3.png?auto=format,compress&fit=max&q=45&w=640&width=640'
                sx={{ width: 150, height: 150, mx: 'auto', boxShadow: 20}} />
                    <Typography variant='h5' sx={{textAlign: 'center', mt: 2}}>
                        เครื่องคิดเลข
                    </Typography>
                    <Typography sx={{mt: 2}}>
                        ตัวเลขที่ 1
                    </Typography>
                    <TextField variant="outlined" fullWidth type='number'/>
                    <Typography sx={{mt: 2}}>
                        ตัวเลขที่ 2
                    </Typography>
                    <TextField variant="outlined" fullWidth type='number'/>
                    <Typography sx={{mt: 2}}>
                        เลือกเครื่องหมายคำนวณ
                    </Typography>
                    <TextField variant="outlined" fullWidth type='number'/>
                    <FormControl fullWidth sx={{mt: 3}}>
                            <Select defaultValue={'+'}>
                                <MenuItem value={'+'}>+ บวก</MenuItem>
                                <MenuItem value={'-'}>- ลบ</MenuItem>
                                <MenuItem value={'*'}>* คูณ</MenuItem>
                                <MenuItem value={'/'}>/ หาร</MenuItem>
                            </Select>
                    </FormControl>
                    <Button fullWidth variant='contained' sx={{mt: 4, backgroundColor: '#1976d8', height: 50, borderRadius: 6, boxShadow:20}}>
                        <Typography sx={{textAlign: 'center'}}>
                            คำนวณ
                        </Typography>
                    </Button>
                    <Typography sx={{textAlign: 'center', mt: 4, color: 'red', fontSize: 100}}>
                        0.00
                    </Typography>
            </Box>
        </Box>
    </>
  )
}

export default CalculateNumber