import React, { Component } from "react";

class CreateContent extends Component {
    render() {
        return (
            <div>
                <h1>Create Content</h1>
                <input type="text" name="title"></input>
                <textarea type="text" name="desc"></textarea>
                <input type="button"></input>
            </div>
        )
    }
}

export default CreateContent;