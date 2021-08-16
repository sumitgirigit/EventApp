
import EventCard from './components/EventCard';
import { getFeaturedEvents  } from "./DummyData"
import './App.css';

import {Container, Row, Col} from 'react-bootstrap';

function App() {
  const featuredEvents = getFeaturedEvents();
  console.log(featuredEvents);
  
  return (
    <div>
      <h1> Event Details</h1>
      <Container>
        <Row>
            {featuredEvents.map((event) => (
              <Col xs={12} md={4}>
                <EventCard
                  key={event.id}
                  id={event.id}
                  title={event.title}
                  location={event.location}
                  date={event.date}
                  image={event.image}
                />
              </Col>
            ))}
          
        </Row>
      </Container>
      
    </div>
  );
}

export default App;
