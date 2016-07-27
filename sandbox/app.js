
// Create div element
divEl = document.createElement( 'div' );
docFrag = document.createDocumentFragment();

// Set class for div element
divEl.setAttribute( 'class', 'new-element' );

// Paragraph 1
a1Text = document.createTextNode( 'here' );
a1El = document.createElement( 'a' );
p1Text1 = document.createTextNode( 'I like dinos, as you can see ' );
p1Text2 = document.createTextNode( '.' );
p1El = document.createElement( 'p' );

a1El.appendChild(a1Text);
a1El.setAttribute( 'href', '#somewhere' );

p1El.appendChild( p1Text1 );
p1El.appendChild( a1El );
p1El.appendChild( p1Text2 );

// Paragraph 2
p2Text = document.createTextNode( 'Here is why:' );
p2El = document.createElement( 'p' );

p2El.appendChild( p2Text );

// List
li1Text = document.createTextNode( 'They are big' );
li1El = document.createElement( 'li' );
li2Text = document.createTextNode( 'They are cool' );
li2El = document.createElement( 'li' );
ul1El = document.createElement( 'ul' );

li1El.appendChild( li1Text );
li2El.appendChild( li2Text );
ul1El.appendChild( li1El );
ul1El.appendChild( li2El );


// Put it together
docFrag.appendChild( p1El );
docFrag.appendChild( p2El );
docFrag.appendChild( ul1El );

// Append our frag to the outer div
divEl.appendChild( docFrag );

console.log( divEl );

masthead = document.querySelector( '#masthead' );
insertLocation = masthead.children[1];

stegoSection = document.getElementById( 'stegosaurus' );
masthead.replaceChild( divEl, insertLocation );
// stegoSection.insertBefore( divEl,  );

console.log( stegoSection.outerHTML );

// <div class="new-element">
//   <p>I like dinos, as you can see <a href="#somewhere">here</a>.</p>
//   <p>Here is why:</p>
//   <ul>
//     <li>They are big</li>
//     <li>They are cool</li>
//   </ul>
// </div>


/**
 * Clone those list items!
 */

var dinoList = document.querySelector( '.fields' ),
    firstItem = dinoList.children[0],
    firstFieldLabel = firstItem.querySelector( 'label' ),
    firstFieldLabelText = firstFieldLabel.textContent,
    firstFieldInput = firstItem.querySelector( 'input' ),
    firstFieldIdStr = firstFieldInput.getAttribute( 'id' ),



    firstFieldPlaceholder = firstFieldInput.getAttribute( 'placeholder' ),

    secondItem = firstItem.cloneNode( true ),
    secondFieldLabel = secondItem.querySelector( 'label' ),
    secondFieldInput = secondItem.querySelector( 'input' ),
    secondFieldIdStr = updateIdStr( firstFieldIdStr ),

    secondFieldPlaceholder = updatePlaceholderStr( firstFieldPlaceholder );
    secondFieldLabelText = updateLabelStr( firstFieldLabelText );

    // console.log( firstFieldLabelText );

    // console.log( secondFieldIdStr );


function updateIdStr( value ) {
  var strArray = value.split( '-' ),
      id = strArray[ strArray.length - 1 ],
      newId = parseInt( id ) + 1

    // console.log( strArray );
    // console.log( id );
    // console.log( newId );

  strArray[ strArray.length - 1 ] = newId;
    // console.log( strArray );
    return strArray.toString().replace( ',', '-' );

}

function updatePlaceholderStr( value ) {
  var strArray = value.split( ' ' ),
      placeholder = strArray[ strArray.length - 1 ],
      newPlaceholder = parseInt( placeholder ) + 1

      console.log( strArray );
      console.log( placeholder );
      console.log( newPlaceholder );

  strArray[ strArray.length - 1 ] = newPlaceholder;
  // console.log( strArray.toString().replace( /,/g, ' ' ) );
  // Using some sort of RegEx flag to replace all separators instead of just the first
  // http://stackoverflow.com/questions/10610402/javascript-replace-all-commas-in-a-string
  return strArray.toString().replace( /,/g, ' ' );
}



function updateLabelStr( textContent ) {
  var strArray = textContent.split( ' ' ),
      labelText = strArray[ strArray.length - 1 ],
      newLabelText = parseInt( labelText ) + 1

      console.log( strArray );
      console.log( labelText );
      console.log( newLabelText );

  strArray[ strArray.length - 1 ] = newLabelText;
  console.log( strArray.toString().replace( /,/g, ' ' ) );
  return strArray.toString().replace( /,/g, ' ' );
}


secondFieldLabel.setAttribute( 'for', secondFieldIdStr );
secondFieldInput.setAttribute( 'id', secondFieldIdStr );
secondFieldInput.setAttribute( 'name', secondFieldIdStr );

secondFieldInput.setAttribute( 'placeholder', secondFieldPlaceholder );

secondFieldLabel.textContent = secondFieldLabelText;

dinoList.appendChild( secondItem );

// secondFieldLabel.appendChild( secondFieldNewText );

// Move Pros List from Triceratops to Stegosaurus
var triSection = document.querySelector('section'),
    triContent = triSection.querySelector( '.content' );
    stegoSection = document.querySelectorAll( 'section' );
    stegoContent = stegoSection[1].querySelector( '.content' );
    prosList = triContent.querySelector( '.pros-list' );
    // console.log( triContent );


    // triContent.remove( prosList );

// console.log( prosList );

    oldEl = triContent.removeChild( prosList );

    console.log( stegoContent );

    stegoContent.appendChild( oldEl );

    // Swap the background colors by adding and removing classes
    stegoSection[1].classList.remove( 'gray' );
    triSection.classList.add( 'gray' );
