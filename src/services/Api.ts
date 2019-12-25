export interface IItem {
  name: string
  type: string
  group: string
}

export default class Api {
  static wasteTypes() {
    return [
      {
        "name": "Arena de gato o similar",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "Bolsas biodegradables",
        "type": "CONTENEDOR ORGÁCNICA (TAPA MARRÓN)",
        "group": "MARRÓN"
      },
      {
        "name": "Briks de leche",
        "type": "CONTENEDOR ENVASES (AMARILLO)",
        "group": "AMARILLO"
      },
      {
        "name": "nata",
        "type": "CONTENEDOR ENVASES (AMARILLO)",
        "group": "AMARILLO"
      },
      {
        "name": "zumo",
        "type": "CONTENEDOR ENVASES (AMARILLO)",
        "group": "AMARILLO"
      },
      {
        "name": "batido",
        "type": "CONTENEDOR ENVASES (AMARILLO)",
        "group": "AMARILLO"
      },
      {
        "name": "vino",
        "type": "CONTENEDOR ENVASES (AMARILLO)",
        "group": "AMARILLO"
      },
      {
        "name": "caldo",
        "type": "CONTENEDOR ENVASES (AMARILLO)",
        "group": "AMARILLO"
      },
      {
        "name": "Papel: todo tipo de papel y cartón que no se encuentren manchados de grasa o pintura",
        "type": "CONTENEDOR PAPEL-CARTÓN (AZUL)",
        "group": "AZUL"
      },
      {
        "name": "Botellas de vidrio",
        "type": "CONTENEDOR VIDRIO (VERDE)",
        "group": "VERDE"
      },
      {
        "name": "de zumos",
        "type": "CONTENEDOR VIDRIO (VERDE)",
        "group": "VERDE"
      },
      {
        "name": "refrescos",
        "type": "CONTENEDOR VIDRIO (VERDE)",
        "group": "VERDE"
      },
      {
        "name": "cervezas",
        "type": "CONTENEDOR VIDRIO (VERDE)",
        "group": "VERDE"
      },
      {
        "name": "mostos",
        "type": "CONTENEDOR VIDRIO (VERDE)",
        "group": "VERDE"
      },
      {
        "name": "sidras",
        "type": "CONTENEDOR VIDRIO (VERDE)",
        "group": "VERDE"
      },
      {
        "name": "vinos",
        "type": "CONTENEDOR VIDRIO (VERDE)",
        "group": "VERDE"
      },
      {
        "name": "licores de cualquier color",
        "type": "CONTENEDOR VIDRIO (VERDE)",
        "group": "VERDE"
      },
      {
        "name": "Aceite vegetal de cocina (producción doméstica)",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "Aceite vegetal de cocina (5 Litros)",
        "type": "PUNTO LIMPIO MÓVIL",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "Medicamentos y sus envases",
        "type": "PUNTE SIGRE",
        "group": "PUNTE SIGRE"
      },
      {
        "name": "Pilas alcalinas/salinas y de botón usadas",
        "type": "MARQUESINA PARADAS AUTOBÚS",
        "group": "MARQUESINA"
      },
      {
        "name": "Jeringuillas",
        "type": "CENTRO DE SALUD",
        "group": "CENTRO DE SALUD"
      },
      {
        "name": "Animales muertos",
        "type": "SERVICIO DE RECOGIDA DE ANIMALES MUERTOS",
        "group": "ANIMALES MUERTOS"
      },
      {
        "name": "Ropa y calzado usados",
        "type": "CONTENEDOR DE RESIDUOS TEXTILES",
        "group": "TEXTILES"
      },
      {
        "name": "Aceite vegetal de cocina",
        "type": "CONTENEDOR DE RECOGIDA DE ACEITE VEGETAL USADO",
        "group": "ACEITE"
      },
      {
        "name": "Los residuos de aparatos eléctricos y electrónios (RAEE´s)",
        "type": "TIENDA ESPECIALIZADA",
        "group": "RAEES"
      },
      {
        "name": "menores de 25 cm pueden ser depositados en superficies de venta de más de 400 m2",
        "type": "TIENDA ESPECIALIZADA",
        "group": "RAEES"
      },
      {
        "name": "así como los RAEES más voluminosos en superficies de venta cuando se adquiera otro producto nuevo.",
        "type": "TIENDA ESPECIALIZADA",
        "group": "RAEES"
      },
      {
        "name": "Neumáticos al sustituir los antiguos",
        "type": "TALLERES",
        "group": "TALLERES"
      },
      {
        "name": "Gafas (de sol y de ver)",
        "type": "ÓPTICA",
        "group": "OPTICA"
      },
      {
        "name": "Frigoríficos",
        "type": "RETIRADA GRATUITA 010: RECOGIDA DE MUEBLES Y ENSERES Y ROPA USADA",
        "group": "MUEBLES"
      },
      {
        "name": "radiadores",
        "type": "RETIRADA GRATUITA 010: RECOGIDA DE MUEBLES Y ENSERES Y ROPA USADA",
        "group": "MUEBLES"
      },
      {
        "name": "lavavajillas",
        "type": "RETIRADA GRATUITA 010: RECOGIDA DE MUEBLES Y ENSERES Y ROPA USADA",
        "group": "MUEBLES"
      },
      {
        "name": "cocinas",
        "type": "RETIRADA GRATUITA 010: RECOGIDA DE MUEBLES Y ENSERES Y ROPA USADA",
        "group": "MUEBLES"
      },
      {
        "name": "lavadoras",
        "type": "RETIRADA GRATUITA 010: RECOGIDA DE MUEBLES Y ENSERES Y ROPA USADA",
        "group": "MUEBLES"
      },
      {
        "name": "etc",
        "type": "RETIRADA GRATUITA 010: RECOGIDA DE MUEBLES Y ENSERES Y ROPA USADA",
        "group": "MUEBLES"
      },
      {
        "name": "Excrementos de animales domésticos",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "Servilletas y papel manchadas de grasa",
        "type": "CONTENEDOR ORGÁCNICA (TAPA MARRÓN)",
        "group": "MARRÓN"
      },
      {
        "name": "aceite o restos de comida",
        "type": "CONTENEDOR ORGÁCNICA (TAPA MARRÓN)",
        "group": "MARRÓN"
      },
      {
        "name": "Envases de plástico para alimentación: botellas de bebidas",
        "type": "CONTENEDOR ENVASES (AMARILLO)",
        "group": "AMARILLO"
      },
      {
        "name": "aceite",
        "type": "CONTENEDOR ENVASES (AMARILLO)",
        "group": "AMARILLO"
      },
      {
        "name": "salsas",
        "type": "CONTENEDOR ENVASES (AMARILLO)",
        "group": "AMARILLO"
      },
      {
        "name": "envases de plástico de productos lácteos y sus tapas: yogures",
        "type": "CONTENEDOR ENVASES (AMARILLO)",
        "group": "AMARILLO"
      },
      {
        "name": "mantequillas... bandejas",
        "type": "CONTENEDOR ENVASES (AMARILLO)",
        "group": "AMARILLO"
      },
      {
        "name": "cajas y embalajes de \"corcho blanco\" o \"poliespán\" usado en alimentación y como protector de productos frágiles",
        "type": "CONTENEDOR ENVASES (AMARILLO)",
        "group": "AMARILLO"
      },
      {
        "name": "hueveras de plástico",
        "type": "CONTENEDOR ENVASES (AMARILLO)",
        "group": "AMARILLO"
      },
      {
        "name": "vasos y platos de plástico desechables",
        "type": "CONTENEDOR ENVASES (AMARILLO)",
        "group": "AMARILLO"
      },
      {
        "name": "tapones y tapas de plástico",
        "type": "CONTENEDOR ENVASES (AMARILLO)",
        "group": "AMARILLO"
      },
      {
        "name": "mallas de frutas y verduras",
        "type": "CONTENEDOR ENVASES (AMARILLO)",
        "group": "AMARILLO"
      },
      {
        "name": "Todo tipo de envases de cartón o papel",
        "type": "CONTENEDOR PAPEL-CARTÓN (AZUL)",
        "group": "AZUL"
      },
      {
        "name": "como cajas de zapatos",
        "type": "CONTENEDOR PAPEL-CARTÓN (AZUL)",
        "group": "AZUL"
      },
      {
        "name": "cereales",
        "type": "CONTENEDOR PAPEL-CARTÓN (AZUL)",
        "group": "AZUL"
      },
      {
        "name": "Tarros de vidrio de conservas",
        "type": "CONTENEDOR VIDRIO (VERDE)",
        "group": "VERDE"
      },
      {
        "name": "mermeladas o salsas",
        "type": "CONTENEDOR VIDRIO (VERDE)",
        "group": "VERDE"
      },
      {
        "name": "Ropa y calzado usado (producción doméstica)",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "Bolsos",
        "type": "CONTENEDOR DE RESIDUOS TEXTILES",
        "group": "TEXTILES"
      },
      {
        "name": "cinturones y complementos de vestir",
        "type": "CONTENEDOR DE RESIDUOS TEXTILES",
        "group": "TEXTILES"
      },
      {
        "name": "Muebles y enseres",
        "type": "RETIRADA GRATUITA 010: RECOGIDA DE MUEBLES Y ENSERES Y ROPA USADA",
        "group": "MUEBLES"
      },
      {
        "name": "Bombilla convencional y halógena",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "Restos de frutas y verduras",
        "type": "CONTENEDOR ORGÁCNICA (TAPA MARRÓN)",
        "group": "MARRÓN"
      },
      {
        "name": "Envases de plástico de productos de aseo y limpieza: botes de productos de aseo no aerosoles",
        "type": "CONTENEDOR ENVASES (AMARILLO)",
        "group": "AMARILLO"
      },
      {
        "name": "botes de limpieza vacíos: jabones de baño",
        "type": "CONTENEDOR ENVASES (AMARILLO)",
        "group": "AMARILLO"
      },
      {
        "name": "detergentes...",
        "type": "CONTENEDOR ENVASES (AMARILLO)",
        "group": "AMARILLO"
      },
      {
        "name": "Hojas",
        "type": "CONTENEDOR PAPEL-CARTÓN (AZUL)",
        "group": "AZUL"
      },
      {
        "name": "cuadernos",
        "type": "CONTENEDOR PAPEL-CARTÓN (AZUL)",
        "group": "AZUL"
      },
      {
        "name": "sobres (con sellos pegados inclusive)",
        "type": "CONTENEDOR PAPEL-CARTÓN (AZUL)",
        "group": "AZUL"
      },
      {
        "name": "periódicos",
        "type": "CONTENEDOR PAPEL-CARTÓN (AZUL)",
        "group": "AZUL"
      },
      {
        "name": "revistas",
        "type": "CONTENEDOR PAPEL-CARTÓN (AZUL)",
        "group": "AZUL"
      },
      {
        "name": "y demás productos de papel y cartón",
        "type": "CONTENEDOR PAPEL-CARTÓN (AZUL)",
        "group": "AZUL"
      },
      {
        "name": "Frascos de vidrio con roll-on o atomizador",
        "type": "CONTENEDOR VIDRIO (VERDE)",
        "group": "VERDE"
      },
      {
        "name": "Cápsulas de café (producción doméstica)",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "Muñecos de peluche",
        "type": "CONTENEDOR DE RESIDUOS TEXTILES",
        "group": "TEXTILES"
      },
      {
        "name": "Cerámica y porcelana",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "Frutos secos",
        "type": "CONTENEDOR ORGÁCNICA (TAPA MARRÓN)",
        "group": "MARRÓN"
      },
      {
        "name": "Envases de cosméticos de plástico (envases de maquillaje",
        "type": "CONTENEDOR ENVASES (AMARILLO)",
        "group": "AMARILLO"
      },
      {
        "name": "pincel de pintauñas",
        "type": "CONTENEDOR ENVASES (AMARILLO)",
        "group": "AMARILLO"
      },
      {
        "name": "pintalabios )",
        "type": "CONTENEDOR ENVASES (AMARILLO)",
        "group": "AMARILLO"
      },
      {
        "name": "Billetes de metro",
        "type": "CONTENEDOR PAPEL-CARTÓN (AZUL)",
        "group": "AZUL"
      },
      {
        "name": "Envases de cosméticos de vidrio (envases de maquillaje",
        "type": "CONTENEDOR VIDRIO (VERDE)",
        "group": "VERDE"
      },
      {
        "name": "pintalabios",
        "type": "CONTENEDOR VIDRIO (VERDE)",
        "group": "VERDE"
      },
      {
        "name": "etc.)",
        "type": "CONTENEDOR VIDRIO (VERDE)",
        "group": "VERDE"
      },
      {
        "name": "Radiografías (50 unidades)",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "Cristal plano de ventanas",
        "type": "RETIRADA GRATUITA 010: RECOGIDA DE MUEBLES Y ENSERES Y ROPA USADA",
        "group": "MUEBLES"
      },
      {
        "name": "cuadros o espejos",
        "type": "RETIRADA GRATUITA 010: RECOGIDA DE MUEBLES Y ENSERES Y ROPA USADA",
        "group": "MUEBLES"
      },
      {
        "name": "Guantes de látex",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "nitrilo",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "Restos de comidas",
        "type": "CONTENEDOR ORGÁCNICA (TAPA MARRÓN)",
        "group": "MARRÓN"
      },
      {
        "name": "Envases de metales: aerosoles vacíos: desodorantes",
        "type": "CONTENEDOR ENVASES (AMARILLO)",
        "group": "AMARILLO"
      },
      {
        "name": "limpiadores domésticos...",
        "type": "CONTENEDOR ENVASES (AMARILLO)",
        "group": "AMARILLO"
      },
      {
        "name": "botes de bebidas",
        "type": "CONTENEDOR ENVASES (AMARILLO)",
        "group": "AMARILLO"
      },
      {
        "name": "latas de conserva",
        "type": "CONTENEDOR ENVASES (AMARILLO)",
        "group": "AMARILLO"
      },
      {
        "name": "platos y bandejas de aluminio",
        "type": "CONTENEDOR ENVASES (AMARILLO)",
        "group": "AMARILLO"
      },
      {
        "name": "chapas y tapas de metal",
        "type": "CONTENEDOR ENVASES (AMARILLO)",
        "group": "AMARILLO"
      },
      {
        "name": "Servilletas manchadas de polvo o húmedas de agua (sin manchar)",
        "type": "CONTENEDOR PAPEL-CARTÓN (AZUL)",
        "group": "AZUL"
      },
      {
        "name": "Frascos de colonia",
        "type": "CONTENEDOR VIDRIO (VERDE)",
        "group": "VERDE"
      },
      {
        "name": "esmaltes de uñas",
        "type": "CONTENEDOR VIDRIO (VERDE)",
        "group": "VERDE"
      },
      {
        "name": "Aerosoles (10 unidades)",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "Aerosoles (5 unidades)",
        "type": "PUNTO LIMPIO MÓVIL",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "Goma",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "Restos de carnes o pescados",
        "type": "CONTENEDOR ORGÁCNICA (TAPA MARRÓN)",
        "group": "MARRÓN"
      },
      {
        "name": "Tippex",
        "type": "CONTENEDOR ENVASES (AMARILLO)",
        "group": "AMARILLO"
      },
      {
        "name": "Sobres (plástico/papel)",
        "type": "CONTENEDOR PAPEL-CARTÓN (AZUL)",
        "group": "AZUL"
      },
      {
        "name": "Recipientes velas vidrio",
        "type": "CONTENEDOR VIDRIO (VERDE)",
        "group": "VERDE"
      },
      {
        "name": "Pilas alcalinas",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "salinas y baterías usadas (producción doméstica)",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "Pañales y compresas",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "Papel y cartón sucios de aceite",
        "type": "CONTENEDOR ORGÁCNICA (TAPA MARRÓN)",
        "group": "MARRÓN"
      },
      {
        "name": "Cajas de madera",
        "type": "CONTENEDOR ENVASES (AMARILLO)",
        "group": "AMARILLO"
      },
      {
        "name": "de vino",
        "type": "CONTENEDOR ENVASES (AMARILLO)",
        "group": "AMARILLO"
      },
      {
        "name": "fresas",
        "type": "CONTENEDOR ENVASES (AMARILLO)",
        "group": "AMARILLO"
      },
      {
        "name": "puros",
        "type": "CONTENEDOR ENVASES (AMARILLO)",
        "group": "AMARILLO"
      },
      {
        "name": "estuches",
        "type": "CONTENEDOR ENVASES (AMARILLO)",
        "group": "AMARILLO"
      },
      {
        "name": "Envoltorio de pan (de papel)",
        "type": "CONTENEDOR PAPEL-CARTÓN (AZUL)",
        "group": "AZUL"
      },
      {
        "name": "Cartuchos de tinta y tóner (4 unidades)",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "Toallitas húmedas",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "hilo dental",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "Cáscaras de huevo",
        "type": "CONTENEDOR ORGÁCNICA (TAPA MARRÓN)",
        "group": "MARRÓN"
      },
      {
        "name": "de marisco y frutos secos",
        "type": "CONTENEDOR ORGÁCNICA (TAPA MARRÓN)",
        "group": "MARRÓN"
      },
      {
        "name": "Bolsas y envoltorios de plástico y aluminio: bolsas de plástico para alimentos",
        "type": "CONTENEDOR ENVASES (AMARILLO)",
        "group": "AMARILLO"
      },
      {
        "name": "bolsas y recipientes de aluminio para alimentos",
        "type": "CONTENEDOR ENVASES (AMARILLO)",
        "group": "AMARILLO"
      },
      {
        "name": "papel de aluminio",
        "type": "CONTENEDOR ENVASES (AMARILLO)",
        "group": "AMARILLO"
      },
      {
        "name": "bolsas de supermercado",
        "type": "CONTENEDOR ENVASES (AMARILLO)",
        "group": "AMARILLO"
      },
      {
        "name": "envases  al vacío",
        "type": "CONTENEDOR ENVASES (AMARILLO)",
        "group": "AMARILLO"
      },
      {
        "name": "envoltorios de plástico",
        "type": "CONTENEDOR ENVASES (AMARILLO)",
        "group": "AMARILLO"
      },
      {
        "name": "film de polietileno...",
        "type": "CONTENEDOR ENVASES (AMARILLO)",
        "group": "AMARILLO"
      },
      {
        "name": "Guías telefónicas",
        "type": "CONTENEDOR PAPEL-CARTÓN (AZUL)",
        "group": "AZUL"
      },
      {
        "name": "folletos y propaganda",
        "type": "CONTENEDOR PAPEL-CARTÓN (AZUL)",
        "group": "AZUL"
      },
      {
        "name": "Bombillas de bajo consumo y tubos fluorescentes (3 unidades)",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "Residuos de pequeñas curas como tiritas",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "esparadrapo",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "gasas",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "vendas",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "algodón",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "Posos de café",
        "type": "CONTENEDOR ORGÁCNICA (TAPA MARRÓN)",
        "group": "MARRÓN"
      },
      {
        "name": "Plástico de los envases tipo blíster: donde vienen las pilas",
        "type": "CONTENEDOR ENVASES (AMARILLO)",
        "group": "AMARILLO"
      },
      {
        "name": "las cuchillas de afeitar",
        "type": "CONTENEDOR ENVASES (AMARILLO)",
        "group": "AMARILLO"
      },
      {
        "name": "Hueveras de cartón",
        "type": "CONTENEDOR PAPEL-CARTÓN (AZUL)",
        "group": "AZUL"
      },
      {
        "name": "CD´s",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "DVD´s",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "casetes... y sus embalajes (50 unidades)",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "casetes... y sus embalajes (20 unidades)",
        "type": "PUNTO LIMPIO MÓVIL",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "Papel: servilletas",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "papel de cocina",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "folios... y cartón sucios",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "folios... y cartón sucios (de pintura o de otros líquidos que no son de uso alimentario)",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNICA",
        "group": "NARANJA"
      },
      {
        "name": "Restos de infusiones",
        "type": "CONTENEDOR ORGÁCNICA (TAPA MARRÓN)",
        "group": "MARRÓN"
      },
      {
        "name": "Papel de aluminio o film",
        "type": "CONTENEDOR ENVASES (AMARILLO)",
        "group": "AMARILLO"
      },
      {
        "name": "Tubos y canutos de cartón",
        "type": "CONTENEDOR PAPEL-CARTÓN (AZUL)",
        "group": "AZUL"
      },
      {
        "name": "Cintas de video (50 unidades)",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "Cintas de video (20 unidades)",
        "type": "PUNTO LIMPIO MÓVIL",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "Encerados",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "Tapones de corcho",
        "type": "CONTENEDOR ORGÁCNICA (TAPA MARRÓN)",
        "group": "MARRÓN"
      },
      {
        "name": "Papel de plata de los paquetes de cigarro",
        "type": "CONTENEDOR ENVASES (AMARILLO)",
        "group": "AMARILLO"
      },
      {
        "name": "Bases de cartón de los envoltorios de productos",
        "type": "CONTENEDOR PAPEL-CARTÓN (AZUL)",
        "group": "AZUL"
      },
      {
        "name": "Pequeños aparatos elécrtricos y electrónicos (RAEE´s): ebooks",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "MP3",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "MP4",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "MP5",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "Ipods",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "tablets",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "mandos de televisión",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "USB´s y teléfonos móviles",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "lectores de DVDs y CDs (producción doméstica)",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "lectores de DVDs y CDs (1 unidad)",
        "type": "PUNTO LIMPIO MÓVIL",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "Pelo",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "Cerillas",
        "type": "CONTENEDOR ORGÁCNICA (TAPA MARRÓN)",
        "group": "MARRÓN"
      },
      {
        "name": "Envases  (producción doméstica)",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "Plástico que no sea envases",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "bolsas ni envoltorios",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "como muñecos",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "maquinillas de afeitar",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "agujas de coser",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "tejer",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "de plástico",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "Serrín",
        "type": "CONTENEDOR ORGÁCNICA (TAPA MARRÓN)",
        "group": "MARRÓN"
      },
      {
        "name": "Envases contaminados (producción doméstica)",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "Envases contaminados (6 unidades)",
        "type": "PUNTO LIMPIO MÓVIL",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "Residuos de limpieza doméstica: Polvo",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "restos de barrer",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "bolsas de aspiradora",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "Pequeños restos de poda y jardinería: plantas",
        "type": "CONTENEDOR ORGÁCNICA (TAPA MARRÓN)",
        "group": "MARRÓN"
      },
      {
        "name": "hojarasca",
        "type": "CONTENEDOR ORGÁCNICA (TAPA MARRÓN)",
        "group": "MARRÓN"
      },
      {
        "name": "ramos de flores",
        "type": "CONTENEDOR ORGÁCNICA (TAPA MARRÓN)",
        "group": "MARRÓN"
      },
      {
        "name": "Baterías de automovil (2 unidades)",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "Baterías de automovil (1 unidades)",
        "type": "PUNTO LIMPIO MÓVIL",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "Adhesivos: celo",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "cintas de embalar",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "pegatinas",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "Pintura y disolventes (5 Kg)",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "Sellos adhesivos sin usar",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "Aceite mineral o sintético de motor (10 Litros)",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "Aceite mineral o sintético de motor (5 Litros)",
        "type": "PUNTO LIMPIO MÓVIL",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "Cristal: vasos",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "vajillas",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "copas u otros objetos de cristal (en pequeñas cantidades)",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "Jeringuillas y agujas hipodérmicas de origen doméstico: 50 unidades",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "Jeringuillas y agujas hipodérmicas de origen doméstico: 30 unidades",
        "type": "PUNTO LIMPIO MÓVIL",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "Pírex",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "Neumáticos de bicicleta: 3 unidades",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "Neumáticos de bicicleta: 1 unidades",
        "type": "PUNTO LIMPIO MÓVIL",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "Espejos rotos (en pequeñas cantidades)",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "Tapones de plástico de recipientes domésticos.",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "Fotografías",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "Vidrio  (producción doméstica)",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "Chicles",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "Papel y cartón (producción doméstica)",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "Tetinas de biberones",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "cuadros",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "vitrocerámicas o espejos",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "Funda de gafas",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "Frigoríficos y aires acondicionados (1 unidad)",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "Gafas de sol/ de ver y su cristal",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "Lavavajillas",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "tv",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "etc (6 unidades)",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "Botones",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "Maderas (hasta 150 Kg)",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "Espumaderas de teflón",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "Metales (producción doméstica)",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "Escoba",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "cepillo",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "plumero",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "fregona",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "Muebles",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "estanterías",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "somieres",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "colchones  y enseres (5 unidades)",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "Esponjas",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "estropajos",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "bayetas",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "Escombros de pequeñas obras domésticas (120 Kg/4 sacos pequeños)",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "Cepillos de dientes",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "cepillos del pelo",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "Restos de poda (producción doméstica)",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "Colillas",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "Termómetros (2 unidades)",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "Lentillas",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "Medicamentos y sus envases (1 Kg)",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "Plastilina",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "fimo",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "Pequeñas bombonas de gas de hasta 10 litros de volumen (tipo camping gas",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "helio...): 1 unidad",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "Bolsas de sílice (antihumedad)",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "biodegradables...",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "Porexpán  de grandes embalajes domésticos.",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "Restos de escayola",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "arcillas en pequeñas cantidades",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "Palo de escoba/fregona",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "Gelatinas hidropónicas",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "Cables  y regletas de electricidad",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "Piedras de peceras",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "Carritos: de la mochila de los niños",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "de bebés",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "Rotuladores de pintar",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "permanentes y fluorescentes",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "Recipientes de cocina que no sean metálicos y sean voluminosos",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "Pinturas de niños",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "ceras",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "Alfombras",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "moquetas y textiles",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "Lápices de madera",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "Árbol de Navidad: natural",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "Restos de enseres de madera (en pequeñas cantidades)",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "Cacharros metálicos de cocina como sartenes",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "y herramientas.",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "Reglas",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "escuadras",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "cartabón",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "semicirculo",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "Coches teledirigos y juguetes electrónicos",
        "type": "PUNTO LIMPIO FIJO",
        "group": "PUNTO LIMPIO"
      },
      {
        "name": "Recipientes de cocina de cristal",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "de madera y de plástico",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "Adornos navideños",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "espumillón",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "Pelucas",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "Cubiertos y pequeños objetos metálicos: llaves",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "cerraduras",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "Coleteros",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "pulseras de tela",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "goma",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "Pelotas: de fútbol",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "baloncesto",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "tenis",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "Palas y raquetas: de ténis",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "de pádel",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "Desperdicios de fruta y verdura",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "Residuos de carne y pescado",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "Otros residuos de comida",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "Posos de café e infusiones",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      },
      {
        "name": "Pequeños restos de jardinería: plantas",
        "type": "CONTENEDOR RESTO (TAPA NARANJA) SI NO SE REALIZA LA RECOGIDA ESPECÍFICA DE LA FRACCIÓN ORGÁNCIA",
        "group": "NARANJA"
      }
    ]
  }
}
