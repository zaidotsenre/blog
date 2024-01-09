import './SocialLinks.css'
import instagramIcon from '../img/instagram.png';
import githubIcon from '../img/github.png';
import linkedinIcon from '../img/linkedin.png';
import settings from "../settings.json";

export default function SocialLinks() {
    return (
        <div className='SocialLinks'>
            <a href={settings.urls.author_socials.instagram}>
                < img src={instagramIcon} alt="Instagram logo"></img>
            </a>
            <a href={settings.urls.author_socials.linkedin}>
                < img src={linkedinIcon} alt="LinkedIn logo"></img>
            </a>
            <a href={settings.urls.author_socials.github}>
                < img src={githubIcon} alt="GitHub logo"></img>
            </a>
        </div>
    );
}