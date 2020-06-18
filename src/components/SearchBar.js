import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {

    state = { term: '' };

    onFormSubmit = event => {
        event.preventDefault();
        this.props.onTermSubmit(this.state.term);
    }

    render() {
        return (
            <div className="search-bar">
                <div className="ui segment">
                    <form className=" ui form" onSubmit={this.onFormSubmit}>
                        <div className="field">
                            <label>Search:</label>
                            <input
                                type='text'
                                onChange={(e) => this.setState({ term: e.target.value })}
                                value={this.state.value}
                            />
                        </div>
                    </form>
                </div>
            </div>

        );
    }
}

export default SearchBar;