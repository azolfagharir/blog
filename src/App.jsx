import './App.css'
import BlogSection from './component/BlogSection'
import AuthorSection from './component/AuthorSection'
import Post from "./Pages/Post";
import Author from './Pages/Author'
import HomePage from './Pages/HomePage';
import { Routes,Route } from 'react-router-dom';

function App() {

  return (
    <>
   <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='Blog/:slug' element={<Post />}/>
      <Route path='Author/:slug' element={<Author />}/>
    </Routes>
    </>
  )
}

export default App
