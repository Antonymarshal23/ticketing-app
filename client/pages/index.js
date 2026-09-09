
import buildClient from '../api/build-client';
import TicketsPage from './tickets';

const LandingPage = ({ currentUser }) => {
  return <TicketsPage currentUser={currentUser} />;
};

LandingPage.getInitialProps = async context => {
  const client = buildClient(context);

  try {
    const { data } = await client.get('/api/users/currentuser');

    return data;
  } catch (err) {
    return {
      currentUser: null,
    };
  }
};

export default LandingPage;