import React, {Component} from "react";

class Subject extends Component {
    render() {
        // const a = function() {
        //     console.log(this);
        // };
        // a();
        // const b=function() {
        //     console.log(this);
        // }.bind(this);
        // b();
        // const c=()=> {
        //     console.log(this);
        // };
        // c();
        return (
            <header>
                <h1>
                    <a
                        href='/'
                        onClick={function (e) {
                            this.props.onChangePage();
                            e.preventDefault();
                        }.bind(this)}>{this.props.title}</a>
                </h1>
                {this.props.desc}
            </header>
        );
    }
}

export default Subject;