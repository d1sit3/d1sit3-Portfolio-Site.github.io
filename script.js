// burgerMenu function
;(function burger(){
    let condition = false;
    let start = 0;
    let end = 0;
    let burger = document.querySelector('.menu_small_icon');
    burger.addEventListener('click', function(){
        if(condition==false){
            anime({
                targets:'.body__header',
                top:['-500px', '0'],
                easing:'easeInSine',
                duration:500,
                loop:false,
            });
            anime({
                targets:'.menu_small_icon',
                rotate:'90deg',
                easing:'easeInSine',
                duration:500,
                loop:false,
            })
            condition = true;
        }else{
            anime({
                targets:'.body__header',
                top:['0', '-500px'],
                easing:'easeInSine',
                duration:500,
                loop:false,
            });
            anime({
                targets:'.menu_small_icon',
                rotate:'0deg',
                easing:'easeInSine',
                duration:500,
                loop:false,
            })
            condition = false;
        }
    })
})();

// scrollToElement function
function scrollToElement(elementSelector, instance = 0){
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    if (elements.length > instance){
    // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({behavior: 'smooth'});
    }
}

// Append links
const link1 = document.querySelector('#link1');
const link2 = document.querySelector('#link2');
const link3 = document.querySelector('#link3');
const col__sub = document.querySelector('#col__sub');

// scroillToElement
link1.addEventListener('click', () => {
    scrollToElement('.body__deal');
});
link2.addEventListener('click', () => {
    scrollToElement('.body__dit');
});
link3.addEventListener('click', () => {
    scrollToElement('.body__footer');
});
col__sub.addEventListener('click', () =>{
    scrollToElement('.body__header');
});

// footer socials links

// Append links

const discord = 'https://discord.com/'
const youtube = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
const git = 'https://github.com/d1sit3';

// Append socials from footer to JS

const soc1 = document.querySelector('#soc1');
const soc2 = document.querySelector('#soc2');
const soc3 = document.querySelector('#soc3');
const pros = document.querySelector('#pros');
const i1 = document.querySelector('#i1');
const i2 = document.querySelector('#i2');

// Onclick functions

soc1.addEventListener('click', function(){
    window.open(discord);
});
soc2.addEventListener('click', function(){
    window.open(youtube);
});
soc3.addEventListener('click', function(){
    window.open(git);
});
pros.addEventListener('click', function(){
    window.open(git)
})
i1.addEventListener('click', function(){
    window.open(git)
})
i2.addEventListener('click', function(){
    window.open(discord)
})