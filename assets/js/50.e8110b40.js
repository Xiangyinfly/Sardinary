(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{484:function(t,e,a){t.exports=a.p+"assets/img/Untitled12.440418f1.png"},485:function(t,e,a){t.exports=a.p+"assets/img/Untitled13.e65613de.png"},580:function(t,e,a){"use strict";a.r(e);var l=a(2),s=Object(l.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),e("p",[t._v("同步与异步：主要讨论的是服务提供者，重点在于调用者获得调用结果的方式上")]),t._v(" "),e("p",[t._v("阻塞与非阻塞：主要讨论的是调用者，重点在于等候消息时的行为，调用者是否干其他事情")]),t._v(" "),e("p",[t._v("多路：存在多个需要处理的io event的fd（linux中一切皆文件，所有事物抽象为一个文件句柄fd）")]),t._v(" "),e("p",[t._v("复用：复用一个loop thread同时为多个fd提供处理服务（thread是内核视角下的最小调度单位；多路复用通常为循环模型loop。因此成为loop thread）")]),t._v(" "),e("h1",{attrs:{id:"实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[t._v("#")]),t._v(" 实现")]),t._v(" "),e("h2",{attrs:{id:"select"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#select"}},[t._v("#")]),t._v(" "),e("strong",[t._v("select")])]),t._v(" "),e("ul",[e("li",[t._v("一次可以处理多个 fd，体现多路. 但 fd 数量有限，最多 1024 个")]),t._v(" "),e("li",[t._v("loop thread 通过 select 将一组 fd 提交到内核做监听")]),t._v(" "),e("li",[t._v("当 fd 中无 io event 就绪时，loop thread 会陷入阻塞")]),t._v(" "),e("li",[t._v("每当这组 fd 中有 io event 到达时，内核会唤醒 loop thread")]),t._v(" "),e("li",[t._v("loop thread 无法精准感知到哪些 fd 就绪，需要遍历一轮 fd 列表，时间复杂度 O(N)")]),t._v(" "),e("li",[t._v("托付给内核的 fd 列表只具有一轮交互的时效. 新的轮次中，loop thread 需要重新将监听的 fd 列表再传递给内核一次 → 造成反复的fd数据的拷贝")])]),t._v(" "),e("h2",{attrs:{id:"poll"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#poll"}},[t._v("#")]),t._v(" poll")]),t._v(" "),e("p",[t._v("select的优化版")]),t._v(" "),e("h2",{attrs:{id:"epoll"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#epoll"}},[t._v("#")]),t._v(" "),e("strong",[t._v("epoll")])]),t._v(" "),e("ul",[e("li",[t._v("每次处理的 fd 数量无上限")]),t._v(" "),e("li",[t._v("loop thread 通过 epoll_create 操作创建一个 epoll 池子")]),t._v(" "),e("li",[t._v("loop thread 通过 epoll_ctl 每次将一个待监听的 fd 添加到 epoll 池中")]),t._v(" "),e("li",[t._v("每当 fd 列表中有 fd 就绪事件到达时，会唤醒 loop thread. 同时内核会将处于就绪态的 fd 直接告知 loop thread，无需额外遍历")])]),t._v(" "),e("p",[t._v("综上所述，select 和 epoll 等多路复用操作利用了内核的能力，能在待监听 fd 中有 io event 到达时，将 loop thread 唤醒，避免无意义的主动轮询操作.")]),t._v(" "),e("p",[t._v("其中，epoll 相比于 select 的核心性能优势在于：")]),t._v(" "),e("ul",[e("li",[t._v("loop thread 被唤醒时，能明确知道哪些 fd 需要处理，减少了一次额外遍历的操作，时间复杂度由 O(N) 优化到 O(1)")]),t._v(" "),e("li",[t._v("epoll 通过将创建池子和添加 fd两个操作解耦，实现了池中 fd 数据的复用，减少了用户态与内核态间的数据拷贝成本")])]),t._v(" "),e("h1",{attrs:{id:"eventpoll-原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#eventpoll-原理"}},[t._v("#")]),t._v(" "),e("strong",[t._v("EventPoll 原理")])]),t._v(" "),e("h2",{attrs:{id:"核心指令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#核心指令"}},[t._v("#")]),t._v(" "),e("strong",[t._v("核心指令")])]),t._v(" "),e("p",[t._v("epoll 又称 EventPoll，使用很简单，包含三个指令“")]),t._v(" "),e("ul",[e("li",[t._v("epoll_create")]),t._v(" "),e("li",[t._v("epoll_ctl")]),t._v(" "),e("li",[t._v("epoll_wait")])]),t._v(" "),e("h3",{attrs:{id:"_1-epoll-create"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-epoll-create"}},[t._v("#")]),t._v(" "),e("strong",[t._v("（1）epoll_create")])]),t._v(" "),e("p",[t._v("在内核开辟空间，创建一个 epoll 池子用于批量存储管理 fd，后续可以通过 epoll_ctl 往池子中增删改 fd.")]),t._v(" "),e("div",{staticClass:"language-c extra-class"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[t._v("func "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("epollcreate1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("flags int32"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" int32\n")])])]),e("h3",{attrs:{id:"_2-epoll-ctl"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-epoll-ctl"}},[t._v("#")]),t._v(" "),e("strong",[t._v("（2）epoll_ctl")])]),t._v(" "),e("p",[t._v("在某个 epoll 池子中进行一个 fd 的增删改操作.")]),t._v(" "),e("p",[t._v("正是由于 epoll 中将 epoll_ctl 与 epoll_create 操作进行了解耦，才实现了对 epoll_create 时传递的 fd 数据的复用，减少了用户态和内核态之间对 fd 数据的重复传递")]),t._v(" "),e("p",[t._v("此外，在 epoll_ctl 实现时，也需要通过 epollevent 设置好回调事件，当 fd 有指定事件到达时，会被添加到就绪队列中，最终将 loop thread 唤醒.")]),t._v(" "),e("div",{staticClass:"language-c extra-class"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[t._v("func "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("epollctl")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("epfd"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" op"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fd int32"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ev "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("epollevent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" int32\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//设置监听的类型")]),t._v("\ntype epollevent "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    events uint32\n    data   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("byte "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// unaligned uintptr")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"_3-epoll-wait"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-epoll-wait"}},[t._v("#")]),t._v(" "),e("strong",[t._v("（3）epoll_wait")])]),t._v(" "),e("p",[t._v("从对应 epoll 池子中获取就绪的 epollevent，从中可以关联到对应的 fd 和 loop thread 信息.")]),t._v(" "),e("div",{staticClass:"language-c extra-class"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[t._v("func "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("epollwait")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("epfd int32"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ev "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("epollevent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nev"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" timeout int32"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" int32\n")])])]),e("h2",{attrs:{id:"核心数据结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#核心数据结构"}},[t._v("#")]),t._v(" "),e("strong",[t._v("核心数据结构")])]),t._v(" "),e("h3",{attrs:{id:"_1-epoll-池红黑树"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-epoll-池红黑树"}},[t._v("#")]),t._v(" "),e("strong",[t._v("（1）epoll 池红黑树")])]),t._v(" "),e("p",[t._v("一个 epoll 池子中管理的 fd 数量理论上上不封顶. 同时后续可能存在对 fd 的增删改操作，因此需要使用合适的数据结构加以管理，从而降低后续操作的时间复杂度.")]),t._v(" "),e("p",[t._v("linux 内核中，实现 epoll 池的数据结构采用的是红黑树（Red-Black Tree，一种自平衡二叉查找树，这里不作展开，感兴趣自行了解）实现，保证了所有增、删、改操作的平均时间复杂度维持在 O(logN) 的对数级水平.")]),t._v(" "),e("p",[e("img",{attrs:{src:a(484),alt:"Untitled"}})]),t._v(" "),e("h3",{attrs:{id:"_2-就绪事件队列"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-就绪事件队列"}},[t._v("#")]),t._v(" "),e("strong",[t._v("（2）就绪事件队列")])]),t._v(" "),e("p",[t._v("针对于 fd 的就绪 io event，由于通常数量有限，且每个事件都需要逐一处理，没有优先级之分，因此采用简单的双向链表实现即可.")]),t._v(" "),e("p",[e("img",{attrs:{src:a(485),alt:"Untitled"}})]),t._v(" "),e("h2",{attrs:{id:"事件回调机制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件回调机制"}},[t._v("#")]),t._v(" "),e("strong",[t._v("事件回调机制")])]),t._v(" "),e("p",[t._v("epoll 高效的核心建立在精准的事件回调机制之上.")]),t._v(" "),e("p",[t._v("首先，通过内核感知到 io event 事件的动态，令 loop thread 在合适的时机阻塞，避免浪费 CPU；在合适的时机执行，及时处理 io event.")]),t._v(" "),e("p",[t._v("其次，在 io event 就绪时，会精准地将真正就绪的 fd 传递到 loop thread 手中，减少了一次无意义的遍历查询动作.")]),t._v(" "),e("p",[t._v("事件回调的注册是在调用 epoll_ctl 添加 fd 时，此时会提前设置好对这个 fd 关心的事件类型，当对应的 io event 真的发生时，内核会将该 fd 和对应的 loop thread 封装到 epollevent 中，添加到就绪队列 ready list 当中.")]),t._v(" "),e("p",[t._v("之后当用户调用 epoll_wait 时，能够准确地获取到这部分就绪的 epollevent，进而能够将对应的 loop thread 唤醒.")]),t._v(" "),e("p",[e("em",[t._v("参考文档：")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://mp.weixin.qq.com/s/xt0Elppc_OaDFnTI_tW3hg",target:"_blank",rel:"noopener noreferrer"}},[t._v("解析 Golang 网络 IO 模型之 EPOLL"),e("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=s.exports}}]);