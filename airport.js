/************************************ 
          Airport challenge 
         By Richard / Daniel 
             26-04-2022
 ************************************/




/*
      1. Passenger & bags are checked in 
      2. Passenger is allocated an airoplane to fly on
      3. Passenger lands at destrination 
      4. End of flight 
*/







class Bag{

      constructor(Weight){
            this.weight = Weight;

            try {
                  this.checkBagWeight();
                  console.log(`Bag weight valid ${Weight}`)
            } catch (error) {
                  console.error('Bag Weight is not valid');
                  this.weight = null;
            }
            
      }
      weight;

      checkBagWeight(){

            if(this.weight == null || this.weight == undefined){
                throw new Error('Bag wieght parameter is missing');
            }
      }



}

class Passenger{
 
      constructor(UserName, PassportNumber, SeatNumber){
            this.userName = UserName;
            this.passportNumber = PassportNumber;
            this.seatNumber = SeatNumber;
      }


      bagCount = 0;
      userName;
      passportNumber; 
      seatNumber;
      bags = [];

      //* Adds new bag to passenger object array 
      addBag(weight){
            this.bags[this.bagCount] = new Bag(weight);
            this.bagCount++
            }

}

class Airport{

      constructor(CurrentAirport, Destination){

            this.currentAirport = CurrentAirport;
            this.destination = Destination;
            
      }

      currentAirportName;
      destination;
}

class Plane{

      constructor(type){
            
            this.type = type;
            
      }

      type = '';
      passenger = [];

      boardPassenger(passenger){

           this.passenger.push(passenger); 

      }
}

class CrewMember extends Passenger{

      constructor(){
            
      }
      position;
      staffNumber;

}



//* Set up passengers
let richard = new Passenger('Rich', 123, 'A3');
let daniel = new Passenger('daniel', 153, 'A1');
let sam = new Passenger('sam', 674, 'A4');
let ali = new Passenger('ali', 632, 'A6');
let simon = new Passenger('simon', 613, 'A2');




//* Check users luggage (Bags)
richard.addBag(); //!Should throw console error && set value to null
richard.addBag(3);
richard.addBag(7);

daniel.addBag(3);
daniel.addBag(7);

sam.addBag(3);
sam.addBag(7);

ali.addBag(3);
ali.addBag(7);

simon.addBag(3);
simon.addBag(7);


//*Set up plane
let trip1 = new Plane('concord');

//Set destination
let destination1 = new Airport('Heathrow', 'Tokyo');



//* Add passengers to plane
trip1.boardPassenger(richard);
trip1.boardPassenger(daniel);
trip1.boardPassenger(sam);
trip1.boardPassenger(ali);
trip1.boardPassenger(simon);

console.log(trip1);