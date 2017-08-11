import React from 'react';
import { bindHandlers } from 'react-bind-handlers';
import PropTypes from 'prop-types';

class Card extends React.PureComponent {
    render() {
        return (
            <div className="card col-sm-4">
                <img className="card-img-top" src={this.props.item.imagePath} alt="Movie Thumbnail"/>
                <div className="card-block">
                    <h4 className="card-title">{this.props.item.text}</h4>
                    <a href={`/tiles/${this.props.item.id}`} className="btn btn-primary">Know More</a>
                </div>
            </div>
        );
    }
}

Card.propTypes = {
    item: PropTypes.shape({
        imagePath: PropTypes.string,
        text: PropTypes.string,
        id: PropTypes.string,
    }),
};

export default bindHandlers(Card);
