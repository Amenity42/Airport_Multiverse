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
 
      constructor(UserName, PassportNumber, SeatNumber, BagWeight){
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

class Plane{

      constructor(PassengerName, PassportNumber, SeatNumber, BagWeight, Type){
            
            this.type = Type;
            this.boardPassenger(PassengerName, PassportNumber, SeatNumber, BagWeight);
      }

      type;
      passenger;

      boardPassenger(PassengerName, PassportNumber, SeatNumber, BagWeight){

           this.passenger = new Passenger(PassengerName, PassportNumber, SeatNumber, BagWeight);

      }
}

class CrewMember{

      constructor(){
            
      }

      crewName;
      position;
      staffNumber;

}

class Airport{

      constructor(Name){

            this.airportName = Name;
            
      }

      airportName;
}

let trip1 = new Plane('Rich', 123, 12, 4, 'Concord');

let richard = new Passenger('Rich', 123, 'A3');



//! Testing ---


//Todo 1) Setup user and add bags
richard.addBag(); //!Should throw console error && set value to null
richard.addBag(3);
richard.addBag(7);
richard.bags;
//Todo 2) Set user destination




//Todo 3) Add user to plane



//console.log(trip1);




//console.log(trip1);