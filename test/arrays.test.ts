const array = ["value1", "value2", "value3"];

test("Const array contains value2", () =>{
    //probar
    expect(array).toContain("value2");
});

test("Const array contains value3", () =>{
    //probar
    expect(array).toContain("value3");
});

test("Const array not contains UNAC", () =>{
    //probar
    expect(array).not.toContain("UNAC");
});