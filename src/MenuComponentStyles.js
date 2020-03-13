import { css, } from 'lit-element';

export default  css`

@import url('https://fonts.googleapis.com/css?family=DM+Sans:500,700&display=swap');

:host {
  display: block;
}

* {
  box-sizing: border-box;
}

.nav {
  display: inline-flex;
  position: relative;
  overflow: hidden;
  width: 100%;
  background-color: #fff;
  padding: 0 20px;
  box-shadow: 0 1px 4px rgba(159, 162, 177, .8);
}

.nav-item {
  color: #83818c;
  padding: 20px;
  text-decoration: none;
  transition: .3s;
  margin: 0 6px;
  z-index: 1;
  font-family: 'DM Sans', sans-serif;
  font-weight: 500;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: #dfe2ea;
    border-radius: 8px 8px 0 0;
    opacity: 0;
    transition: .3s;
  }
}

.nav-item:not(.is-active):hover:before {
  opacity: 1;
  bottom: 0;
}

.nav-item:not(.is-active):hover { color: #333; }

.nav-indicator {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 4px;
  transition: .4s;
  height: 5px;
  z-index: 1;
  border-radius: 8px 8px 0 0;
}

@media (max-width: 580px) {
  .nav { overflow: auto; }
}

`;