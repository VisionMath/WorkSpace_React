import React, { Component } from 'react';
import DescInput from './DescInput';
import './App.css';

class Header extends Component {
    render() {
        return (
            <header>
                <h1>{this.props.title}</h1>
                {/* <h1>{this.props.site_name2}</h1> */}
                <hr />
            </header>
        )
    }
}

class Section extends Component {
    render() {
        return (
            <section>

                {
                    <h4 align='left'>{
                        this
                            .props
                            .rule[0]
                            .content
                    }<br /> {
                            this
                                .props
                                .rule[1]
                                .content
                        }<br /> {
                            this
                                .props
                                .rule[2]
                                .content
                        }<br /> {
                            this
                                .props
                                .rule[3]
                                .content
                        }<br /> {
                            this
                                .props
                                .rule[4]
                                .content
                        }<br />
                    </h4>
                }
            </section>
        )
    }
}
class Article extends Component {
    render() {
        return (
            <article>
                <table border="1">
                    <tr>
                        <th>횟수</th>
                        <th colSpan={3}>숫자</th>
                        <th>판정</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>8</td>
                        <td>3</td>
                        <td>0</td>
                        <td>아웃</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>6</td>
                        <td>5</td>
                        <td>9</td>
                        <td>0S 1B</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>2</td>
                        <td>6</td>
                        <td>4</td>
                        <td>1S 1B</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>1</td>
                        <td>2</td>
                        <td>6</td>
                        <td>1S 2B</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>2</td>
                        <td>1</td>
                        <td>6</td>
                        <td>3S 0B</td>
                    </tr>
                </table>
            </article>
        )
    }
}

class Footer extends Component {
    render() {
        const list = [];
        for (let i = 0; i < this.props.desc.length; i++) {
            const src = this
                .props
                .desc[i];
            list.push(
                <h5
                    key={src.id}
                    id={src.id}
                    align="left"
                    onClick={function (e) {
                        e.preventDefault();
                        this
                            .props
                            .onChangeColor(src.id);
                    }.bind(this)}>
                    {src.content}
                </h5>
            );
        }
        return (
            <footer>
                {list}
            </footer>
        )
    }
}
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subject: {
                title: "야구게임방식"
            },
            rule: [
                {
                    content: "사용되는 숫자는 0에서 9까지 서로 다른 숫자이다."
                }, {
                    content: "숫자는 맞지만 위치가 틀렸을 때는 볼."
                }, {
                    content: "숫자와 위치가 전부 맞으면 스트라이크."
                }, {
                    content: "숫자와 위치가 전부 틀리면 아웃. '틀렸다'는 게 중요하다."
                }, {
                    content: "물론 무엇이 볼이고 스트라이크인지는 알려주지 않는다."
                }
            ],
            desc: [
                {
                    id: 1,
                    content: "1. 830 - 들어맞는 숫자가 아예 없으므로 아웃."
                }, {
                    id: 2,
                    content: "2. 659 - 6이 있지만 위치가 다르므로 1볼. 게임 상으로는 어떤 숫자가 맞는지 모르기 때문에 가장 난감하다."
                }, {
                    id: 3,
                    content: "3. 264 - 2가 있고 위치가 맞으며, 6이 있지만 다르므로 1스트라이크 1볼."
                }, {
                    id: 4,
                    content: "4. 126 - 숫자가 전부 맞지만 위치가 6만 맞고 나머지 둘은 다르므로 1스트라이크 2볼."
                }, {
                    id: 5,
                    content: "5. 216 - 전부 맞으므로 승리."
                }
            ]
        }
    }
    render() {
        return (
            <div className="App">
                <Header title={this.state.subject.title} />
                <Section rule={this.state.rule} />
                <Article />
                <Footer
                    desc={this.state.desc}
                    onChangeColor={function (id) {
                        // e.target.style.backgroundColor = e.target.style.backgroundColor === 'beige'
                        // ? 'transparent'      : 'beige';  e.target.style.textDecoration =
                        // e.target.style.textDecoration === 'underline'      ? 'none'      :
                        // 'underline';
                        document
                            .getElementById(id)
                            .style
                            .backgroundColor = document
                                .getElementById(id)
                                .style
                                .backgroundColor === 'beige'
                                ? 'transparent'
                                : 'beige';
                        document
                            .getElementById(id)
                            .style
                            .textDecoration = document
                                .getElementById(id)
                                .style
                                .textDecoration === 'underline'
                                ? 'none'
                                : 'underline';
                    }} />
                <DescInput
                    onSubmit={function (content) {
                        this.state.desc.push({
                            id: this.state.desc.length + 1,
                            content: content
                        });
                        this.setState({
                            desc: this.state.desc
                        })
                    }.bind(this)}
                />
            </div>
        );
    }
}

export default App;
