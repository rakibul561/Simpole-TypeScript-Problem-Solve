     /* ---------------------------------Problem number is 2  ---------------------------------------------------->*/

/* function formatString(input: string, toUpper?: boolean): string */

function formatString(input: string, toUpper: boolean = true): string {
  if (toUpper) {
    return input.toUpperCase();
  } else {
    return input.toLowerCase();
  }
}
console.log(formatString("LOVE BANGLADESH"));   // "LOVE BANGLADESH"
console.log(formatString("Hello", true));   // "HELLO"
console.log(formatString("Hello", false));  // "hello"  


     /* ---------------------------------Problem number is 2  ---------------------------------------------------->*/
     


     const books = [
        { title: "Book A", rating: 4.5 },
        { title: "Book B", rating: 3.2 },
        { title: "Book C", rating: 5.0 }
      ];
      
      function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
        return items.filter(item => item.rating >=4
        );
      }
      
    (filterByRating(books)); 


     /* ---------------------------------Problem number is 3  ---------------------------------------------------->*/

    function concatenateArrays<T>(...arrays: T[][]): T[] {
        let newArray: T[] = [];
        for (let arr of arrays) {
          newArray.push(...arr);
        }
        return newArray;
      }
      
      const result = concatenateArrays([1, 2, ], [4, 5, 6]);
      console.log(result); 




     /* ---------------------------------Problem number is 4  ---------------------------------------------------->*/
     






      
     /* ---------------------------------Problem number is 5  ---------------------------------------------------->*/
     
     function processValue(value: string | number):number {
        if(typeof value === 'number'){
          return  value * 2 ;
        } else {
            return value.length ;
        } 
    
     }
       
     processValue("hello"); 
     processValue(10);         


     /* ---------------------------------Problem number is 7  ---------------------------------------------------->*/












      
     /* ---------------------------------Problem number is 7  ---------------------------------------------------->*/


     enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
      }
      
      function getDayType(day: Day): string {
        if(day === Day.Saturday || day === Day.Sunday){
            return "Weekend" 
        }
         else{
            return "Weekday"
         }
      }

      getDayType(Day.Monday);   // Output: "Weekday"
      getDayType(Day.Sunday);   // Output: "Weekend"
    
