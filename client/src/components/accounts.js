import {useState, useEffect} from 'react';



const Accounts = () => {

    const [accs, setAccs] = useState([]);
    useEffect(() => {
      console.log('fetching!!!!!!!!');
      fetch('http://172.17.158.213:5001/api/members')
      .then(res => res.json())
      .then(blah => {
          console.log('fetched', blah)
          setAccs(blah);
      });

    }, []);
        


  return (
    <>
      {
        accs.map((acc) => (
          <h3 key={acc.id}>User ID: {acc.id} User: {acc.name} Email: {acc.email}</h3>
        ))
      }

    </>
  )
};

export default Accounts;
