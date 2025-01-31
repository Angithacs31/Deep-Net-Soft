import React from 'react';
import './Middsection.css';

const Middsection = () => {
  return (
    <div className="middsection">
      <div className="menu-container">
        <h1 className="menu-title">BRUNCH COCKTAILS</h1>

        <div className="menu-item">
          <div className="item-left">
            <h2>CINNAMON TOAST CRUNCH</h2>
            <p>Skrewball peanut butter whiskey, vanilla extract, Amaretto, Baileys, egg white, cinnamon.</p>
          </div>
          <span className="price">$16</span>
        </div>

        <div className="menu-item">
          <div className="item-left">
            <h2>BAR 42 MARY</h2>
            <p>Titos, tomato juice, Worcestershire, celery salt, black pepper, Tabasco, fully loaded.</p>
          </div>
          <span className="price">$14</span>
        </div>

        <div className="menu-item">
          <div className="item-left">
            <h2>MOET SPRITZ</h2>
            <p>Aperol, St Germain, botanical liqueur, fresh lime juice, mini Brut Moët topper.</p>
          </div>
          <span className="price">$20</span>
        </div>
      </div>
    </div>
  );
};

export default Middsection;
