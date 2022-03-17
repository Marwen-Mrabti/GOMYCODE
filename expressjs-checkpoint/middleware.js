//get the day and the hour
const workingDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const date = new Date();
let day = days[date.getDay()];
let hour = date.getHours();
/* --------- test day and hour --------- */
// let hour = 18;
// let day = 'Sunday';

function middleware(req, res, next) {
  if (!workingDays.includes(day) || hour < 9 || hour > 17) {
    res.render('home', { outMain: 'closed please comeback in working hours ' });
  }
  next();
}
module.exports = middleware;
