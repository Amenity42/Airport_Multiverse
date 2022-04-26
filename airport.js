//Airport challenge 
//By Richard / Daniel 





class Bag{

      constructor(Weight){
            this.weight = Weight;


            try {
                  this.checkBagWeight();
            } catch (error) {
                  console.log('You broke it');
            }
            
      }
      weight;

      checkBagWeight(Weight){

            if(Weight == null || Weight == undefined){
                throw new Error('Bag wieght parameter is missing');
            }
      }

}

class Passenger{
 
      constructor(UserName, PassportNumber, SeatNumber, BagWeight){
            this.userName = UserName;
            this.passportNumber = PassportNumber;
            this.seatNumber = SeatNumber;

            //* Create new bag instance for passenger
            this.bag = new Bag(BagWeight);
      }
      userName;
      passportNumber; 
      seatNumber;
      bag;

}

class Plane{

      constructor(){
            
      }

}

class CrewMember{

      constructor(){
            
      }

}

class Airport{

      constructor(){
            
      }

}

let Daniel = new Passenger('Daniel', 1234, 9);
let Rich = new Passenger('Rich', 3242, 8, 23);

console.log(Daniel.bag);
console.log(Rich.bag);