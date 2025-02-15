import { mapBox } from "../main.js";

const companyOffice = [56.325734, 44.004440];

const mapConfig = {
  container: "map",
  style: "mapbox://styles/mapbox/streets-v9",
  center: companyOffice,
  zoom: 15,
}

const directionsConfig = {
  accessToken: "pk.eyJ1Ijoidm95dGFzcyIsImEiOiJjbTI0cHdqZWQwZmNhMnFzZzBsY3JvZmw4In0.qsZMkUu8RMnFYBw1oCohug",
  unit: "metric", 
  profile: "mapbox/driving",
  placeholderOrigin: "Местоположение",
  placeholderDestination: "улица Красногорская 34 Нижний Новгород",
  language: "en"
}

const markerConfig = {
  color: "hsl(46, 79.10%, 48.80%)",
  draggable: false
}

const renderMap = () => {
  mapboxgl.accessToken = "pk.eyJ1Ijoidm95dGFzcyIsImEiOiJjbTI0cHdqZWQwZmNhMnFzZzBsY3JvZmw4In0.qsZMkUu8RMnFYBw1oCohug";

  if (mapBox) {
    mapBox.innerHTML = "";

    const navControls = new mapboxgl.NavigationControl();

    const map = new mapboxgl.Map(mapConfig);

    // Add zoom and rotation controls to the map:
    map.addControl(navControls, 'top-right');

    // Add a marker to the map according to the coords set by `companyOffice`:
    const marker = new mapboxgl.Marker(markerConfig)
      .setLngLat(companyOffice)
      .addTo(map);

    // Add directions to the map:
    const directions = new MapboxDirections(directionsConfig);

    // Set the default destination to the company office's location:
    directions.setDestination(companyOffice);

    // Add the directions to the map:
    map.addControl(directions, "top-left");
  }
}

export default renderMap;