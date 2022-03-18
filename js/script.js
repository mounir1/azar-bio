var config = {"apiKey":"AIzaSyCPN4gB8eQaaL52vph8gH0umoPhVlbZyCQ","authDomain":"azar-bio.firebaseapp.com","databaseURL":"https://azar-bio-default-rtdb.europe-west1.firebasedatabase.app","projectId":"azar-bio","storageBucket":"azar-bio.appspot.com","messagingSenderId":"556473626861","appId":"1:556473626861:web:faa002f83c5f36d25f9ce4","measurementId":"G-ZGC02MSREH","id":"extModel178-11"}
firebase.initializeApp(config);
var Dbroot = firebase.database()
                     .ref();

var firebaseRef = {
    items: Dbroot.child('items'),
    images: Dbroot.child('images'),
    videos: Dbroot.child('videos'),
    about: Dbroot.child('about')
};

var products = [];
var productEl = '';
var slider = document.getElementById('slider');

// firebaseRef.items.once('value', function(snapshot){
//     snapshot.forEach(function(imageRef){
//         products.push( imageRef.val());
//     });
//     products.forEach(p => {
//         debugger
//         productEl = productEl + ' <div class="thumbnail"><img width="300" height="350" src="' + p.imageUrl + '" alt=""><div class="product-details">' +
//             '<h2>'+p.title+'</h2><p> <span>'+p.oldprice+' DZA</span> ' + p.price+' DZA </p><a href="#">Add to Cart</a></div></div>';
//
//     });
//
//     slider.innerHTML = productEl;
//     let thumbnails = document.getElementsByClassName('thumbnail');
//     let buttonRight = document.getElementById('slide-right');
//     let buttonLeft = document.getElementById('slide-left');
//
//     buttonLeft.addEventListener('click', function(){
//         slider.scrollLeft -= 125;
//     });
//
//     buttonRight.addEventListener('click', function(){
//         slider.scrollLeft += 125;
//     });
//
//     const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
//     // alert(maxScrollLeft);
//     // alert("Left Scroll:" + slider.scrollLeft);
//
//     //AUTO PLAY THE SLIDER
//     function autoPlay(){
//         if (slider.scrollLeft > (maxScrollLeft - 1)){
//             slider.scrollLeft -= maxScrollLeft;
//         }
//         else{
//             slider.scrollLeft += 1;
//         }
//     }
//
//     let play = setInterval(autoPlay, 50);
//
//     // PAUSE THE SLIDE ON HOVER
//     for (var i = 0; i < thumbnails.length; i++){
//
//         thumbnails[i].addEventListener('mouseover', function(){
//             clearInterval(play);
//         });
//
//         thumbnails[i].addEventListener('mouseout', function(){
//             return play = setInterval(autoPlay, 50);
//         });
//     }
//
// });

new fullpage('#fullpage', {
    licenseKey: 'YOUR KEY HERE',
    sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],
});

