// import logo from './logo.svg';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import './App.css';
import Main from './pages/Main';
import dot from './assets/img/logo.png'

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <div><img src={dot} className="header-clemdot" alt="a round round circle" />
      <h1> Clementine </h1>
      </div>
      < Main /> 
    </>
  );
}

export default App;
