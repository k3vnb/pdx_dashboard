const eventsList = [
    {
        linkName: `Portland Mercury Events`,
        linkURL: `https://www.portlandmercury.com/events`
    },
    {
        linkName: `Willamette Week Events`,
        linkURL: `https://www.wweek.com/calendar/cal`
    },
    {
        linkName: `the Oregonian Events`,
        linkURL: `https://www.oregonlive.com/events/`
    },
    {
        linkName: `Koin6 Events`,
        linkURL: `https://www.koin.com/community/calendar#!/`
    },
    {
        linkName: `PDX Pipeline`,
        linkURL: `https://www.pdxpipeline.com/events/`
    },
    {
        linkName: `Events12 Portland`,
        linkURL: `https://www.events12.com/portland/`
    },
    {
        linkName: `Eventbrite Portland`,
        linkURL: `https://www.eventbrite.com/d/or--portland/events/`
    },
    {
        linkName: `Travel Portland Events`,
        linkURL: `https://calendar.travelportland.com/`
    },
    {
        linkName: `Bands in Town Portland`,
        linkURL: `https://www.bandsintown.com/c/portland-or`
    }

]

function appendEvents(){
    eventsList.forEach(event => {
        $('.events-links-list').append(`
             <a class="event-link" href=${event.linkURL} target="_blank" title="Go to ${event.linkURL}">${event.linkName}</a>      
        `)
    })
}
$(
    appendEvents()
)