import { Avatar } from './components/Avatar'
import { Filter } from './components/Filter'
import { Header } from './components/Header'
import { RepositorysList } from './components/RepositorysList';

function App() {
  return (
    <div className="App">
      <Header>
        <Avatar />
        <Filter />
      </Header>
      <RepositorysList />
    </div>
  );
}

export default App;
