import MenuBtn from './MenuBtn';
import CTABtn from './CTABtn';

const MobNav = ({ toggle, onClick, children }) => {
  return (
    <>
      <MenuBtn toggle={toggle} onClick={onClick} />
      <div
        className={`backdrop ${toggle ? 'active' : ''}`}
        onClick={onClick}
      ></div>
      <div className={`mob-nav gap-10 ${toggle ? 'active' : ''}`}>
        <ul className="list-none flex sm:hidden flex-col gap-10">{children}</ul>
        <CTABtn className="py-1 px-2" />
      </div>
    </>
  );
};
export default MobNav;
