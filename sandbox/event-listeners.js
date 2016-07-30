/*
 * Lightbox
 */

var thumb = document.querySelectorAll( '.thumb' ),
    thumbLink = document.querySelectorAll( '.thumb a' ),
    body = document.getElementsByTagName( 'body' )[0],
    lightboxContainer,
    lightboxImg,
    closeLink,
    closeText,
    closeLightbox,
    clickedImg,
    navContainer,
    navNextLink,
    navNextText,
    navPrevLink,
    navPrevText;

// Create lightbox


openLightbox = function openLightbox( e ) {
  e.preventDefault();

  clickedImg = e.target;

  lightboxContainer = document.createElement( 'div' );
  lightboxImg = e.target.cloneNode( true );
  console.log( e.target );
  console.log( lightboxImg );

  // Set up lightbox
  body.appendChild( lightboxContainer );
  lightboxContainer.classList.add( 'lightbox-container' );
  lightboxContainer.style.background = 'rgba(0,0,0,0.8)';
  lightboxContainer.style.zIndex = '100';
  lightboxContainer.style.position = 'absolute';
  lightboxContainer.style.top = '0';
  lightboxContainer.style.left = '0';
  lightboxContainer.style.width = '100%';
  lightboxContainer.style.height = '100%';

  // Add image
  lightboxContainer.appendChild( lightboxImg );
  lightboxImg.style.maxWidth = '60%';
  lightboxImg.style.maxHeight = '60vh';
  lightboxImg.style.margin = '10vh 20%';
  // lightboxImg.style.textAlign = 'center';

  // Add Close icon
  closeText = document.createTextNode( 'X' );
  closeLink = document.createElement( 'a' );

  closeLink.appendChild( closeText );
  closeLink.setAttribute( 'href', '#' );
  lightboxContainer.appendChild( closeLink );

  closeLink.style.position = 'absolute';
  closeLink.style.top = '20px';
  closeLink.style.right = '20px';
  closeLink.style.color = 'aqua';
  closeLink.style.fontSize = '24px';

  closeLightbox = function closeLightbox( e ) {
    e.preventDefault();
    lightboxContainer.remove();
  }

  closeLink.addEventListener( 'click', closeLightbox, false );

  // Set up navigation
  navNextLink = document.createElement( 'a' );
  navNextText = document.createTextNode( 'Next' );
  navNextLink.appendChild( navNextText );

  navPrevLink = document.createElement( 'a' );
  navPrevText = document.createTextNode( 'Prev' );
  navPrevLink.appendChild( navPrevText );

  navContainer = document.createElement( 'div' );
  navContainer.classList.add( 'navigation' );
  navContainer.setAttribute( 'role', 'navigation' );

  navContainer.appendChild( navNextLink );
  navContainer.appendChild( navPrevLink );

  lightboxContainer.appendChild( navContainer );

  navPrevLink.style.color = '#fff';
  navPrevLink.style.width = '50%';
  navPrevLink.style.fontSize = '20px';
  navPrevLink.style.float = 'left';
  navPrevLink.style.textAlign = 'center';

  navNextLink.style.color = '#fff';
  navNextLink.style.width = '50%';
  navNextLink.style.fontSize = '20px';
  navNextLink.style.float = 'left';
  navNextLink.style.textAlign = 'center';

  navNext = function navNext( e ) {
    e.preventDefault();
    console.log( clickedImg );

    nextImg = clickedImg.nextElementSibling;
    console.log( nextImg );
  }

  navNextLink.addEventListener( 'click', navNext, false );

}

for ( i = 0; i < thumb.length; i++ ) {
  thumb[i].addEventListener( 'click', openLightbox, false );

}



/*
 * Drag Drop
 */

