import React, {Component} from 'react';
import Item from './item'


class Market extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    };

render () {

        return(
            <div>
               <Item count={this.state.count}/>
               <button onClick={()=>this.setState({count: this.state.count +1})}>Add an Item!</button> 
            </div>
        );
    }
}

export default Market;