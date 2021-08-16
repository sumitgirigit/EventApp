
import {Button, Card} from 'react-bootstrap';

function EventCard(props) {
  console.log("Event");
  const { title, image, date, location, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
  });
  const formattedAddress = location.replace(',','\n');
  const exploreLink = `/events/${id}`;


  var currentDate = new Date();
  var date2 = new Date(date);
  // To calculate the time difference of two dates
  var Difference_In_Time = date2.getTime() - currentDate.getTime();
  // To calculate the no. of days between two dates
  var Difference_In_Days = Math.floor(Difference_In_Time / (1000 * 3600 * 24));
  console.log(Difference_In_Days);

  return (
    <div>
      <Card className="justify-content-center" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            {Difference_In_Days>0 ? <p className="daysRemaining">{Difference_In_Days} Days Remaining.</p>:<p></p>}
            <Card.Text>
              {humanReadableDate}
            </Card.Text>
            <Card.Text>
              {location}
            </Card.Text>
            <Button variant="primary">Explore</Button>
          </Card.Body>
      </Card>
    </div>
  );
}

export default EventCard;
