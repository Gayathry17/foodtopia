import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Landing, Login, Register, Cart } from './components'
import { Book, Menu, Reviews } from './pages'

import PrivateRoute from "./utils/PrivateRoute"


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="book" 
              element={
                <PrivateRoute>
                  <Book />
                </PrivateRoute>
              }
            />
            <Route path="menu" 
              element={
                <PrivateRoute>
                  <Menu />
                </PrivateRoute>
              }
            />
              <Route path="book" 
              element={
                <PrivateRoute>
                  <Book />
                </PrivateRoute>
              }
            />
            <Route path="cart" 
              element={
                <PrivateRoute>
                  <Cart />
                </PrivateRoute>
              }
            />

            <Route path="reviews" 
              element={
                <PrivateRoute>
                  <Reviews />
                </PrivateRoute>
              }
            />

            <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;