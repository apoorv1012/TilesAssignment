import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import FetchApi from '../../api/fetchApi';
import Card from '../Card/card.jsx';

class SearchItems extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            tilesData: '',
        };
    }
    componentDidMount() {
        const searchTerm = (this.props.match.params.term).toLowerCase();
        FetchApi.getData(`/tiles/search/get/${searchTerm}`).then((response) => {
            const filteredTiles = _.filter(response, function(item) {
                if (item.text.toLowerCase().indexOf(searchTerm) > -1 ||
                    item.releaseYear.toLowerCase().indexOf(searchTerm) > -1 ||
                    item.description.toLowerCase().indexOf(searchTerm) > -1 ||
                    item.cast.toLowerCase().indexOf(searchTerm) > -1 ||
                    item.direction.toLowerCase().indexOf(searchTerm) > -1 ||
                    item.genre.toLowerCase().indexOf(searchTerm) > -1) {
                    return item;
                }
            });
            this.setState({
                'tilesData': filteredTiles,
            });
        });
    }
    handleRenderCard(item, index) {
        return <Card key={index} item={item}/>;
    }
    render() {
        const tiles = _.map(this.state.tilesData, this.handleRenderCard);
        return (
            <div className="cardsContainer">
                {tiles}
            </div>
        );
    }
}

SearchItems.propTypes = {
    match: PropTypes.object,
};

export default SearchItems;
