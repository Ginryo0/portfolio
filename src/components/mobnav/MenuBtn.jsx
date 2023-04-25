const MenuBtn = ({ toggle, onClick }) => {
  return (
    <button className={`menu-btn ${toggle ? 'active' : ''}`} onClick={onClick}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};
export default MenuBtn;
