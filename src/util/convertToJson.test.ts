import {convertToJson} from "./convertToJson";

describe('FormData', () => {

    describe('conversion in to JSON', () => {

        it('should work with same keys', () => {
            const formData = new FormData();
            formData.append('user', 'Amber');
            formData.append('user', 'Kaat');

            const json = convertToJson(formData);

            expect(json).toStrictEqual({user: ['Amber', 'Kaat']});
        });

        it('should work with different keys', () => {
            const formData = new FormData();
            formData.append('user', 'Amber');
            formData.append('email', 'amber@coinsplitter.com');

            const json = convertToJson(formData);

            expect(json).toStrictEqual({user: 'Amber', email: 'amber@coinsplitter.com'});
        });

    });

});

export {}