import React from "react";

class SideScrolly extends React.Component {
  render() {
    const { id } = this.props;
    return (
      <section className="side-scrolly side-scrolly1" id={id}>
        <figure className="side-figure">
          <img
            className="willie-image"
            src="img/willie.png"
            alt="Willie and Netizens Attacking Pia"
          />
        </figure>
        <article>
          <div className="side-step" data-step={1}>
            <p>
              The comments against these Filipina journalists got only more vile
              in other posts, like the following comment. This comment was under
              this video. The video was posted by “National Socmed”, an account
              with a profile photo containing “DDS TEAM” which stands for
              “Duterte Diehard Supporter”. Although the comments come from
              everyday internet users, the posts commonly come from other DDS
              proclaimed accounts.{" "}
            </p>
          </div>
          <div className="side-step" data-step={2}>
            <p>
              These comments come from posts that are meant to get the attention
              and raise discourse among internet users. Videos were posted and
              commented on disproportionately more than standalone text posts.
              Content can be over exaggerated, dramaticized, and oftentimes fake
              – in the words of Maria Ressa “Lies laced with anger and hate
              spread fastest”, “faster than facts”.
            </p>
          </div>
        </article>
      </section>
    );
  }
}

export default SideScrolly;
