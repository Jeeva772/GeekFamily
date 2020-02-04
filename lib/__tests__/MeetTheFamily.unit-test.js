var MeetTheFamily = require('../MeetTheFamily.js');

describe('MeetTheFamily', () => {
    it('should constructor work with searchFamily function', async () => {
        const expectedOutput = ['CHILD_ADDITION_SUCCEEDED',
            'PERSON_NOT_FOUND',
            ['Asva', 'Ketu'],
            ['Vyas', 'Ketu'],
            ['Atya'],
            'None',
            'PERSON_NOT_FOUND',
            ['Jnki'],
            ['Ahit'],
            'CHILD_ADDITION_SUCCEEDED',
            ['Aria'],
            'None',
            ['Vritha'],
            ['Atya'],
            ['Krithi'],
            ['Kriya'],
            ['Kriya']]
        const family = new MeetTheFamily('lib/__resources__/input.txt');
        expect(family).toBeInstanceOf(MeetTheFamily);
        expect(family.outputs).toEqual(expectedOutput);
    });

    it('should print error when file not exists', async () => {
        const expectedOutput = ['INPUT FILE NOT FOUND'];
        const family = new MeetTheFamily('lib/__resources__/demo.txt');
        expect(family).toBeInstanceOf(MeetTheFamily);
        expect(family.outputs).toEqual(expectedOutput);
    });
})