import React, { Component } from 'react';

class Project extends Component {
  render() {
    return (
      <article class="pa3 pa5-ns">
        <h1 class="f2">Title Text with Image</h1>
        <img
          src="http://tachyons.io/img/space.jpg"
          class="w-100 f5 measure"
          alt="Photo of outer space"
        />
        <p class="measure lh-copy">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
        <p class="measure lh-copy">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
      </article>
    );
  }
}

export default Project;
