import { IBar } from '../../@types/global-types';
import style from './InfoBar.module.scss';

type IInfoBar = {
  infoItems: IBar[];
  title?: string;
};

const InfoBar: React.FC<IInfoBar> = ({ infoItems, title }) => {
  return (
    <div className={style.infobar}>
      {title && <p className='title'>{title}</p>}

      <ul className={infoItems.length > 1 ? style.large : ''}>
        {infoItems.map((item) => (
          <li className='bar'>
            <p>{item.desc}</p>
            <span>{item.info}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfoBar;
