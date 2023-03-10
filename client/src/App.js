import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
import DeleteModal from './components/UI/DeleteModal';

//.BUG
//.HACK
//.FIXME
//.XXX
//.[ ]
//.[x]
//.TODO

/**
 * App to track expenses
 * @component
 * @kind React Component
 * 
 */
const App = () => {
  // Hooks  
  const showDeleteModal = useSelector(
    (state) => state.expenses.showDeleteModal
  );

  return (
    <Fragment>
      {showDeleteModal && <DeleteModal />}
      <NewExpense />
      <Expenses />
    </Fragment>
  );
};


export default App;
