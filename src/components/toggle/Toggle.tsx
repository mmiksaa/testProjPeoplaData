import style from './Toggle.module.scss';

type IToggle = {
  items: string[];
  active: 0 | 1;
};

const Toggle: React.FC<IToggle> = ({ items, active }) => {
  return (
    <div className={style.toggle}>
      {items.map((item, index) => (
        <div className={active === index ? style.active : ''}>
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
};

export default Toggle;
