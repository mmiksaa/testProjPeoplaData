import { ArrowSvg } from '../../assets/Svgs';
import style from './Direct.module.scss';

type IDirect = {
  title: string;
  item: string;
};

const Direct: React.FC<IDirect> = ({ title, item }) => {
  return (
    <div className={style.direct}>
      <p className='title'>{title}</p>

      <div className={`${style.wrapp} bar`}>
        <span>{item}</span>

        <ArrowSvg />
      </div>
    </div>
  );
};

export default Direct;
