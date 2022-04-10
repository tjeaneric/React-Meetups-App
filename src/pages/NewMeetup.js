import { useNavigate } from 'react-router-dom';

import NewMeetupForm from '../components/meetups/NewMeetupForm';
import Card from '../components/ui/Card';

function NewMeetupPage() {
  const navigate = useNavigate();
  const addMeetupHandler = (meetupData) => {
    fetch('https://meetups-e28c6-default-rtdb.firebaseio.com/meetups.json', {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: { 'content-type': 'application/json' },
    }).then(() => {
      navigate('/', { replace: true });
    });
  };
  return (
    <section>
      <h1>Add New Meetup</h1>
      <Card>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
      </Card>
    </section>
  );
}

export default NewMeetupPage;
