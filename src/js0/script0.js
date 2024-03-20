  var months = new Array(13);
  months[1]="January"; months[2]="February";
  months[3]="March"; months[4]="April";
  months[5]="May"; months[6]="June";
  months[7]="July"; months[8]="August";
  months[9]="September"; months[10]="October";
  months[11]="November"; months[12]="December";
  
  var time = new Date();
  var thismonth = months[time.getMonth() + 1];
  var date = time.getDate();
  var thisyear = time.getYear();
  var day = time.getDay() + 1;

  if (thisyear < 2000)
      thisyear = thisyear + 1900;
  if (day == 1) DayofWeek = "Sunday";
  if (day == 2) DayofWeek = "Monday";
  if (day == 3) DayofWeek = "Tuesday";
  if (day == 4) DayofWeek = "Wednesday";
  if (day == 5) DayofWeek = "Thursday";
  if (day == 6) DayofWeek = "Friday";
  if (day == 7) DayofWeek = "Saturday";