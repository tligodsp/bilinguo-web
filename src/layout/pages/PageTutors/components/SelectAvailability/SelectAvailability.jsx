import React, { useState } from 'react';
import { Badge, Button, ButtonGroup, Container, Dropdown } from 'react-bootstrap';
import InputRange from 'react-input-range';

import SelectButtonsGroup from '../../../../../components/SelectButtonsGroup/SelectButtonsGroup';

import classes from './SelectAvailability.module.scss';

function SelectAvailability() {
  const timeOfDayOptions = [
    {
      value: 'early-morning',
      component: (
        <div className={classes['time-of-day-button']}>
          <img
            src="https://cdn.verbling.com/static/svg/icons8/48282dbccf7cd484dbeb475e9da33181.icons8-partly_cloudy_day.svg"
            alt="Early Morning"
          />
          <div>Sáng</div>
        </div>
      ),
    },
    {
      value: 'morning',
      component: (
        <div className={classes['time-of-day-button']}>
          <img
            src="https://cdn.verbling.com/static/svg/icons8/470c5669aa5ba82f6963c4ae5be21381.icons8-sunrise.svg"
            alt="Morning"
          />
          <div>Trưa</div>
        </div>
      ),
    },
    {
      value: 'afternoon',
      component: (
        <div className={classes['time-of-day-button']}>
          <img
            src="https://cdn.verbling.com/static/svg/icons8/26750580be019886e410a7c7cc727d9f.icons8-sun.svg"
            alt="Afternoon"
          />
          <div>Chiều</div>
        </div>
      ),
    },
    {
      value: 'evening',
      component: (
        <div className={classes['time-of-day-button']}>
          <img
            src="https://cdn.verbling.com/static/svg/icons8/aa53bcb429c5771cc8e11186fc853d37.icons8-new_moon.svg"
            alt="Evening"
          />
          <div>Tối</div>
        </div>
      ),
    },
  ];

  const dayOfWeekOptions = [
    {
      value: 'sun',
      component: (
        <div className={classes['day-of-week-button']}>
          CN
        </div>
      ),
    },
    {
      value: 'mon',
      component: (
        <div className={classes['day-of-week-button']}>
          T2
        </div>
      ),
    },
    {
      value: 'tue',
      component: (
        <div className={classes['day-of-week-button']}>
          T3
        </div>
      ),
    },
    {
      value: 'wed',
      component: (
        <div className={classes['day-of-week-button']}>
          T4
        </div>
      ),
    },
    {
      value: 'thu',
      component: (
        <div className={classes['day-of-week-button']}>
          T5
        </div>
      ),
    },
    {
      value: 'fri',
      component: (
        <div className={classes['day-of-week-button']}>
          T6
        </div>
      ),
    },
    {
      value: 'sat',
      component: (
        <div className={classes['day-of-week-button']}>
          T7
        </div>
      ),
    },
  ]
  
  return (
    <div className={classes['select-container']}>
      <div className={classes['select-section']}>
        <div className={classes['select-section-title']}>
          Thời gian trong Ngày
        </div>
        <div className={classes['select-section-content']}>
          <SelectButtonsGroup options={timeOfDayOptions} onChange={(values) => {console.log(values)}} />
        </div>
        <div className={classes['select-section-title']} style={{ marginTop: 20 }}>
          Ngày trong Tuần
        </div>
        <div className={classes['select-section-content']}>
          <SelectButtonsGroup options={dayOfWeekOptions} onChange={(values) => {console.log(values)}} />
        </div>
      </div>
    </div>
  )
}

export default SelectAvailability;