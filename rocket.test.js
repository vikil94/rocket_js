const Rocket = require('./rocket');

describe('Rocket', () => {

    describe('constructor', () => {
        test('it should set default attributes if nothing is passed', () => {

            let rocket1 = new Rocket();
            expect(rocket1.name).toBeDefined();
            expect(rocket1.colour).toBeDefined();
            expect(rocket1.flying).toEqual(false);




        });

        test("it should set the rocket's name if provided", () => {

            rocket2 = new Rocket()
            rocket2.name = "Elton John"
            expect(rocket2.name).toEqual("Elton John");



        });
    });

    describe('liftOff', () => {
        test('Rockets in air should not liftoff', () => {

            let rocket = new Rocket()
            rocket.flying = true;

            result = rocket.liftOff();

            expect(result).toEqual(false);
        });

        describe('land', () => {

            test('Grounded rockets cannot land', () => {

                let rocket = new Rocket()
                rocket.flying = false;

                result = rocket.land()

                expect(result).toEqual(false);

            })


        })

        describe('status', () => {

            test('if flying, return the name of the rocket that is flying', () => {

                rocket = new Rocket();
                rocket.name = "Elton John";
                rocket.flying = true;

                result = rocket.status()

                expect(result).toEqual(`Rocket ${rocket.name} is flying through the sky!`)



            })

            test('should show which rockets are ready for lift off', () => {

                rocket = new Rocket();
                rocket.name = "Yeezus";

                result = rocket.status()

                expect(result).toEqual(`Rocket ${rocket.name} is ready for liftoff!`);

            })

        })

        describe('sendCodedSignal', () => {

            test('If there are no messages should return boop', () => {

                rocket = new Rocket()

                expect(rocket.sendCodedSignal()).toEqual('boop');
            })

            test('If there are less than 10 messages return beep', () => {

                rocket = new Rocket()

                expect(rocket.sendCodedSignal(3)).toEqual('beep');
            })

            test('If the rocket is flying and messages is less than 10 return beep beep', () => {

                rocket = new Rocket()
                rocket.flying = true;

                expect(rocket.sendCodedSignal(3)).toEqual('beep beep');


            })

            test('A flying rocket and messages > 10 should return boop boop boop', () => {

                rocket = new Rocket()
                rocket.flying = true
                let result = rocket.sendCodedSignal(15)

                expect(result).toEqual('boop boop boop');
            })

            test('A grounded rocket and messages > 10 should return boop beep beep', () => {

                rocket = new Rocket()

                let result = rocket.sendCodedSignal(15)

                expect(result).toEqual('boop beep beep');
            })

        })






    });

    // ...

});