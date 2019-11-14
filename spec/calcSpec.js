describe("Calculator", function(){
    beforeEach(function(){
       cal=new Calculator;
    });
    // var cal=new Calculator;

    describe("Addition test", function(){
        it("Should return 42", function(){
            cal.add(20);
            cal.add(22);
            expect(cal.value).toBe(42);
        });
        it("Should return 55", function(){
            cal.add(11);
            cal.add(44);
            expect(cal.value).toBe(55);
        });
        it("Should return an error if we don't supply two numbers", function(){
            // expect(addition("num1","num2")).toBe("Error!");
            spyOn(window, "alert");
            cal.add("num2");
            expect(window.alert).toHaveBeenCalledWith("Error!")
        });
    });
});


// describe("Calculator", function(){
//     describe("Addition test", function(){
//         it("Should return 42", function(){
//             expect(addition(20,22)).toBe(42);
//         });
//         it("Should return 55", function(){
//             expect(addition(11,44)).toBe(55);
//         });
//         it("Should return an error if we don't supply two numbers", function(){
//             // expect(addition("num1","num2")).toBe("Error!");
//             spyOn(window, "alert");
//             addition("num1","num2");
//             expect(window.alert).toHaveBeenCalledWith("Error!")
//         });
//     });
// });