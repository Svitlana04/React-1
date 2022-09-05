import { Component } from 'react';
import './List.css';

class List extends Component{
    render() {
      const  numbers = ["Добрий день", "ми", "з","України"];
      return(
          <div>
            {numbers.map((e)=><div>{e}</div>)}
          </div>
      )
    }
  }
  export default List;