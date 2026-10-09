(function(){
var EMAIL="Srinithya196@gmail.com";
var nav=document.getElementById('nav'),mb=document.getElementById('mb'),hd=document.querySelector('.hd');
if(mb&&nav)mb.addEventListener('click',function(){var o=nav.classList.toggle('open');mb.setAttribute('aria-expanded',o)});
addEventListener('scroll',function(){if(hd)hd.classList.toggle('sc',scrollY>10)});
var yr=document.getElementById('yr');if(yr)yr.textContent=new Date().getFullYear();
var els=document.querySelectorAll('.rv');
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12});els.forEach(function(el){io.observe(el)})}else els.forEach(function(el){el.classList.add('in')});
document.querySelectorAll('[data-n]').forEach(function(el){var t=+el.dataset.n,i=0;if(matchMedia('(prefers-reduced-motion:reduce)').matches){el.textContent=t;return}var s=setInterval(function(){el.textContent=++i;if(i>=t)clearInterval(s)},120);el.textContent=0});
var f=document.getElementById('cf');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var d=new FormData(f);
var body='Name: '+d.get('name')+'\nEmail: '+d.get('email')+'\nService: '+d.get('service')+'\n\n'+d.get('msg');
location.href='mailto:'+EMAIL+'?subject='+encodeURIComponent('Website enquiry - '+d.get('service'))+'&body='+encodeURIComponent(body);
document.getElementById('fn').textContent='Opening your email app to send the message…'});
})();
