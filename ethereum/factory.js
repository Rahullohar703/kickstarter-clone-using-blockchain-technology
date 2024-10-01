import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x5f141913D834D89DB7a37F295d92b2DCa55B05ab'
);

export default instance;
