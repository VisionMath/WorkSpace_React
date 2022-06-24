import React, { Component } from 'react';

class UpdateContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            desc: this.props.desc
        }
    }
    render() {
        return (
            <article>
                <h2>Update Content</h2>
                <form action='/update_process' method='post' onSubmit={e => {
                    e.preventDefault();
                    const title = e.target.title.value;
                    const desc = e.target.desc.value;
                    this.props.onSubmit(title, desc);
                }}>
                    <p><input type='text' name='title' value={this.state.title} onChange={
                        e => {
                            this.setState({ title: e.target.value })
                        }
                    }></input></p>
                    <p><textarea type='text' name='desc' value={this.state.desc} onChange={
                        e => {
                            this.setState({ desc: e.target.value })
                        }
                    }></textarea></p>
                    <p><input type='submit' ></input></p>
                </form>
            </article>
        );
    }
}

export default UpdateContent;