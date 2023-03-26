 
// Functions

function clickedroom(id){

    window.location.href = 'room.html#'+id;

}

// Request page

 const requests = document.querySelector('#requests');

 requests.addEventListener('click', function(){window.location.href = 'requests.html'});

// Room page

 const room = document.querySelectorAll('.chat-room');

 var i = 0;

    while(i<=1){

    room[i].addEventListener('click', function (e) {

        clickedroom(e.currentTarget.id);

    });

    i++;
    }

// // Search bar animation

// const searchBar = document.querySelector('#search-bar');
// const searchBarIcons = document.querySelectorAll('.search-bar-icons');

// searchBar.addEventListener('focus', function () {

//     console.log('focused');
//     searchBarIcons[0].classList.add("focus");
//     searchBarIcons[1].classList.add("focus");

// });

// searchBar.addEventListener('blur', function () {

//     console.log('focused');
//     searchBarIcons[0].classList.remove("focus");
//     searchBarIcons[1].classList.remove("focus");

// });




