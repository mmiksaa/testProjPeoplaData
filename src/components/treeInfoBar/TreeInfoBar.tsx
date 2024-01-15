import { useState } from 'react';
import InfoBar from '../infoBar/InfoBar';
import { IBar } from '../../@types/global-types';
import { PlusSvg } from '../../assets/Svgs';
import style from './TreeInfoBar.module.scss';

type ITreeInfoBar = {
  infoItems: IBar[];
};

const TreeInfoBar: React.FC<ITreeInfoBar> = ({ infoItems }) => {
  const [steps, setSteps] = useState(1);

  const totalBars = Array.from({ length: steps }, (_, i) =>
    i > 0 ? (
      <li key={i}>
        <div className={style.top}>
          <p className='title'>step {i + 1}</p>
          <button onClick={() => setSteps(steps - 1)}>Delete</button>
        </div>

        <InfoBar infoItems={infoItems} />
      </li>
    ) : (
      <li key={i}>
        <div className={style.top}>
          <p className='title'>step {i + 1}</p>
        </div>

        <InfoBar infoItems={infoItems} />
      </li>
    ),
  );

  return (
    <div className={style.treeInfoBar}>
      <ul>{totalBars}</ul>

      <button onClick={() => setSteps(steps + 1)}>
        <PlusSvg />
        Add a step
      </button>
    </div>
  );
};

export default TreeInfoBar;
