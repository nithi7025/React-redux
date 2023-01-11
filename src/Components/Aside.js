import randomColor from "randomcolor";
import { useDispatch, useSelector } from "react-redux";
import { chage_color } from "../Redux/color/colorSlice";

 function Aside() {
  const color = useSelector(state => state.color.value)
  const dispatch= useDispatch()
  const changeColor= ()=>{
dispatch(chage_color({
  color:randomColor()
}))
  }
  return (
    <div className="aside">
      <h2 style={{color}}> Aside</h2>
      <button className="button" onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default Aside;
