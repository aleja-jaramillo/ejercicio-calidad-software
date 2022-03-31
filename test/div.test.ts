import { div } from '../src/div';

test("Test div function 10/2 equals 5", () =>{
    //probar
    expect(div(10,2)).toBe(5);
});

test("Test div function 5/0 equals gives error", () =>{
    //probar
    expect(div(5,0)).toBe(Infinity);
});
