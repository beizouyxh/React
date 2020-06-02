import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Item extends Component {
    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
    }
    //1. 组件第一次存在于dom中，函数是不会执行的
    //如果已经存在于dom中，函数才会执行
    componentWillReceiveProps(){
       console.log('child - componentWillReceiveProps')
    }
     //只有在删除的时候执行
    componentWillUnmount(){
        console.log('child-componentWillUnmount')
    }
    render() { 
        return (
         <div onClick={this.handleClick}>
             {this.props.avname}为你做- {this.props.content}
         </div>
          );
    }
    handleClick(){
        this.props.deleteItem(this.props.index)

    }
}
/*校验*/
Item.prototypes={
    avname:PropTypes.string.isRequired,
    content:PropTypes.string,
    index:PropTypes.number,
    deleteItem:PropTypes.func
}
Item.defaultProps={
    avname:'三上悠亚'
}
export default Item;