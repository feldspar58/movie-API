class User {
    constructor(username, password) {
      this.username = username;
      this.password = password;
      this.paid = false;
    }
  
    authenticate(enteredPassword) {
      return this.password === enteredPassword;
    }
  
    makePayment() {
      this.paid = true;
      console.log(`Payment successful for ${this.username}.`);
    }
  }
  
  class Movie {
    constructor(title, genre, stock) {
      this.title = title;
      this.genre = genre;
      this.stock = stock;
      this.rented = 0;
    }
  
    static movies = [
      new Movie("Inception", "Sci-Fi", 5),
      new Movie("The Shawshank Redemption", "Drama", 3),
      new Movie("Dungeons and Dragons Honor Among Thieves (2023)", "adventure", 4)
      new Movie("Mr and Mrs smith 2005", "Action", 3)
      
    ];
  
    static lateFee = 2.5;
    static rentalPeriodDays = 7;
  
    rent(user, movieTitle) {
      if (!user.paid) {
        console.log("Access denied. Payment required.");
        return;
      }
  
      const movie = Movie.movies.find((m) => m.title === movieTitle);
  
      if (movie && movie.stock > 0) {
        movie.stock--;
        movie.rented++;
        console.log(`You have rented "${movie.title}". Remaining stock: ${movie.stock}`);
      } else {
        console.log(`Sorry, "${movieTitle}" is out of stock.`);
      }
    }
  
    returnMovie(user, movieTitle, daysLate) {
      if (!user.paid) {
        console.log("Access denied. Payment required.");
        return;
      }
  
      const movie = Movie.movies.find((m) => m.title === movieTitle);
  
      if (movie && movie.rented > 0) {
        const lateFee = daysLate > 0 ? Movie.lateFee * daysLate : 0;
        const rentalPrice = this.calculateRentalPrice() + lateFee;
  
        movie.stock++;
        movie.rented--;
  
        console.log(`You have returned "${movie.title}". Remaining stock: ${movie.stock}`);
        console.log(`Rental price: $${rentalPrice.toFixed(2)}`);
      } else {
        console.log(`There are no rented copies of "${movieTitle}" to return.`);
      }
    }
  
    calculateRentalPrice() {
      return Movie.rentalPeriodDays * 1.5;
    }
  }
  
  
  const validUser = new User("user123", "password123");
  
  const enteredUsername = "user123";
  const enteredPassword = "password123";
  
  if (validUser.authenticate(enteredPassword)) {
    console.log(`Welcome, ${enteredUsername}!`);
  
    
    validUser.makePayment();
  
    
    Movie.movies.forEach(movie => {
      movie.rent(validUser, movie.title);
      movie.returnMovie(validUser, movie.title, 2);
    });
  } else {
    console.log("Invalid credentials. Please check your username and password.");
  }
  