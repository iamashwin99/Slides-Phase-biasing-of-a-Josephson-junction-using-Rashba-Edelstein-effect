import React from 'react';
import styled from 'styled-components';
import Slide from '../Components/RevealComponents/Slide';
import Note from '../Components/Notes/note';
// import Note from '../Components/Notes/note';
// import SlideWithTitle from '../Components/RevealComponents/SlideWithTitle';
// import Link from '../Components/Link';
// import Bash from '../Components/Highlight/Bash';
// import CSSAnimationSlide from './CSSAnimationSlide';
// import JSX from '../Components/Highlight/JSX';

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Intro2JJ = () => (
  <>
    <Slide>
      This a test
      <Note>This is a test</Note>
      <Slide>
        This a slide below
        <Note>This is a new test</Note>
      </Slide>
    </Slide>
  </>
);

export default Intro2JJ;
