// Three ways to add this onload event handler
// 1. Add onload attribute to the <body> tag
//       <body onload="LoadFunc();">
// 2. Use window.onload in the JavaScript file
//       Window.onload = LoadFunc;
// 3. Use addEventListener in the JavaScript file
//       Window.addEventListener('load', LoadFunc);
//The first methods is used in this example, but you can use any o the three methods.
function LoadFunc() {
     let morningSales = 150;
let afternoonSales = 200;
    //<!-- Step 3 Add simple addition to calculate total -->
    let totalSales = morningSales + afternoonSales;
    //<!-- Step 4 Add console.log to display result -->
     console.log("PageTurner Daily Sales Report:");
console.log("Morning sales: $" + morningSales);
console.log("Afternoon sales: $" + afternoonSales);
console.log("Total daily sales: $" + totalSales);
}
    
    
   
    
    
    
    
    
   