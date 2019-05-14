function handleSpinner(){
    $('.lightbox-photo').on('load', ()=> {
        $('.spinner').css('display', 'none');
        $('.lightbox-photo').css('display', 'block');
    })
}

function handleCloseLightbox(){
    $('.lightbox').on("click",() => {
        $('.lightbox').css('display', 'none')})
}

function displayLightbox(currentImage){
    $('.lightbox').empty();
    $('.lightbox').append(`
        <div class="spinner"></div>
        <img class="lightbox-photo" src=${currentImage.url} alt="Selected photo" />
    `)
    $('.lightbox').css('display', 'flex');
    handleSpinner();
    handleCloseLightbox();
}

function handleGalleryImageClick(){
    $('#picture-gallery').on("click", ".gallery-img", function(event){
        event.stopPropagation();
        let getID = this.id;
        const currentImage = STORE.imageGallery.find(img => img.id === Number(getID))
        displayLightbox(currentImage);
    });
}


$(
    handleGalleryImageClick()
);
