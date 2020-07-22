export default function Footer() {
  return (
    <footer className="c-layout__footer">
      <div className="o-wrapper">
        <div className="c-layout__row">
          <p className="c-layout__license">
            <span className="c-layout__company">MoonIljoo, LLC</span>
            <span className="c-layout__rights">All Rights Reserved</span>
          </p>
          <p className="c-layout__copyright">@ Copyright 2020</p>
        </div>
      </div>

      <style jsx>{`
        .c-layout__footer {
          min-width: 280px;
          position: fixed;
          left: 0;
          right: 0;
          z-index: 500;
          bottom: 20px;
          font-size: 0.73333em;
          line-height: 1.81818;
          white-space: nowrap;
          pointer-events: none;
          -webkit-animation: u-slide-in-up 1s cubic-bezier(0.165, 0.84, 0.44, 1);
          -moz-animation: u-slide-in-up 1s cubic-bezier(0.165, 0.84, 0.44, 1);
          animation: u-slide-in-up 1s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        .o-wrapper {
          padding: 0 10px;
          margin: 0 auto;
          max-width: 1600px;
        }
        .c-layout__row {
          margin: 0 -5px;
          position: relative;
        }
        @media (min-width: 1024px) .c-layout__license {
          margin-left: 60%;
        }
        @media (min-width: 1024px) .c-layout__license, .c-layout__copyright {
          margin-right: 0;
          width: 20%;
          float: left;
        }
        .c-layout__license,
        .c-layout__copyright {
          padding: 0 5px;
          display: inline-block;
          color: #fff;
        }
        @media (min-width: 1024px) .c-layout__rights {
          margin-left: 2.25em;
        }
        .c-layout__rights {
          margin-left: 1em;
        }
        @media (min-width: 1024px) .c-layout__copyright {
          text-align: right;
        }
        @media (min-width: 1024px) .c-layout__license, .c-layout__copyright {
          margin-right: 0;
          width: 20%;
          float: left;
        }
        .c-layout__license,
        .c-layout__copyright {
          padding: 0 5px;
          display: inline-block;
          color: #fff;
        }
        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
    </footer>
  );
}
