var pageObj = {
      'id': 0,
      'title': 'Here is My Updated Page Title',
      'content': 'This is some new content that has been added via local storage',
      'featuredImage': './img/sam-felix.jpg'
    },
    postsObj = [
      {
        'id': 1,
        'title': 'Here is Post One\'s Title',
        'content': 'This is some new content that has been added via local storage for Post 1',
        'featuredImage': './img/sam-felix.jpg'
      },
      {
        'id': 2,
        'title': 'Title for Post 2',
        'content': 'Some content for the second post in this ongoing saga.',
      }
    ],
    body = document.getElementsByTagName( 'body' )[0],
    pageHeader = document.getElementsByTagName( 'h1' )[0],
    pageContent = document.getElementsByTagName( 'p' )[0],
    pageJSONObj = JSON.stringify( pageObj ),
    postsJSONObj = JSON.stringify( postsObj ),
    loopContainer = document.createElement( 'div' ),
    postContainer,
    postHeaderEl,
    postContentEl,
    postTitle,
    postContent,
    postLoop;
    // pageData;


localStorage.setItem( 'pageData', pageJSONObj );

pageData = JSON.parse( localStorage.getItem( 'pageData' ) );
console.log( pageData );

pageHeader.innerHTML = pageData.title;
pageContent.innerHTML = pageData.content;


// Get posts
console.log( postsJSONObj );
localStorage.setItem( 'postsData', postsJSONObj );

postsData = JSON.parse( localStorage.getItem( 'postsData' ) );
console.log( postsData );

// console.log( postTitle );



// loopContainer;
loopContainer.setAttribute( 'id', 'loop-container' );
body.appendChild( loopContainer );


function postLoop() {
  maxLength = postsData.length;
  for ( i = 0; i < maxLength; i++ ) {
    postContent = document.createTextNode( postsData[i].content ),
    postTitle = document.createTextNode( postsData[i].title ),
    postContainer = document.createElement( 'div' ),
    postHeaderEl = document.createElement( 'h2' ),
    postContentEl = document.createElement( 'p' );

    postHeaderEl.appendChild( postTitle );
    postContentEl.appendChild( postContent );

    postContainer.appendChild( postHeaderEl );
    postContainer.appendChild( postContentEl );

    postContainer.setAttribute( 'class', 'post-container post-' + postsData[i].id );
    loopContainer.appendChild( postContainer );
  }
}

postLoop();
