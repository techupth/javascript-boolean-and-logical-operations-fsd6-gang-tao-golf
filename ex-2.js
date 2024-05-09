// Exercise #2: Promotion Conditions

// Start coding here

// John
let lastMonthPaidMoreThan4000 = true;
let isWeekday = true;
let hasBoughtProductFromITCategory = false;
let hasAttendedDiscountEvent = true;
let isPlatinum = true;

let hasPromotion =
  (lastMonthPaidMoreThan4000 &&
    isWeekday &&
    hasBoughtProductFromITCategory &&
    hasAttendedDiscountEvent) ||
  isPlatinum;

console.log(hasPromotion);

// console.log(
//   (lastMonthPaidMoreThan4000 &&
//     isWeekday &&
//     hasBoughtProductFromITCategory &&
//     hasAttendedDiscountEvent) ||
//     isPlatinum
// );
