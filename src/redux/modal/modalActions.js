import { createAction } from '@reduxjs/toolkit';

const modalOpen = createAction('modal/modalOpen');
const modalClose = createAction('modal/modalClose');

const modalActions = {
  modalOpen,
  modalClose,
};
export default modalActions;
