import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import contact from './contacts'
import getters from './getters'
import actions from './actions'
import OfficialAccounts from './official-account'
Vue.use(Vuex)
const state = {
  tipsStatus: false,  //控制首页右上角菜单的显示(true)/隐藏(false)
  currentPageName: '微信',
  newMsgCount:0,
  allContacts: contact.contacts,  //通讯录存放
  OfficialAccounts:OfficialAccounts, //微信公众号存放
  headerStatus:true, //显示（true）/隐藏（false）wx-header组件
  msgList:{
    stickMsg:[],//置顶消息列表
    baseMsg:[
      //普通消息列表
      {
        'mid':1, //消息标示 重要
        'type':'friend',
        'group_name':'',
        'group_qrCode':'',
        'read':true,  //已读 true  未读false
        'newMsgCount':1,
        'quiet':false, // true：消息免打扰 false：提示此好友/群的新消息
        'msg':[
          {
            'text':"点击这些白色框消息可以调用简单的操作菜单",
            'date':1495076088899,
            'name':'原色调',
            'headerUrl':'http://webapp-yuanse.oss-cn-shanghai.aliyuncs.com/wexin/header_01.jpg'
          },
          {
            'text':"点击这些白色框消息可以调用简单的操作菜单",
            'date':1495076088899,
            'name':'原色调',
            'headerUrl':'http://webapp-yuanse.oss-cn-shanghai.aliyuncs.com/wexin/header_01.jpg'
          },
          {
            'text':"来来来，来怼我呀",
            'date':1495076088899,
            'name':'原色调',
            'headerUrl':'http://webapp-yuanse.oss-cn-shanghai.aliyuncs.com/wexin/header_01.jpg'
          }
        ],
        'user':[contact.getUserInfo('wxid_yuanse')]
      },
      {
        'mid':2, //消息标示 重要
        'type':'group',
        'group_name':'王者农药小学生集中营',
        'group_qrCode':'',
        'read':false,  //已读 true  未读false
        'newMsgCount':1,
        'quiet':true, // true：消息免打扰 false：提示此好友/群的新消息
        'msg':[
          {
            'text':"马上就放学了，小学生们黑起来",
            'date':1495076088899,
            'name':'小学生a',
            'headerUrl':'http://webapp-yuanse.oss-cn-shanghai.aliyuncs.com/wexin/header_02.jpg'
          },
          {
            'text':"今天作业没有写完，老师给我留下了，我晚上去",
            'date':1495076088899,
            'name':'小学生b',
            'headerUrl':'http://webapp-yuanse.oss-cn-shanghai.aliyuncs.com/wexin/header_03.jpg'
          },
          {
            'text':"放学了，放学了",
            'date':1495076088899,
            'name':'小学生c',
            'headerUrl':'http://webapp-yuanse.oss-cn-shanghai.aliyuncs.com/wexin/header_04.jpg'
          }
        ],
        'user':[contact.getUserInfo('wxid_xiaoxuea'),contact.getUserInfo('wxid_xiaoxueb'),contact.getUserInfo('wxid_xiaoxuec')]
      },
      {
        'mid':3, //消息标示 重要
        'type':'friend',
        'group_name':'',
        'group_qrCode':'',
        'read':false,  //已读 true  未读false
        'newMsgCount':1,
        'quiet':false, // true：消息免打扰 false：提示此好友/群的新消息
        'msg':[
          {
            'text':"马上就放学了，小学生们黑起来",
            'date':1495076088899,
            'name':'小学生b',
            'headerUrl':'http://webapp-yuanse.oss-cn-shanghai.aliyuncs.com/wexin/header_03.jpg'
          },
          {
            'text':"今天作业没有写完，老师给我留下了，我晚上去",
            'date':1495076088899,
            'name':'小学生b',
            'headerUrl':'http://webapp-yuanse.oss-cn-shanghai.aliyuncs.com/wexin/header_03.jpg'
          },
          {
            'text':"刚才玩的时候有人骂我小学生，他真傻，这不是明摆着的事么",
            'date':1495076088899,
            'name':'小学生b',
            'headerUrl':'http://webapp-yuanse.oss-cn-shanghai.aliyuncs.com/wexin/header_03.jpg'
          }
        ],
        'user':[contact.getUserInfo('wxid_xiaoxueb')]
      },
      {
        'mid':4, //消息标示 重要
        'type':'friend',
        'group_name':'',
        'group_qrCode':'',
        'read':false,  //已读 true  未读false
        'newMsgCount':1,
        'quiet':false, // true：消息免打扰 false：提示此好友/群的新消息
        'msg':[
          {
            'text':"马上就放学了，小学生们黑起来",
            'date':1495076088899,
            'name':'杨戬',
            'headerUrl':'http://webapp-yuanse.oss-cn-shanghai.aliyuncs.com/wexin/header_05.jpg'
          },
          {
            'text':"今天作业没有写完，老师给我留下了，我晚上去",
            'date':1495076088899,
            'name':'杨戬',
            'headerUrl':'http://webapp-yuanse.oss-cn-shanghai.aliyuncs.com/wexin/header_05.jpg'
          },
          {
            'text':"妖怪哪里走，接我一狗",
            'date':1495076088899,
            'name':'杨戬',
            'headerUrl':'http://webapp-yuanse.oss-cn-shanghai.aliyuncs.com/wexin/header_05.jpg'
          }
        ],
        'user':[contact.getUserInfo('wxid_yangjian')]
      },
      {
        'mid':5, //消息标示 重要
        'type':'friend',
        'group_name':'',
        'group_qrCode':'',
        'read':true,  //已读 true  未读false
        'newMsgCount':1,
        'quiet':false, // true：消息免打扰 false：提示此好友/群的新消息
        'msg':[
          {
            'text':"马上就放学了，小学生们黑起来",
            'date':1495076088899,
            'name':'鲁班',
            'headerUrl':'http://webapp-yuanse.oss-cn-shanghai.aliyuncs.com/wexin/header_07.jpg'
          },
          {
            'text':"今天作业没有写完，老师给我留下了，我晚上去",
            'date':1495076088899,
            'name':'鲁班',
            'headerUrl':'http://webapp-yuanse.oss-cn-shanghai.aliyuncs.com/wexin/header_07.jpg'
          },
          {
            'text':"biu biu biu",
            'date':1495076088899,
            'name':'鲁班',
            'headerUrl':'http://webapp-yuanse.oss-cn-shanghai.aliyuncs.com/wexin/header_07.jpg'
          }
        ],
        'user':[contact.getUserInfo('wxid_luban')]
      },
      {
        'mid':6, //消息标示 重要
        'type':'friend',
        'group_name':'',
        'group_qrCode':'',
        'read':false,  //已读 true  未读false
        'newMsgCount':1,
        'quiet':true, // true：消息免打扰 false：提示此好友/群的新消息
        'msg':[
          {
            'text':"马上就放学了，小学生们黑起来",
            'date':1495076088899,
            'name':'露娜',
            'headerUrl':'http://webapp-yuanse.oss-cn-shanghai.aliyuncs.com/wexin/header_06.jpg'
          },
          {
            'text':"今天作业没有写完，老师给我留下了，我晚上去",
            'date':1495076088899,
            'name':'露娜',
            'headerUrl':'http://webapp-yuanse.oss-cn-shanghai.aliyuncs.com/wexin/header_06.jpg'
          },
          {
            'text':"亲爱的你给伦家买个紫霞仙子的皮肤呗，么么哒",
            'date':1495076088899,
            'name':'露娜',
            'headerUrl':'http://webapp-yuanse.oss-cn-shanghai.aliyuncs.com/wexin/header_06.jpg'
          }
        ],
        'user':[contact.getUserInfo('wxid_luna')]
      },
      {
        'mid':7, //消息标示 重要
        'type':'friend',
        'group_name':'',
        'group_qrCode':'',
        'read':true,  //已读 true  未读false
        'newMsgCount':1,
        'quiet':false, // true：消息免打扰 false：提示此好友/群的新消息
        'msg':[
          {
            'text':"马上就放学了，小学生们黑起来",
            'date':1495076088899,
            'name':'关羽',
            'headerUrl':'http://webapp-yuanse.oss-cn-shanghai.aliyuncs.com/wexin/header_08.jpg'
          },
          {
            'text':"今天作业没有写完，老师给我留下了，我晚上去",
            'date':1495076088899,
            'name':'关羽',
            'headerUrl':'http://webapp-yuanse.oss-cn-shanghai.aliyuncs.com/wexin/header_08.jpg'
          },
          {
            'text':"大神，带我上王者可好",
            'date':1495076088899,
            'name':'关羽',
            'headerUrl':'http://webapp-yuanse.oss-cn-shanghai.aliyuncs.com/wexin/header_08.jpg'
          }
        ],
        'user':[contact.getUserInfo('wxid_guanyu')]
      }

    ]
  }
}

export default new Vuex.Store({
  mutations,
  state,
  getters,
  actions
})

