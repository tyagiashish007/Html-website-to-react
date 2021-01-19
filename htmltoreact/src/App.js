import React from 'react'
import Appsection from './Appsection'
import Cardsection from './Cardsection'
import Footer from './Footer'
import Herosection from './Herosection'

import NavBar from './NavBar'


const App = () =>{ 
    return(
        <div>
        {/* <h1>Ashish Tyagi</h1> */}
        <NavBar />
        <Herosection/>
        <Appsection/>
        <Cardsection />
        <Footer />
        </div>
    )
}

export default App;