
import './App.css';
import Home from './pages/Home';
import Reader from './pages/Reader';


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
      <Home />
    </div>

  );
}

export default App;

