import{_ as s,k as t,l as a,r as i,a as e,b as c,c as l,o,d as _,w as d,e as n,f as r,j as p,t as u,s as v,u as m,g as h}from"./index.d1327c48.js";import{_ as b}from"./avatar-3.7b10ac16.js";import{_ as f}from"./reward-1.c333773f.js";import{_ as k,a as g,b as y,c as w}from"./avatar-7.e33ca955.js";var x=s({data:()=>({address:"",tokenid:"",art_src:"https://nft-1306406918.cos.ap-shanghai.myqcloud.com/0x0730f2299d5921d93d24b7b22526de51c62ef2ac/0",art_src_2x:"https://nft-1306406918.cos.ap-shanghai.myqcloud.com/0x0730f2299d5921d93d24b7b22526de51c62ef2ac/0 2x",title:"令人惊叹的艺术品",price:"2.5",info:"链上HASH:",myurl_text:"0x04f9c607b2925cece9703ae991ad78aa212ddc8ba3fbc609a57d3763def59d13",myurl:"http://124.222.242.75:5100/#/transaction/transactionDetail?pkHash=0x00eef72bb16446a1d9f2089a8792b170324ab12a373e83d36c519afa57a126ec",creater:"水王",checkout:!1,paypage:!1,buyok:!1,shareDialogVisible:!1,share_url:"",fit:"contain"}),methods:{share(s){this.buyok=!1,this.shareDialogVisible=!0,this.share_url="https://tenapi.cn/poster/?qrcode="+this.myurl+"&title="+this.title+"&content="+this.info+"&site=ArtShore&info=数字艺术的黄金海岸&author="+this.creater+"&pic=https://tenapi.cn/bing/",console.log(this.share_url)},topay(s){this.checkout=!1,this.paypage=!0},cancel1(s){this.checkout=!1},payok(s){var i="";t({key:"token",success:function(s){console.log(s.data),i=s.data}}),console.log(this.address),console.log(this.tokenid),a({url:"http://124.222.242.75:8080/nft/buyItem",data:{nft_addr:this.address,token_id:this.tokenid},method:"POST",header:{"content-type":"application/x-www-form-urlencoded",token:i},success:s=>{console.log(s.data),this.paypage=!1,this.buyok=!0}})},cancelpay(s){this.paypage=!1}},onLoad:function(s){this.address=s.address,this.tokenid=s.tokenid},mounted(){var s="";t({key:"token",success:function(t){s=t.data}}),a({url:"http://124.222.242.75:8080/nft/details",data:{nft_addr:this.address,token_id:this.tokenid},method:"POST",header:{"content-type":"application/x-www-form-urlencoded",token:s},success:s=>{console.log(s.data),this.title=s.data.data.name,this.art_src=s.data.data.url,this.art_src_2x=s.data.data.url}})}},[["render",function(s,t,a,x,C,j){const V=i(c("all-header"),e),A=l("el-header"),P=m,R=l("el-dialog"),H=l("el-image"),S=h;return o(),_(S,{class:"body"},{default:d((()=>[n(S,{class:"outer"},{default:d((()=>[n(A,null,{default:d((()=>[n(V)])),_:1}),r("div",{class:"outer__inner"},[r("div",{class:"section item"},[r("div",{class:"item__center center"},[r("div",{class:"item__bg"},[r("div",{class:"item__preview"},[r("div",{class:"item__categories"},[r("div",{class:"status-black item__category"},"Art"),r("div",{class:"status-purple item__category"},"可购买")]),r("img",{srcSet:C.art_src_2x,src:C.art_src,alt:"Item"},null,8,["srcSet","src"])]),p(' \t                <div class="options">\n\t                  <div class="options__list">\n\t                    <button class="button-circle-stroke options__button options__button_share js-options-share">\n\t                      <svg class="icon icon-share">\n\t                        <use xlink:href="#icon-share"></use>\n\t                      </svg>\n\t                    </button>\n\t                    <button class="button-circle-stroke options__button options__button_favorite active">\n\t                      <svg class="icon icon-heart">\n\t                        <use xlink:href="#icon-heart"></use>\n\t                      </svg>\n\t                    </button>\n\t                    <div class="actions js-actions">\n\t                      <button class="button-circle-stroke actions__button js-actions-button">\n\t                        <svg class="icon icon-more">\n\t                          <use xlink:href="#icon-more"></use>\n\t                        </svg>\n\t                      </button>\n\t                    </div>\n\t                  </div>\n\t                </div> ')]),r("div",{class:"item__details"},[r("h1",{class:"item__title h3"},u(C.title)+" # "+u(C.tokenid),1),r("div",{class:"item__cost"},[r("div",{class:"status-stroke-green item__price"},u(C.price)+" CNY",1),r("div",{class:"status-stroke-black item__price"},"标签2"),r("div",{class:"item__counter"},"10人正在关注")]),r("div",{class:"item__text"},[v(u(C.info)+" ",1),r("a",{href:C.myurl,target:"_blank"},u(C.myurl_text.substring(0,38))+"...",9,["href"])]),r("div",{class:"item__tabs js-tabs"},[r("div",{class:"item__nav"},[r("a",{class:"item__link js-tabs-link active",href:"#"},"信息"),r("a",{class:"item__link js-tabs-link",href:"#"},"创建者"),r("a",{class:"item__link js-tabs-link",href:"#"},"评论")]),r("div",{class:"item__container"},[r("div",{class:"item__box js-tabs-item",style:{display:"block"}},[r("div",{class:"item__users"},[r("div",{class:"item__user"},[r("div",{class:"item__avatar"},[r("img",{src:b,alt:"Avatar"}),r("div",{class:"item__reward"},[r("img",{src:f,alt:"Reward"})])]),r("div",{class:"item__description"},[r("div",{class:"item__name"},"Chillin"),r("div",{class:"item__action"},[v("将 {"),r("span",null,u(C.title)+" # "+u(C.tokenid),1),v("} 出售")])]),r("div",{class:"item__time"},"2022-4-8 14:54")]),r("div",{class:"item__user"},[r("div",{class:"item__avatar"},[r("img",{src:b,alt:"Avatar"}),r("div",{class:"item__reward"},[r("img",{src:f,alt:"Reward"})])]),r("div",{class:"item__description"},[r("div",{class:"item__name"},"Chillin"),r("div",{class:"item__action"},[v("创建了 {"),r("span",null,u(C.title)+" # "+u(C.tokenid),1),v("} ")])]),r("div",{class:"item__time"},"2022-4-8 13:00")])])]),r("div",{class:"item__box js-tabs-item"},[r("div",{class:"item__users"},[r("div",{class:"item__user"},[r("div",{class:"item__avatar"},[r("img",{src:k,alt:"Avatar"})]),r("div",{class:"item__description"},[r("div",{class:"item__position"},"Owner"),r("div",{class:"item__name"},"Cole Mayert")])])])]),r("div",{class:"item__box js-tabs-item"},[r("div",{class:"item__users"},[r("div",{class:"item__user"},[r("div",{class:"item__avatar"},[r("img",{src:g,alt:"Avatar"}),r("div",{class:"item__reward"},[r("img",{src:f,alt:"Reward"})])]),r("div",{class:"item__description"},[r("div",{class:"item__name"},"Raquel Will"),r("div",{class:"item__action"},[v("Place a bid: "),r("span",{class:"item__money"},"1.46 ETH")])]),r("div",{class:"item__time"},"Jun 14 - 4:12 PM")]),r("div",{class:"item__user"},[r("div",{class:"item__avatar"},[r("img",{src:y,alt:"Avatar"}),r("div",{class:"item__reward"},[r("img",{src:f,alt:"Reward"})])]),r("div",{class:"item__description"},[r("div",{class:"item__name"},"Cole Fahey"),r("div",{class:"item__action"},[v("Put "),r("span",null,"Awesome work"),v(" on sale ")])]),r("div",{class:"item__time"},"Jun 14 - 4:12 PM")]),r("div",{class:"item__user"},[r("div",{class:"item__avatar"},[r("img",{src:w,alt:"Avatar"}),r("div",{class:"item__reward"},[r("img",{src:f,alt:"Reward"})])]),r("div",{class:"item__description"},[r("div",{class:"item__name"},"Adah Mitchell"),r("div",{class:"item__action"},[v("Accepted "),r("span",null,"Raquel Will"),v(" ‘s bid ")])]),r("div",{class:"item__time"},"Jun 14 - 4:12 PM")])])])])]),r("div",{class:"item__control"},[p(' <div class="item__head">\n\t                    <div class="item__avatar"><img src="/static/img/content/avatar-4.jpg" alt="Avatar"></div>\n\t                    <div class="item__description">\n\t                      <div class="item__info">Highest bid by <span>Kohaku Tora</span></div>\n\t                      <div class="item__currency">\n\t                        <div class="item__price">1.46 ETH</div>\n\t                        <div class="item__price">$2,764.89</div>\n\t                      </div>\n\t                    </div>\n\t                  </div> '),r("div",{class:"item__btns"},[r("a",{class:"button item__button js-popup-open","data-effect":"mfp-zoom-in",onClick:t[0]||(t[0]=s=>C.checkout=!0)},"立即购买"),r("a",{class:"button-stroke item__button",onClick:t[1]||(t[1]=(...s)=>j.share&&j.share(...s))},"分享")]),r("div",{class:"item__variants"},[v("创建于"),r("span",{class:"item__percent"},"2022/3/28"),r("span",null,"版权所有，请勿用作商业用途")])])])])]),n(R,{class:"dialog",width:"27%",modelValue:C.checkout,"onUpdate:modelValue":t[2]||(t[2]=s=>C.checkout=s),center:""},{default:d((()=>[r("div",{class:"popup__item",style:{display:"block"}},[r("div",{class:"popup__title h4"},"确认购买"),r("div",{class:"popup__info"},[v("你确定要购买    "),r("strong",null," ZCC "),v("    发行的    "),r("strong",null,u(C.title),1),v("   吗？费用如下")]),r("div",{class:"popup__table"},[r("div",{class:"popup__row"},[r("div",{class:"popup__col"},"9.98"),r("div",{class:"popup__col"},"CNY")]),r("div",{class:"popup__row"},[r("div",{class:"popup__col"},"你的余额"),r("div",{class:"popup__col"},"0.0 CNY")]),r("div",{class:"popup__row"},[r("div",{class:"popup__col"},"你将支付"),r("div",{class:"popup__col"},"9.98 CNY")])]),r("div",{class:"popup__attention"},[r("div",{class:"popup__details"},[r("div",{class:"popup__category"},"数字藏品仅供收藏，请勿向他人售卖"),r("div",{class:"popup__text"})])]),r("div",{class:"popup__btns"},[n(P,{class:"button popup__button",style:{width:"88%"},onClick:j.topay},{default:d((()=>[v("我要购买，去付款")])),_:1},8,["onClick"]),n(P,{class:"button-stroke popup__button js-popup-close",style:{width:"88%"},onClick:j.cancel1},{default:d((()=>[v("取消")])),_:1},8,["onClick"])])])])),_:1},8,["modelValue"]),n(R,{class:"dialog",width:"27%",modelValue:C.paypage,"onUpdate:modelValue":t[3]||(t[3]=s=>C.paypage=s),center:""},{default:d((()=>[r("div",{class:"popup__item",style:{display:"block"}},[r("div",{class:"popup__title h4"},"请支付......"),r("div",{class:"steps"},[r("div",{class:"steps__item"},[r("div",{class:"steps__head"},[r("div",{class:"steps__icon"},[r("div",{class:"loader-circle"})]),r("div",{class:"steps__details"},[r("div",{class:"steps__info"},"正在支付"),r("div",{class:"steps__text"},"请使用支付宝支付")])])]),r("div",{class:"steps__item"},[n(H,{style:{width:"100%"},src:"/static/img/content/pay.png",fit:C.fit},null,8,["fit"])])]),r("div",{class:"popup__btns"},[n(P,{class:"button popup__button",style:{width:"88%"},onClick:j.payok},{default:d((()=>[v("支付完成")])),_:1},8,["onClick"]),n(P,{class:"button-stroke popup__button js-popup-close",style:{width:"88%"},onClick:j.cancelpay},{default:d((()=>[v("放弃支付")])),_:1},8,["onClick"])])])])),_:1},8,["modelValue"]),n(R,{class:"dialog",width:"27%",modelValue:C.buyok,"onUpdate:modelValue":t[4]||(t[4]=s=>C.buyok=s),center:""},{default:d((()=>[r("div",{class:"popup__item",style:{display:"block"}},[r("div",{class:"success"},[r("div",{class:"success__title h2"},[v("购买成功! "),r("span",{role:"img","aria-label":"firework"},"🎉")]),r("div",{class:"success__info"},[v("你已成功购买"),r("span",null,u(C.creater),1),v("发行的数字藏品")]),n(H,{style:{width:"100%"},src:C.art_src,fit:C.fit},null,8,["src","fit"]),r("div",{class:"success__table"},[r("div",{class:"success__row"},[r("div",{class:"success__col"},"状态"),r("div",{class:"success__col"},"已购买")]),r("div",{class:"success__row"},[r("div",{class:"success__col"},"藏品唯一id"),r("div",{class:"success__col"},"0msx836930...87r398")]),r("div",{class:"success__row"},[r("div",{class:"success__col"},"所属人"),r("div",{class:"success__col"},"username")])]),r("div",{class:"success__stage"},"向好友分享你新购买的数字藏品吧！"),n(P,{class:"button popup__button",style:{width:"88%"},onClick:j.share},{default:d((()=>[v("分享")])),_:1},8,["onClick"])])])])),_:1},8,["modelValue"]),n(R,{modelValue:C.shareDialogVisible,"onUpdate:modelValue":t[5]||(t[5]=s=>C.shareDialogVisible=s),width:"32%",center:""},{default:d((()=>[n(H,{style:{width:"100%"},src:C.share_url,fit:C.fit},null,8,["src","fit"])])),_:1},8,["modelValue"])])])),_:1})])),_:1})}],["__scopeId","data-v-45be096c"]]);export{x as default};
