import React, { Component } from 'react';

class CreateContent extends Component {
    render() {
        return (
            <article>
                <h2>Create Content</h2>
                <form action='/create_process' method='post'
                    onSubmit={e => {
                        e.preventDefault();
                        const title = e.target.title.value;
                        const desc = e.target.desc.value;
                        this.props.onSubmit(title, desc);
                    }}
                >
                    <p><input type='text' name='title'></input></p>
                    <p><textarea type='text' name='desc'></textarea></p>
                    <p><input type='submit' ></input></p>
                </form>
            </article>
        );
    }
}

export default CreateContent;