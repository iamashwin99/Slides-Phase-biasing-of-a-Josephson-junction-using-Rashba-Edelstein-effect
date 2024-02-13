import React, { useEffect } from 'react';
import Reveal from 'reveal.js';
// default plugins
import RevealNotes from 'reveal.js/plugin/notes/notes';
import RevealMath from 'reveal.js/plugin/math/math';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight';
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown';
import RevealSearch from 'reveal.js/plugin/search/search';
import RevealZoom from 'reveal.js/plugin/zoom/zoom';
// from reveal.js-plugins
import RevealChalkboard from 'reveal.js-plugins/chalkboard/plugin';
// import RevealAnimate from 'reveal.js-plugin/animate/plugin';
import RevealChart from 'reveal.js-plugins/chart/plugin';
import RevealCustomControls from 'reveal.js-plugins/customcontrols/plugin';
import RevealSeminar from 'reveal.js-plugins/seminar/plugin';

import PropTypes from 'prop-types';
import styled from 'styled-components';
import revealOptions from './revealOptions';

import 'reveal.js/dist/reveal.css';

const Deck = ({ children }) => {
  useEffect(() => {
    Reveal.initialize({
      ...revealOptions,
      // Learn about plugins: https://revealjs.com/plugins/
      plugins: [
        RevealMarkdown,
        RevealHighlight,
        RevealNotes,
        RevealChalkboard,
        RevealMath,
        RevealZoom,
        RevealSearch,
      ],
    });
  });
  return (
    <div className="reveal">
      <div className="slides">{children}</div>
      {/* <Author>Ashwin</Author> */}
    </div>
  );
};

const Author = styled.h6`
  position: fixed;
  bottom: 0;
  left: 20px;
`;

Deck.propTypes = {
  children: PropTypes.node,
};

export default Deck;
