(function(n,o,c){"use strict";const u=c.findByProps("sendMessage","receiveMessage"),t=[];var r={onLoad:function(){t.push(o.before("sendMessage",u,function(e){const a=e[1].content.replaceAll("\u306A","\u306B\u3083");e[1].content=a}))},onUnload:function(){t.forEach(function(e){return e()})}};return n.default=r,Object.defineProperty(n,"__esModule",{value:!0}),n})({},vendetta.patcher,vendetta.metro);