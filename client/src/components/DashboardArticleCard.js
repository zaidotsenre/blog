import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Container, IconButton, ListItemIcon, ListItemText, MenuItem } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import MenuList from '@mui/material/MenuList';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import moment from 'moment';
import * as React from 'react';
import { Link as RouterLink } from "react-router-dom";
import '../requests.js';
import { deleteArticle } from '../requests.js';




export default function DashboardArticleCard(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const tryDelete = async () => {
        console.log(typeof (props.articleID));
        const response = await deleteArticle(props.articleId);
        if (response.status == 200) {
            // show success 
            console.log('Succefully deleted article.')
        } else {
            //show failure
            console.error('Failed to delete article.')
        }
    }

    return (

        <Container sx={{
            display: 'block', position: 'relative', p: { xs: 0, md: 0 }
        }}>
            <Card sx={{ display: 'flex' }}>
                <IconButton onClick={handleClick} aria-describedby={id} sx={{ position: 'absolute', top: 2, right: 2, backgroundColor: 'rgba(0, 0, 0, .15)', borderRadius: 1 }}>
                    <MoreVertIcon color={'white'} />
                </IconButton>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                >
                    <MenuList key={props.articleId}>
                        <MenuItem>
                            <ListItemIcon>
                                <EditIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Edit</ListItemText>
                        </MenuItem>
                        <MenuItem onClick={tryDelete}>
                            <ListItemIcon>
                                <DeleteForeverIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText>Delete</ListItemText>
                        </MenuItem>
                    </MenuList>

                </Popover>
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
                    <Typography variant="subtitle1" color="primary" component={RouterLink} to={`/read/${props.articleId}`}>
                        Read...
                    </Typography>
                </CardContent>
                <CardMedia
                    component="img"
                    sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                    image={`data:image/jpeg;base64,${props?.thumbnail}`}
                    alt='Thumbnail'
                />
            </Card >

        </Container >

    );

}


