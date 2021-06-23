import { createReducer } from '@reduxjs/toolkit';

import modalActions from './modalActions';

const isModalOpen = createReducer(false, {
  [modalActions.modalOpen]: () => true,
  [modalActions.modalClose]: () => false,
});

export default isModalOpen;
