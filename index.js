const countdown = () => {
  const setEventDate = 'Jan 11'; //Date format = 'Month Date'
  const setEventTime = '10:00:00'; //Time format = '00:00:00'
  const setEventYear = '2022';

  const countDate = new Date(
    `${setEventDate} ${setEventYear} ${setEventTime}`
  ).getTime();

  const nowTime = new Date().getTime();
  const gap = countDate - nowTime;

  const secound = 1000;
  const minute = secound * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const eventDay = Math.floor(gap / day);
  const eventHour = Math.floor((gap % day) / hour);
  const eventMinute = Math.floor((gap % hour) / minute);
  const eventSecound = Math.floor((gap % minute) / secound);
  console.log(eventDay, eventHour, eventMinute, eventSecound);

  //Get DOM
  document.querySelector('.day span').innerText = eventDay;
  document.querySelector('.hour span').innerText = eventHour;
  document.querySelector('.minute span').innerText = eventMinute;
  document.querySelector('.secound span').innerText = eventSecound;
};

setInterval(countdown, 1000);
