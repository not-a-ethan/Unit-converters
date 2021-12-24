console.log("Type Temp() for the diffrent temp converters, Time() for the diffrent time converters")

function Temp() {
  console.log('Type KtoF(Kelvin value here) to convert from Kelvin to Fahrenheit. Type KtoC(Kelvin value here) to convert Kelvin to Celsius. Type CtoK(Celsius value here) to convert Celsius to Kelvin. Type CtoF(Celsius value here) to convert Celsius to Fahrenheit. Type FtoC(Fahrenheit value here) to convert Fahrenheit to Celsius. Type FtoK(Fahrenheit value here) to convert Fahrenheit to Kelvin')
}

function Time() {
  console.log("Type ___To___(first value here) to convert it. The values are: Milli, Sec, Hour, Day, Week, Year, Decade, Centery, Millenium For example: MinToHour(120) would output 2")
}

/*
Directery:
  Temputure converters: line 25
  Time converters: line 56







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
  millsecond conversions: line 71
  second conversions: line 117
  minute conversions: line 162
  hour conversions: line 206
  day conversions: line 251
  week conversions: line 296
  month conversions: line 321
  year conversions: line 341
  decade conversions: line 381
  centery conversions: line 421
  millenium conversions: line 456
*/

function MilliToSec(milli) {
  let seconds = milli / 1000
  console.log(seconds)
}

function MilliToMin(milli) {
  let minutes = milli / 60000
  console.log(minutes)
}

function MilliToHour(milli) {
  let hour = milli / 3600000
  console.log(hour)
}

function MilliToDay(milli) {
  let day = milli / 86400000
  console.log(day)
}

function MilliToWeek(milli) {
  let week = milli / 604800000
  console.log(week)
}

function MilliToYear(milli) {
  let year = milli / 31536000000
  console.log(year)
  console.log('this does not take into accont leap years')
}

function MilliToDecade(milli) {
  let decade = milli / 315360000000
  console.log(decade)
}

function MilliToCentury(milli) {
  let Century = milli / 3153600000000
  console.log(Century)
}

function MilliToMillennium(milli) {
  let Millennium = milli / 31536000000000
  console.log(Millennium)
}

function SecToMilli(sec) {
  let milli = sec * 1000
  console.log(milli)
}

function SecToMin(sec) {
  let min = sec / 60
  console.log(min)
}

function SecToHour(sec) {
  let hour = sec / 3600
  console.log(hour)
}

function SecToDay(sec) {
  let day = sec / 864000
  console.log(day)
}

function SecToWeek(sec) {
  let week =  sec / 604800
  console.log(week)
}

function SecToYear(sec) {
  let year = sec / 31536000
  console.log(year)
}

function SecToDecade(sec) {
  let decade = sec / 315360000
  console.log(decade)
}

function SecToCentery(sec) {
  let Centery = sec / 3153600000
  console.log(Centery)
}

function SecToMillennium(sec) {
  let Millennium = sec / 31536000000
  console.log(Millennium)
}

function MinToMilli(min) {
  let milli = min * 60000
  console.log(milli)
}

function MinToSec(min) {
  let sec = min * 60
  console.log(sec)
}

function MinToHour(min) {
  let hour = min / 60
  console.log(hour)
}

function MinToDay(min) {
  let day = min / 1440
}

function MinToWeek(min) {
  let week = min / 10080
  console.log(week)
}

function MinToYear(min) {
  let year = min / 525600
  console.log(year)
}

function MinToDecade(min) {
  let decade = min / 525600
  console.log(decade)
}

function MinToCentery(min) {
  let Centery = min / 5256000
  console.log(Centery)
}

function MinToMillennium(min) {
  let Millennium = min / 52560000
  console.log(Millennium)
}

function HourToMilli(hour) {
  let milli = hour * 3600000
  console.log(milli)
}

function HourToSec(hour) {
  let sec = hour * 3600
  console.log(sec)
}

function HourToMin(hour) {
  let min = hour * 60
  console.log(min)
}

function HourToDay(hour) {
  let day = hour / 24
  console.log(day)
}

function HourToWeek(hour) {
  let week = hour / 168
  console.log(week)
}

function HourToYear(hour) {
  let year = hour / 8760
  console.log(year)
}

function HourToDecade(hour) {
  let decade = hour / 87600
  console.log(decade)
}

function HourToCentery(hour) {
  let Centery = hour / 876000
  console.log(hour)
}

