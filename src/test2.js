import React from 'react'
import { Button, TextField } from '@mui/material';



const Test2 = () =>{
    return(
        <div>
            <Button variant="outlined" color='error' size='small' sx = {{margin: 3}}
                onClick={() => {
                    alert('Clicked!');
                }}>Text
            </Button>
            <TextField id='outlined-basic' label='User Name' variant='filled' sx={{margin: 2}}> 

            </TextField>
            <div>
                
            </div>


        </div>
    )
}

export default Test2