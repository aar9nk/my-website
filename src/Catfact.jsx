import { useState, useEffect } from 'react';

const fetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function App() { 
  const [value, setValue] = useState({
    count: 0,
    fact: '',
  });
  
  useEffect(() => {
    const getFact = async () => {
      const catFact = await fetchData('https://cat-fact.herokuapp.com/facts');
      setValue({
        count: 0,
        fact: catFact[0].text,
      });
    }

     getFact();
  }, []);

  return (
    <div>
      <h1>Cat facts</h1>
      <button onClick={async () => {
        const catFact = await fetchData('https://cat-fact.herokuapp.com/facts');
        setValue({
          count: value.count + 1,
          fact: catFact[value.count + 1].text
        });
      }}>
        Click
      </button>
      <p>Fact:</p>
      <p>{value.fact}</p>
      
    </div>
    
  );
}

export default App;
