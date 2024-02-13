import React from 'react';
import Intro2JJ from './Intro2JJ';
import RashbaEffect from './RashbaEffect';
import ThesisWork from './ThesisWork';
import PostThesisWork from './PostThesisWork';
import MDSlide from '../Components/RevealComponents/SlideWithMarkdown';

export default [
<React.Fragment>
  <section data-markdown>
    <textarea data-template>
      ## Slide 1
      A paragraph with some text and a [link](https://hakim.se).
      ---
      ## Slide 2
      ---
      ## Slide 3
    </textarea>
  </section>
</React.Fragment>

  <MDSlide>
    # Outline
    - Introduction to JJ
    - Rashba Effect
    - Phase biasing of JJ using Rashba Effect
    - Other works
  </MDSlide>,
  <Intro2JJ />,
  <RashbaEffect />,
  <ThesisWork />,
  <PostThesisWork />,
];
