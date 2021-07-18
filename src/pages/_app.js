import "../../styles/styles.css";
import { Provider } from "react-redux";
import allReducer from '../reducers/index'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

const store = createStore(
  allReducer,
  applyMiddleware(thunkMiddleware)
)

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
