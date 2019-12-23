import {observable, action, computed} from 'mobx';
import request from '../../../utils/dataProxy';

class Recommend {
  @observable bannerList = [];

  // 推荐歌单
  @observable personalizeList = [];

  @computed get banners() {
    return Array.from(this.bannerList);
  }

  @computed get personalized() {
    return this.personalizeList;
  }

  // 获取banner
  @action.bound async getBannerList() {
    const {banners = []} = await request.get('/banner');
    this.bannerList = banners;
  }

  @action.bound async getPersonalizeList() {
    const { result = [] } = await request.get('/personalized');
    this.personalizeList = result;
  }
}

export default new Recommend();
