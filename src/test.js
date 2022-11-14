import React from 'react'
import { Button, IconButton } from '@mui/material'
import PhotoCamera from '@mui/icons-material/PhotoCamera'
import Deletetion from '@mui/icons-material/DeleteForeverTwoTone'
import Send from '@mui/icons-material/SendSharp'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCartTwoTone'
//import SaveIcon from '@mui/icons-material/Save'

const Test = () => {
    return (
        <div>
            <Button variant="text" color='error' size='small'
                onClick={() => {
                    alert('Clicked!');
                }}>Text</Button>
            <Button variant="contained" size='large'>Contained</Button>
            <Button variant="outlined">Outlined</Button>

            <Button variant='contained' component='label'>
                Upload
                <input hidden accept='image/*' multiple type='file'></input>
            </Button>
            <Button variant='contained' component='label'>
                Upload
                <input hidden accept='image/*' multiple type='file' />
            </Button>

            <IconButton color='primary' aria-label='upload-picture' component='label'>
                <input hidden accept='image/*' type='file' />
                <PhotoCamera />
            </IconButton>

            <IconButton color='error' aria-label='Delete Photo' component='label'>
                <input hidden accept='image/*' type='file' />
                <Deletetion />
            </IconButton>
            <Button variant='outlined' startIcon={<Deletetion />}>
                Delete
            </Button>
            <Button variant='contained' endIcon={<Send />}>
                Send
            </Button>
            <Button color="error" aria-label="add to shopping cart" variant='outlined' startIcon={<AddShoppingCartIcon />}>
                Cart
            </Button>
            
            


        </div>
    )
}


export default Test


