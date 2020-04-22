// import react library
import React, { Component } from 'react';

class TOC extends Component{
    shouldComponentUpdate(newProps, newState){
      
      if(this.props.data === newProps.data){
        return false;
      }
      return true;
    }
    render(){
      var lists = [];
      var data = this.props.data;
      var i = 0;
      while(i < data.length){
        lists.push(
        <li key={data[i].id}>
          <a
            href={"/content/"+data[i].id}

            // 속성을 이용한 방법
            // data-id={data[i].id}

            onClick={function(id, e){
              e.preventDefault();
              this.props.onChangePage(id);
            // }.bind(this)}
            }.bind(this, data[i].id)}
            >{data[i].title}
            </a>
          </li>);
        i = i +1;
      }
      return (
          <nav>
            <ul>
              {lists}
            </ul> 
          </nav>
        );
      }
  }

export default TOC;