// JQuery
$.noConflict()
jQuery(document).ready(function($) {
    
})

// JavaScript
const clock = document.querySelector('.clock');

// Time function
const time = () => {
    const now = new Date();

    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();
    const html = `
    <span>${hour}</span> : 
    <span>${minute}</span> : 
    <span>${second}</span>
    `;
    clock.innerHTML = html;


};
setInterval(time, 1000);