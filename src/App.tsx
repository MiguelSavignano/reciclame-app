import React, { useState } from 'react';
import './App.css';
import Api, { IItem } from './services/Api';

const App: React.FC = () => {
  const wasteTypes = Api.wasteTypes();
  const initState: IItem[] = wasteTypes;
  const [filtered, setFilters] = useState(initState);

  const onchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    const result = wasteTypes.filter(it =>
      new RegExp(query, 'i').test(it.name),
    );
    setFilters(result);
  };

  return (
    <div className="container">
      <div>
        <h1>¿Que quieres tirar?</h1>
      </div>

      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">search</i>
              <input
                id="icon_prefix2"
                className="materialize-textarea"
                type="text"
                onChange={onchange}
              />
              <label htmlFor="icon_prefix2">donde puedo tirar</label>
            </div>
          </div>
        </form>
      </div>

      <div className="row">
        {filtered.map(it => (
          <div key={it.name} className="col s12 m6 l6">
            <div className="card horizontal">
              <div className="card-image">
                <img src="http://lorempixel.com/100/150/nature/9/" />
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <p>{it.name}</p>
                </div>
                <div className="card-action">
                  <a href="#">{it.group}</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
