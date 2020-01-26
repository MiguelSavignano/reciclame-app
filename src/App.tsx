import React, { useState } from 'react';
import './App.css';
import Api, { IItem } from './services/Api';
import { groups } from './adapters/groups';

const ItemCard = ({ item }: { item: IItem }): JSX.Element => (
  <li className="collection-item avatar">
    <i className={`material-icons circle ${groups[item.group].color}`}>
      {groups[item.group].icon}
    </i>
    <span className="title"> {item.group} </span> <br />
    {item.name}
    <a
      href={groups[item.group].placeLink ? groups[item.group].placeLink : '#!'}
      target="blank"
      className="secondary-content"
    >
      <i className="material-icons">location_on</i>
    </a>
  </li>
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
        <h4 style={{ color: '#43a047' }}>
          Tipos de residuos y donde depositarlos
        </h4>
      </div>

      <div className="row">
        <div className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">search</i>
              <input
                id="icon_prefix2"
                className="materialize-textarea"
                type="text"
                onChange={onchange}
              />
              <label htmlFor="icon_prefix2">Donde puedo depositar</label>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <ul className="collection">
          {filtered.map(item => (
            <ItemCard key={item.name} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
