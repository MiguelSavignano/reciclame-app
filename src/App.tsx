import React, { useState } from 'react';
import './App.css';
import Api, { IItem } from './services/Api';

const placeLink =
  'https://datos.madrid.es/portal/site/egob/menuitem.c05c1f754a33a9fbe4b2e4b284f1a5a0/?vgnextoid=38ed95bac1ba6610VgnVCM1000001d4a900aRCRD&vgnextchannel=374512b9ace9f310VgnVCM100000171f5a0aRCRD&vgnextfmt=default';

const groups = {
  NARANJA: { color: 'orange', icon: 'delete', placeLink },
  MARRÓN: { color: 'brown', icon: 'delete', placeLink },
  AMARILLO: { color: 'yellow', icon: 'delete', placeLink },
  AZUL: { color: 'blue', icon: 'delete', placeLink },
  VERDE: { color: 'green', icon: 'delete', placeLink },
  'PUNTO LIMPIO': {
    color: 'grey darken-1',
    icon: 'place',
    placeLink:
      'https://datos.madrid.es/egob/new/detalle/auxiliar/mapa.jsp?geoUrl=/egob/catalogo/200284-0-puntos-limpios-fijos.geo',
  },
  'PUNTE SIGRE': { color: 'orange', icon: 'local_hospital', placeLink },
  MARQUESINA: {
    color: 'lime darken-2',
    icon: 'battery_charging_full',
    placeLink,
  },
  'CENTRO DE SALUD': { color: 'blue', icon: 'local_hospital', placeLink },
  'ANIMALES MUERTOS': { color: 'orange', icon: 'delete', placeLink },
  TEXTILES: {
    color: 'orange',
    icon: 'delete',
    placeLink:
      'https://datos.madrid.es/egob/new/detalle/auxiliar/mapa.jsp?geoUrl=/egob/catalogo/204410-2-contenedores-ropa.geo',
  },
  ACEITE: { color: 'orange', icon: 'delete', placeLink },
  RAEES: { color: 'purple darken-2', icon: 'important_devices', placeLink },
  TALLERES: { color: 'orange', icon: 'delete', placeLink },
  OPTICA: { color: 'orange', icon: 'delete', placeLink },
  MUEBLES: { color: 'orange', icon: 'delete', placeLink },
};

const ItemCard = ({ item }: { item: IItem }): JSX.Element => (
  <li className="collection-item avatar">
    <i className={`material-icons circle ${groups[item.group].color}`}>
      {groups[item.group].icon}
    </i>
    <span className="title"> {item.group} </span> <br />
    {item.name}
    <a
      href={groups[item.group].placeLink ? groups[item.group].placeLink : '#!'}
      target="_blank"
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
