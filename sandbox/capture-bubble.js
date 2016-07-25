var containers = document.getElementsByClassName( 'container' );

for (var i = 0, max = containers.length; i < max; i++) {

  // containers[i].addEventListener( 'click', displayEventPhase, true  );
  //containers[i].addEventListener( 'click', displayEventPhase, false );

}

// function displayEventPhase( e ) {
//
//   var phase = e.eventPhase;
//
//   if( 1 === phase ) {
//     phase = 'Capturing';
//   } else if ( 2 === phase ) {
//     phase = 'At Target';
//   } else if ( 3 === phase ) {
//     phase = 'Bubbling';
//   }
//
//   console.log( 'Box: ' + this.id + ' - ' + phase );
//   if( e.target.id === this.id ) {
//     console.log( 'Box: ' + e.target.id + ' - ' + phase );
//   }
// }

for ( i = 0; i < containers.length; i++ ) {
  containers[i].addEventListener( 'click', phaseClass, false );
}
function phaseClass( e ) {
  var phase = e.eventPhase;
      textCapturing = document.createTextNode( 'Capturing' );
      textAtTarget = document.createTextNode( 'Right on, Target' );
      textBubbling = document.createTextNode( 'Bubbling' );
      pEl = document.createElement( 'p' );


  if( 1 === phase ) {
    pEl.appendChild( textCapturing );
    this.style.background = 'pink';
  } else if ( 2 === phase ) {
    pEl.appendChild( textAtTarget );
    this.style.background = 'teal';
  } else if ( 3 === phase ) {
    pEl.appendChild( textBubbling );
    this.style.background = 'yellow';
  }

  this.appendChild( pEl );
}
