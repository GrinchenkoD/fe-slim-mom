import React, { useState, forwardRef, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import styles from './CalendarInput.module.css';
import sprite from '../../icons/symbol-defs.svg';
import { useDispatch } from 'react-redux';
import productActions from '../../redux/products/productsActions';
import "react-datepicker/dist/react-datepicker.css";
// icon-calendar
const CalendarInput = () => {
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();
  useEffect(() => {
    const day = startDate.getDate();
    const month = startDate.getMonth() + 1;
    const year = startDate.getFullYear();
    const chosenDate = `${day > 9 ? day : `0` + day}-${
      month > 9 ? month : `0` + month
    }-${year}`;
    dispatch(productActions.setPickedDate(chosenDate));
  }, [startDate]);
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className={styles.calendarInput} onClick={onClick} ref={ref}>
      {value}
    </button>
  ));
  return (
    <div className={styles.calendarContainer}>
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        className={styles.calendarInput}
        dateFormat="dd.MM.yyyy"
        closeOnScroll={true}
        customInput={<CustomInput />}
      />
      <svg className={styles.svg}>
        <use href={sprite + '#icon-calendar'}></use>
      </svg>
    </div>
  );
};

export default CalendarInput;
