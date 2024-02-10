import React from "react";

class ScrollySection extends React.Component {
  render() {
    const { id } = this.props;
    return (
      <section className="scrolly scrolly1" id={id}>
        <figure>
          <img
            className="ressa-image"
            src="img/GettyImages-1124822859-e1633722697760 copy.jpg"
            alt="Maria Ressa"
          />
          {}
        </figure>
        <article>
          <div className="step" data-step={1}>
            <p>
              Since 2016, Filipina-American journalist Maria Ressa, founder of
              popular Filipino news site Rappler and now Nobel Laureate, has
              faced an onslaught of online violence including:{" "}
            </p>
          </div>
          <div className="step" data-step={2}>
            <p>
              Death threats. Rape threats. Doxxing. Racist, sexist, and
              misogynistic abuse and memes.
            </p>
          </div>
          <div className="step" data-step={3}>
            <p>
              This was due to her reporting on Philippine president at the time,
              Rodrigo Duterte (2016-2022). When Duterte held the presidency,
              Ressa and Rappler published numerous investigative reports on
              Duterte's use of online disinformation to push his political
              agenda, his severe actions such as extrajudicial killings of users
              and dealers resulting from the drug war, and of corruption within
              his government administration.
            </p>
          </div>
          <div className="step" data-step={4}>
            <p>
              In response, phrases such as “presstitute”, a term created by
              pro-Duterte blogger, Mocha Uson (who would go on to become the
              president’s Communications Assistant Secretary), and tags like
              #ArrestMariaRessa went viral across Facebook and Twitter. 14% of
              all online abuse against Ressa was misogynistic and sexist in
              nature. (1)
            </p>
          </div>
        </article>
      </section>
    );
  }
}

export default ScrollySection;
