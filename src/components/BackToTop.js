import React from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import '../styles/BackToTopStyles.css'
import { Paper } from '@mui/material';

const BackToTop = () => {

    const ScrollTo = () => {
        window.scroll({ top: 0, behavior: 'smooth' })
    }

    return (
        <div onClick={ScrollTo} style={{ position: 'absolute', right: '15px' }}>
            <Paper className='arrow'>
                <ArrowUpwardIcon sx={{ width: '25px' }} />
            </Paper>

        </div>
    )
}

export default BackToTop