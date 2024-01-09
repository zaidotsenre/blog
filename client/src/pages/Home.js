import './Home.css';
import { useState } from 'react';
import placeholder from '../img/placeholder.png';
import avatar from '../img/avatar.png';
import Card from '../components/Card';
import BriefCard from '../components/BriefCard';
import Section from '../components/Section';
import settings from '../settings.json';
import Navbar from '../components/Navbar';

function Home() {
    /*
    const [posts, setPosts] = useState(
      fetch(`http://localhost:5220/posts`).then(
        (response) => response.json().then(
          result => result
        )
      ));
      */

    let loremipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor pretium viverra suspendisse potenti. At in tellus integer feugiat scelerisque. Enim diam vulputate ut pharetra sit amet. Erat velit scelerisque in dictum. Eu feugiat pretium nibh ipsum consequat nisl. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi etiam. Lorem ipsum dolor sit amet consectetur. Ac odio tempor orci dapibus ultrices in. Id donec ultrices tincidunt arcu. Nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet. Egestas tellus rutrum tellus pellentesque. Enim sit amet venenatis urna cursus eget. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim.'
    let placeholderCards = new Array(5).fill(<Card img={placeholder} title='Article 1' body={loremipsum} />);
    let placeholderBriefCards = new Array(5).fill(<BriefCard img={placeholder} title='Article 1' />);
    let aboutMeContent = (
        <>
            <img id='avatar' alt='The author.' src={avatar}></img>
            <h2>Ernesto Diaz</h2>
            <p>A brief description of my person. Some interesting details to let people know who is writing.</p>
        </>);

    const aboutMeSection = <Section id='about-me-section' header='About Me' content={aboutMeContent} />;
    const popularSection = <Section id='popular-section' header='Popular' content={placeholderBriefCards} />;
    return (

        <>

            <Navbar />

            <div className='Home'>

                <div className='vertical-panel'>
                    <Section id='recent-section' header='Recent' content={placeholderCards} />
                </div>

                <div className='vertical-panel'>
                    {settings.features.popular ? popularSection : null}
                    {settings.features.about_me ? aboutMeSection : null}
                </div>
            </div>
        </>


    );
}

export default Home;
