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
     
     
      
  
