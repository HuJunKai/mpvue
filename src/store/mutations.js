/**
 * Created by jk on 2019/1/14.
 */

export const setIsAuthenticated = (state,data) =>{
  state.isAuthenticated = data;
}


export const setUser = (state,data) =>{
  state.user = data;
}

export const setOpenid = (state,data) =>{
  state.openid = data;
}
