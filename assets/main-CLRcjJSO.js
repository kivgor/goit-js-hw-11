import{i as c,S as u}from"./vendor-BrddEoy-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(e){if(e.ep)return;e.ep=!0;const a=l(e);fetch(e.href,a)}})();function p(r){const t=document.querySelector(".gallery");let l='<span class="loader">Loading</span>';t.innerHTML=l,r.total!=0?(l=r.hits.map(e=>`<li class="gallery-item">
          <a class="gallery-link" href="${e.largeImageURL}">
            <img
              class="gallery-image"
              src="${e.webformatURL}"
              data-source="${e.largeImageURL}"
              alt="${e.tags}"
            />
          </a>          
          <ul class='gallery-stat-list'>
            <li class='gallery-stat-item'><p class='item-caption'>Likes</p><p class="item-value">${e.likes}</p></li>
            <li class='gallery-stat-item'><p class='item-caption'>Views</p><p class="item-value">${e.views}</p></li>
            <li class='gallery-stat-item'><p class='item-caption'>Comments</p><p class="item-value">${e.comments}</p></li>
            <li class='gallery-stat-item'><p class='item-caption'>Downloads</p><p class="item-value">${e.downloads}</p></li>
          </ul>          
        </li>`).join(""),t.innerHTML=l,new u(".gallery a",{overlayOpacity:.9,captionsData:"alt",captionDelay:250}).refresh()):(o("Sorry, there are no images matching your search query. Please try again!"),l="",t.innerHTML=l)}function o(r){c.show({icon:"icon-person",message:r,color:"red",position:"topRight",transitionIn:"bounceInDown",transitionOut:"flipOutX",closeOnClick:!0,displayMode:"replace",timeout:3e3})}function m(r){const l=`https://pixabay.com/api/?${new URLSearchParams({key:"46676876-9d0aaf878b11d8c614d2fd644",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:21})}`;fetch(l).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()}).then(s=>{p(s)}).catch(s=>console.log(s))}const n=document.querySelector(".form");n.addEventListener("submit",f);function f(r){r.preventDefault();const t=r.target.elements.search.value.trim();t!==""?(n.reset(),m(t)):o("🚫 Please fill in the search images field")}
//# sourceMappingURL=main-CLRcjJSO.js.map
