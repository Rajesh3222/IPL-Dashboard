(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,a,t){e.exports=t(56)},28:function(e,a,t){},31:function(e,a,t){},35:function(e,a,t){},44:function(e,a,t){},46:function(e,a,t){},48:function(e,a,t){},50:function(e,a,t){},52:function(e,a,t){},54:function(e,a,t){},56:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),r=t(16),m=t.n(r),l=(t(28),t(31),t(3)),s=t(0),i=t(7),u=t.n(i),o=t(9),h=t(10),E=(t(35),function(e){var a=e.teamName,t=e.match;if(!t)return null;var n=t.team1===a?t.team2:t.team1,r="/teams/".concat(n),m=a===t.matchWinner;return c.a.createElement("div",{className:m?"MatchDetailCard won-card":"MatchDetailCard lost-card"},c.a.createElement("div",null,c.a.createElement("span",{className:"vs"},"vs"),c.a.createElement("h1",null,c.a.createElement(l.b,{to:r},n)),c.a.createElement("h2",{className:"match-date"},t.date),c.a.createElement("h3",{className:"match-venue"},"at ",t.venue),c.a.createElement("h3",{className:"match-result"},t.matchWinner," won by ",t.resultMargin," ",t.result)),c.a.createElement("div",{className:"additional-details"},c.a.createElement("h3",null,"First Innings"),c.a.createElement("p",{className:"teams"},t.team1),c.a.createElement("h3",null,"Second Innings"),c.a.createElement("p",{className:"teams"},t.team2),c.a.createElement("h3",null,"Man of the match"),c.a.createElement("p",{className:"teams"},t.playerOfMatch),c.a.createElement("h3",null,"Umpires"),c.a.createElement("p",{className:"teams"},t.umpire1,",",t.umpire2)))}),f=(t(44),function(e){var a=e.teamName,t=e.match;if(!t)return null;var n=t.team1===a?t.team2:t.team1,r="/teams/".concat(n),m=a===t.matchWinner;return c.a.createElement("div",{className:m?"MatchSmallCard won-card":"MatchSmallCard lost-card"},c.a.createElement("span",{className:"vs"},"vs"),c.a.createElement("h3",null," ",c.a.createElement(l.b,{to:r},n)),c.a.createElement("p",{className:"match-result"}," ",t.matchWinner," won by ",t.resultMargin," ",t.result))}),d=(t(46),t(18)),v=function(){var e=Object(n.useState)({matches:[]}),a=Object(h.a)(e,2),t=a[0],r=a[1],m=Object(s.f)().teamName;return Object(n.useEffect)(function(){(function(){var e=Object(o.a)(u.a.mark(function e(){var a,t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("","/team/").concat(m));case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,r(t);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}})()()},[m]),t&&t.teamName?c.a.createElement("div",{className:"TeamPage"},c.a.createElement("div",{className:"team-name-section"},c.a.createElement("h1",{className:"team-name"},t.teamName)),c.a.createElement("div",{className:"win-loss-section"},"Wins/loses",c.a.createElement(d.PieChart,{data:[{title:"Losses",value:t.totalMatches-t.totalWins,color:"#a34d5d"},{title:"Wins",value:t.totalWins,color:"#4da375"}]})),c.a.createElement("div",{className:"match-detail-section"},c.a.createElement("h3",null,"Latest Matches"),c.a.createElement(E,{teamName:t.teamName,match:t.matches[0]})),t.matches.slice(1).map(function(e){return c.a.createElement(f,{key:e.id,teamName:t.teamName,match:e})}),c.a.createElement("div",{className:"more-link"},c.a.createElement(l.b,{to:"/teams/".concat(m,"/matches/").concat("2020")},"More"))):c.a.createElement("h1",null,"Team not found")},N=(t(48),t(50),function(e){for(var a=e.teamName,t=[],n="2008";n<="2020";n++)t.push(n);return c.a.createElement("ol",{className:"YearSelector"},t.map(function(e){return c.a.createElement("li",{key:e},c.a.createElement(l.b,{to:"/teams/".concat(a,"/matches/").concat(e)},e))}))}),p=function(){var e=Object(n.useState)([]),a=Object(h.a)(e,2),t=a[0],r=a[1],m=Object(s.f)(),l=m.teamName,i=m.year;return Object(n.useEffect)(function(){(function(){var e=Object(o.a)(u.a.mark(function e(){var a,t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("","/team/").concat(l,"/matches?year=").concat(i));case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,r(t);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}})()()},[l,i]),c.a.createElement("div",{className:"TeamPage"},c.a.createElement("div",{className:"year-selector"},c.a.createElement("h3",null,"Select Year"),c.a.createElement(N,{teamName:l})),c.a.createElement("div",null,c.a.createElement("h1",{className:"page-heading"},l," matches in ",i),t.map(function(e){return c.a.createElement(E,{key:e.id,teamName:l,match:e})})))},b=(t(52),t(54),function(e){var a=e.teamName;return c.a.createElement("div",{className:"TeamTile"},c.a.createElement("h1",null,c.a.createElement(l.b,{to:"/teams/".concat(a)},a)))}),g=function(){var e=Object(n.useState)([]),a=Object(h.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)(function(){(function(){var e=Object(o.a)(u.a.mark(function e(){var a,t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("","/team"));case 2:return a=e.sent,e.next=5,a.json();case 5:t=e.sent,r(t);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}})()()},[]),c.a.createElement("div",{id:"divtag",className:"HomePage"},c.a.createElement("div",{id:"divtag",className:"header-section"},c.a.createElement("h1",{className:"app-name"},"IPL Dashboard")),c.a.createElement("div",{id:"divtag",className:"team-grid"},t.map(function(e){return c.a.createElement(b,{key:e.id,teamName:e.teamName})})))};var j=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(l.a,null,c.a.createElement(s.c,null,c.a.createElement(s.a,{path:"/teams/:teamName/matches/:year"},c.a.createElement(p,null)),c.a.createElement(s.a,{path:"/teams/:teamName"},c.a.createElement(v,null)),c.a.createElement(s.a,{path:"/team"},c.a.createElement(g,null)))))},w=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,57)).then(function(a){var t=a.getCLS,n=a.getFID,c=a.getFCP,r=a.getLCP,m=a.getTTFB;t(e),n(e),c(e),r(e),m(e)})};m.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(j,null))),w()}},[[19,3,2]]]);
//# sourceMappingURL=main.84394678.chunk.js.map