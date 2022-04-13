import React from 'react';
import people from '../../assets/people.png';
import vault from '../../assets/vault.svg';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Utility Coin for local spending</h1>
      <p>Currency devaluation is a bitch. Pay with your local currency at the black market price while holding your assets in actually sound money.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Request Demo</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 48 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={vault} />
    </div>
  </div>
);

export default Header;
