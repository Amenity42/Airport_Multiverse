/************************************ 
          Airport challenge 
         By Richard / Daniel 
             26-04-2022
 ************************************/


//Generate random passport numbers
let randomNumber = Math.round(Math.random() * 999);

class Bag{

      constructor(Weight){
            this.weight = Weight;

            try {
                  this.checkBagWeight();
                 // console.log(`Bag weight: ${Weight}`);
            } catch (error) {
                 // console.error('Bag Weight is not valid');
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
            //super(UserName, PassportNumber, SeatNumber);
            this.userName = UserName;
            this.passportNumber = PassportNumber;
            this.seatNumber = SeatNumber;
      }


      bagCount = 0;
      userName;
      passportNumber; 
      seatNumber;
      bags = [];
      isCrew = false;

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

      crewOnboard(){

            let crewCount = 0;
            this.passenger.forEach(element => {
            
            if(element.isCrew){
                  crewCount++ 
            }
            
            });
            return crewCount;
      }

      boardPassenger(passenger){

           this.passenger.push(passenger); 

      }
}

class CrewMember extends Passenger{

      constructor(UserName, PassportNumber, SeatNumber, Position, StaffNumber, isCrew){
            super(UserName, PassportNumber, SeatNumber, isCrew);
            this.position = Position;
            this.staffNumber = StaffNumber;
            this.userName = UserName;
            this.passportNumber = PassportNumber;
            this.seatNumber = SeatNumber;
            this.isCrew = true;
      }

      position;
      staffNumber;

}



//* Set up passengers
let richard = new Passenger('Rich', randomNumber, 'A3');
let daniel = new Passenger('daniel', randomNumber, 'A1');
let sam = new Passenger('sam', randomNumber, 'A4');
let ali = new Passenger('ali', randomNumber, 'A6');
let simon = new Passenger('simon', randomNumber, 'A2');

//* Set up staff
let jeff = new CrewMember('Jeff', randomNumber, 'C1','Cabin crew', 05);
jeff.addBag(4);
let kevin = new CrewMember('Kevin', randomNumber, 'C2','Cabin crew', 03);
kevin.addBag(3);
let joe = new CrewMember('joe', randomNumber, 'C3','Co-Pilot', 02);
joe.addBag(1);
let lisa = new CrewMember('lisa', randomNumber, 'C4','Pilot', 01);
lisa.addBag(2);

//* Check in users luggage (Bags)
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
trip1.boardPassenger(jeff);
trip1.boardPassenger(kevin);
trip1.boardPassenger(joe);
trip1.boardPassenger(lisa);



console.log(

`Trip information
--------------------------------------------------------------
Current location: ${destination1.currentAirport}
Plane destination: ${destination1.destination}
Plane crew onboard: ${trip1.crewOnboard()}
Passengers: ${trip1.passenger.length - trip1.crewOnboard()}
--------------------------------------------------------------`



 );

