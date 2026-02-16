import './App.css';
import React from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux'

const COUNTRIES = [
  {
    country: "Italy",
    id: 0, 
    visited : "Yes", 
    year : "2012"
  },
  {
    country: "Japan",
    id: 1, 
    visited : "No", 
    year : "2023"
  }, 
  {
    country: "Chile",
    id: 2, 
    visited : "No", 
    year : "2025"
  },
]

class Main extends React.Component {
  render() {
    return (
      <div className='p-3'>
        <h1 className='text-danger'>My Travel Plans</h1>
        <hr />
        <AddCountry addCountry={this.props.addCountry} />
        <hr />
        <div className='mx-2'>
          <th className='w-25 text-center'>Country</th>
          <th className='w-25 text-center'>Visited</th>
          <th className='w-25 text-center'>Year</th>
          <CountriesList countries={this.props.countries} />
        </div>
      </div> 
    );
  }
}

const CountriesList = (props) => {
  return (
    <ul className='list-group'>
      {props.countries.map((country) => (
        <li key={country.id} className='list-group-item'>
          <Country country={country} />
        </li>
      ))}
    </ul>
  )
}

class AddCountry extends React.Component {
  constructor(props) {
    super(props); 

    this.inputCountry = null;
    this.inputVisited = null;
    this.inputYear = null;

    this.setTextInputRef = (inputElement) => {
      if (!inputElement) return;
      switch (inputElement.id) {
        case "country":
          this.inputCountry = inputElement;
          break;
        case "visited":
          this.inputVisited = inputElement;
          break;
        case "year":
          this.inputYear = inputElement;
          break;
        default:
          break;
      }
    }
  };
  
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addCountry(
      this.inputCountry.value,
      this.inputVisited.value,
      this.inputYear.value
    );
    e.target.reset();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="mx-3">
        <label htmlFor="country">Country:</label>
        <input 
          type="text" 
          id="country" 
          ref={this.setTextInputRef} 
          className='d-block mb-2'
        />
        <label htmlFor="visited">Visited:</label>
        <input 
          type="text" 
          id="visited" 
          ref={this.setTextInputRef} 
          className='d-block mb-2'
        />
        <label htmlFor="year">Year:</label>
        <input 
          type="text" 
          id="year" 
          ref={this.setTextInputRef} 
          className='d-block mb-2'
        />
        <button type="submit">Add Country</button>
      </form>
    )
  }
};


const Country = (props) => {
  return (
    <tr className='country'>
      <td className='w-25 px-2 text-center'>{props.country.country}</td>
      <td className='w-25 px-3 text-center'>{props.country.visited}</td>
      <td className='w-25 px-3 text-center'>{props.country.year}</td>
    </tr>
  );
}

const ADD_COUNTRY = "ADD_COUNTRY";

const addCountry = (country, visited, year) => {
  return {
    type: ADD_COUNTRY,
    payload: {
      country: country,
      visited: visited,
      year: year
    }
  }
}

const Reducer = (state = COUNTRIES, action) => {
  switch (action.type) {
    case ADD_COUNTRY:
      let countrry = action.payload; 
      countrry.id = state.length;
      return state.concat(countrry);
    default:
      return state;
  }
};

const store = createStore(Reducer, COUNTRIES); 

const mapStateToProps = (state) => {
  return {
    countries: state
  }; 
}; 

const mapDispatchToProps = (dispatch) => {
  return {
    addCountry: (country, visited, year) => 
      dispatch(addCountry(country, visited, year))
  };
}

const AppExport = connect(mapStateToProps, mapDispatchToProps)(Main);

function App() {
  return (
    <Provider store={store}>
      <AppExport />
    </Provider>
  );
}

export default App;
