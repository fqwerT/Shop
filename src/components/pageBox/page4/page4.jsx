import React from "react";
import style from "./page4.module.scss";
import img1 from "./img/IMAGE.png";
import img2 from "./img/IMAGE2.png";
import img3 from "./img/IMAGE3.png";

export const Page4 = () => {
  return (
    <div class={style.page4}>
      <div class={style.page4__container}>
        <div class={style.page4__imgTextBox}>
          <div class={style.page4__TextBox1}>
            <h1 class={style.page4__TextHeading}>beginnings</h1>
            <div class={style.page4__TextContainer}>
              <p class={style.page4__Text}>
                Credibly innovate granular internal or organic sources whereas
                high standards in web-readiness. Energistically scale
                future-proof core competencies vis-a-vis impactful experiences.
              </p>
            </div>
            <p class={style.page4__Text1P2}>
              Dramatically synthesize integrated schemas. with optimal networks.
            </p>
          </div>
          <div class={style.page4__imgBox1}>
            <img alt="img" src={img1} />
          </div>
        </div>
        <div class={style.page4__imgTextBox}>
          <div class={style.page4__TextBox2}>
            <h1 class={style.page4__TextHeading}>carrer</h1>
            <div class={style.page4__TextContainer2}>
              <p class={style.page4__Text}>
                Collaboratively administrate turnkey channels whereas virtual
                e-tailers.
              </p>
            </div>
            <div class={style.page4__TextContainer3}>
              <p class={style.page4__Text}>
                Objectively seize scalable metrics whereas proactive e-services
                seamlessly empower fully researched growth strategies.
              </p>
            </div>
            <p class={style.page4__Text}>
              And interoperable internal or “organic” sources.
            </p>
          </div>
          <div>
            <img alt="img" src={img2} />
          </div>
        </div>
        <div class={style.page4__imgTextBox}>
          <div>
            {" "}
            <h1 class={style.page4__TextHeading}>products</h1>
            <div className={style.page4__TextContainer4}>
              <p class={style.page4__Text}>
                Seamlessly empower fully researched growth strategies and
                interoperable internal or “organic” sources.
              </p>
            </div>
            <div className={style.page4__TextContainer4}>
              <p class={style.page4__Text}>
                Credibly innovate granular internal or “organic” sources whereas
                high standards in web-readiness.
              </p>
            </div>
            <p class={style.page4__Text}>
              Energistically scale future-proof core competence
            </p>
          </div>
          <div>
            <img alt="img" src={img3} />
          </div>
        </div>
      </div>
    </div>
  );
};
