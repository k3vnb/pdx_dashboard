function slideSection(sectionID) {
    console.log(sectionID)
    $( `.${sectionID}-section-content` ).slideToggle( "slow");
};
    
function onHamburgersClick(){
    $('.events-hamburger').click(function(){
        slideSection('events');
    })
    $('.news-hamburger').click(function(){
        slideSection('news');
    })
    $('.pictures-hamburger').click(function(){
        slideSection('pictures');
    })
}


$(
    onHamburgersClick()
);