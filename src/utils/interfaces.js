/**
 * Created by jk on 2019/1/15.
 */
const domain = "https://lit-lowlands-28049.herokuapp.com/"
const interfaces = {
  getOpenid: domain + 'api/profiles/getOpenid/',
  getMyLesson: domain + 'api/profiles/mylessons/',
  getQuestions:domain+'api/profiles/questions'
}
module.exports = interfaces
