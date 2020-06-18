import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/Youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


class App extends React.Component {


    state = {
        videos: [],
        selectedVideo: null
    };

    onVideoSelect = (video) => {
        this.setState({
            selectedVideo: video
        });
    }

    onTermSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({ videos: response.data.items });
    }


    render() {

        let videoList = <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />;

        if (this.state.selectedVideo) {
            videoList = <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={this.state.selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList
                            videos={this.state.videos}
                            onVideoSelect={this.onVideoSelect}
                        />
                    </div>
                </div>
            </div>;
        }


        return (
            <div className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit} />
                {videoList}
            </div>
        );
    }
}

export default App; 