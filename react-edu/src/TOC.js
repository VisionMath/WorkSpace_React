import {Component} from "react";

class TOC extends Component {
    render() {
        const list = [];
        for (let i = 0; i < this.props.contents.length; i++) {
            const content = this
                .props
                .contents[i];
            list.push(
                <li key={content.id}>
                    <a
                        href={content.id + '.html'}
                        onClick={function (e) {
                            e.preventDefault();
                            this
                                .props
                                .onSelect(this.props.contents[i].id);
                        }.bind(this)}>{content.title}</a>
                </li>
            );
        }
        return (
            <nav>
                <ul>
                    {list}
                </ul>
            </nav>
        )
    }
}

export default TOC;