import { useState } from 'react';
import style from './Switch.module.scss';

type ISwitch = {
  title: string;
  desc: string;
  marks: number[];
  isActive?: boolean;
};

const Switch: React.FC<ISwitch> = ({ title, desc, marks, isActive }) => {
  const [active, setActive] = useState(isActive);

  return (
    <div className={`${style.switch} ${!active && style.active}`}>
      <div className={`bar ${style.label}`}>
        <p>{title}</p>

        <div className={style.switcher}>
          <label>
            <input type='checkbox' defaultChecked={active} onChange={(e) => setActive(e.target.checked)} />
            <div></div>
          </label>
        </div>
      </div>

      {active && (
        <div className={style.slider}>
          <ul>
            {marks.map((item) => (
              <li>{item}</li>
            ))}
          </ul>

          <div className={style.range}>
            <span></span>
          </div>
        </div>
      )}

      <p className={style.desc}>{desc}</p>
    </div>
  );
};

export default Switch;
