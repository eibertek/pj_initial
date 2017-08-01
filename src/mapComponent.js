import React from 'react';
import {render} from 'react-dom';

class MapComponent extends React.Component {
    render() {
        return <div>COMPONENT REACT {this.props.info.status} ({this.props.info.x}, {this.props.info.y})</div>;
    }
}

window.renderMap = function(id, data) {
    return render(<MapComponent info={data} />, document.getElementById(id));
}
