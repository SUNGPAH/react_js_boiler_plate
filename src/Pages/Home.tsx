import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {setJwtToken} from '../reducers/user';

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const jwtToken = useSelector((state:any) => state.user.jwtToken);

  const updateJwtToken = () => {
    const makeid = (length:number) => {
      var result           = '';
      var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
         result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }
    dispatch(setJwtToken(makeid(5)));
  }

  return <div>
    <Link to="/daily">to daily!</Link>
    <div>{jwtToken}</div>
    <div onClick={(e:any) => {
      history.push("/daily");
    }}>Another way to go daily</div>
    <div onClick={(e:any) => {
      updateJwtToken();
    }}>update jwtToken</div>
  </div>
}

export default Home