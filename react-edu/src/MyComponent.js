import {Component} from 'react';

class MyComponent extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h1>{this.props.data}</h1>
                <h1>{this.props.number}</h1>
            </div>
        )
    }
}

export default MyComponent;