import './DescInput.css';
import { Component } from 'react';

class DescInput extends Component {
    render() {
        return (
            <form className='desc-input' onSubmit={e => {
                e.preventDefault();
                const content = e.target.content.value;
                this.props.onSubmit(content);
            }}>
                <input type='text' name='content' />
                <button type='submit'>추가</button>
            </form>
        );
    }
}
export default DescInput;