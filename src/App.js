
import './App.css';
import CreatePost from './Components/CreatePost';
import NavBar from './Components/Navbar';
import PostsDisplay from './Components/PostsDisplay';

import PostsProvider from './context/PostsProvider';

function App() {
  return (
    <PostsProvider>
      <div className="App">
        <NavBar/>
     <CreatePost/>
     <PostsDisplay/>
     
    </div>
    </PostsProvider>
  );
}

export default App;
