import './App.css';
import Reader from './Reader';
import Navbar from './Navbar';
import { useState } from 'react';
import AppHeader from './AppHeader';
import placeholder from './img/placeholder.jpg';

function App() {
  /*
  const [posts, setPosts] = useState(
    fetch(`http://localhost:5220/posts`).then(
      (response) => response.json().then(
        result => result
      )
    ));
    */

  return (
    <div className="App">
      <div className='App-navbar'>
        <div className='App-navbar-top'>
          <div className='navbar-socials'>
            <h3>F</h3>
            <h3>X</h3>
            <h3>L</h3>
          </div>
          <div className='navbar-name'><h1>Blog Name</h1></div>
          <div className='navbar-search'>
            <h3>S</h3>
          </div>
        </div>
        <div className='App-navbar-bottom'>
          <h3>Option 1</h3>
          <h3>Option 2</h3>
          <h3>Option 3</h3>
        </div>
      </div>
      <div className='App-content'>
        <div className='vertical-panel'>
          <div id='recent-section' className='section'>
            <div className='section-header'>
              <h3>Recent</h3>
            </div>
            <div className='card'>
              <div className='card-thumbnail'>
                <img src={placeholder} alt='Placeholder'></img>
              </div>
              <div className='card-info'>
                <h2>Title</h2>
                <p>Summary. Lorem ipsum yada yada. Just some reandom palabras.</p>
                <a href='#'>Read more...</a>
              </div>
            </div>
            <div className='card'>
              <div className='card-thumbnail'>
                <img src={placeholder} alt='Placeholder'></img>
              </div>
              <div className='card-info'>
                <h2>Title</h2>
                <p>Summary. Lorem ipsum yada yada. Just some reandom palabras.</p>
                <a href='#'>Read more...</a>
              </div>
            </div>
            <div className='card'>
              <div className='card-thumbnail'>
                <img src={placeholder} alt='Placeholder'></img>
              </div>
              <div className='card-info'>
                <h2>Title</h2>
                <p>Summary. Lorem ipsum yada yada. Just some reandom palabras.</p>
                <a href='#'>Read more...</a>
              </div>
            </div>
          </div>

        </div>
        <div className='vertical-panel'>
          <div id='about-me-section' className='section'>
            <div className='section-header'>
              <h3>About Me</h3>
            </div>
            <img alt='The author.'></img>
            <h2>Ernesto Diaz</h2>
            <p>A brief description of my person. Some interesting details to let people know who is writing.</p></div>
          <div id='popular-section' className='section'>
            <div className='section-header'>
              <h3>Popular</h3>
            </div>
            <div className='card'>
              <div className='card-thumbnail'>
                <img src={placeholder} alt='Placeholder'></img>
              </div>
              <div className='card-info'><h3>Title</h3></div>
            </div>
            <div className='card'>
              <div className='card-thumbnail'>
                <img src={placeholder} alt='Placeholder'></img>
              </div>
              <div className='card-info'><h3>Title</h3></div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
