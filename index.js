console.log("Type Temp() for the diffrent temp converters, time() for the diffrent time converters")

function Temp() {
  console.log('Type KtoF(Kelvin value here) to convert from Kelvin to Fahrenheit. Type KtoC(Kelvin value here) to convert Kelvin to Celsius. Type CtoK(Celsius value here) to convert Celsius to Kelvin. Type CtoF(Celsius value here) to convert Celsius to Fahrenheit. Type FtoC(Fahrenheit value here) to convert Fahrenheit to Celsius. Type FtoK(Fahrenheit value here) to convert Fahrenheit to Kelvin')
}

function Time() {
  console.log("")
}

/*
Directery:
  Temputure converters: line 23
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
  millsecond conversions: line 69 
  second conversions: line 115
  minute conversions: line 160
  hour conversions: line 204
  day conversions: line 249
  week conversions: line 294
  month conversions: line 318
  year conversions: line 339
  decade conversions: line 379
  centery conversions: line 419
  millenium conversions: line 454
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

function yearTomilli (year) {
  let milli = year * 31536000000
  console.log(milli)
}

function yearToSec (year) {
  let sec = year * 31536000
  console.log(sec)
}

function yearToMin (year) {
  let min = year * 525600
  console.log(min)
}

function yearToHour (year) {
  let hour = year * 8760
  console.log(hour)
}

function yearToDay (year) {
  let day = year * 365
  console.log(day)
}

function yearToDecade (year) {
  let decade = year / 10
  console.log(decade)
}

function yearToCentery (year) {
  let centery = year / 100
  console.log(centery)
}

function yearToMillennium (year) {
  let millennium = year / 1000
  console.log(millenium)
}

function decadeToMilli (decade) {
  let milli = decade * 315360000000
  console.log(milli)
}

function decadeToSec (decade) {
  let sec = decade * 315360000
  console.log(sec)
}

function decadeToMin (decade) {
  let min = decade * 525600
  console.log(min)
}

function decadeToHour (decade) {
  let hour = decade / 87600
  console.log(hour)
}

function decadeToDay (decade) {
  let day = decade * 3650
  console.log(day)
}

function decadeToYear (decade) {
  let year = decade * 10
  console.log(year)
}

function decadeToCentery (decade) {
  let centery = decade / 10
  console.log(centery)
}

function decadeToMillennium (decade) {
  let millennium = decade/100
  console.log(millennium)
}

function centeryTomilli (centery) {
  let milli = centery * 3153600000000
  console.log(milli)
}

function centeryToSec (centery) {
  let sec = centery * 3153600000
  console.log(sec)
}

function centeryToMin (centery) {
  let min = centery * 5256000
  console.log(min)
}

function centeryToHour (centery) {
  let hour = centery * 87600
  console.log(hour)
}

function centeryToDay (centery) {
  let day = centery * 36500
  console.log(day)
}

function centeryToYear (centery) {
  let year = centery * 10
  console.log(year)
}

function centeryToMillenium (centery) {
  let millenium = centery / 10
  console.log(millenium)
}

function milleniumTomilli (millenium) {
  let milli = millenium * 31536000000000
  console.log(milli)
}

function milleniumToSec (millenium) {
  let sec = millenium * 31536000000
}

function milleniumToMin (millenium) {
  let min = millenium * 52560000
  console.log(min)
}

function milleniumToHour (millenium) {
  let hour = millenium * 8760000
  console.log(hour)
}

function milleniumToDay (millenium) {
  let day = millenium * 365000
  console.log(day)
}

function milleniumToYear (millenium) {
  let year = millenium * 1000
  console.log(year)
}

function milleniumToDecade (millenium) {
  let decade = millenium * 100
  console.log(decade)
}

function milleniumToCentery (millenium) {
  let centery = millenium * 10
  console.log(centery)
}