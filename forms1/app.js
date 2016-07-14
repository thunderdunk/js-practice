
var thisForm = document.getElementById('myTestForm');
    website = thisForm.querySelectorAll('input[type="url"]')[0];
    candyCheckbox = thisForm.querySelectorAll('input[type="checkbox"]')[0];
    candySelect = thisForm.querySelector('#mustLikeCandy');
    candyOther = thisForm.querySelector('#otherCandy');
    hideShows = thisForm.querySelectorAll('.hideShow');

    timeDate = document.getElementById('prefDateTimeLocal');
    prefNumber = document.getElementById('prefNumber');

console.log( thisForm );
console.log( website );
console.log( candyCheckbox );
console.log( hideShows );
console.log( hideShows.length );


for ( i = 0; i < hideShows.length; i++ ) {
  // document.write( hideShows[i] + "<br/>" );
  hideShows[i].style.visibility="hidden";
  console.log( hideShows[i] );
}

website.value = 'http://google.com';

// checkbox.checked = false;

//OK, this isn't going to work without some auto-reloading AJAX stuff
if ( true == candyCheckbox.checked ) {
  candySelect.style.visibility="visible";
} else {
  //
}

// Set placeholder DateTimeLocal
timeDate.value = '1983-01-30T01:21';

// Rm value and set placeholder for pref Number
prefNumber.value = "";
prefNumber.placeholder = '420';
prefNumber.className = 'shitty-number';
