import React from 'react';
import propTypes from 'prop-types';

import './button.scss';

class Button extends React.Component {
  render() {
    const { label, ...otherProps } = this.props;
    return (
      <button className='button' {...otherProps}>
        {label}
      </button>
    );
  }
}

Button.propTypes = {
  label: propTypes.string
};

Button.defaultProps = {
  label: 'SUBMIT'
};

export default Button;
