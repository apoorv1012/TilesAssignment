import React from 'react';
import _ from 'lodash';
import { bindHandlers } from 'react-bind-handlers';
import PropTypes from 'prop-types';
import FetchApi from '../../api/fetchApi';
import Modal from '../Modal/modal.jsx';

class CardDetailed extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            'tileData': {},
            'isLoading': true,
        };
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        FetchApi.getData(`/tiles/get/${id}`).then((response) => {
            this.setState({
                'tileData': response,
                'modalOpen': false,
                'isLoading': false,
            });
        });
    }
    handleEditCard() {
        const oldState = this.state;
        const newState = _.defaults({}, { 'modalOpen': !this.state.modalOpen }, oldState);
        this.setState(newState);
    }
    render() {
        return (
            <div>
                { this.state.isLoading ?
                    <div id="loader">
                        <img src="/images/loader.gif" alt="loader"/>
                    </div> :
                    <div>
                        <div className="card full">
                            <img className="card-img-top" src={this.state.tileData.imagePath} alt="Card image cap"/>
                            <div className="card-block">
                                <span className="card-edit" onClick={this.handleEditCard}><i className="glyphicon glyphicon-pencil"></i></span>
                                <h4 className="card-title">{this.state.tileData.text}</h4>
                                <p className="card-year">{this.state.tileData.releaseYear}</p>
                                <p className="card-genre">{this.state.tileData.genre}</p>
                                <p className="card-description">{this.state.tileData.description}</p>
                                <p className="card-cast"><strong>Cast: </strong>{this.state.tileData.cast}</p>
                                <p className="card-direction"><strong>Direction: </strong>{this.state.tileData.direction}</p>
                            </div>
                        </div>
                        <Modal modalOpen={this.state.modalOpen} modalContent={this.state.tileData} cardId={this.props.match.params.id}/>
                    </div>
                }
            </div>
        );
    }
}

CardDetailed.propTypes = {
    match: PropTypes.object,
};

export default bindHandlers(CardDetailed);
