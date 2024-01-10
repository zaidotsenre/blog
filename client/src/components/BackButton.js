import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { useNavigate } from 'react-router';

export default function BackButton() {
    const navigate = useNavigate();
    return (
        <IconButton onClick={() => navigate(-1)} color="primary" sx={{
            position: 'absolute',
            bottom: '20px',
            left: '20px',
            height: 50,
            width: 50
        }}>
            <ArrowBackRoundedIcon color='primary' sx={{
                height: '100%',
                width: '100%'
            }} />
        </IconButton>
    );
}