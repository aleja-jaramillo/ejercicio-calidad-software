import { sum } from '../src/sum';

test("Test sum 5+5 > 10 ", () =>{
    //probar
    expect(sum(5,5)).toBeGreaterThan(5);
});

test("Test sum 5+5 >= 10 ", () =>{
    //probar
    expect(sum(5,5)).toBeGreaterThanOrEqual(10);
});

test("Test sum 2+1 < 4 ", () =>{
    //probar
    expect(sum(2,1)).toBeLessThan(4);
});