!function(e){var t={};function n(a){if(t[a])return t[a].exports;var l=t[a]={i:a,l:!1,exports:{}};return e[a].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(a,l,function(t){return e[t]}.bind(null,l));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);let a=document.querySelector(".header__hoisting-head");const l=document.querySelector(".main__gallery .carousel-control-prev"),o=document.querySelector(".main__gallery .carousel-control-next"),s=document.querySelectorAll(".main__gallery .carousel-item");let i=document.querySelector(".main__gallery .progress-number");i.innerHTML="01 / 0"+s.length;document.getElementById("carouselExampleControls");const r=document.querySelector(".carousel-inner");let c=document.querySelector(".main__gallery .progress-bar");c.style.width=1/s.length*100+"%";let d=0;let u=$(".hoisting__mobile-nav"),_=$(".close__hoisting__mobile-nav"),m=$(".header__hoisting-head"),h=$("main");let g=$("#modalCallback"),f=$("#modalCallback__success");let b=document.querySelectorAll(".modalCallbackForm__group input"),p=document.querySelectorAll(".modalCallback__input-label");const y=document.querySelector("#modal__callback__button");let v=$("#modalCallback__success .modal__callback__button");$(document).ready((function(){$(".features__carousel").slick({dots:!1,arrows:!1,variableWidth:!0})})),function(){for(let e=0;e<s.length;e++)s[e].setAttribute("data-id",e+1);r.addEventListener("touchend",(function(){setTimeout(()=>{for(let e=0;e<s.length;e++)s[e].classList.contains("active")&&(e<9?(i.innerHTML=`0${s[e].getAttribute("data-id")} / 0${s.length}`,c.style.width=s[e].getAttribute("data-id")/s.length*100+"%"):(i.innerHTML=`${s[e].getAttribute("data-id")} / ${s.length}`,c.style.width=s[e].getAttribute("data-id")/s.length*100+"%"))},700)}),!1),l.addEventListener("click",()=>{setTimeout(()=>{for(let e=0;e<s.length;e++)s[e].classList.contains("active")&&(e<9?(i.innerHTML=`0${s[e].getAttribute("data-id")} / 0${s.length}`,c.style.width=s[e].getAttribute("data-id")/s.length*100+"%"):(i.innerHTML=`${s[e].getAttribute("data-id")} / ${s.length}`,c.style.width=s[e].getAttribute("data-id")/s.length*100+"%"))},700)}),o.addEventListener("click",()=>{setTimeout(()=>{for(let e=0;e<s.length;e++)s[e].classList.contains("active")&&(e<9?(i.innerHTML=`0${s[e].getAttribute("data-id")} / 0${s.length}`,c.style.width=s[e].getAttribute("data-id")/s.length*100+"%"):(i.innerHTML=`${s[e].getAttribute("data-id")} / ${s.length}`,c.style.width=s[e].getAttribute("data-id")/s.length*100+"%"))},700)})}(),$.ajax({url:"https://www.instagram.com/villa.victoria.od/?__a=1",success(e){e.graphql.user.edge_owner_to_timeline_media.edges.forEach((e,t)=>{d+=200;let n=e.node.display_url;t<3&&$("#instafeed").append(`<a data-aos-duration="1400" data-aos="type1a" data-aos-delay= ${d} href="https://www.instagram.com/p/`+e.node.shortcode+'/" class="instafeed__box" target="_blank" id="'+t+'"><img class="instafeed__img" src="'+n+'" /></a>')})}}),AOS.init({once:!0}),document.addEventListener("scroll",(function(){pageYOffset>500?a.classList.add("show__head"):a.classList.remove("show__head")})),$(".burger__menu").on("click",(function(){u.addClass("show__hoisting-menu"),h.addClass("main__active"),$("menu, html").addClass("block__screen"),m.hasClass("show__head")&&m.removeClass("show__head")})),_.on("click",(function(){u.removeClass("show__hoisting-menu"),h.removeClass("main__active"),$("menu, html").removeClass("block__screen"),pageYOffset>500&&m.addClass("show__head")})),document.forms.callback.onsubmit=function(e){e.preventDefault();const t={userName:encodeURIComponent(document.forms.callback.name),userNumber:encodeURIComponent(document.forms.number)};let n=new XMLHttpRequest;n.open("POST","./form.php"),n.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),n.onreadystatechange=function(){4===n.readyState&&200===n.status&&(g.modal("hide"),setTimeout((function(){f.modal("show")}),500))},n.send(t)},jQuery((function(e){e(".phone").mask("+38 (999) 999-99-99")})),function(){for(let e=0;e<b.length;e++)b[e].oninput=function(){null===b[e].value||""===b[e].value?(b[e].classList.add("input__required"),p[e].classList.add("show__label")):b[e].classList.contains("input__required")&&(b[e].classList.remove("input__required"),p[e].classList.contains("show__label")&&p[e].classList.remove("show__label"))};y.addEventListener("click",()=>{for(let e=0;e<b.length;e++)null===b[e].value||""===b[e].value?(b[e].classList.add("input__required"),p[e].classList.add("show__label")):b[e].classList.contains("input__required")&&(b[e].classList.remove("input__required"),p[e].classList.contains("show__label")&&p[e].classList.remove("show__label"))})}(),v.on("click",(function(){v.modal("hide")}))}]);