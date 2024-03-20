/**
 * HamburgerMenu Component
 * 
 * This is a React component for a hamburger menu, which is a common UI element for mobile and responsive web design.
 * It uses styled-components for CSS-in-JS styling.
 * 
 * The HamburgerMenu component takes two props: 
 * @prop {boolean} menu - Indicates whether the menu is open or not.
 * @prop {function} setMenu - A function to toggle the state of `menu`.
 * 
 * The component returns a `Hamburger` styled div. The `onClick` prop is set to the `toggleMenu` function, 
 * so when the div is clicked, the menu state will toggle. If `menu` is true, the div will have a class of "active".
 * 
 * The `Hamburger` styled div has various CSS properties. The `position` seems to have a typo and should be `relative`. 
 * It has a width and height of 1.25rem, and a top and bottom border. The `&:before` and `&:after` pseudo-elements 
 * create the lines of the hamburger icon.
 * 
 * If the div has a class of "active", the border color is set to transparent and the `&:before` and `&:after` 
 * pseudo-elements are rotated to form an "X", indicating the menu is open.
 * 
 * The `@media` query hides the hamburger menu on screens wider than 1400px, likely showing a full navigation menu instead.
 */
import styled from "styled-components";

const HamburgerMenu = ({ menu, setMenu }) => {
  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <Hamburger className={menu && "active"} onClick={toggleMenu}></Hamburger>
  );
};

const Hamburger = styled.div`
  position: ralative;
  width: 1.25rem;
  height: 1.25rem;
  border-top: 2px solid;
  border-bottom: 2px solid;
  color: rgb(var(--white));
  font-size: 0;
  cursor: pointer;
  &:before,
  &:after {
    content: '';
    position: absolute;
    display: block;
    width: 1.25rem;
    height: 2px;
    top: 50%;
    background: currentColor;
    transform: translateY(-50%);
    transition: transform var(--transition-duration) var(--transition-timing-function);
  }
  &.active {
    border-color: transparent;
      &:before {
        transform: translateY(-50%) rotate(45deg);
      }
      &:after {
        transform: translateY(-50%) rotate(-45deg);
      }
    }
  }
  @media (min-width: 1400px) {
    display: none;
  }
`;

export default HamburgerMenu;
