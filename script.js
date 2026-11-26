const menuButton=document.getElementById("menuButton");
const navLinks=document.getElementById("navLinks");
menuButton.addEventListener("click",()=>{const open=navLinks.classList.toggle("open");menuButton.setAttribute("aria-expanded",String(open));});
navLinks.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{navLinks.classList.remove("open");menuButton.setAttribute("aria-expanded","false");}));
document.getElementById("year").textContent=new Date().getFullYear();
const revealObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");revealObserver.unobserve(entry.target);}});},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>revealObserver.observe(el));
const lightbox=document.getElementById("lightbox"),lightboxImage=document.getElementById("lightboxImage"),lightboxCaption=document.getElementById("lightboxCaption");
document.querySelectorAll(".image-button").forEach(button=>button.addEventListener("click",()=>{lightboxImage.src=button.dataset.image;lightboxImage.alt=button.querySelector("img").alt;lightboxCaption.textContent=button.dataset.caption;lightbox.classList.add("open");lightbox.setAttribute("aria-hidden","false");}));
function closeLightbox(){lightbox.classList.remove("open");lightbox.setAttribute("aria-hidden","true");lightboxImage.src="";}
document.getElementById("lightboxClose").addEventListener("click",closeLightbox);
lightbox.addEventListener("click",e=>{if(e.target===lightbox)closeLightbox();});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeLightbox();});