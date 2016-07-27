// Log mouse position

// var mouseMoveLog = function(e) {
//   console.log( e.clientX + ', ' + e.clientY );
// }
// document.addEventListener( 'mousemove', mouseMoveLog, false );




/*
 * Hover state for dino header elements
 */

var dinoSections = document.querySelectorAll( '.dino-type' ),
    accHeading = document.querySelectorAll( '.section-header' ),
    sectionHover,
    sectionMouseIn;

for ( i = 0; i < dinoSections.length; i++ ) {
  sectionMouseIn = function( e ) {
    // console.log( e.target );
    // console.log( this );
    // this.style.background = 'tomato';

    e.target.querySelector( '.section-header' ).style.background = 'tomato';
  }

  sectionMouseOut = function( e ) {
    // this.style.background = '#555555';
    e.target.getElementsByTagName( 'header' )[0].style.background = 'purple';
  }

  dinoSections[i].addEventListener( 'mouseenter', sectionMouseIn, false );
  dinoSections[i].addEventListener( 'mouseleave', sectionMouseOut, false );

}





/* Set up Accordion */

// var dinoSections = document.querySelectorAll( '.dino-type' ),
//     accHeading = document.querySelectorAll( '.section-header' ),
//     accContent = document.querySelector( '.dino-type .content' ),
//     accParent = accHeading.parentElement;
//
// console.log( accParent );
// function setClosed( event ) {
//
//   for( var i = 0, max = dinoSections.length; i < max; i++ ) {
//     dinoSections[i].classList.add( 'closed' );
//   }
// }
// setClosed();
//
//
// function openOnClick( event ) {
//
//     event.currentTarget.parentElement.classList.remove( 'closed' );
//     event.currentTarget.parentElement.classList.add( 'open' );
//
//     for ( i = 0; i < accHeading.length; i++ ) {
//       accHeading[i].removeEventListener( 'click', openOnClick, false );
//       accHeading[i].addEventListener( 'click', closeOnClick, false );
//     }
//       console.log( 'OK, ready to close on click' );
//
// }
//
// function closeOnClick( event ) {
//   event.currentTarget.parentElement.classList.remove( 'open' );
//   event.currentTarget.parentElement.classList.add( 'closed' );
//
//   for ( i = 0; i < accHeading.length; i++ ) {
//     accHeading[i].removeEventListener( 'click', closeOnClick, false );
//     accHeading[i].addEventListener( 'click', openOnClick, false );
//     console.log( 'Ready to open on click' );
//   }
// }
//
//
// for ( i = 0; i < accHeading.length; i++ ) {
//   accHeading[i].addEventListener( 'click', openOnClick, false);
// }


/********************************
 * Removing Event Listener
 * After One Click
 * 1.4.5.5
 *
 *******************************/
// var content = document.querySelector( '.content' ),
//     originalLinks = document.querySelectorAll( '.content p a' ),
//     pEl = document.createElement( 'p' ),
//     linkEl = document.createElement( 'a' ),
//     linkText = document.createTextNode( 'Open links in new tab' );
//
// function setTargetBlank( event ) {
//
//   for( var i = 0, max = originalLinks.length;  i < max; i++ ) {
//
//     originalLinks[i].setAttribute( 'target', '_blank' );
//
//   }
//
//   console.log( 'Ready to open in new windows!' );
//
//   linkEl.removeEventListener( 'click', setTargetBlank, false );
//   linkEl.innerHTML = 'Open in same window';
//   linkEl.addEventListener( 'click', removeTargetBlank, false );
//
// }
//
// function removeTargetBlank( event ) {
//
//   for( var i = 0, max = originalLinks.length;  i < max; i++ ) {
//
//     originalLinks[i].removeAttribute( 'target' );
//
//   }
//
//   console.log( 'Will open in same tab now!' );
//
//   linkEl.removeEventListener( 'click', removeTargetBlank, false );
//   linkEl.innerHTML = 'Open links in new tab';
//   linkEl.addEventListener( 'click', setTargetBlank, false );
//
// }
//
// linkEl.appendChild( linkText );
// linkEl.setAttribute( 'href', '#' );
// pEl.appendChild( linkEl );
// content.appendChild( pEl );
//
// linkEl.addEventListener( 'click', setTargetBlank, false );
