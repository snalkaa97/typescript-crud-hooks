import React from 'react';
import Table from './components/Table'
import FormAdd from './components/FormAdd';
import { CrudModeProvider } from './CrudProvider';
function App() {
  return (
    <>
    <CrudModeProvider>
      <div className="container jumbotron">
        <h1 className="text-center">CRUD APP Typescript</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
              <Table/>
          </div>
          <div className="col-lg-6 col-md-12">
              <FormAdd/>
          </div>
        </div>
      </div>
    </CrudModeProvider>
    </>
  );
}

export default App;
