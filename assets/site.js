// Mobile menu
const hdr=document.querySelector('.site-header'),bg=document.querySelector('.burger');
bg&&bg.addEventListener('click',()=>{const o=hdr.classList.toggle('open');bg.setAttribute('aria-expanded',o)});
// Lightbox
const lb=document.querySelector('.lightbox'),lbi=lb.querySelector('img');
document.querySelectorAll('.cell').forEach(a=>a.addEventListener('click',e=>{if(innerWidth<640)return;e.preventDefault();lbi.src=a.getAttribute('href');lbi.alt=a.querySelector('img').alt;lb.hidden=false}));
lb.addEventListener('click',()=>{lb.hidden=true;lbi.src=''});
addEventListener('keydown',e=>{if(e.key==='Escape'){lb.hidden=true}});
// Contact form (Formspree-compatible AJAX)
const f=document.querySelector('form.contact');
f&&f.addEventListener('submit',async e=>{if(f.action.includes('FORM_ENDPOINT')){e.preventDefault();const t=f.querySelector('.thanks');t.textContent='The contact form isn\'t connected yet.';t.hidden=false;return}
 e.preventDefault();const r=await fetch(f.action,{method:'POST',body:new FormData(f),headers:{Accept:'application/json'}});
 if(r.ok){f.querySelectorAll('label,button').forEach(x=>x.hidden=true);f.querySelector('.thanks').hidden=false}});
