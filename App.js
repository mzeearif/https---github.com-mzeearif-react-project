
import Category from './pages/Category';
import categories from './Assests/data';
import './App.scss';
import { AppProvider } from './AppContext';
import Summary from './component/Summary';

const App = () => {

  return (
    <AppProvider categories={categories}>
      <>
      <div className='App'>
        {categories.map((category) => (
          <div className='main_logo {}' key={category.id}>
            <Category category={category} categoryName={category.name}  />
          </div>
        ))}
      </div>
        <Summary categories={categories}/>
      </>
    </AppProvider>
  );
};

export default App;
