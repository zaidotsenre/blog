import { Avatar, Stack } from '@mui/material';
import githubIcon from '../img/github.png';
import instagramIcon from '../img/instagram.png';
import linkedinIcon from '../img/linkedin.png';
import settings from "../settings.json";

export default function SocialLinks() {
    return (

        <Stack direction={'row'} spacing={4} width={'100%'} alignItems={'center'} justifyContent={'center'}>
            <Avatar src={instagramIcon} alt="Instagram logo" component={'a'} href={settings.urls.author_socials.instagram} />
            <Avatar src={linkedinIcon} alt="LinkedIn logo" component={'a'} href={settings.urls.author_socials.linkedin} />
            <Avatar src={githubIcon} alt="GitHub logo" component={'a'} href={settings.urls.author_socials.github} />
        </Stack>

    );
}