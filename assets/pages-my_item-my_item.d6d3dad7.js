import{_ as s,k as t,l as a,r as e,a as i,b as l,c,o,d as n,w as d,e as _,f as r,j as u,t as p,s as m,u as v,g as h}from"./index.6ce2f0f8.js";import{_ as k}from"./avatar-2.4a014a91.js";import{_ as b}from"./avatar-3.7b10ac16.js";import{_ as f}from"./reward-1.c333773f.js";var g=s({data:()=>({address:"",tokenid:"",art_src:"/static/img/content/item-pic.jpg",art_src_2x:"/static/img/content/item-pic@2x.jpg 2x",title:"令人惊叹的艺术品",price:"2.5",info:"这张NFT卡可以让你使用特殊的空投。欲了解更多有关的信息，请访问",myurl:"https://go.zcc76.xyz",to:"",creater:"水王",checkout:!1,paypage:!1,buyok:!1,shareDialogVisible:!1,share_url:"",fit:"contain"}),methods:{share(s){this.buyok=!1,this.shareDialogVisible=!0,this.share_url="https://tenapi.cn/poster/?qrcode="+this.myurl+"&title=我向你赠送了"+this.title+"&content="+this.info+"&site=ArtShore&info=数字艺术的黄金海岸&author="+this.creater+"&pic="+this.art_src,console.log(this.share_url)},topay(s){this.checkout=!1,this.paypage=!0},cancel1(s){this.checkout=!1},payok(s){var e="";t({key:"token",success:function(s){console.log(s.data),e=s.data}}),a({url:"http://124.222.242.75:8080/nft/handsel",data:{to:this.to,token_id:this.tokenid,nft_addr:this.address},method:"POST",header:{"content-type":"application/x-www-form-urlencoded",token:e},success:s=>{console.log(s.data),this.paypage=!1,this.buyok=!0}})},cancelpay(s){this.paypage=!1}},onLoad:function(s){this.address=s.address,this.tokenid=s.tokenid},mounted(){var s="";t({key:"token",success:function(t){s=t.data}}),a({url:"http://124.222.242.75:8080/nft/details",data:{nft_addr:this.address,token_id:this.tokenid},method:"POST",header:{"content-type":"application/x-www-form-urlencoded",token:s},success:s=>{console.log(s.data),this.title=s.data.data.name,this.art_src=s.data.data.url,this.art_src_2x=s.data.data.url}})}},[["render",function(s,t,a,g,y,w){const j=e(l("all-header"),i),V=c("el-header"),x=v,C=c("el-dialog"),A=c("el-input"),S=c("el-image"),T=h;return o(),n(T,{class:"body"},{default:d((()=>[_(T,{class:"outer"},{default:d((()=>[_(V,null,{default:d((()=>[_(j)])),_:1}),r("div",{class:"outer__inner"},[r("div",{class:"section item"},[r("div",{class:"item__center center"},[r("div",{class:"item__bg"},[r("div",{class:"item__preview"},[r("div",{class:"item__categories"},[r("div",{class:"status-black item__category"},"Art"),r("div",{class:"status-purple item__category"},"可购买")]),r("img",{srcSet:y.art_src_2x,src:y.art_src,alt:"Item"},null,8,["srcSet","src"])]),u(' \t                <div class="options">\n\t                  <div class="options__list">\n\t                    <button class="button-circle-stroke options__button options__button_share js-options-share">\n\t                      <svg class="icon icon-share">\n\t                        <use xlink:href="#icon-share"></use>\n\t                      </svg>\n\t                    </button>\n\t                    <button class="button-circle-stroke options__button options__button_favorite active">\n\t                      <svg class="icon icon-heart">\n\t                        <use xlink:href="#icon-heart"></use>\n\t                      </svg>\n\t                    </button>\n\t                    <div class="actions js-actions">\n\t                      <button class="button-circle-stroke actions__button js-actions-button">\n\t                        <svg class="icon icon-more">\n\t                          <use xlink:href="#icon-more"></use>\n\t                        </svg>\n\t                      </button>\n\t                    </div>\n\t                  </div>\n\t                </div> ')]),r("div",{class:"item__details"},[r("h1",{class:"item__title h3"},p(y.title)+" # "+p(y.tokenid),1),r("div",{class:"item__cost"},[r("div",{class:"status-stroke-green item__price"},p(y.price)+" CNY",1),r("div",{class:"status-stroke-black item__price"},"标签2"),r("div",{class:"item__counter"},"10人正在关注")]),r("div",{class:"item__text"},[m(p(y.info)+" ",1),r("a",{href:"https://ui8.net",target:"_blank"},p(s.url),1)]),r("div",{class:"item__tabs js-tabs"},[r("div",{class:"item__nav"},[r("a",{class:"item__link js-tabs-link active"},"信息"),r("a",{class:"item__link js-tabs-link"},"创建者"),r("a",{class:"item__link js-tabs-link"},"评论")]),r("div",{class:"item__container"},[r("div",{class:"item__box js-tabs-item",style:{display:"block"}},[r("div",{class:"item__users"},[r("div",{class:"item__user"},[r("div",{class:"item__avatar"},[r("img",{src:k,alt:"Avatar"})]),r("div",{class:"item__description"},[r("div",{class:"item__name"},"Zhang"),r("div",{class:"item__action"},[m("购买了 {"),r("span",null,p(y.title)+" # "+p(y.tokenid),1),m("}")])]),r("div",{class:"item__time"},"2022-4-9 13:24")]),r("div",{class:"item__user"},[r("div",{class:"item__avatar"},[r("img",{src:b,alt:"Avatar"}),r("div",{class:"item__reward"},[r("img",{src:f,alt:"Reward"})])]),r("div",{class:"item__description"},[r("div",{class:"item__name"},"Chillin"),r("div",{class:"item__action"},[m("将 {"),r("span",null,p(y.title)+" # "+p(y.tokenid),1),m("} 出售")])]),r("div",{class:"item__time"},"2022-4-8 14:54")]),r("div",{class:"item__user"},[r("div",{class:"item__avatar"},[r("img",{src:b,alt:"Avatar"}),r("div",{class:"item__reward"},[r("img",{src:f,alt:"Reward"})])]),r("div",{class:"item__description"},[r("div",{class:"item__name"},"Chillin"),r("div",{class:"item__action"},[m("创建了 {"),r("span",null,p(y.title)+" # "+p(y.tokenid),1),m("} ")])]),r("div",{class:"item__time"},"2022-4-8 13:00")])])])])]),r("div",{class:"item__control"},[u(' <div class="item__head">\n\t                    <div class="item__avatar"><img src="/static/img/content/avatar-4.jpg" alt="Avatar"></div>\n\t                    <div class="item__description">\n\t                      <div class="item__info">Highest bid by <span>Kohaku Tora</span></div>\n\t                      <div class="item__currency">\n\t                        <div class="item__price">1.46 ETH</div>\n\t                        <div class="item__price">$2,764.89</div>\n\t                      </div>\n\t                    </div>\n\t                  </div> '),r("div",{class:"item__btns"},[r("a",{class:"button item__button js-popup-open","data-effect":"mfp-zoom-in",onClick:t[0]||(t[0]=s=>y.checkout=!0)},"转赠他人"),r("a",{class:"button-stroke item__button",onClick:t[1]||(t[1]=(...s)=>w.share&&w.share(...s))},"分享")]),r("div",{class:"item__variants"},[m("购买于"),r("span",{class:"item__percent"},"2022/3/28"),r("span",null,"版权所有，请勿用作商业用途")])])])])]),_(C,{width:"27%",modelValue:y.checkout,"onUpdate:modelValue":t[2]||(t[2]=s=>y.checkout=s)},{default:d((()=>[r("div",{class:"popup__item",style:{display:"block"}},[r("div",{class:"popup__title h4"},"确认赠予"),r("div",{class:"popup__info"},[m("你确定要将"),r("strong",null,"{ "+p(y.title)+" # "+p(y.tokenid)+" }",1),m(" 赠予他人吗？")]),r("div",{class:"popup__attention"},[r("div",{class:"popup__details"},[r("div",{class:"popup__category"},"数字藏品仅供收藏，请勿向他人售卖"),r("div",{class:"popup__text"})])]),r("div",{class:"popup__btns"},[_(x,{class:"button popup__button",style:{width:"88%"},onClick:w.topay},{default:d((()=>[m("我要赠送")])),_:1},8,["onClick"]),_(x,{class:"button-stroke popup__button js-popup-close",style:{width:"88%"},onClick:w.cancel1},{default:d((()=>[m("取消")])),_:1},8,["onClick"])])])])),_:1},8,["modelValue"]),_(C,{width:"27%",modelValue:y.paypage,"onUpdate:modelValue":t[4]||(t[4]=s=>y.paypage=s)},{default:d((()=>[r("div",{class:"popup__item",style:{display:"block"}},[r("div",{class:"popup__title h4"},"选择受赠人"),r("div",{class:"steps"},[_(A,{modelValue:y.to,"onUpdate:modelValue":t[3]||(t[3]=s=>y.to=s),placeholder:"请输入受赠人id"},null,8,["modelValue"])]),r("div",{class:"popup__btns"},[_(x,{class:"button popup__button",style:{width:"88%"},onClick:w.payok},{default:d((()=>[m("赠予")])),_:1},8,["onClick"]),_(x,{class:"button-stroke popup__button js-popup-close",style:{width:"88%"},onClick:w.cancelpay},{default:d((()=>[m("放弃赠予")])),_:1},8,["onClick"])])])])),_:1},8,["modelValue"]),_(C,{width:"27%",modelValue:y.buyok,"onUpdate:modelValue":t[5]||(t[5]=s=>y.buyok=s)},{default:d((()=>[r("div",{class:"popup__item",style:{display:"block"}},[r("div",{class:"success"},[r("div",{class:"success__title h2"},[m("赠予成功! "),r("span",{role:"img","aria-label":"firework"},"🎉")]),r("div",{class:"success__info"},[m("你已成功向"),r("span",null,"id:"+p(y.to),1),m("赠送数字藏品")]),r("div",{class:"success__table"},[r("div",{class:"success__row"},[r("div",{class:"success__col"},"状态"),r("div",{class:"success__col"},"已赠送")]),r("div",{class:"success__row"},[r("div",{class:"success__col"},"藏品唯一id"),r("div",{class:"success__col"},p(y.address)+":"+p(y.tokenid),1)]),r("div",{class:"success__row"},[r("div",{class:"success__col"},"所属人id"),r("div",{class:"success__col"},p(y.to),1)])]),r("div",{class:"success__stage"},"通知好友吗？"),_(x,{class:"button popup__button",style:{width:"88%"},onClick:w.share},{default:d((()=>[m("通知")])),_:1},8,["onClick"])])])])),_:1},8,["modelValue"]),_(C,{modelValue:y.shareDialogVisible,"onUpdate:modelValue":t[6]||(t[6]=s=>y.shareDialogVisible=s),width:"32%",center:""},{default:d((()=>[_(S,{style:{width:"100%"},src:y.share_url,fit:y.fit},null,8,["src","fit"])])),_:1},8,["modelValue"])])])),_:1})])),_:1})}],["__scopeId","data-v-763005f4"]]);export{g as default};
