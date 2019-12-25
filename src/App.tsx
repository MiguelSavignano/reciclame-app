import React, { useState } from 'react';
import './App.css';
import Api, { IItem } from './services/Api';

const ItemCard = ({ item }: { item: IItem }): JSX.Element => (
  <div className="col s12 m6 l6">
    <div className="card horizontal">
      <div className="card-image">
        <img src="http://lorempixel.com/100/150/nature/9/" />
      </div>
      <div className="card-stacked">
        <div className="card-content">
          <p>{item.name}</p>
        </div>
        <div className="card-action">
          <a style={{ color: '#43a047' }} href="#">
            {item.group}
          </a>
        </div>
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  const wasteTypes = Api.wasteTypes();
  const initState: IItem[] = wasteTypes;
  const [filtered, setFilters] = useState(initState);

  const onchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let query = event.target.value;
    query = query.replace(/(a|á)/g, '(a|á)');
    query = query.replace(/(e|é)/g, '(e|é)');
    query = query.replace(/(i|í)/g, '(i|í)');
    query = query.replace(/(o|ó)/g, '(o|ó)');
    query = query.replace(/(u|ú)/g, '(u|ú)');

    const result = wasteTypes.filter(it =>
      new RegExp(query, 'i').test(it.name),
    );
    setFilters(result);
  };

  return (
    <div className="container">
      <div>
        <h1 style={{ color: '#43a047' }}>
          Tipos de residuos y donde depositarlos
        </h1>
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
              <label htmlFor="icon_prefix2">Donde puedo depositar:</label>
            </div>
          </div>
        </form>
      </div>

      <div className="row">
        {filtered.map(item => (
          <ItemCard key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
};

export default App;
