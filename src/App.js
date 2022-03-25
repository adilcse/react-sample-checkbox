import { useState, useEffect } from 'react';

const initialState = () => {
  const obj = {};
  [...Array(5).keys()].forEach(key => obj[key]= false);
  return obj;
}
function App() {
  const [checked, setChacked] = useState(initialState());
  const [isRed, setIsRed] = useState(true);
  const handleOnChange = (i) => {
    setChacked(old => ({...old, [i]: !old[i]}));
  }
  useEffect(() => {
    const checkedBoxes = Object.values(checked).filter(key => key).length;
    console.log(checkedBoxes)
    if(checkedBoxes === 0 || checkedBoxes === 5) {
      setIsRed(true);
    } else {
      setIsRed(false);
    }
  }, [checked]);
  return (
    <div className="App">
      <div className="container" style={{ width:100, height:100, backgroundColor: isRed ? 'red': 'yellow' }}/>
      <div className="checkboxes">
      {[...Array(5).keys()].map(i => <>
        <input
          type="checkbox"
          id="topping"
          name="topping"
          value="Paneer"
          key={i}
          checked={checked[i]}
          onChange={() =>handleOnChange(i)}
        />
        <label for="topping">Checkbox {i+1}</label>
      </>)}
      </div>
    </div>
  );
}

export default App;
