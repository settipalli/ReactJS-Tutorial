import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <section className="section">
          <div className="container">
            <article className="media">
              <div className="media-content">
                <div className="field">
                  <p className="control">
                    <textarea name="txtcomment" id="txtcomment" className="textarea" placeholder="Add a comment ..."></textarea>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>
          <hr/>
        <div className="footer">
          <div className="content has-text-centered">
              Copyright (c) Santhoshkumar Settipalli
          </div>
        </div>
      </div>
    );
  }
}

export default App;