// var dragItems = document.querySelectorAll( '.draggable' ),
//     moveItem = document.querySelector( '.draggable.move' ),
//     copyItem = document.querySelector( '.draggable.copy' ),
//     dropArea = document.getElementById( 'drop-area' ),
//     movable,
//     copyable;
//
// for ( i = 0; i < dragItems.length; i++ ) {
//   dragItems[i].setAttribute( 'draggable', 'true' );
// }
//
// function dragStartHandler( e ) {
//
//   if ( e.target.classList.contains( 'copy' ) ) {
//     copyable = e.target;
//     copyable.classList.add( 'active' );
//
//     // Set the drag effect to copy
//     e.dataTransfer.dropEffect = "copy";
//   }
//
//   if ( e.target.classList.contains( 'move' ) ) {
//     movable = e.target;
//     movable.classList.add( 'active' );
//
//     e.dataTransfer.dropEffect = "move";
//   }
//
//   e.dataTransfer.setData( "text/plain", e.target.classList );
//   e.preventDefault();
//   console.log( 'Drag Start' );
// };
//
// function dragEndHandler( e ) {
//   e.target.classList.remove( 'active' );
//   dropArea.classList.remove( 'active' );
//
//   console.log( 'Drag End' );
// };
//
//
// function dragoverHandler( e ) {
//   e.preventDefault();
//   e.dataTransfer.dropEffect = 'move';
//   console.log( 'I am over!' );
// }
//
// function dropHandler( e ) {
//   e.preventDefault();
//   var data = e.dataTransfer.getData( 'text' );
//   e.target.appendChild.document.getElementById( data );
// }
//
//
// moveItem.addEventListener( 'dragstart', dragStartHandler, false );
// moveItem.addEventListener( 'dragend', dragEndHandler, false );
// document.addEventListener( 'dragover', dragoverHandler, false );
// document.addEventListener( 'drop', dropHandler, false );
// dropArea.addEventListener( 'dragenter', enterDropZone, false );
// dropArea.addEventListener( 'dragleave', leaveDropZone, false );

// document.addEventListener( 'drop', drop, false );
/*
 * Media Events
 */

var videoContainer = document.getElementById( 'video' ),
    video = document.getElementsByTagName( 'video' )[0],
    playBtn = document.getElementById( 'play' ),
    pauseBtn = document.getElementById( 'pause' ),
    restartBtn = document.getElementById( 'restart' ),
    timestamp = document.getElementById( 'timestamp' ),
    stopBtn = document.createElement( 'button' ),
    stopBtnText = document.createTextNode( 'Stop!' ),
    videoNewControls = videoContainer.querySelector( 'p' );

videoNewControls.classList.add( 'control-buttons' );

stopBtn.appendChild( stopBtnText );
videoNewControls.insertBefore( stopBtn, restartBtn );
// console.log( video );
// video.controls = false;

// timestamp.innerHTML = '42';

function playVideo( e ) {
  video.play();
  e.preventDefault();


}

function pauseVideo( e ) {
  video.pause();
  e.preventDefault();
}

function restartVideo( e ) {
  video.currentTime = '0';
  e.preventDefault();
}

function stopVideo( e ) {
  video.pause();
  video.currentTime = '0';
  e.preventDefault();
}

function showTime( e ) {
  elapsedTime = video.currentTime;
  elapsedTime = parseInt( elapsedTime );
  elapsedTimeStr = elapsedTime.toString();

  console.log( elapsedTime );
  console.log( elapsedTimeStr );

  // timestamp.innerHTML +=
  timestamp.innerHTML = elapsedTimeStr;
}

restartBtn.addEventListener( 'click', restartVideo, false );
stopBtn.addEventListener( 'click', stopVideo, false );
playBtn.addEventListener( 'click', playVideo, false );
pauseBtn.addEventListener( 'click', pauseVideo, false );
video.addEventListener( 'timeupdate', showTime, false );
/*
 * Form output
 */

