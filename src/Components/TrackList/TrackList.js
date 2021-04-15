import React from 'react';
import Track from '../Track/Track';
import './TrackList.css';

class TrackList extends React.Component {

    isInPlaylist(track) {
        let tracksIn = this.props.tracksInPlaylist;
        // check if tracksIn is not "undefined"
        if (!tracksIn) {
            return; // if it is, break the code below
        }
         // check if the track passed in argument  is in the playlist or not and return a boolean 
        return (tracksIn.find(savedTrack => (savedTrack.id === track.id))) ? true : false;
    }

    render() {
        return (
            <div className="TrackList">
                {
                    this.props.tracks.map(track => {
                        if (!this.isInPlaylist(track)) { // display each track only if it is not in the playlist
                            return <Track key={track.id}
                                track={track}
                                onAdd={this.props.onAdd}
                                onRemove={this.props.onRemove}
                                isRemoval={this.props.isRemoval}
                            />
                        } else { // if it is in the playlist, display nothing
                            return null;
                        }
                    })
                }
            </div>
        );
    }
}

export default TrackList;