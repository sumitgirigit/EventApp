const DUMMY_EVENTS = [
    {
      id: 'e0',
      title: 'Court Marriage',
      description: 'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
      location: '67 Rishi Arabinda Sarani, Nonamath, Haridevpur, Kolkata- 700082',
      date: '2021-10-15',
      image: 'images/court_marriage.jpg',
      isFeatured: true,
    },
    {
      id: 'e1',
      title: 'Eco Park',
      description: 'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
      location: 'Rajarhat, New Town, Kolkata-700160',
      date: '2021-01-16',
      image: 'images/eco_park.jpg',
      isFeatured: true,
    },
    {
      id: 'e2',
      title: 'Lake Mall Get Together',
      description: "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
      location: 'Rashbihari Avenue, Kolkata-700034',
      date: '2019-03-03',
      image: 'images/lake_mall.jpg',
      isFeatured: true,
    },
    {
      id: 'e3',
      title: 'Mohorkunj Get Together',
      description: 'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
      location: 'Rabindra Sadan, Kolkata-700056',
      date: '2019-12-01',
      image: 'images/mohorkung.jpg',
      isFeatured: true,
    },
  ];
  
  export function getFeaturedEvents() {
    return DUMMY_EVENTS.filter((event) => event.isFeatured);
  }
  
  export function getAllEvents() {
    return DUMMY_EVENTS;
  }
  
  export function getFilteredEvents(dateFilter) {
    const { year, month } = dateFilter;
  
    let filteredEvents = DUMMY_EVENTS.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });
  
    return filteredEvents;
  }
  
  export function getEventById(id) {
    return DUMMY_EVENTS.find((event) => event.id === id);
  }