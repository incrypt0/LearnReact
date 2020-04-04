import React, { Component } from 'react'

class ClassClick extends Component {
    clickhandler(){
        console.log('Clicked the button')
    }
    render() {
        return (
            <div>
               <button onClick={this.clickhandler}>Click</button> 
            </div>
        )
    }
}

export default ClassClick
