// // describe("Calculator", function(){
// //     beforeEach(function(){
// //        cal=new Calculator;
// //     });
//     // var cal=new Calculator;

    



// describe("My fizzBuzz function", function() {
//     // A test suite begins with a call to the global Jasmine function describe with two parameters: a string and a function.
    
//     beforeEach(function() {
//         fizzbuzz = new fizzBuzz();
//     });
    
//     describe("Returns number, fizz, buzz or fizzbuzz", function() {
//         // Specs are defined by calling the global Jasmine function it
//         it("should exist", function() {
//             // Expectations are built with the function expect which takes a value, called the actual. 
//             // Each matcher implements a boolean comparison between the actual value and the expected value.
//             // Any matcher can evaluate to a negative assertion by chaining the call to expect with a not before calling the matcher.
//             expect(fizzBuzz).toBeDefined();
//         });
        
//         it("should return Fizz when called as fizzBuzz(9)", function() {
//             var result = fizzBuzz(9)
//             expect(result).toBe("Fizz");
//         });
                
//         it("should return Buzz when called as fizzBuzz(10)", function() {
//             var result = fizzBuzz(10)
//             expect(result).toBe("Buzz");
//         });
        
//         it("should return FizzBuzz when called as fizzBuzz(15)", function() {
//             var result = fizzBuzz(15)
//             expect(result).toBe("FizzBuzz");
//         });
//         it("should return 2 when called as fizzBuzz(2)", function() {
//             var result = fizzBuzz(2)
//             expect(result).toBe(2);
//         });
//     });
// });




    describe("Fizzbuzz test", function(){
        it("should exist", function() {
            expect(FizzBuzz).toBeDefined();
        });
        it("Should return Buzz", function(){
            expect(FizzBuzz(25)).toBe("Buzz");
        });
        it("Should return Fizz", function(){
            expect(FizzBuzz(18)).toBe("Fizz");
        });
        it("Should return FizzBuzz", function(){
            expect(FizzBuzz(15)).toBe("FizzBuzz");
        });
        it("Should return an error if we don't supply a numbers", function(){
            // expect(addition("num1","num2")).toBe("Error!");
            spyOn(window, "alert");
            FizzBuzz("All");
            expect(window.alert).toHaveBeenCalledWith("Error!")
        });
    });