import{L as e,M as t,_ as i,o as s,d as a,w as n,p as o,f as c,B as l,e as d,j as r,s as m,t as h,i as u,g as p,N as _,r as v,a as g,b as A,c as b,q as w,F as y,x as f,y as k,u as E}from"./index.6ce2f0f8.js";import{_ as I}from"./reward-1.c333773f.js";var x={en:{"uni-load-more.contentdown":"Pull up to show more","uni-load-more.contentrefresh":"loading...","uni-load-more.contentnomore":"No more data"},"zh-Hans":{"uni-load-more.contentdown":"上拉显示更多","uni-load-more.contentrefresh":"正在加载...","uni-load-more.contentnomore":"没有更多数据了"},"zh-Hant":{"uni-load-more.contentdown":"上拉顯示更多","uni-load-more.contentrefresh":"正在加載...","uni-load-more.contentnomore":"沒有更多數據了"}};let R;setTimeout((()=>{R=e().platform}),16);const{t:D}=t(x);var J=i({name:"UniLoadMore",emits:["clickLoadMore"],props:{status:{type:String,default:"more"},showIcon:{type:Boolean,default:!0},iconType:{type:String,default:"auto"},iconSize:{type:Number,default:24},color:{type:String,default:"#777777"},contentText:{type:Object,default:()=>({contentdown:"",contentrefresh:"",contentnomore:""})},showText:{type:Boolean,default:!0}},data:()=>({webviewHide:!1,platform:R,imgBase64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzlBMzU3OTlEOUM0MTFFOUI0NTZDNERBQURBQzI4RkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzlBMzU3OUFEOUM0MTFFOUI0NTZDNERBQURBQzI4RkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDOUEzNTc5N0Q5QzQxMUU5QjQ1NkM0REFBREFDMjhGRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDOUEzNTc5OEQ5QzQxMUU5QjQ1NkM0REFBREFDMjhGRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pt+ALSwAAA6CSURBVHja1FsLkFZV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"}),computed:{iconSnowWidth(){return 2*(Math.floor(this.iconSize/24)||1)},contentdownText(){return this.contentText.contentdown||D("uni-load-more.contentdown")},contentrefreshText(){return this.contentText.contentrefresh||D("uni-load-more.contentrefresh")},contentnomoreText(){return this.contentText.contentnomore||D("uni-load-more.contentnomore")}},mounted(){},methods:{onClick(){this.$emit("clickLoadMore",{detail:{status:this.status}})}}},[["render",function(e,t,i,v,g,A){const b=u,w=p,y=_;return s(),a(w,{class:"uni-load-more",onClick:A.onClick},{default:n((()=>[!g.webviewHide&&("circle"===i.iconType||"auto"===i.iconType&&"android"===g.platform)&&"loading"===i.status&&i.showIcon?(s(),o("svg",{key:0,width:"24",height:"24",viewBox:"25 25 50 50",style:l({width:i.iconSize+"px",height:i.iconSize+"px"}),class:"uni-load-more__img uni-load-more__img--android-H5"},[c("circle",{cx:"50",cy:"50",r:"20",fill:"none",style:l({color:i.color}),"stroke-width":3},null,4)],4)):!g.webviewHide&&"loading"===i.status&&i.showIcon?(s(),a(w,{key:1,style:l({width:i.iconSize+"px",height:i.iconSize+"px"}),class:"uni-load-more__img uni-load-more__img--ios-H5"},{default:n((()=>[d(b,{src:g.imgBase64,mode:"widthFix"},null,8,["src"])])),_:1},8,["style"])):r("v-if",!0),i.showText?(s(),a(y,{key:2,class:"uni-load-more__text",style:l({color:i.color})},{default:n((()=>[m(h("more"===i.status?A.contentdownText:"loading"===i.status?A.contentrefreshText:A.contentnomoreText),1)])),_:1},8,["style"])):r("v-if",!0)])),_:1},8,["onClick"])}],["__scopeId","data-v-f0b5ce0e"]]);var M=i({data:()=>({address:"",tokenid:"1",art_src:"../../static/img/content/item_auction_test.png",art_src_2x:"../../static/img/content/item_auction_test.png",title:"艺术品",price:"9.98",info:"这张NFT是XXX创作的XXX，正在进行拍卖，欢迎竞价。",myurl:"https://go.zcc76.xyz",creater:"水王",checkout:!1,paypage:!1,buyok:!1,shareDialogVisible:!1,share_url:"",fit:"contain",highest_price:11.66,highest_name:"Binbin Xu",highest_url:"../../static/img/content/avatar-3.png",place_price:0,bid_info:[{name:"Binbin Xu",money:11.66,time:"Jun 14 - 4:15 PM",url:"../../static/img/content/avatar-3.png"}],show_place_bid:!1,show_load:!1}),methods:{place_a_bid(e){this.show_load=!0,setTimeout((()=>{this.show_load=!1,this.show_place_bid=!1,this.highest_price=this.place_price,this.highest_name="CCZ",this.highest_url="../../static/img/content/avatar-2.png",this.bid_info.push({name:"CC Z",money:this.place_price,time:"Jun 14 - 4:15 PM",url:"../../static/img/content/avatar-2.png"})}),"1000")},cancel_place(e){this.show_place_bid=!1}},computed:{reverseBidInfo(){return this.bid_info.reverse()}},onLoad:function(e){},mounted(){}},[["render",function(e,t,i,l,r,u){const _=v(A("all-header"),g),x=b("el-header"),R=v(A("uni-load-more"),J),D=b("el-input"),M=E,G=b("el-dialog"),C=p;return s(),a(C,{class:"body"},{default:n((()=>[d(C,{class:"outer"},{default:n((()=>[d(x,null,{default:n((()=>[d(_)])),_:1}),c("div",{class:"outer__inner"},[c("div",{class:"section item"},[c("div",{class:"item__center center"},[c("div",{class:"item__bg"},[c("div",{class:"item__preview"},[c("div",{class:"item__categories"},[c("div",{class:"status-black item__category"},"限量"),c("div",{class:"status-purple item__category"},"拍卖中")]),c("img",{srcSet:r.art_src_2x,src:r.art_src,alt:"Item"},null,8,["srcSet","src"])])]),c("div",{class:"item__details"},[c("h1",{class:"item__title h3"},h(r.title)+" # "+h(r.tokenid),1),c("div",{class:"item__cost"},[c("div",{class:"status-stroke-green item__price"},"最高价"+h(r.highest_price)+" CNY",1),c("div",{class:"status-stroke-black item__price"},"正在拍卖"),c("div",{class:"item__counter"},"10人正在竞价")]),c("div",{class:"item__text"},[m(h(r.info)+" ",1),c("a",{href:"https://ui8.net",target:"_blank"},h(e.url),1)]),c("div",{class:"item__tabs"},[c("div",{class:"item__nav"},[c("a",{class:"item__link js-tabs-link active"},"最新竞价"),c("a",{class:"item__link js-tabs-link"},"创建者"),c("a",{class:"item__link js-tabs-link"},"评论")]),c("div",{class:"item__container"},[c("div",{class:"item__box js-tabs-item",style:{display:"block"}},[c("div",{class:"item__users"},[(s(!0),o(y,null,w(r.bid_info,((e,t)=>f((s(),o("div",{class:"item__user"},[c("div",{class:"item__avatar"},[c("img",{src:e.url,alt:"Avatar"},null,8,["src"]),c("div",{class:"item__reward"},[c("img",{src:I,alt:"Reward"})])]),c("div",{class:"item__description"},[c("div",{class:"item__name"},h(e.name),1),c("div",{class:"item__action"},[m("出价: "),c("span",{class:"item__money"},h(e.money)+" CNY",1)])]),c("div",{class:"item__time"},h(e.time),1)],512)),[[k,t>r.bid_info.length-4]]))),256))])])])]),c("div",{class:"item__control"},[c("div",{class:"item__head"},[c("div",{class:"item__avatar"},[c("img",{src:r.highest_url,alt:"Avatar"},null,8,["src"])]),c("div",{class:"item__description"},[c("div",{class:"item__info"},[m("目前最高出价者 "),c("span",null,h(r.highest_name),1)]),c("div",{class:"item__currency"},[c("div",{class:"item__price"},h(r.highest_price)+" CNY",1)])])]),c("div",{class:"item__btns"},[c("a",{class:"button item__button js-popup-open","data-effect":"mfp-zoom-in",onClick:t[0]||(t[0]=e=>r.show_place_bid=!0)},"参与竞价"),c("a",{class:"button-stroke item__button",onClick:t[1]||(t[1]=(...t)=>e.share&&e.share(...t))},"分享")]),c("div",{class:"item__variants"},[m("创建于"),c("span",{class:"item__percent"},"2022/3/28"),c("span",null,"版权所有，请勿用作商业用途")])])])])]),d(G,{width:"27%",modelValue:r.show_place_bid,"onUpdate:modelValue":t[3]||(t[3]=e=>r.show_place_bid=e),class:"absolute"},{default:n((()=>[f(d(R,{status:"loading"},null,512),[[k,r.show_load]]),c("div",{class:"popup__item",style:{display:"block"}},[c("div",{class:"popup__title h4"},"输入竞拍价，不低于最高价"),c("div",{class:"steps"},[d(D,{modelValue:r.place_price,"onUpdate:modelValue":t[2]||(t[2]=e=>r.place_price=e),placeholder:""},null,8,["modelValue"])]),c("div",{class:"popup__btns"},[d(M,{class:"button popup__button",style:{width:"88%"},onClick:u.place_a_bid},{default:n((()=>[m("竞价")])),_:1},8,["onClick"]),d(M,{class:"button-stroke popup__button",style:{width:"88%"},onClick:u.cancel_place},{default:n((()=>[m("放弃竞价")])),_:1},8,["onClick"])])])])),_:1},8,["modelValue"])])])),_:1})])),_:1})}],["__scopeId","data-v-7762f3ac"]]);export{M as default};
