/**
 * Created by jk on 2019/1/15.
 */
const https = {
  request(options = {}){
    const {url, method} = options;
    wx.showLoading({
      mask: true,
      title: '加载中。。。'
    });
    return new Promise((resolve, reject) => {
      wx.request({
        url,
        method,
        success: res => {
          wx.hideLoading();
          if (res.statusCode == 404) {
            reject();
            return;
          } else if (res.statusCode != 200) {
            wx.showToast({
              title: '网络出错，稍后再试',
              icon: 'none'
            })
            return false;
          }
          console.log(res);
          resolve(res);
        },
        fail: err => {
          wx.hideLoading();
          reject(err);
        }

      })
    })

  }
}
export default  https;
