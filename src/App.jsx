import './App.css';
import Header from './Component/Header/Header.jsx';
import Page from './Component/Page/Page.jsx';
import Footer from './Component/Footer/Footer.jsx';
import pageStore from './Redux/Store.jsx';
import {Provider} from 'react-redux';

function App() {

  const store = pageStore;
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Page />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
