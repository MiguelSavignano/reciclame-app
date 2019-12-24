import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Api from './services/Api';
import { filter } from 'minimatch';

const App: React.FC = () => {
  const wasteTypes = Api.wasteTypes();
  const initState: any = [];
  const [filtered, setFilters] = useState(initState);

  const onchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    const result = wasteTypes.filter(it =>
      new RegExp(query, 'i').test(it.name),
    );
    setFilters(result);
  };

  return (
    <div className="App">
      <div>
        <label htmlFor="">¿Que quieres tirar/reciclar?</label>
        <input type="text" onChange={onchange} />
      </div>
      <br />
      <br />
      <br />

      <table>
        <tr>
          <th>Tipo de contenedor</th>
          <th>elemento</th>
        </tr>
        {filtered.map((it: any) => (
          <tr>
            <td>{it.group}</td>
            <td>{it.name}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default App;
