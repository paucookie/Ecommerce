import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Map from './components/Map/Map'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemDetail from './components/ItemDetail/ItemDetail'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  

  return (
    <div>
    <>
      <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/categoria/:categoria' element={<ItemListContainer/>}/>
            <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>

          </Routes>
      </BrowserRouter>


    </>
    </div>

  )
}

export default App
