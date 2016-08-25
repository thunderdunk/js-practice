
/**
 * Set up JS obj
 */

// var nonJSONObj = {
//   "id": 1,
//   "title": "Page Title",
//   "content": "This is some content on my page"
// }

// console.log( nonJSONObj );


/**
 * Set up JSON obj
 */

var JSONObj = '{\
      "id": 1,\
      "title": "JSON Page Title",\
      "content": "This is some content in my JSON page",\
      "featuredImage": "./img/felix.jpg"\
    }',
    parsedJSONObj,
    body = document.getElementsByTagName( 'body' )[0],
    mastheadContainer = document.createElement( 'div' ),
    pageTitleEl = document.createElement( 'h1' ),
    pageTitle,
    pageContentContainer = document.createElement( 'div' ),
    pageContentEl = document.createElement( 'p' ),
    imgContainer = document.createElement( 'div' ),
    imgEl = document.createElement( 'img' ),
    featuredImgSrc,
    pageContent;


console.log( JSONObj );
console.log( JSONObj.title );

parsedJSONObj = JSON.parse( JSONObj );

console.log( parsedJSONObj );

// Get page content from parsed JSON
pageTitle = document.createTextNode( parsedJSONObj.title );
pageContent = document.createTextNode( parsedJSONObj.content );
featuredImgSrc = parsedJSONObj.featuredImage;
console.log( pageTitle );

// Set up Masthead

pageTitleEl.appendChild( pageTitle );
mastheadContainer.setAttribute( 'id', 'masthead' );
pageTitleEl.setAttribute( 'id', 'page-title' );
mastheadContainer.appendChild( pageTitleEl );

body.appendChild( mastheadContainer );

// Set up content
imgEl.setAttribute( 'src', featuredImgSrc );
// console.log( imgEl );
imgContainer.appendChild( imgEl );
imgContainer.style.width = '400px';
imgEl.setAttribute( 'width', '100%' );

pageContentContainer.setAttribute( 'class', 'entry-content' );
pageContentEl.appendChild( pageContent );
pageContentContainer.appendChild( pageContentEl );
body.appendChild( pageContentContainer );
body.appendChild( imgContainer );
