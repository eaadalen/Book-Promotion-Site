import "../../../assets/css/main.css"
import "../../../assets/css/noscript.css"

import React, { useEffect } from 'react';
import $ from 'jquery';
import '../../../assets/js/jquery.scrollex.min';
import '../../../assets/js/jquery.scrolly.min';
import browser from 'browser-detect';
import breakpoints from 'breakpoints-js';


export const AboutView = () => {

  useEffect(() => {
    // Initialize jQuery Scrollex
    $('.element').scrollex({
      mode: 'middle',
      initialize: function() { console.log('initialized scrollex'); },
      enter: function() { console.log('enter scrollex'); },
      leave: function() { console.log('leave scrollex'); }
    });

    // Initialize jQuery Scrolly
    $('.scrolly').scrolly();

    // Use browser detection
    const browserInfo = browser();
    console.log('Browser info:', browserInfo);

    // Breakpoints initialization
    breakpoints({
      xlarge: [ '1281px', '1680px' ],
      large:  [ '981px', '1280px' ],
      medium: [ '737px', '980px' ],
      small:  [ '481px', '736px' ],
      xsmall: [ '361px', '480px' ],
      xxsmall: [ null, '360px' ]
    });

  }, []);

  return (
    <>
      <div className="landing is-preload">
        <div id="page-wrapper">
          <header id="header" className="alt">
              <h1><a href="index.html">Emily DeNure</a></h1>
              <nav id="nav">
                <ul>
                    <li className="special">
                      <a href="#menu" className="menuToggle"><span>Menu</span></a>
                      <div id="menu">
                          <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="generic.html">Generic</a></li>
                            <li><a href="elements.html">Elements</a></li>
                            <li><a href="#">Sign Up</a></li>
                            <li><a href="#">Log In</a></li>
                          </ul>
                      </div>
                    </li>
                </ul>
              </nav>
          </header>
          <section id="banner">
              <div className="inner">
                <h2>Emily DeNure</h2>
                <p>Another fine responsive<br />
                    site template freebie<br />
                    crafted by <a href="http://html5up.net">HTML5 UP</a>.
                </p>
                <ul className="actions special">
                    <li><a href="#" className="button primary">Activate</a></li>
                </ul>
              </div>
              <a href="#one" className="more scrolly">Learn More</a>
          </section>
          <section id="one" className="wrapper style1 special">
              <div className="inner">
                <header className="major">
                    <h2>Arcu aliquet vel lobortis ata nisl<br />
                      eget augue amet aliquet nisl cep donec
                    </h2>
                    <p>Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet eleifend<br />
                      fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus ullamcorper.
                    </p>
                </header>
                <ul className="icons major">
                    <li><span className="icon fa-gem major style1"><span className="label">Lorem</span></span></li>
                    <li><span className="icon fa-heart major style2"><span className="label">Ipsum</span></span></li>
                    <li><span className="icon solid fa-code major style3"><span className="label">Dolor</span></span></li>
                </ul>
              </div>
          </section>
          <section id="two" className="wrapper alt style2">
              <section className="spotlight">
                <div className="image"><img src="images/pic01.jpg" alt="" /></div>
                <div className="content">
                    <h2>Magna primis lobortis<br />
                      sed ullamcorper
                    </h2>
                    <p>Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.</p>
                </div>
              </section>
              <section className="spotlight">
                <div className="image"><img src="images/pic02.jpg" alt="" /></div>
                <div className="content">
                    <h2>Tortor dolore feugiat<br />
                      elementum magna
                    </h2>
                    <p>Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.</p>
                </div>
              </section>
              <section className="spotlight">
                <div className="image"><img src="images/pic03.jpg" alt="" /></div>
                <div className="content">
                    <h2>Augue eleifend aliquet<br />
                      sed condimentum
                    </h2>
                    <p>Aliquam ut ex ut augue consectetur interdum. Donec hendrerit imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.</p>
                </div>
              </section>
          </section>
          <section id="three" className="wrapper style3 special">
              <div className="inner">
                <header className="major">
                    <h2>Accumsan mus tortor nunc aliquet</h2>
                    <p>Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet eleifend<br />
                      fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus ullamcorper.
                    </p>
                </header>
                <ul className="features">
                    <li className="icon fa-paper-plane">
                      <h3>Arcu accumsan</h3>
                      <p>Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat.</p>
                    </li>
                    <li className="icon solid fa-laptop">
                      <h3>Ac Augue Eget</h3>
                      <p>Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat.</p>
                    </li>
                    <li className="icon solid fa-code">
                      <h3>Mus Scelerisque</h3>
                      <p>Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat.</p>
                    </li>
                    <li className="icon solid fa-headphones-alt">
                      <h3>Mauris Imperdiet</h3>
                      <p>Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat.</p>
                    </li>
                    <li className="icon fa-heart">
                      <h3>Aenean Primis</h3>
                      <p>Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat.</p>
                    </li>
                    <li className="icon fa-flag">
                      <h3>Tortor Ut</h3>
                      <p>Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat.</p>
                    </li>
                </ul>
              </div>
          </section>
          <section id="cta" className="wrapper style4">
              <div className="inner">
                <header>
                    <h2>Arcue ut vel commodo</h2>
                    <p>Aliquam ut ex ut augue consectetur interdum endrerit imperdiet amet eleifend fringilla.</p>
                </header>
                <ul className="actions stacked">
                    <li><a href="#" className="button fit primary">Activate</a></li>
                    <li><a href="#" className="button fit">Learn More</a></li>
                </ul>
              </div>
          </section>
          <footer id="footer">
            <ul className="icons">
              <li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
              <li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
              <li><a href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
              <li><a href="#" className="icon brands fa-dribbble"><span className="label">Dribbble</span></a></li>
              <li><a href="#" className="icon solid fa-envelope"><span className="label">Email</span></a></li>
            </ul>
            <ul className="copyright">
              <li>&copy; Untitled</li>
              <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
            </ul>
          </footer>
        </div>
      </div>
    </>
  )
}