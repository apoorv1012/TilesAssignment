import React from 'react';
import { bindHandlers } from 'react-bind-handlers';

class Search extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            searchTerm: '',
        };
    }
    handleSearch(event) {
        const searchTermValue = this.searchBox.value;
        if (searchTermValue.length > 0) {
            this.setState({
                searchTerm: searchTermValue,
            });
        } else {
            event.preventDefault();
        }
    }
    render() {
        return (
            <div className="search-area">
                <div className="input-group">
                    <input type="search" className="form-control" ref={(ref) => (this.searchBox = ref)} id="searchBox"
                        placeholder="Search"
                    />
                    <div className="input-group-btn">
                        <a className="btn btn-default" ref={(ref) => (this.searchBtn = ref)}
                            href={`/tiles/search/${this.state.searchTerm}`} onClick={this.handleSearch}
                        >
                            <i className="glyphicon glyphicon-search"></i>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default bindHandlers(Search);
