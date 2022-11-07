(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{564:function(t,_,a){"use strict";a.r(_);var v=a(2),s=Object(v.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"面试官-说说tcp为什么需要三次握手和四次挥手"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#面试官-说说tcp为什么需要三次握手和四次挥手"}},[t._v("#")]),t._v(" 面试官：说说TCP为什么需要三次握手和四次挥手？")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://static.vue-js.com/ef4696a0-beb9-11eb-ab90-d9ae814b240d.png",alt:""}})]),t._v(" "),_("h2",{attrs:{id:"一、三次握手"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、三次握手"}},[t._v("#")]),t._v(" 一、三次握手")]),t._v(" "),_("p",[t._v("三次握手（Three-way Handshake）其实就是指建立一个TCP连接时，需要客户端和服务器总共发送3个包")]),t._v(" "),_("p",[t._v("主要作用就是为了确认双方的接收能力和发送能力是否正常、指定自己的初始化序列号为后面的可靠性传送做准备")]),t._v(" "),_("p",[t._v("过程如下：")]),t._v(" "),_("ul",[_("li",[t._v("第一次握手：客户端给服务端发一个 SYN 报文，并指明客户端的初始化序列号 ISN(c)，此时客户端处于  SYN_SENT 状态")]),t._v(" "),_("li",[t._v("第二次握手：服务器收到客户端的 SYN 报文之后，会以自己的 SYN 报文作为应答，为了确认客户端的 SYN，将客户端的 ISN+1作为ACK的值，此时服务器处于 SYN_RCVD  的状态")]),t._v(" "),_("li",[t._v("第三次握手：客户端收到 SYN 报文之后，会发送一个 ACK 报文，值为服务器的ISN+1。此时客户端处于 ESTABLISHED 状态。服务器收到 ACK 报文之后，也处于 ESTABLISHED  状态，此时，双方已建立起了连接")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://static.vue-js.com/fb489fc0-beb9-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),t._v(" "),_("p",[t._v("上述每一次握手的作用如下：")]),t._v(" "),_("ul",[_("li",[t._v("第一次握手：客户端发送网络包，服务端收到了\n这样服务端就能得出结论：客户端的发送能力、服务端的接收能力是正常的。")]),t._v(" "),_("li",[t._v("第二次握手：服务端发包，客户端收到了\n这样客户端就能得出结论：服务端的接收、发送能力，客户端的接收、发送能力是正常的。不过此时服务器并不能确认客户端的接收能力是否正常")]),t._v(" "),_("li",[t._v("第三次握手：客户端发包，服务端收到了。\n这样服务端就能得出结论：客户端的接收、发送能力正常，服务器自己的发送、接收能力也正常")])]),t._v(" "),_("p",[t._v("通过三次握手，就能确定双方的接收和发送能力是正常的。之后就可以正常通信了")]),t._v(" "),_("h3",{attrs:{id:"为什么不是两次握手"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#为什么不是两次握手"}},[t._v("#")]),t._v(" 为什么不是两次握手?")]),t._v(" "),_("p",[t._v("如果是两次握手，发送端可以确定自己发送的信息能对方能收到，也能确定对方发的包自己能收到，但接收端只能确定对方发的包自己能收到 无法确定自己发的包对方能收到")]),t._v(" "),_("p",[t._v("并且两次握手的话, 客户端有可能因为网络阻塞等原因会发送多个请求报文，延时到达的请求又会与服务器建立连接，浪费掉许多服务器的资源")]),t._v(" "),_("h2",{attrs:{id:"二、四次挥手"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、四次挥手"}},[t._v("#")]),t._v(" 二、四次挥手")]),t._v(" "),_("p",[_("code",[t._v("tcp")]),t._v("终止一个连接，需要经过四次挥手")]),t._v(" "),_("p",[t._v("过程如下：")]),t._v(" "),_("ul",[_("li",[t._v("第一次挥手：客户端发送一个 FIN 报文，报文中会指定一个序列号。此时客户端处于  FIN_WAIT1 状态，停止发送数据，等待服务端的确认")]),t._v(" "),_("li",[t._v("第二次挥手：服务端收到 FIN 之后，会发送 ACK 报文，且把客户端的序列号值 +1 作为 ACK 报文的序列号值，表明已经收到客户端的报文了，此时服务端处于 CLOSE_WAIT状态")]),t._v(" "),_("li",[t._v("第三次挥手：如果服务端也想断开连接了，和客户端的第一次挥手一样，发给 FIN 报文，且指定一个序列号。此时服务端处于 "),_("code",[t._v("LAST_ACK")]),t._v(" 的状态")]),t._v(" "),_("li",[t._v("第四次挥手：客户端收到 FIN 之后，一样发送一个 ACK 报文作为应答，且把服务端的序列号值 +1 作为自己 ACK 报文的序列号值，此时客户端处于 TIME_WAIT状态。需要过一阵子以确保服务端收到自己的 ACK 报文之后才会进入 CLOSED 状态，服务端收到 ACK 报文之后，就处于关闭连接了，处于 CLOSED 状态")])]),t._v(" "),_("p",[_("img",{attrs:{src:"https://static.vue-js.com/0a3ebb90-beba-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),t._v(" "),_("h3",{attrs:{id:"四次挥手原因"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#四次挥手原因"}},[t._v("#")]),t._v(" 四次挥手原因")]),t._v(" "),_("p",[t._v("服务端在收到客户端断开连接"),_("code",[t._v("Fin")]),t._v("报文后，并不会立即关闭连接，而是先发送一个"),_("code",[t._v("ACK")]),t._v("包先告诉客户端收到关闭连接的请求，只有当服务器的所有报文发送完毕之后，才发送"),_("code",[t._v("FIN")]),t._v("报文断开连接，因此需要四次挥手")]),t._v(" "),_("h2",{attrs:{id:"三、总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三、总结"}},[t._v("#")]),t._v(" 三、总结")]),t._v(" "),_("p",[t._v("一个完整的三次握手四次挥手如下图所示：")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://static.vue-js.com/65941490-beba-11eb-85f6-6fac77c0c9b3.png",alt:""}})]),t._v(" "),_("h2",{attrs:{id:"参考文献"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),_("ul",[_("li",[t._v("https://zhuanlan.zhihu.com/p/53374516")]),t._v(" "),_("li",[t._v("https://segmentfault.com/a/1190000020610336")])])])}),[],!1,null,null,null);_.default=s.exports}}]);