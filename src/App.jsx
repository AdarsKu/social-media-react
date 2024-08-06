import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import SideBar from './components/SideBar'
import { PostListContextProvider } from './store/PostListContext'
import { Outlet } from 'react-router-dom'

function App() {


  const selcedTab = useState('Home')



  return <>
    <PostListContextProvider>
      <div className='app-container'>
        <SideBar setSelectedTab={selcedTab} />
        <div className="content">
          <Header />
          <Outlet />
        </div>

      </div>
      <Footer />
    </PostListContextProvider>
  </>

}


export default App
