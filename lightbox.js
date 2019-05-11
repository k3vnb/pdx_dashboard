function handleCloseLightbox(){
    $('.lightbox').on("click",() => {
        console.log('yerp')
        $('.lightbox').css('display', 'none')})
}

function displayLightbox(currentImage){
    $('.lightbox').empty();
    $('.lightbox').append(`
        <img class="lightbox-photo" src=${currentImage.url} alt="Selected photo" />
    `)
    $('.lightbox').css('display', 'flex');
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

// const heroImg = $(event.currentTarget).find("img").attr("src");