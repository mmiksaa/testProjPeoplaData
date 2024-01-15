import { Direct, InfoBar, Switch, Toggle, TreeInfoBar, VolumeBar } from '../components';
import { MartingaleData, PriceData, ProfitData, infoBarData, volumeData } from '../data';

import style from './App.module.scss';

function App() {
  return (
    <div className={style.app}>
      <div className={style.wrapp}>
        <div className={style.top}>
          <h1>Defends</h1>
          <p>Select the type of trading for detailed bot setup</p>
        </div>

        <Toggle items={['Insurance orders', 'Stop Loss']} active={0} />
        <Direct title='Type of insurance order' item='Market Order' />

        <InfoBar infoItems={infoBarData} />

        <Switch {...MartingaleData} />
        <Switch {...PriceData} />

        <Direct title='Order type' item='Limit Order' />

        <InfoBar infoItems={volumeData} title='volume' />

        <VolumeBar title='Remaining by volume' info={40} />

        <TreeInfoBar infoItems={ProfitData} />
      </div>
    </div>
  );
}

export default App;
