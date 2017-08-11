import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { bindHandlers } from 'react-bind-handlers';
import FetchApi from '../../api/fetchApi';

class Modal extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            imagePath: '',
            releaseYear: '',
            description: '',
            cast: '',
            direction: '',
            genre: '',
            id: '',
        };
    }
    componentWillReceiveProps() {
        this.setState({
            text: this.props.modalContent.text,
            imagePath: this.props.modalContent.imagePath,
            releaseYear: this.props.modalContent.releaseYear,
            description: this.props.modalContent.description,
            cast: this.props.modalContent.cast,
            direction: this.props.modalContent.direction,
            genre: this.props.modalContent.genre,
            id: this.props.modalContent.id,
        });
    }
    handleCloseModal() {
        this.cardModal.className = 'modal hide';
    }
    handleTextChange(event) {
        const eventId = event.target.id;
        const newState = {};
        newState[eventId] = event.target.value;
        _.defaults(newState, this.state);
        this.setState(newState);
    }
    handleFormCancel(event) {
        event.preventDefault();
        window.location.reload();
    }
    handleFormSubmit() {
        FetchApi.putData(`/tiles/put/${this.props.cardId}`, this.state);
    }
    render() {
        const modalClass = this.props.modalOpen ? 'show' : 'hide';
        return (
            <div id="cardModal" ref={(ref) => (this.cardModal = ref)} className={`modal ${modalClass}`}>
                <div className="modal-content">
                    <span onClick={this.handleCloseModal} className="close"><i className="glyphicon glyphicon-remove"></i></span>
                    <form>
                        <div className="form-group row">
                            <label htmlFor="releaseYear" className="col-2 col-form-label">Release Year</label>
                            <div className="col-10">
                                <input className="form-control" type="text" onChange={this.handleTextChange}
                                    value={this.state.releaseYear} id="releaseYear"
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="description" className="col-2 col-form-label">Description</label>
                            <div className="col-10">
                                <input className="form-control" type="text" onChange={this.handleTextChange}
                                    value={this.state.description} id="description"
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="cast" className="col-2 col-form-label">Cast</label>
                            <div className="col-10">
                                <input className="form-control" type="text" onChange={this.handleTextChange} value={this.state.cast} id="cast"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="direction" className="col-2 col-form-label">Direction</label>
                            <div className="col-10">
                                <input className="form-control" type="text" onChange={this.handleTextChange}
                                    value={this.state.direction} id="direction"
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="genre" className="col-2 col-form-label">Genre</label>
                            <div className="col-10">
                                <input className="form-control" type="text" onChange={this.handleTextChange} value={this.state.genre} id="genre"/>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={this.handleFormSubmit}>SAVE</button>
                        <button type="cancel" className="btn btn-default btn-cancel" onClick={this.handleFormCancel}>CANCEL</button>
                    </form>
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    modalContent: PropTypes.shape({
        text: PropTypes.string,
        imagePath: PropTypes.string,
        releaseYear: PropTypes.string,
        description: PropTypes.string,
        cast: PropTypes.cast,
        direction: PropTypes.string,
        genre: PropTypes.string,
        id: PropTypes.string,
    }),
    modalOpen: PropTypes.bool,
    cardId: PropTypes.string,
};

export default bindHandlers(Modal);
