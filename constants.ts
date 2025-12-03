import { ToxicWord, FlipCardData, ShieldData } from './types';

export const DANMAKU_WORDS = [
  "去死", "丑八怪", "人肉他", "滚出网络", "垃圾", "虚伪", 
  "作秀", "键盘侠", "没教养", "你也配", "全家炸了", 
  "这就是下场", "笑死我了", "别洗了", "绿茶", "恶心",
  "装什么装", "我要吐了", "P图怪", "死全家", "网络乞丐"
];

export const TOXIC_WORDS_INTERACTIVE: ToxicWord[] = [
  { id: '1', text: '造谣诽谤', damage: 25 },
  { id: '2', text: '恶意P图', damage: 20 },
  { id: '3', text: '人身诅咒', damage: 15 },
  { id: '4', text: '公开隐私', damage: 30 },
  { id: '5', text: '煽动对立', damage: 10 },
];

export const FLIP_CARDS: FlipCardData[] = [
  {
    id: 1,
    frontText: "“我只是开个玩笑嘛，至于吗？”",
    backText: "骚扰与侮辱",
    backDetail: "以‘玩笑’为名的恶意贬低，本质是把快乐建立在他人痛苦之上。这不是幽默，是霸凌。"
  },
  {
    id: 2,
    frontText: "“大家都在骂，又不差我这一句。”",
    backText: "群体极化",
    backDetail: "雪崩时没有一片雪花是无辜的。群体效应会放大恶意，让普通人变成施暴者。"
  },
  {
    id: 3,
    frontText: "“把他地址爆出来，让他社死！”",
    backText: "侵犯隐私 (人肉)",
    backDetail: "未经允许公开他人隐私信息是严重的违法行为，触犯法律底线，可能构成刑事犯罪。"
  }
];

export const SHIELD_DATA: ShieldData[] = [
  {
    id: 'tech',
    title: '技术阻断',
    icon: 'tech',
    content: [
      "开启“一键防护”模式：主流社交软件（微博/抖音/B站）均有防骚扰模式，可过滤未关注人私信。",
      "评论权限管理：设置“仅粉丝可评论”或开启“评论折叠”功能，减少恶意信息展示。",
      "善用拉黑与举报：遇到违规内容直接举报，平台有责任在24小时内处理。"
    ],
    links: [
      { label: "微信安全中心", url: "https://weixin.qq.com/" },
      { label: "微博社区管理中心", url: "https://service.account.weibo.com/" }
    ]
  },
  {
    id: 'legal',
    title: '法律武器',
    icon: 'legal',
    content: [
      "第一时间取证：不要直接删除评论！截屏需包含完整的上下文、对方UID、发布时间及URL链接。",
      "互联网法院起诉：利用“区块链证据保全”技术固定证据，可前往各地互联网法院电子诉讼平台。",
      "刑事责任追究：依据《刑法》第246条，侮辱诽谤情节严重可处三年以下有期徒刑。"
    ],
    links: [
      { label: "12377 互联网违法和不良信息举报中心", url: "https://www.12377.cn/" },
      { label: "中国法律服务网", url: "http://www.12348.gov.cn/" }
    ]
  },
  {
    id: 'mind',
    title: '心理自救',
    icon: 'mind',
    content: [
      "物理断网机制：遭受攻击时，立即卸载相关软件或关闭通知，回归现实生活，与亲友呆在一起。",
      "拒绝自证陷阱：网络暴力的核心是情绪宣泄而非讲理，不要试图向施暴者解释或自证清白。",
      "专业心理援助：如果感到持续的焦虑、失眠或抑郁，请立即拨打心理援助热线或寻求医生帮助。"
    ],
    links: [
      { label: "希望24热线: 400-161-9995", url: "#" },
      { label: "全国心理援助热线查询", url: "https://www.mhc.org.cn/" }
    ]
  }
];