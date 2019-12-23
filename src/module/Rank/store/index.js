import {action, observable, computed} from 'mobx';
import request from '../../../utils/dataProxy';

class Rank {
  @observable rankInfo = {};

  @computed get songRankList() {
    return this.list || [];
  };

  @action.bound async getRankInfo() {
    const res = await request.get('/toplist/detail');
    this.rankInfo = res;
    console.log(res);
  }
}

export default new Rank();
