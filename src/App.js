import './App.css';
import contacts from './components/data';
import Card from './components/Card';

function App() {
  return (
    <>
      {contacts.map((contact) => {
        return (
          <Card
            name={contact.name}
            imgURL={contact.imgURL}
            phone={contact.phone}
            eamil={contact.email}

          />
        )
      })}
    </>
  );
}

export default App;
