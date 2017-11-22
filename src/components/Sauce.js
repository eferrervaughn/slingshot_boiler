import React, { Component } from 'react';
import PropTypes from 'prop-types';

const House = ({money}) => {
    return <h3>House money ${money} </h3>
}

// House.propTypes = {
//     money: PropTypes.number
// };

export class Sauce extends Component {
    render() {
        const { name, money } = this.props;
        return (
            <div>
                {name ? <p className="name">name</p> : 'no name'} has the sauce
                {money ? <House money="33" />  : 'no money'}
            </div>
        );
    }
}

Sauce.propTypes = {
    name: PropTypes.string,
    money: PropTypes.bool
};

export default Sauce;
