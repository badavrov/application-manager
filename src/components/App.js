import React from 'react';

//import components
import Header from './header/Header'
import Footer from './footer/Footer'

class App extends React.Component {
    render() {
        return (
            <div className="App">
            <Header />
            <Footer /> 
             </div>
        );
    }
};

export default App;