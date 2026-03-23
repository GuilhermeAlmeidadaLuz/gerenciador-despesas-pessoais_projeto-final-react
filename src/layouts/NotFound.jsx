import React from 'react';
import { Outlet } from 'react-router-dom';
import NotFound from './PrincipalLayout'

const PageNotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-code">404</h1>
        <h2 className="not-found-title">Ops! Página não encontrada</h2>
        <p className="not-found-text">
          A página que você está procurando não existe ou foi movida. 
          Que tal voltar para o seu gerenciador de despesas?
        </p>
        <Link to="/" className="not-found-button">
          Voltar para o Início
        </Link>
      </div>
    </div>
  );
};

export default NotFound;