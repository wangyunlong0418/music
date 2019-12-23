import {action, observable, computed} from 'mobx';
import request from '../../../utils/dataProxy';

class SingerDetail {
  @observable singerDetail = {};

  @computed get artist() {
    return this.singerDetail.artist || {};
  }

  @computed get hotSongs() {
    return this.singerDetail.hotSongs || [];
  }

  @action.bound updateSingerDetail(info) {
    this.singerDetail = info;
  }

  @action.bound async getSingerDetail(id) {
    const res = await request.get('/artists', {params: {id}});
    this.updateSingerDetail(res);
  }
}

export default new SingerDetail();
