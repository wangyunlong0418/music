import {action, observable, computed} from 'mobx';
import request from '../../../utils/dataProxy';

class Rank {
  @observable rankInfo = {};

  @computed get songRankList() {
    return this.rankInfo.list || [];
  }

  @computed get sliceIndex() {
    const index = this.songRankList.findIndex((song, i) => {
      return song.tracks.length && !this.songRankList[i + 1].tracks.length;
    });
    return index + 1;
  }

  @computed get rankList() {
    const {songRankList, sliceIndex} = this;
    return songRankList.slice(0, sliceIndex) || [];
  }

  @computed get globalRankList() {
    const {songRankList, sliceIndex} = this;
    return songRankList.slice(sliceIndex) || [];
  }

  @action.bound async getRankInfo() {
    const res = await request.get('/toplist/detail');
    this.rankInfo = res;
  }
}

export default new Rank();
