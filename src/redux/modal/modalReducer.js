import { createReducer } from '@reduxjs/toolkit';

import modalActions from './modalActions';

const isModalOpen = createReducer(false, {
  [modalActions.modalOpen]: (_, __) => true,
  [modalActions.modalClose]: (_, __) => false,
});

export default isModalOpen;
