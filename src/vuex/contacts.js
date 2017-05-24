/**
 * wxid-微信id
 * initial-姓名首字母
 * headerUrl-头像地址
 * nickname-昵称
 * sex-性别 男1女0
 * remark-备注
 * signature-个性签名
 * telphone-电话号码
 * album-相册
 * area-地区
 * from-来源
 * desc-描述
 */

const contacts = [
  {
    'wxid':'wxid_yuanse',
    'initial':'y',
    'headerUrl':'http://webapp-yuanse.oss-cn-shanghai.aliyuncs.com/wexin/header_01.jpg',
    'nickname':'原色调',
    'sex':1,
    'remark':'原色调',
    'signature':'专业挖坑，并且我不填',
    'telphone':1888888888,
    'album':[
      {
        imgSrc:''
      }
    ],
    'area':['中国','北京','朝阳'],
    'from':'',
    'tag':'',
    'desc':{}
  },
  {
    'wxid':'wxid_xiaoxuea',
    'initial':'x',
    'headerUrl':'http://webapp-yuanse.oss-cn-shanghai.aliyuncs.com/wexin/header_02.jpg',
    'nickname':'小学生a',
    'sex':1,
    'remark':'全服第一元芳',
    'signature':'我五年级，求开黑队友，不要小学生',
    'telphone':1888888888,
    'album':[
      {
        imgSrc:''
      }
    ],
    'area':['中国','北京','朝阳'],
    'from':'',
    'tag':'',
    'desc':{}
  },
  {
    'wxid':'wxid_xiaoxueb',
    'initial':'x',
    'headerUrl':'http://webapp-yuanse.oss-cn-shanghai.aliyuncs.com/wexin/header_03.jpg',
    'nickname':'小学生b',
    'sex':1,
    'remark':'全服第一后羿',
    'signature':'当然秒选输出位，爱谁谁',
    'telphone':1888888888,
    'album':[
      {
        imgSrc:''
      }
    ],
    'area':['中国','北京','朝阳'],
    'from':'',
    'tag':'',
    'desc':{}
  },
  {
    'wxid':'wxid_xiaoxuec',
    'initial':'x',
    'headerUrl':'http://webapp-yuanse.oss-cn-shanghai.aliyuncs.com/wexin/header_04.jpg',
    'nickname':'小学生c',
    'sex':1,
    'remark':'全服第一亚瑟',
    'signature':'别跟老夫说什么阵容搭配，老夫只会亚瑟，爱玩不玩',
    'telphone':1888888888,
    'album':[
      {
        imgSrc:''
      }
    ],
    'area':['中国','北京','朝阳'],
    'from':'',
    'tag':'',
    'desc':{}
  },
  {
    'wxid':'wxid_yangjian',
    'initial':'y',
    'headerUrl':'http://webapp-yuanse.oss-cn-shanghai.aliyuncs.com/wexin/header_05.jpg',
    'nickname':'杨戬',
    'sex':1,
    'remark':'杨戬',
    'signature':'晕，狗，大，a，大，a，大，狗--------拜拜',
    'telphone':1888888888,
    'album':[
      {
        imgSrc:''
      }
    ],
    'area':['中国','北京','朝阳'],
    'from':'',
    'tag':'',
    'desc':{}
  },
  {
    'wxid':'wxid_luna',
    'initial':'l',
    'headerUrl':'http://webapp-yuanse.oss-cn-shanghai.aliyuncs.com/wexin/header_06.jpg',
    'nickname':'露娜',
    'sex':1,
    'remark':'露娜',
    'signature':'1,3,a,2,a,3,a,3 -----杨戬你过来试试',
    'telphone':1888888888,
    'album':[
      {
        imgSrc:''
      }
    ],
    'area':['中国','北京','朝阳'],
    'from':'',
    'tag':'',
    'desc':{}
  },
  {
    'wxid':'wxid_luban',
    'initial':'l',
    'headerUrl':'http://webapp-yuanse.oss-cn-shanghai.aliyuncs.com/wexin/header_07.jpg',
    'nickname':'鲁班',
    'sex':1,
    'remark':'全服最坑鲁班',
    'signature':'宝塔镇河妖，鲁班长不高',
    'telphone':1888888888,
    'album':[
      {
        imgSrc:''
      }
    ],
    'area':['中国','北京','朝阳'],
    'from':'',
    'tag':'',
    'desc':{}
  },
  {
    'wxid':'wxid_guanyu',
    'initial':'g',
    'headerUrl':'http://webapp-yuanse.oss-cn-shanghai.aliyuncs.com/wexin/header_08.jpg',
    'nickname':'关羽',
    'sex':1,
    'remark':'关羽',
    'signature':'赤兔，随我出征',
    'telphone':1888888888,
    'album':[
      {
        imgSrc:''
      }
    ],
    'area':['中国','北京','朝阳'],
    'from':'',
    'tag':'',
    'desc':{}
  }
]
const contact = {
  contacts
}
contact.getUserInfo = function(wxid){
  if(!wxid){
    return;
  }else{
    for(var index in contacts){
      if(contacts[index].wxid===wxid){
        return contacts[index]
      }
    }
  }
}

export default contact
