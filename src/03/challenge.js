// create an elevator class
class Elevator {
  constructor(props) {
    super(props);
    this.levels = props.levels || 10;    // how many levels elevator can travel
    this.capacity = props.capcity || 12; // max people
  }

  takePassenger(person) {
    // this.capacity() this.capcity - 1;
  }

  goTo(floor) {
    this.floor = floor;
  }

  get capacity() {
    return this.capacity;
  }
}