function HourToMillennium(hour) {
  let Millennium = hour / 8760000
  console.log(Millennium)
}

function DayToMilli(day) {
  let milli = day * 86400000
  console.log(milli)
}

function DayToSec(day) {
  let sec = day * 86400
  console.log(sec)
}

function DayToMin(day) {
  let min = day * 1440
  console.log(min)
}

function DayToHour(day) {
  let hour = day * 24
  console.log(hour)
}

function DayToWeek(day) {
  let week = day / 7
  console.log(week)
}

function DayToYear(day) {
  let year = day / 365
  console.log(year)
}

function DayToDecade(day) {
  let decade = day / 3650
  console.log(decade)
}

function DayToCentery(day) {
  let Centery = day / 36500
  console.log(Centery)
}

function DayToMillennium(day) {
  let Millennium = day / 365000
  console.log(Millennium)
}

function WeekToMilli(week) {
  let milli = week * 604800000
  console.log(milli)
}

function WeekToSec (week){
  let sec = week * 604800
  console.log(sec)
}

function WeekToMin (week) {
  let min = week * 10080
  console.log(min)
}

function WeekToHour (week) {
  let hour = week * 168
  console.log(hour)
} 

function WeekToDay (week) {
  let day = week * 7
  console.log(day)
}

function MonthToYear (month) {
  let year = month / 12
  console.log(year)
}

function MonthToDecade (month) {
  let decade = month / 120
  console.log(decade)
}

function MonthToCentery (month) {
  let centery = month / 1200
  console.log(centery)
}

function MonthToMillennium (month) {
  let millennium = month / 12000
  console.log(millennium)
}

function YearTomilli (year) {
  let milli = year * 31536000000
  console.log(milli)
}

function YearToSec (year) {
  let sec = year * 31536000
  console.log(sec)
}

function YearToMin (year) {
  let min = year * 525600
  console.log(min)
}

function YearToHour (year) {
  let hour = year * 8760
  console.log(hour)
}

function YearToDay (year) {
  let day = year * 365
  console.log(day)
}

function YearToDecade (year) {
  let decade = year / 10
  console.log(decade)
}

function YearToCentery (year) {
  let centery = year / 100
  console.log(centery)
}

function YearToMillennium (year) {
  let millennium = year / 1000
  console.log(millenium)
}

function DecadeToMilli (decade) {
  let milli = decade * 315360000000
  console.log(milli)
}

function DecadeToSec (decade) {
  let sec = decade * 315360000
  console.log(sec)
}

function DecadeToMin (decade) {
  let min = decade * 525600
  console.log(min)
}

function DecadeToHour (decade) {
  let hour = decade / 87600
  console.log(hour)
}

function DecadeToDay (decade) {
  let day = decade * 3650
  console.log(day)
}

function DecadeToYear (decade) {
  let year = decade * 10
  console.log(year)
}

function DecadeToCentery (decade) {
  let centery = decade / 10
  console.log(centery)
}

function DecadeToMillennium (decade) {
  let millennium = decade/100
  console.log(millennium)
}

function CenteryTomilli (centery) {
  let milli = centery * 3153600000000
  console.log(milli)
}

function CenteryToSec (centery) {
  let sec = centery * 3153600000
  console.log(sec)
}

function CenteryToMin (centery) {
  let min = centery * 5256000
  console.log(min)
}

function CenteryToHour (centery) {
  let hour = centery * 87600
  console.log(hour)
}

function CenteryToDay (centery) {
  let day = centery * 36500
  console.log(day)
}

function CenteryToYear (centery) {
  let year = centery * 10
  console.log(year)
}

function CenteryToMillenium (centery) {
  let millenium = centery / 10
  console.log(millenium)
}

function MilleniumTomilli (millenium) {
  let milli = millenium * 31536000000000
  console.log(milli)
}

function MilleniumToSec (millenium) {
  let sec = millenium * 31536000000
  console.log(sec)
}

function MilleniumToMin (millenium) {
  let min = millenium * 52560000
  console.log(min)
}

function MilleniumToHour (millenium) {
  let hour = millenium * 8760000
  console.log(hour)
}

function MilleniumToDay (millenium) {
  let day = millenium * 365000
  console.log(day)
}

function MilleniumToYear (millenium) {
  let year = millenium * 1000
  console.log(year)
}

function MilleniumToDecade (millenium) {
  let decade = millenium * 100
  console.log(decade)
}

function MilleniumToCentery (millenium) {
  let centery = millenium * 10
  console.log(centery)
}