var GC;GC=function(){function a(a){if(a){var e=this.createSection(a);switch(this.dataBase=this.getPerDay(a),e){case"bar":this.createBar();break;case"pie":this.createPie()}}}return a.prototype.createSection=function(a){function e(a){switch(a){case"normal":$(".wrp-normal").removeClass("hidden"),$(".wrp-bar").addClass("hidden"),$(".wrp-pie").addClass("hidden");break;case"bar":$(".wrp-bar").removeClass("hidden"),$(".wrp-normal").addClass("hidden"),$(".wrp-pie").addClass("hidden"),0===$(".js-calendar-d-svg").length&&l.createBar();break;case"pie":$(".wrp-pie").removeClass("hidden"),$(".wrp-bar").addClass("hidden"),$(".wrp-normal").addClass("hidden"),0===$(".js-calendar-m-svg").length&&l.createPie()}}var t="",l=this,r=[];r.push("<div class='btn-toggle'>"),r.push("<a href='#' class='tooltipped tooltipped-nw btn-toggle-btn btn-normal' data-target='normal' aria-label='Normal chart view'><i></i></a>"),r.push("<a href='#' class='tooltipped tooltipped-nw btn-toggle-btn btn-bar' data-target='bar' aria-label='GC Bar chart view'><i></i></a>"),r.push("<a href='#' class='tooltipped tooltipped-nw btn-toggle-btn btn-pie' data-target='pie' aria-label='GC Pie chart view'><i></i></a>"),r.push("</div>"),$(a).siblings("h3").before($(r.join("")));var n="<div class='gc-wrapper wrp-bar'></div><div class='gc-wrapper wrp-pie'></div>";return $(a).prepend($(n)),$(a).find(".js-calendar-graph, .contrib-footer, .contrib-column").addClass("wrp-normal"),chrome.storage.local.get("gcToggleSetting",function(a){var t=a.gcToggleSetting?a.gcToggleSetting:"normal";$(".btn-"+t).addClass("active"),e(t)}),$(".btn-toggle").on("click",".btn-toggle-btn",function(a){a.preventDefault(),$(this).siblings().removeClass("active"),$(this).addClass("active");var t=$(this).data("target");e(t),chrome.storage.local.set({gcToggleSetting:t})}),t},a.prototype.getPerDay=function(a){for(var e,t,l,r=$(a).find("rect.day"),n={day:[]},s={count:0},o={count:0},i={},c=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],d=0,g=r.length;g>d;d++)e=$(r[d]),t=e.data("date"),l=e.data("count"),m=t.split("-")[1],i[m]=i[m]?i[m]+l:l,n.day.push({date:t,count:l}),l>s.count&&(s.date=t,s.count=l);for(var d in i)i[d]>o.count&&(o.count=i[d],o.date=d);return o.date=c[parseInt(o.date)-1],n},a.prototype.createPie=function(){for(var a,e,t=this.dataBase.day,l=0,r=new Date(t[0].date),n=r.getDay(),s=[],o=[{angle:52},{angle:51},{angle:51},{angle:52},{angle:51},{angle:51},{angle:52}],i={count:0},c=["#97b552","#2ec7c9","#5ab1ef","#ffb980","#d87a80","#8d98b3","#e5cf0d"],d=["Sunday","Monday","Tuesday","Wednesday","Thurday","Friday","Saturday"],g={},h={},p={},y=0,u=0,b=t.length;b>u;u++)s[n]=s[n]?s[n]+t[u].count:t[u].count,n=(n+1)%7;for(var u=0;7>u;u++)void 0!==s[u]?s[u]>i.count&&(i.count=s[u],i.name=u):s[u]=0;for(var u=0;7>u;u++)l+=s[u];for(var u=0;7>u;u++)a=s[u]/i.count*115,e=c[u],g.x=120+Math.sin(y/180*Math.PI)*a,g.y=120-Math.cos(y/180*Math.PI)*a,y+=o[u].angle,h.x=120+Math.sin(y/180*Math.PI)*a,h.y=120-Math.cos(y/180*Math.PI)*a,p.angle=(y-26)/180*Math.PI,p.x1=120+Math.sin(p.angle)*a,p.y1=120-Math.cos(p.angle)*a,p.x2=120+135*Math.sin(p.angle),p.y2=120-140*Math.cos(p.angle),p.angle>Math.PI?(p.x3=p.x2-20,p.align="end"):(p.x3=p.x2+20,p.align="start"),p.y3=p.y2,o[u]={start:{x:g.x,y:g.y},end:{x:h.x,y:h.y},radius:a,fill:e,pol:{x1:p.x1,y1:p.y1,x2:p.x2,y2:p.y2,x3:p.x3,y3:p.y3,align:p.align}};$(".wrp-pie").append($("<svg width='728' height='340' class='js-calendar-m-svg'></svg>"));var x=[];x.push('<g transform="translate(70, 50)">','<circle cx="120" cy="120" r="120" stroke="#bbb" stroke-width="1" fill="white" />');for(var u=0;7>u;u++)x.push('<path d="M120 120,L',o[u].start.x," ",o[u].start.y," A",o[u].radius," ",o[u].radius," 0 0 1 ",o[u].end.x," ",o[u].end.y,' Z" fill="',o[u].fill,'" />','<polyline points="',o[u].pol.x1,",",o[u].pol.y1," ",o[u].pol.x2,",",o[u].pol.y2," ",o[u].pol.x3,",",o[u].pol.y3,'" style="fill:transparent;stroke:',o[u].fill,';stroke-width:1"/>','<text x="',o[u].pol.x3,'" y="',o[u].pol.y3,'" fill="',o[u].fill,'" text-anchor="',o[u].pol.align,'">',d[u],"</text>");x.push('<circle cx="120" cy="120" r="15" fill="white" />','<circle cx="120" cy="120" r="9" stroke="#bbb" stroke-width="1" fill="white" />',"</g>"),void 0!==i.name?x.push('<text x="360" y="180" class="legend-title">Most busy on ',d[i.name],".</text>"):x.push('<text x="370" y="180" class="legend-title">Seems not busy.</text>'),$(".js-calendar-m-svg").html(x.join(""))},a.prototype.createBar=function(){function a(a){var e=$(".wrp-bar");switch(a){case"green":e.removeClass("gc-blue"),e.removeClass("gc-red");break;case"blue":e.addClass("gc-blue"),e.removeClass("gc-red");break;case"red":e.removeClass("gc-blue"),e.addClass("gc-red")}}var e=this.dataBase.day,t=new Date(e[0].date),l=t.getDay(),r={lx:92-11*l,ly:100+6*l,lh:0},n=[],s=[],o=[];0===l&&(r.lx-=88,r.ly+=48),$(".wrp-bar").append($("<svg width='728' height='580' class='js-calendar-d-svg'></svg>")),s.push('<g class="day2"><polygon points="0,580 '),o.push('<g class="legend">','<rect class="legend-green" data-color="green" x="10" y="10" width="10" height="10" style="fill:#8cc665"/>','<rect class="legend-blue" data-color="blue" x="22" y="10" width="10" height="10" style="fill:#3399cc"/>','<rect class="legend-red" data-color="red" x="34" y="10" width="10" height="10" style="fill:#ff6666"/>',"</g>"),n=n.concat(o);for(var i=0,c=e.length;c>i;i++)0===l?(r.lx+=84,r.ly-=30):(r.lx-=12,r.ly+=6),r.lh=7*e[i].count,r.lh=0===r.lh?2:r.lh,r["class"]=parseInt((e[i].count+2)/3),r["class"]=r["class"]>4?"day4":"day"+r["class"],n.push('<g class="',r["class"],'">','<polygon points="',r.lx-10,",",r.ly+5," ",r.lx,",",r.ly+10," ",r.lx,",",r.ly+10-r.lh," ",r.lx-10,",",r.ly+5-r.lh,'" />','<polygon points="',r.lx,",",r.ly+10," ",r.lx+10,",",r.ly+5," ",r.lx+10,",",r.ly+5-r.lh," ",r.lx,",",r.ly+10-r.lh,'" />','<polygon points="',r.lx-10,",",r.ly+5-r.lh," ",r.lx,",",r.ly+10-r.lh," ",r.lx+10,",",r.ly+5-r.lh," ",r.lx,",",r.ly-r.lh,'" />',"</g>"),s.push(" ",2*i,",",580-r.lh),l=(l+1)%7;s.push(" ",2*(i-1),",",580,'" /></g>'),n=n.concat(s),$(".js-calendar-d-svg").html(n.join("")),chrome.storage.local.get("gcColorSetting",function(e){var t=e.gcColorSetting?e.gcColorSetting:"green";a(t)}),$("g.legend").on("click","rect",function(e){var t=$(this).data("color");a(t),chrome.storage.local.set({gcColorSetting:t})})},a}(),$(function(){var a,e;return e=document.querySelector("#contributions-calendar"),a=new GC(e)});