// function Book(title, author, ISBN, numCopies){
//   this.title = title;
//   this.author = author;
//   this.ISBN = ISBN;
//   this.numCopies = numCopies;
// }

// Book.prototype.getAvailability = function() {
//   if(this.numCopies == 0) {
//     return "Out of stock";
//   } else if(this.numCopies < 10) {
//     return "Low stock";
//   }
//   return "Available";
// }

// Book.prototype.sell = function(numCopySell = 1) {
//   if(this.numCopies == 0) {
//     console.log('No Book available at the store');
//     return;
//   }
//   console.log('Selling ' + numCopySell + ' copies')
//   this.numCopies -= numCopySell;
// }

// Book.prototype.reStock = function(numCopiesStock = 5) {
//   console.log('Added new ' + numCopiesStock + ' at Store')
//   this.numCopies += numCopiesStock;
// }

// Book.prototype.numberOfStock = function() {
//   return 'total ' + this.numCopies + ' available now'
// }

class Book{
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  get bookAvailability (){
    return this.getAvailability();
  }

  getAvailability() {
    if(this.numCopies == 0) {
      console.log('Out of Stock')
      return "Out of stock";
    } else if(this.numCopies < 10) {
      console.log('Low Stock')
      return "Low stock";
    }
    console.log('Available');
    return "Available";
  }

  sell(numCopySell = 1) {
    if(this.numCopies == 0) {
      console.log('No Book available at the store');
      return;
    }
    console.log('Selling ' + numCopySell + ' copies')
    this.numCopies -= numCopySell;
  }

  reStock(numCopiesStock = 5) {
    console.log('Added new ' + numCopiesStock + ' at Store')
    this.numCopies += numCopiesStock;
  } 

  numberOfStock() {
    return 'total ' + this.numCopies + ' available now'
  }
}

const HarryPotter = new Book("Harry Potter 1", "J K Rowling", 12234412, 2);
console.log(HarryPotter.getAvailability());

HarryPotter.sell(2);
console.log('In Stock :: ', HarryPotter.getAvailability())
console.log('In Stock :: ',HarryPotter.getAvailability())
console.log(HarryPotter.numberOfStock())
HarryPotter.sell(3);

HarryPotter.reStock(10);
HarryPotter.sell(3);
HarryPotter.sell(5);
HarryPotter.sell(4);
HarryPotter.reStock(400);
HarryPotter.sell(40);