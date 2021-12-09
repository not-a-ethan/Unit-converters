console.log("Type Temp() for the diffrent temp converters, time() for the diffrent time converters")

function Temp() {
  console.log('Type KtoF(Kelvin value here) to convert from Kelvin to Fahrenheit. Type KtoC(Kelvin value here) to convert Kelvin to Celsius. Type CtoK(Celsius value here) to convert Celsius to Kelvin. Type CtoF(Celsius value here) to convert Celsius to Fahrenheit. Type FtoC(Fahrenheit value here) to convert Fahrenheit to Celsius. Type FtoK(Fahrenheit value here) to convert Fahrenheit to Kelvin')
}



/*
Directery:
  Temputure converter: line 15
  Time converters: line 55







*/


function FtoC(F){
  let C = 5/9 * (F - 32)
  console.log(C)
}

function CtoF(C) {
  let F = (9/5 * C) + 32
  console.log(F)
}

function FtoK(F) {
  let K = 5/9 * (F-32) + 273
  console.log(K)
}

function CtoK(C){
  let K = C + 273
  console.log(K)
}

function KtoC(K) {
  let C = K - 273
  console.log(C)
} 

function KtoF(K) {
  let F = 9/5 * (K-273) + 32
  console.log(F)
}



/*
Time directery:
  millsecond converters: line 69 
  second converters: line 115
  minute converters: line 160
  hour converters: line 204
  day converters: line 249
  week converters: line 294
  month converters: line 318
  year convertersL line 339


*/

function milliToSec(milli) {
  let seconds = milli / 1000
  console.log(seconds)
}

function milliToMin(milli) {
  let minutes = milli / 60000
  console.log(minutes)
}

function milliToHour(milli) {
  let hour = milli / 3600000
  console.log(hour)
}

function milliToDay(milli) {
  let day = milli / 86400000
  console.log(day)
}

function milliToWeek(milli) {
  let week = milli / 604800000
  console.log(week)
}

function milliToYear(milli) {
  let year = milli / 31536000000
  console.log(year)
  console.log('this does not take into accont leap years')
}

function milliToDecade(milli) {
  let decade = milli / 315360000000
  console.log(decade)
}

function milliToCentury(milli) {
  let Century = milli / 3153600000000
  console.log(Century)
}

function milliToMillennium(milli) {
  let Millennium = milli / 31536000000000
  console.log(Millennium)
}

function secToMilli(sec) {
  let milli = sec * 1000
  console.log(milli)
}

function secToMin(sec) {
  let min = sec / 60
  console.log(min)
}

function secToHour(sec) {
  let hour = sec / 3600
  console.log(hour)
}

function secToDay(sec) {
  let day = sec / 864000
  console.log(day)
}

function secToWeek(sec) {
  let week =  sec / 604800
  console.log(week)
}

function secToYear(sec) {
  let year = sec / 31536000
  console.log(year)
}

function secToDecade(sec) {
  let decade = sec / 315360000
  console.log(decade)
}

function secToCentery(sec) {
  let Centery = sec / 3153600000
  console.log(Centery)
}

function secToMillennium(sec) {
  let Millennium = sec / 31536000000
  console.log(Millennium)
}

function minToMilli(min) {
  let milli = min * 60000
  console.log(milli)
}

function minToSec(min) {
  let sec = min * 60
  console.log(sec)
}

function minToHour(min) {
  let hour = min / 60
  console.log(hour)
}

function minToDay(min) {
  let day = min / 1440
}

function minToWeek(min) {
  let week = min / 10080
  console.log(week)
}

function minToYear(min) {
  let year = min / 525600
  console.log(year)
}

function minToDecade(min) {
  let decade = min / 525600
  console.log(decade)
}

function minToCentery(min) {
  let Centery = min / 5256000
  console.log(Centery)
}

function minToMillennium(min) {
  let Millennium = min / 52560000
  console.log(Millennium)
}

function hourToMilli(hour) {
  let milli = hour * 3600000
  console.log(milli)
}

function hourToSec(hour) {
  let sec = hour * 3600
  console.log(sec)
}

function hourToMin(hour) {
  let min = hour * 60
  console.log(min)
}

function hourToDay(hour) {
  let day = hour / 24
  console.log(day)
}

function hourToWeek(hour) {
  let week = hour / 168
  console.log(week)
}

function hourToYear(hour) {
  let year = hour / 8760
  console.log(year)
}

function hourToDecade(hour) {
  let decade = hour / 87600
  console.log(decade)
}

function hourToCentery(hour) {
  let Centery = hour / 876000
  console.log(hour)
}

function hourToMillennium(hour) {
  let Millennium = hour / 8760000
  console.log(Millennium)
}

function dayToMilli(day) {
  let milli = day * 86400000
  console.log(milli)
}

function dayToSec(day) {
  let sec = day * 86400
  console.log(sec)
}

function dayToMin(day) {
  let min = day * 1440
  console.log(min)
}

function dayToHour(day) {
  let hour = day * 24
  console.log(hour)
}

function dayToWeek(day) {
  let week = day / 7
  console.log(week)
}

function dayToYear(day) {
  let year = day / 365
  console.log(year)
}

function dayToDecade(day) {
  let decade = day / 3650
  console.log(decade)
}

function dayToCentery(day) {
  let Centery = day / 36500
  console.log(Centery)
}

function dayToMillennium(day) {
  let Millennium = day / 365000
  console.log(Millennium)
}

function weekToMilli(week) {
  let milli = week * 604800000
  console.log(milli)
}

function weekToSec (week){
  let sec = week * 604800
  console.log(sec)
}

function weekToMin (week) {
  let min = week * 10080
  console.log(min)
}

function weekToHour (week) {
  let hour = week * 168
  console.log(hour)
} 

function weekToDay (week) {
  let day = week * 7
  console.log(day)
}

function monthToYear (month) {
  let year = month / 12
  console.log(year)
}

function monthToDecade (month) {
  let decade = month / 120
  console.log(decade)
}

function monthToCentery (month) {
  let centery = month / 1200
  console.log(centery)
}

function monthToMillennium (month) {
  let millennium = month / 12000
  console.log(millennium)
}

