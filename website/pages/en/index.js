/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

class Index extends React.Component {
  
  render() {
    
    return (
      <div>
        <div className="splash">
          <div className="content">
            <h1>Agnostic Front-end Architecture</h1>
            <h2>
Architecture and platform tools to create Micro and Configurable front-end's. 
That are configurable and is framework agnostic and focused on web standards.
            </h2>
            <div className="row">
              <a
                className="btn primary"
                href="#">
               Architecture overview
              </a>
              <a className="btn" href="/docs/understand.html">
                Learn more
              </a>
            </div>
            <img
              src="/img/browser.png"
              className="splashScreen"
            />
            <div className="shadow" />
          </div>
        </div>
        <div className="content row">
          <div className="col">
            <img
              src="/img/browser.png"
            />
          </div>
          <div className="col">
            <h4>Platform</h4>
            <h3>Microservices Front-end Platform</h3>
            <p>
            O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum.
            </p>
            <a className="learnmore" href="/docs/getting-started.html">
              Learn more
            </a>
          </div>
        </div>
        <div className="content row">
          <div className="col">
            <h4>Components</h4>
            <h3>Design system  built on top of web standards for web components </h3>
            <p>
            O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum.
            </p>
            <a className="learnmore" href="/docs/understand.html">
              Learn more
            </a>
          </div>
          <div className="col center">
          </div>
        </div>
        <div className="content row">
          <div className="col">
          </div>
          <div className="col">
            <h4>Tools</h4>
            <h3>Tools that supports development of UI components and apps</h3>
            <p>
            O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum.
            </p>
            <a className="learnmore" href="/docs/js-setup.html">
              Learn more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Index;
