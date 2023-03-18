import { Container } from 'components/Container';
import { UserList } from 'components/UserList';

function App() {
  //deploy
  return (
    <Container pt={[20, 32, 16]}>
      <UserList />
    </Container>
  );
}

export default App;
