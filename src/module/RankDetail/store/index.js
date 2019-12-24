import {action, observable, computed} from 'mobx';
import request from '../../../utils/dataProxy';

class RankDetailStore {

  @observable rankDetail = {};

  @action.bound updateRankDetail(detail) {
    this.rankDetail = detail;
  }

  @action.bound async getRankDetailInfo(id) {
    const {playlist} = await request.get('/playlist/detail', {params: {id}});
    this.updateRankDetail(playlist);
  }
}

export default new RankDetailStore();
