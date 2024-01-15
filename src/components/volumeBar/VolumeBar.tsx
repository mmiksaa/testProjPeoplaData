import style from './VolumeBar.module.scss';

type VolumeBar = {
  title: string;
  info: number;
};

const VolumeBar: React.FC<VolumeBar> = ({ title, info }) => {
  return (
    <div className={style.volumeBar}>
      <p className='title'>{title}</p>

      <div className={`${style.wrapp} bar`}>
        <div className={style.range}></div>
        <span>{info}%</span>
      </div>
    </div>
  );
};

export default VolumeBar;
