import {observable, action, computed} from 'mobx';
import request from '../../../utils/dataProxy';

class Recommend {
  @observable text = 'aa';

  @action.bound
  setText() {
    this.text = this.text === 'bb' ? 'aa' : 'bb';
  }

  @observable bannerList = [];

  @computed get banners() {
    return this.bannerList;
  }

  // 获取banner
  @action.bound async getBannerList() {
    const {banners = []} = await request.get('/banner');
    this.bannerList = banners;
  }
}

export default new Recommend();
