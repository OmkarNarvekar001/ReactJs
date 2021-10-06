import React,{useState,useEffect} from 'react';
import './App.css';

function App(){


  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [coordsList,setCoordsList]=useState({array:[]})

    useEffect(() => {
      const setMouse = (event) => setCoords({ x: event.clientX, y: event.clientY });
      window.addEventListener("mousemove", setMouse);

      return () => {
        window.removeEventListener("mousemove", setMouse);
      };
    }, [coords]);

    useEffect(() => {
      const setMouse = (event) => setCoordsList({ array: [...coordsList.array, { x: event.clientX, y: event.clientY }] });
      window.addEventListener("click", setMouse);

      return () => {
        window.removeEventListener("click", setMouse);
      };
    }, [coordsList]);


  return(
    <div className="full">
      X coordinate-{coords.x}
      <br/>
      Y coordinate-{coords.y}
      <br/>
      <br />
      <ul>
      {coordsList.array.map((coord) => (
        <div>
          <li>
          <p>Captured X coordinate:{coord.x}&nbsp;// Captured Y coordinate:{coord.y}</p>
          </li>
        </div>
      ))}
      </ul>
    </div>
  );
}
export default App;