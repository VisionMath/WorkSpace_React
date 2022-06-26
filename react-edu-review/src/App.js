import './App.css';
import { Component } from 'react';
import Subject from './Subject';
import TOC from './TOC';
import Content from './Content';
import MyComponent from './MyComponent';
import CreateContent from './CreateContent';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subject: {
                title: 'WEB',
                sub: 'World Wide Web!'
            },
            contents: [
                {
                    id: 1,
                    title: 'HTML',
                    desc: 'HTML is for information.'
                }, {
                    id: 2,
                    title: 'CSS',
                    desc: 'CSS is for design.'
                }, {
                    id: 3,
                    title: 'JavaScript',
                    desc: 'JavaScript is for interactive.'
                }, {
                    desc: 'JavaScript is for interactive.'
                }
            ]
        }
    }
    render() {
        return (
            <div className="App">
                <Subject title={this.state.subject.title} desc={this.state.subject.sub} />
                <TOC contents={this.state.contents}></TOC>
                <Content
                    title={this
                        .state
                        .contents[0]
                        .title}
                    desc={this
                        .state
                        .contents[0]
                        .desc} />
                <CreateContent />
                {/* <MyComponent data='data!' number='1234' /> */}
            </div>
        );
    }
}

export default App;