// var formSection = document.getElementById( 'formsection' ),
//     form = document.getElementsByTagName( 'form' )[0],
//     formFields = document.getElementsByTagName( 'input' ),
//     fieldName = document.getElementsByName( 'fieldName' )[0],
//     fieldEmail = document.getElementsByName( 'fieldEmail' )[0],
//     formSubmit = document.getElementsByName( 'formSubmit' )[0],
//     responseEl = document.createElement( 'p' ),
//     responseTextNode = document.createTextNode( 'Response: ' ),
//     responseText = '',
//     addResponse;
//
//
// console.log( fieldName, fieldEmail, formSubmit );
//
// function addResponse( e ) {
//   e.preventDefault();
//   console.log( fieldName.value );
//   console.log( fieldEmail.value );
//
//   if ( fieldName.value == '' ) {
//     responseText + 'Fill in your damn name, Dumbass!';
//   } else {
//     responseText += 'Hello, ';
//     responseText += fieldName.value;
//     responseText += '!';
//   }
//
//   responseText += ' Your email is ';
//
//   if ( fieldEmail.value == '' ) {
//     responseText += 'blank.';
//   } else {
//     responseText += fieldEmail.value;
//     responseText += '.';
//   }
//
//
//
//   responseTextNode.nodeValue = responseText;
//
//   responseEl.appendChild( responseTextNode );
//   formSection.appendChild( responseEl );
//
// }
//
// formSubmit.addEventListener( 'click', addResponse, false );



/*
 * Log mouse position
 */

// var mouseMoveLog = function(e) {
//   console.log( e.clientX + ', ' + e.clientY );
// }
// document.addEventListener( 'mousemove', mouseMoveLog, false );


/*
 * Scroll to Footer
 */

var footer = document.getElementsByTagName( 'footer' )[0],
    masthead = document.getElementById( 'masthead' ),
    pIntro = masthead.querySelector( 'p.intro' ),
    pEl = document.createElement( 'p' ),
    scrollLink = document.createElement( 'a' ),
    linkText = document.createTextNode( 'More at the bottom' ),
    footPEl = document.createElement( 'p' ),
    footLink = document.createElement( 'a' ),
    footLinkText = document.createTextNode( 'Back to the top' ),
    scrollToFooter,
    scrollToMasthead;

// Set up scroll to footer link
scrollLink.appendChild( linkText );
pEl.appendChild( scrollLink );
scrollLink.setAttribute( 'href', '#' );
masthead.appendChild( pEl );

//Set footer position
footer.style.marginTop = '4000px';
footer.style.background = 'PaleVioletRed';
footer.style.padding = '.5em 1em';

// Set up back to top link
footLink.appendChild( footLinkText );
footPEl.appendChild( footLink );
footer.appendChild( footPEl );
footLink.setAttribute( 'href', '#' );
// masthead.setAttribute( 'id', 'top' );

scrollToFooter = function( e ) {
  var footerPositionY = footer.offsetTop;

  console.log( footerPositionY );

  e.preventDefault();
  window.scrollBy( 0, footerPositionY );

}

scrollToMasthead = function( e ) {
  var mastheadRect = masthead.getBoundingClientRect(),
      mastheadPositionY = mastheadRect.top;

  console.log( mastheadRect );
  console.log( mastheadPositionY );

  e.preventDefault();
  window.scrollBy( 0, mastheadPositionY );
}

scrollLink.addEventListener( 'click', scrollToFooter, false );
footLink.addEventListener( 'click', scrollToMasthead, false );
/*
 * Hover state for dino header elements
 */

// var dinoSections = document.querySelectorAll( '.dino-type' ),
//     accHeading = document.querySelectorAll( '.section-header' ),
//     sectionHover,
//     sectionMouseIn;
//
// for ( i = 0; i < dinoSections.length; i++ ) {
//   sectionMouseIn = function( e ) {
//     // console.log( e.target );
//     // console.log( this );
//     // this.style.background = 'tomato';
//
//     e.target.querySelector( '.section-header' ).style.background = 'tomato';
//   }
//
//   sectionMouseOut = function( e ) {
//     // this.style.background = '#555555';
//     e.target.getElementsByTagName( 'header' )[0].style.background = 'purple';
//   }
//
//   dinoSections[i].addEventListener( 'mouseenter', sectionMouseIn, false );
//   dinoSections[i].addEventListener( 'mouseleave', sectionMouseOut, false );
//
// }





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
