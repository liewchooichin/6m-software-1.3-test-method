const { person, school } = require("./objects");

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
        )
    }
)