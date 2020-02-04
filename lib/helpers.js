const NO_RELATIONSHIP = 'None'
const PERSON_NOT_FOUND_ERROR = "PERSON_NOT_FOUND";
const CHILD_ADDITION_SUCCEEDED_INFO = "CHILD_ADDITION_SUCCEEDED";
const ADD_CHILD_COMMAND = "ADD_CHILD";
const GET_RELATIONSHIP_COMMAND = "GET_RELATIONSHIP";
const FILE_NOT_FOUND_ERROR = 'INPUT FILE NOT FOUND';
const GENDER_FEMALE = 'Female';
const GENDER_MALE = 'Male';

function  GetInputs(input) {
    var splittedInp = input.split(' ');
    var action = splittedInp.shift();
    var person = splittedInp.shift();
    var relationShipOrChildGender = splittedInp.pop();
    var nameOfNewChild = splittedInp.length > 0 ? splittedInp.join('') : '';
    return { action, person, relationShipOrChildGender, nameOfNewChild };
}

function printOutput(outputs) {
    return outputs.map((output) => {
        if (Array.isArray(output)) {
            return output.join(' ')
        }
        else {
            return output
        }
    }).join('\n');
}

module.exports = {
    NO_RELATIONSHIP,
    PERSON_NOT_FOUND_ERROR,
    CHILD_ADDITION_SUCCEEDED_INFO,
    ADD_CHILD_COMMAND,
    GET_RELATIONSHIP_COMMAND,
    FILE_NOT_FOUND_ERROR,
    GENDER_FEMALE,
    GENDER_MALE,
    GetInputs,
    printOutput
}