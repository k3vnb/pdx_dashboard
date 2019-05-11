function handleLightbox(){
    $('#picture-gallery').on("click", ".gallery-img", function(event){
        event.stopPropagation();
        let getID = this.id;
        const currentImage = STORE.imageGallery.find(img => img.id === Number(getID))
        console.log(currentImage) 
    });
}


$(
    handleLightbox()
);

// const heroImg = $(event.currentTarget).find("img").attr("src");