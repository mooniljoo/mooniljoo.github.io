import Link from "next/link";
import React from "react";
import Router from "next/router";
import { useEffect } from "react";
import desc from "../description.json";

Router.onRouteChangeStart = (url) => {
  alert(`Route가 ${url}로 변경될 것입니다...!`);
};
export default function Header() {
  useEffect(() => {
    alert(1);
    // Prefetch the dashboard page as the user will go there after the login
    alert(Router.router());
    return () => {
      alert("잉");
    };
  }, []);
  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="snsList">
          {desc.snsList
            .filter((e) => e.show == true)
            .map((e, idx) => (
              <a
                className="sns__link"
                href={e.title}
                title={`Link to ${e.title}`}
                key={idx}
              >
                <img
                  className="snsIcon"
                  src={e.src}
                  alt={`${e.title} thumnail`}
                />
                <span className="screen-reader-text">{e.title}</span>
              </a>
            ))}
        </div>
        <div className="c-layout__row">
          <figure className="logo">
            <a className="logo__link" title="Go to Index" href="/">
              <img
                src="/images/logo_mooniljoo.svg"
                alt="logo_mooniljoo image"
              />
            </a>
          </figure>
          <nav className="nav" aria-level="MainMenu">
            <ul className="menubar" role="menubar">
              {desc.navList.map((e, idx) => (
                <li className="menuitem" role="menuitem" key={idx}>
                  <Link href={`./${e.title}`}>
                    <a className="menu__link" title={e.title}>
                      <span className="menu__text">{e.title}</span>
                    </a>
                  </Link>
                </li>
              ))}
              <li className="menuitem" role="menuitem">
                <a className="menu__link" href="/documents/resume.pdf">
                  <span className="menu__text">Resume</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <style jsx>{`
        .logo__link {
          width: 200px;
        }
        .header {
          border-bottom: 1px solid #eee;
        }
        .menu__link:hover .menu__text,
        .selected {
          color: #1d58ff;
          border-bottom: 2px solid #1d58ff;
        }
        .snsIcon {
          width: 30px;
        }
        .logo {
          display: flex;
          justify-content: center;
        }
        .logo__text {
          font-size: 70px;
          font-weight: 700;
        }
        .header {
          position: relative;
          background: #fff;
          width: 100%;
        }
        .header-wrapper {
          max-width: 1300px;
          padding-left: 0px;
          padding-right: 0px;
          margin: 0 auto;
          zoom: 1;
        }

        .menubar {
          display: flex;
          justify-content: space-around;
        }
        .menuitem > a {
          display: block;
          box-sizing: content-box;
          text-decoration: none;
          font-size: 16px;
          font-weight: 700;
          letter-spacing: 0px;
          text-transform: uppercase;
          -webkit-font-smoothing: subpixel-antialiased;
        }
        .menu__link {
          color: #000;
        }
        .menu__text {
          line-height: 50px;
        }
        .snsList {
          padding-top: 20px;
        }
        .snsList > a {
          display: inline-block;
          margin: 0 10px 10px;
          font-size: 16px;
          color: #46494a;
          text-decoration: none;
          box-shadow: none !important;
        }
        .screen-reader-text {
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          position: absolute;
          margin: -1px;
          padding: 0;
          height: 1px;
          width: 1px;
          word-wrap: normal !important;
          border: 0 none;
        }
      `}</style>
    </header>
  );
}
