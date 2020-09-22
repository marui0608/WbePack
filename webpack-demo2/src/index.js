import React from 'react'
import ReactDOM from 'react-dom'
import Detail from './detail'
import './css/index.less'

class Index extends React.Component{
    render(){
        return (
            <div>
                <h1>Mary首页</h1>
                <Detail></Detail>
            </div>
        )
    }
}

ReactDOM.render(
    <Index></Index>,
    document.getElementById('root')
)