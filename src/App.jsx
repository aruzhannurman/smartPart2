// // App.js
// import React,{ useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';

// function App() {
//   const [items, setItems] = useState([]);
//   const [inputValue, setValue] = useState('');
//   const [selectedValue, setSelectedValue] = useState(null);
//   const [information, setInformation] = useState([]);
//   const [dummy, setDummy] = useState('');

//   // handle input change event
//   const handleInputChange = value => {
//     setValue(value);
//   };

//   // handle selection
//   const handleChange = value => {
//     setSelectedValue(value);
//   }

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await axios.get('https://api.dev-smartestprep.com/api/directory/countries/?format=json&offset=100');
//       setInformation(response['data']['results']); 
//     }

//     fetchData()
//       .catch(console.error);
//   },[]);
  
//   console.log(information);

//   return (
//     <>
//       <div>
//         <select>
//           {information.map((e) => {
//             <option value="{e.id}">{e.name}</option>
//           })}
//         </select>
//       </div>
//     </>
//   );
// }

// export default App;




// import React from 'react'

// import CustomListDropDown from './components/CustomListDropDown'
// import 'bootstrap/dist/css/bootstrap.min.css'

// export default function App() {
//   return (
//     <>
//       <CustomListDropDown />
//     </>
//   )
// }

//rabotaet
import React,{ useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import myApi from './api/myApi'
import AsyncSelect from 'react-select/async';

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setValue] = useState('');
  const [selectedValue, setSelectedValue] = useState(null);

  // handle input change event
  const handleInputChange = value => {
    setValue(value);
  };

  // handle selection
  const handleChange = value => {
    setSelectedValue(value);
  }

  const fetchUsers = () => {
    return  myApi.get('/directory/countries/?format=json&offset=100').then(result => {
      const res =  result.data.results;
      return res;
    });
  }

  const fetchUsers2 = () => {
    return  myApi.get('/directory/cities/?format=json').then(result => {
      const res =  result.data.results;
      return res;
    });
  }
  


return (
  <div className="container">  
	<div className="row">
		<div className="col-md-4"> </div>
	</div>

 



    <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-4">
      <input  type='text'placeholder='Name' ></input>
      </div>
      <div className="col-md-4"></div>
    </div>

  <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-4">
        <AsyncSelect
        cacheOptions
        defaultOptions
        value={selectedValue}
        getOptionLabel={e => e.country.name}
        getOptionValue={e => e.country.id}
        loadOptions={fetchUsers2}
        onInputChange={handleInputChange}
        onChange={handleChange}
      />
      </div>
      <div className="col-md-4"></div>
    </div>
    <div className="row">
      <div className="col-md-4"></div>
      <div className="col-md-4">
        <AsyncSelect
        cacheOptions
        defaultOptions
        value={selectedValue}
        getOptionLabel={e => e.name}
        getOptionValue={e => e.id}
        loadOptions={fetchUsers}
        onInputChange={handleInputChange}
        onChange={handleChange}
      />
      </div>
      <div className="col-md-4"></div>
    </div>

    
	
  
  </div>
 );
}

export default App

