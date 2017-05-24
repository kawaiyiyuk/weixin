const mutations = {
  toggleTipsStatus(state, status){
    if (status === -1) {
      state.tipsStatus = false
    } else {
      state.tipsStatus = !state.tipsStatus
    }
  },
  toggleHeaderStatus(state,status){
    state.headerStatus = status
  },
  addNewMsg(state){
    state.newMsgCount>99? state.newMsgCount = '99+':state.newMsgCount ++
  },
  minusNewMsg(state){
    state.newMsgCount<1? state.newMsgCount = 0 :state.newMsgCount --
  },
  setPageName(state,name){
    state.currentPageName = name
  }
}
export default mutations
