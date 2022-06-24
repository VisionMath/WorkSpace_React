import './App.css';
import { Component } from 'react';
import Subject from './Subject';
import TOC from './TOC';
import ReadContent from './ReadContent';
// import MyComponent from './MyComponent';
import Control from './Control';
import CreateContent from './CreateContent';
import UpdateContent from './UpdateContent';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'read',
            welcome: {
                title: 'welcome',
                desc: 'Hello, React'
            },
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
                    id: 4,
                    title: 'ex',
                    desc: 'ex is for example.'
                }
            ],
            selected_content_id: 1
        };
    }
    findContentById(id) {
        let content;
        for (let i = 0; i < this.state.contents.length; i++) {
            if (id === this.state.contents[i].id) {
                content = this
                    .state
                    .contents[i];
                break;
            }
        }
        return content;
    }
    render() {
        let title,
            desc, article;
        if (this.state.mode === 'welcome') {
            title = this.state.welcome.title;
            desc = this.state.welcome.desc;
        } else if (this.state.mode === 'read') {
            const content = this.findContentById(this.state.selected_content_id);
            title = content.title;
            desc = content.desc;
        } else if (this.state.mode === 'create') {
            article = <CreateContent
                onSubmit={function (title, desc) {
                    this.state.contents.push({
                        id: this.state.contents.length + 1,
                        title: title,
                        desc: desc
                    });
                    this.setState({ contents: this.state.contents });
                }.bind(this)
                }
            />
        } else if (this.state.mode === 'update') {
            const content = this.findContentById(this.state.selected_content_id);
            title = content.title;
            desc = content.desc;
            article = <UpdateContent title={title} desc={desc}
                onSubmit={(title, desc) => {
                    content.title = title;
                    content.desc = desc;
                    this.setState({ mode: 'read' })
                }} />
        }
        return (
            < div className="App" > <Subject
                title={this.state.subject.title}
                desc={this.state.subject.sub}
                onChangePage={function () {
                    this.setState({
                        mode: this.state.mode === 'read'
                            ? 'welcome'
                            : 'read'
                    });
                }.bind(this)} />
                <TOC
                    contents={this.state.contents}
                    onSelect={function (id) {
                        this.setState({ mode: 'read', selected_content_id: id });
                    }.bind(this)}></TOC>
                <ReadContent title={title} desc={desc} />
                <Control onChangeMode={mode => {
                    if (mode === 'delete') {
                        const contents = this.state.contents;
                        if (window.confirm("정말 삭제하시겠습니까?")) {
                            for (let i = 0; i < contents.length; i++) {
                                if (contents[i].id === this.state.selected_content_id) {
                                    contents.splice(i, 1);
                                }
                            }
                            // contents.splice(this.selected_content_id, 1);
                            this.setState({ mode: 'welcome', contents: contents });
                        }
                    } else {
                        this.setState({ mode: mode });
                    }
                }}
                />
                {article}
                {/* <MyComponent data='data!' number='1234' /> */}
            </div>
        );
    }
}

export default App;