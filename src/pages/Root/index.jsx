// import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Layout from '../../Layout';
const Root = ({ loginStatus, setLoginStatus }) => {
  const navigate = useNavigate();
  const logout = () => {
    setLoginStatus(false);
    navigate('/');
  };

  return (
    <Layout>
      <h1>메인 페이지입니다!!!</h1>
      {loginStatus ? (
        <button type='button' onClick={logout}>
          로그아웃
        </button>
      ) : (
        <Link to={'/login'}>로그인</Link>
      )}
      <ul>
        <li>
          <Link to={'/products'}>상품보기</Link>
        </li>
      </ul>
    </Layout>
  );
};
Root.propTypes = {
  loginStatus: PropTypes.bool.isRequired,
  setLoginStatus: PropTypes.func.isRequired,
};
export default Root;
