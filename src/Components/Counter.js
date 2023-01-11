import { useDispatch, useSelector } from "react-redux";
import { decrease_count, increase_count } from "../Redux/count/countSlice";

function Counter() {
  const count = useSelector(state=> state.count.value)
  const color = useSelector(state=> state.color.value)
  const dispatch = useDispatch()
  const increase =()=>{
    dispatch(increase_count())
  }
  const decrease =()=>{
    dispatch(decrease_count())
  }
  return (
    <div className="counter">
      <h2 style={{color}} >Counter</h2>
      <h3 style={{color}} >The count is -{count}</h3>
      <button className="button"  onClick={increase}>Increase</button>
      <button className="button"   onClick={decrease}>Decrease</button>
    </div>
  );
}

export default Counter;
