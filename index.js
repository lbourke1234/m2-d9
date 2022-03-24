function hoverOnAlbumCovers() {
    let albumsNode = document.querySelectorAll('img')
    console.log(albumsNode)
    for (let album of albumsNode) {
        album.addEventListener('click', navigateToPage)
    }
}




function navigateToPage(e) {
    console.log(e)
    
}


hoverOnAlbumCovers()