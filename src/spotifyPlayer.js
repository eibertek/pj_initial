import React from 'react';
import {render} from 'react-dom';
import SpotifyPlayer from 'react-spotify-player';
 
// size may also be a plain string using the presets 'large' or 'compact' 
const size = {
  width: '100%',
  height: 100,
};
const view = 'list'; // or 'coverart' 
const theme = 'white'; // or 'white' 

window.renderSpotifyPlayer  = function(id, data) {
    return render(<SpotifyPlayer
  uri="spotify:artist:5uokiFh6UkIth52w1vCWeF"
  size={size}
  view={view}
  theme={theme}
/>, document.getElementById(id));
} 

