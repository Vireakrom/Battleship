import { Ship } from "./ship";
const ship = new Ship(3);
test("hits increase when call hit()", () => {
  ship.hit();
  expect(ship.hits).toBe(1);
});
test("ship does not sink if the hits is less than length", () => {
  expect(ship.isSunk()).toBe(false);
});
test("ship is sunk after hits is equal to length", () => {
  ship.hit();
  ship.hit();
  expect(ship.hits).toBe(3);
  expect(ship.isSunk()).toBe(true);
});
