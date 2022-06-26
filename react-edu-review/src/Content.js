import { Component } from "react";

class Content extends Component {
    state={
        title:'HTML'
    }
    render() {
        return (
            <article>
                <a href="1.html">{this.state.title}</a>
                <h2>{this.props.title}</h2>
                {this.props.desc}
            </article>
        )
    }
}

export default Content;