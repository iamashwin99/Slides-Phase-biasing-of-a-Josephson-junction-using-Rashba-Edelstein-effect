import React from 'react';
import PropTypes from 'prop-types';

const Slide = ({ children, transition = 'fade' }) => (
  <section data-markdown>
    <textarea data-template data-transition={transition}>
      {children}
    </textarea>
  </section>
);

Slide.propTypes = {
  children: PropTypes.node,
  transition: PropTypes.string,
};

export default Slide;
