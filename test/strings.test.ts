const anything = "UNAC";

test("UNAC contains UN", () =>{
    //probar
    expect(anything).toMatch(/UN/);
});

test("UNAC does not contain a P", () =>{
    //probar
    expect(anything).not.toMatch(/P/);
});