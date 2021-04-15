import React from "react"
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';



export default function Layout( { children } ) {
  


  return (
    <div style={{ margin: `3rem auto`, maxWidth: 800, padding: `0 1rem` }}>
        <Header  />
        <Menu />
        <main>
          {children}
        </main>
        <Footer />
    </div>
  )
}


