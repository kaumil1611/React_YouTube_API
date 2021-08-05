import React from 'react';
import SearchBar from './SearchBar';
import VideoDetails from './VideoDetails';
import VideoList from './VideoList';
import youTube from '../apis/youtube_api';

class App extends React.Component{

    state = {
        YouTubeVideo : [],
        SelectedVideo : null
    }
    onSearchSubmit = async (term) =>{
       const response = await youTube.get('/search',{
            params:{
                q: term
            }
        });
        this.setState({ YouTubeVideo :response.data.items,
                        SelectedVideo : response.data.items[0]
        });
    };

    onVideoSelect  = (video) =>{
        // console.log('from the app', video);
        this.setState({
            SelectedVideo: video
        })
    }
    render(){
        return(
            <div className="ui container"> 
                <SearchBar onFormSubmit={this.onSearchSubmit} videoLength = {this.state.YouTubeVideo.length}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetails video={this.state.SelectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videoes = {this.state.YouTubeVideo} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default App;