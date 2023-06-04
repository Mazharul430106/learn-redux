import { useReducer } from 'react';
import './App.css';

function App() {

  const initialState = {
    fastName: '',
    lastName: '',
    email: '',
    textarea: '',
    gender: '',
    education: '',
    term: false,
    quantity: 0

  };

  const reducer = (state, action) => {
    // console.log(action);

    switch (action.type) {
      case "INPUT":
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        }

      case "INCREMENT":
        return {
          ...state,
          quantity: state.quantity + 1,
        }

      case "DECREMENT":
        return {
          ...state,
          quantity: state.quantity - 1,
        }
      case "TOGGLE":
        return {
          ...state,
          term: !state.term
        }

      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  }

  
  return (
    <div className="hero ">
      <div className="hero-content mt-5 w-full lg:max-w-[1000px] flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">

          <div className="card-body ">
            <h1 className='text-center text-4xl capitalize font-semibold'>login now</h1>
            <form onSubmit={handleSubmit}>

              <div className='grid lg:grid-cols-2 grid-cols-1 gap-3'>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Fast Name</span>
                  </label>
                  <input type="text" name='fastName' placeholder="Fast Name" className="input input-bordered" onBlur={(e) => {
                    dispatch({
                      type: 'INPUT',
                      payload: { name: e.target.name, value: e.target.value }
                    })
                  }} />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Last Name</span>
                  </label>
                  <input type="text" name='lastName' placeholder="Last Name" className="input input-bordered" onBlur={(e) => {
                    dispatch({
                      type: 'INPUT',
                      payload: { name: e.target.name, value: e.target.value }
                    })
                  }} />
                </div>
              </div>

              <div className='grid lg:grid-cols-2 grid-cols-1 gap-3'>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" name='email' placeholder="Email" className="input input-bordered" onBlur={(e) => {
                    dispatch({
                      type: 'INPUT',
                      payload: { name: e.target.name, value: e.target.value }
                    })
                  }} />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Gender</span>
                  </label>
                  <div className='flex items-center mt-3'>
                    <p className='flex items-center gap-2'>
                      <input type="radio" name="gender" className="radio" value='mail' onClick={(e) => {
                        dispatch({
                          type: 'INPUT',
                          payload: { name: e.target.name, value: e.target.value }
                        })
                      }} />
                      <span>Mail</span>
                    </p>
                    <p className='flex items-center gap-2'>
                      <input type="radio" name="gender" className="radio" value='femail' onClick={(e) => {
                        dispatch({
                          type: 'INPUT',
                          payload: { name: e.target.name, value: e.target.value }
                        })
                      }} />
                      <span>Femail</span>
                    </p>
                    <p className='flex items-center gap-2'>
                      <input type="radio" name="gender" className="radio" value='ohter' onClick={(e) => {
                        dispatch({
                          type: 'INPUT',
                          payload: { name: e.target.name, value: e.target.value }
                        })
                      }} />
                      <span>Other</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className='grid lg:grid-cols-2 grid-cols-1 gap-3'>

                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text-alt">Education</span>
                  </label>
                  <select className="select select-bordered" name='education' onChange={(e) => {
                    dispatch({
                      type: 'INPUT',
                      payload: { name: e.target.name, value: e.target.value }
                    })
                  }}>
                    <option value='Ssc'>SSC</option>
                    <option value='Hsc'>HSC</option>
                    <option value='Bsc'>BSC</option>
                    <option value='Msc'>MSC</option>
                  </select>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Number of Pices</span>
                  </label>
                  <div className='flex items-center justify-between'>
                    <button onClick={() => { dispatch({ type: 'DECREMENT' }) }} className='btn btn-primary text-3xl' >-</button>

                    <h1 className='text-center' name='quantity'>{state.quantity}</h1>

                    <button onClick={() => { dispatch({ type: 'INCREMENT' }) }} className='btn btn-primary text-3xl' >+</button>
                  </div>
                </div>

              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea name='textarea' className="textarea textarea-bordered" rows='5' placeholder="Bio" onBlur={(e) => {
                  dispatch({
                    type: 'INPUT',
                    payload: { name: e.target.name, value: e.target.value }
                  })
                }} />
              </div>

              <div className='grid lg:grid-cols-2 grid-cols-1 gap-3 mt-5'>

                <div className='flex items-center gap-3'>
                  <input name='term' type="checkbox" className="checkbox" onClick={() => { dispatch({ type: 'TOGGLE' }) }} />
                  <span>I agree to terms and conditions </span>
                </div>

                <div className="form-control">
                  <button className="btn btn-primary" disabled={!state.term}>Submit</button>
                </div>
              </div>

            </form>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
