const { person, school } = require("./objects");
const { getAverageGrade } = require("./arrays");


describe(
    "Test person and school objects",
    () => {
        /* Test person */
        it(
            "person is John Doe 1987",
            () => {
                expect(person).toEqual({
                    name:"John Doe",
                    yearOfBirth: 1987
                })
            }
        );
        
        /* Test school */
        it(
            "schools is Superstar School in 2030",
            () => {
                expect(school["name"]).toBe("Superstar School");
                expect(school["yearEstablished"]).toBe("2030");
                expect(school["isActive"]).toBe(false);
                expect(school["coursesOffered"].length).toBe(3);
            }
        );

        /* Test get average */
        it(
            "average of number",
            () => {
                expect(getAverageGrade([1, 1, 1])).toBe(1);
                expect(getAverageGrade([1, 0, 1])).toBeCloseTo(0.6667);
                expect(getAverageGrade([-1, 0, 1])).toBeCloseTo(0);
            }
        );
    }
)