import './Home.css';
import placeholder from '../img/placeholder.png';
import avatar from '../img/avatar.png';
import Card from '../components/Card';
import BriefCard from '../components/BriefCard';
import Section from '../components/Section';
import settings from '../settings.json';
import Navbar from '../components/Navbar';
import { getArticles } from '../requests';
import { useLoaderData } from 'react-router';
import SocialLinks from '../components/SocialLinks';


export async function loader() {
    const articles = await getArticles();
    return { articles };
}

export default function Home() {

    const { articles } = useLoaderData();

    let placeholderBriefCards = new Array(5).fill(<BriefCard img={placeholder} title='Article 1' />);
    let cards = articles?.map((article) => (

        <Card key={article.id} articleId={article.id} thumbnail={article.thumbnail} title={article.title} summary={article.summary} />
    ));

    let aboutMeContent = (
        <>
            <img id='avatar' alt='The author.' src={avatar}></img>
            <h2>Ernesto Diaz</h2>
            <p>A brief description of my person. Some interesting details to let people know who is writing.</p>
            <SocialLinks />
        </>
    );

    const aboutMeSection = <Section id='about-me-section' header='About Me' content={aboutMeContent} />;
    const popularSection = <Section id='popular-section' header='Popular' content={placeholderBriefCards} />;

    return (
        <div className='Home'>

            <div className='vertical-panel'>
                <Section id='recent-section' header='Recent' content={cards} />
            </div>

            <div className='vertical-panel'>
                {settings.features.popular ? popularSection : null}
                {settings.features.about_me ? aboutMeSection : null}
            </div>
        </div>
    );
}


