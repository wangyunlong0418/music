import {observable, action, computed} from 'mobx';
import request from '../../../utils/dataProxy';

class Singer {
  @observable category = '';
  @observable initial = '';
  @observable singerList = [];

  @computed get singers() {
    return this.singerList;
  }

  @action.bound updateKey(key, value) {
    this[key] = value;
  }

  @action.bound async getSingerList() {
    const {initial, category} = this;
    const url = initial || category ? '/artist/list' : '/top/artists';
    const params = {
      offset: 0,
      initial: initial ? initial.toLocaleLowerCase() : null,
      cat: category,
    };
    const {artists} = await request.get(url, {params});
    // console.log(artists);
    this.singerList = artists;
  }
}

export default new Singer();
