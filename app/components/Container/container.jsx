import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../Header/header.jsx';
import CardCollection from '../Card/cardCollection.jsx';
import CardDetailed from '../Card/cardDetailed.jsx';
import SearchItems from '../Search/searchItems.jsx';
import Footer from '../Footer/footer.jsx';

const Container = () => (
    <Router>
        <div>
            <Header/>
            <div>
                <Route exact path="/" component={CardCollection}/>
                <Route exact path="/tiles/:id" component={CardDetailed}/>
                <Route eaxct path="/tiles/search/:term" component={SearchItems}/>
            </div>
            <Footer/>
        </div>
    </Router>
);

export default Container;
