const placeLink =
  'https://datos.madrid.es/portal/site/egob/menuitem.c05c1f754a33a9fbe4b2e4b284f1a5a0/?vgnextoid=38ed95bac1ba6610VgnVCM1000001d4a900aRCRD&vgnextchannel=374512b9ace9f310VgnVCM100000171f5a0aRCRD&vgnextfmt=default';

export const groups = {
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
