import React from 'react';

class ToDo extends React.Component {
  constructor (props){
    super ();
  }
  render (){
    return (
      <div className="element">
        <p id="two"> <h3>To-Do</h3>
        <ItemList/>
        </p>
      
      </div>
    );
  }
}

class Item extends React.Component {
  constructor (props){
    super ();

    this.state = {
      checked: false
    };

    this.handleClick = this.handleClick.bind(this);    
  }
  handleClick (e){
    this.setState({
      checked: !this.state.checked
    });

  }
  render (){
    let text = this.state.checked ? <strike>{this.props.message}</strike> : this.props.message;
    return (
        <div>
            <input type="checkbox" onClick={this.handleClick} />&nbsp;{text}
        </div>
    );
  }
}

let item2 = <Item message="do laundry" />;
let item3 = <Item message="buy candy" />;
let item4 = <Item message="rapid app proj" />;

let allTheThings = [item2, item3, item4];

class ItemList extends React.Component {
  constructor (props){
    super ();
  }
  render (){
    let items = allTheThings.map(thing => thing);
    return (
        <p>{items}</p>
    );
  }
}



export default ToDo;