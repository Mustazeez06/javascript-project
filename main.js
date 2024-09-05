let overlay =document.getElementById('overlay');
console.log(overlay);
let openAbout=document.getElementById('OpenAbout');
console.log(openAbout);
let aboutSection=document.getElementById('AboutSection');
console.log(aboutSection)
let openWorks=document.getElementById("OpenWorks");
console.log(openWorks);
let workSection=document.getElementById("WorkSection");
console.log(workSection);
let overClose=document.getElementById('overclose');
console.log(overClose);

openAbout.addEventListener('click', function() {
    aboutSection.classList.add('active');
    overlay.classList.add('active');
});
openWorks.addEventListener('click',function() {
    workSection.classList.add("active");
    overlay.classList.add("active");
});
overlay.addEventListener('mouseover',function(){
    overClose.classList.add("active");
});
overlay.addEventListener('mouseout', function() {
    overClose.classList.remove("active");
});
overClose.addEventListener('click',function() {
    workSection.classList.remove("active");
    aboutSection.classList.remove('active');
    overlay.classList.remove('active');
    overClose.classList.remove('active');
});
