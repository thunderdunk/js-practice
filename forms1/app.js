
var thisForm = document.getElementById('myTestForm');
    website = thisForm.querySelectorAll('input[type="url"]')[0];

console.log( thisForm );
console.log( website );

website.value = 'http://google.com';
