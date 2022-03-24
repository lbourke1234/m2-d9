window.onload = function() {
    let buttonNode = document.getElementsByClassName('btn-delete-row')
    for (btn of buttonNode) {
        btn.addEventListener('click', deleteRowOfTableWithButton)
        // console.log('hello')
    }
}



function hoverOnAlbumCovers() {
    let albumsNode = document.querySelectorAll('img')
    // console.log(albumsNode)
    for (let album of albumsNode) {
        album.addEventListener('click', navigateToPage)
    }
}




function navigateToPage(e) {
    console.log(e)
    
}


hoverOnAlbumCovers()


function deleteRowOfTableWithButton(e) {
    e.path[2].innerHTML = '';
}