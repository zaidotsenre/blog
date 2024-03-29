import placeholderImg from '../img/placeholder.jpg';
import { Link as RouterLink } from "react-router-dom";
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import moment from 'moment';


export default function ArticleCard(props) {
    return (

        <CardActionArea component={RouterLink} to={`/read/${props.articleId}`}>
            <Card sx={{ display: 'flex' }}>
                <CardContent sx={{ flex: 1 }}>
                    <Typography component="h2" variant="h5">
                        {props.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        {moment(props.date).format('LL')}
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                        {props.summary}
                    </Typography>
                    <Typography variant="subtitle1" color="primary">
                        Read...
                    </Typography>
                </CardContent>
                <CardMedia
                    component="img"
                    sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                    image={`data:${props?.thumbnail}`}
                    alt='Thumbnail'
                />
            </Card>
        </CardActionArea>

    );

}


