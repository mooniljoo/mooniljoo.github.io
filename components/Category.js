import desc from "../description.json";
import { useState, useRef } from "react";

export default function Category() {
  const [cate, setCate] = useState("");

  const frontend = useRef();
  const all = useRef();
  const backend = useRef();

  const onAll = () => {
    setCate("");
  };
  const onFront = () => {
    setCate("publishing");
  };
  const onBack = () => {
    setCate("software");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="categoryList">
          <span
            className={`categoryList__item ${cate == "" && "selected"}`}
            ref={all}
            onClick={onAll}
          >
            ALL
          </span>
          <span
            className={`categoryList__item ${
              cate == "publishing" && "selected"
            }`}
            ref={frontend}
            onClick={onFront}
          >
            FRONT-END
          </span>
          <span
            className={`categoryList__item ${cate == "software" && "selected"}`}
            ref={backend}
            onClick={onBack}
          >
            BACK-END
          </span>
        </div>
        <div className="viewList">
          <i className="viewList__item">thum형</i>
          <i className="viewList__item">list형</i>
        </div>
      </div>
      <section className="card-container">
        {desc.workList
          .filter((e) => e.category.includes(cate))
          .map((e, idx) => (
            <article className="card" key={idx}>
              <a
                className="card__link"
                href={e.href}
                title={`Link to ${e.title}`}
              >
                <figure className="fig_img">
                  <img src={e.src} alt={`${e.title} thumnail`} />
                </figure>
                <figure className="fig_txt">
                  <span className="workList__item__type">{e.type}</span>
                  <span className="workList__item__title">{e.title}</span>
                  <span className="workList__item__desc">{e.desc}</span>
                  <span className="workList__item__spec">
                    {e.spec.map((e, idx) => (
                      <span className="spec__item" key={idx}>{`${e}`}</span>
                    ))}
                  </span>
                </figure>
              </a>
            </article>
          ))}
      </section>
      <style jsx>{`
        .card-container {
          display: flex;
          flex-direction: column;
        }

        .workList__item__type {
          font-size: 1em;
          color: #1d58ff;
        }
        .workList__item__title {
          font-size: 1.875em;
        }
        .workList__item__desc {
          font-size: 1.05em;
        }
        .workList__item__spec {
          font-size: 0.9em;
        }

        .spec__item {
          margin-right: 1.5em;
        }
        .row {
          margin: 20px 0;
          display: flex;
          justify-content: space-between;
        }
        .categoryList__item,
        .viewList__item {
          cursor: pointer;
        }
        .categoryList__item {
          margin-right: 20px;
        }
        .viewList__item {
          margin-left: 20px;
        }
        .categoryList__item:hover,
        .categoryList__item.selected,
        .viewList__item:hover,
        .viewList__item.selected {
          border-bottom: 1px solid #1d58ff;
          color: #1d58ff;
        }
        .container {
          width: 1024px;
          margin: 0 auto;
        }
        .card {
          background: #fff;
          box-shadow: 0 0 0 1px #ccc;
          border-radius: 10px;
          margin-bottom: 10px;
        }
        .card__link {
          display: flex;
          padding: 10px;
        }
        .card__link > figure {
          flex: 1;
        }
        .fig_img {
          max-width: 150px;
          margin: 0;
          display: flex;
          align-self: center;
          height: 100%;
        }
        .fig_txt {
          flex-direction: column;
          display: flex;
        }
      `}</style>
    </div>
  );
}
