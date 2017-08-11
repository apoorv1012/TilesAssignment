import React from 'react';
import _ from 'lodash';
import FetchApi from '../../api/fetchApi';
import Card from '../Card/card.jsx';

class CardCollection extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            tilesData: '',
        };
    }
    componentDidMount() {
        FetchApi.getData('/tiles').then((response) => {
            this.setState({
                tilesData: response,
            });
        });
    }
    handleRenderCard(item) {
        return <Card key={item.id} item={item}/>;
    }
    render() {
        const tiles = _.map(this.state.tilesData, this.handleRenderCard);
        return (
            <div className="cardsContainer row">
                {tiles}
            </div>
        );
    }
}

export default CardCollection;
