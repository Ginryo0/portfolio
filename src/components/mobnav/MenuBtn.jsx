const MenuBtn = ({ toggle, onClick }) => {
  return (
    <button className={`menu-btn ${toggle ? 'active' : ''}`} onClick={onClick}>
      <span></span>
      <span></span>
      <span></span>
      <span className="sr-only">Navigation Menu</span>
    </button>
  );
};
export default MenuBtn;
