/////////////////////TEST1///
// class Marker {
//   constructor(color, inkInMarker) {
//     this.color = color;
//     this.inkInMarker = inkInMarker;
//   }

//   cout(txt) {
//     if (this.inkInMarker < 0) {
//       console.log("Netu cernila");
//       return;
//     }
//     let ink = 0.5;
//     let showText = "";
//     for (let i = 0; i < txt.length; i += 1) {
//       if (this.inkInMarker <= 0) {
//         break;
//       }
//       this.inkInMarker -= ink;
//       showText += txt[i];
//     }
//     if (this.inkInMarker <= 0) {
//       console.log("Cernila zakoncilsa!");
//     }
//     if (showText) {
//       console.log(`%c${showText}`, `color: ${this.color}`);
//     }
//   }
// }
// class RefillMarker extends Marker {
//   constructor(color, inkInMarker) {
//     super(color, inkInMarker);
//   }
//   refil() {
//     this.inkInMarker = 50;
//   }
// }

// let BlackMarker = new Marker("black", 50);
// BlackMarker.cout("Step It");
// let GreenMarker = new Marker("green", 25);
// GreenMarker.cout("Academy");
// let refillMarker = new RefillMarker("blue", 50);
// refillMarker.refil();
// refillMarker.cout("Zapravlen");

////////////////////////////////
/////TEST2//////

// class ExtendedDate extends Date {
//   coutText() {
//     const months = [
//       "January",
//       "February",
//       "March",
//       "April",
//       "May",
//       "June",
//       "July",
//       "August",
//       "September",
//       "October",
//       "November",
//       "December",
//     ];
//     const day = this.getDate();
//     const month = months[this.getMonth()];
//     return `${day} ${month}`;
//   }
//   checksDate() {
//     const currentDate = new Date();
//     if (this.getTime() < currentDate.getTime()) {
//       return false;
//     } else {
//       return true;
//     }
//   }
//   checkYear() {
//     const year = this.getFullYear();
//     if ((year % 4 == 0 && year % 100 !== 0) || year % 400 === 0) {
//       return true;
//     } else {
//       false;
//     }
//   }
//   coutNextDay() {
//     const date = new Date();
//     date.setDate(this.getDate() + 1);
//     return date;
//   }
// }
// const day = new ExtendedDate();
// console.log("Seqodnya: ", day.coutText());
// console.log("<Proshedshaya ili budushaya>", day.checksDate());
// console.log("Visokosniy qod?", day.checkYear());
// const nxtDay = day.coutNextDay();

////////////////////////////////////////
/////////////TASK3////////////////
