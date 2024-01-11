import Stack from '@mui/material/Stack';
import { Link as RouterLink } from "react-router-dom";
import { Container } from '@mui/material';
import Button from '@mui/material/Button';


// Helper function to ensure that only valid page numbers are used for routing and display
function validatePageNumber(page) {
    try {
        page = parseInt(page);
        return page <= 0 ? 1 : page;
    } catch {
        console.log('Paginator.js/validatePageNumber: Unable to parse page number. Returning 1.');
        return 1;
    }
}

export default function Paginator(props) {
    return (
        <Container sx={{ width: '100%' }}>
            <Stack direction={'row'} justifyContent={'center'}>
                <Button component={RouterLink} to={`/${validatePageNumber(props.page) - 1}`}>{'<Prev.'}</Button>
                <Button variant="outlined" disabled>
                    {validatePageNumber(props.page)}
                </Button>
                <Button component={RouterLink} to={`/${validatePageNumber(props.page) + 1}`} >{'Next.>'}</Button>
            </Stack>
        </Container >

    );
}


