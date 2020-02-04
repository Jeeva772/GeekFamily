const fs = require('fs');
const FamilyTree = require('./family-tree.js');
const RelationShip = require('./relationship');
const {
    NO_RELATIONSHIP,
    PERSON_NOT_FOUND_ERROR,
    CHILD_ADDITION_SUCCEEDED_INFO,
    ADD_CHILD_COMMAND,
    GET_RELATIONSHIP_COMMAND,
    FILE_NOT_FOUND_ERROR,
    GetInputs,
    printOutput
} = require('./helpers.js');
const INPUT_FILE_NAME_FROM_USER = process.argv[2];

class MeetTheFamily extends FamilyTree {

    constructor(INPUT_FILE_NAME_DEFAULT = null) {
        super();
        this.outputs = [];
        this.relationship = new RelationShip();
        this.RELATIONSHIPS = this.relationship.getRelationShips();
        this.INPUT_FILE_NAME = INPUT_FILE_NAME_DEFAULT || INPUT_FILE_NAME_FROM_USER;
        this.searchFamily();
    }

    async searchFamily() {
        let contents;
        try {
            contents = fs.readFileSync(this.INPUT_FILE_NAME, 'utf8');
            this.outputs = this.processInput(contents);
        }
        catch (err) {
            if (err && err.code === 'ENOENT') {
                this.outputs.push(FILE_NOT_FOUND_ERROR);
            }
        }
        console.log(printOutput(this.outputs));
    }

    processInput(contents) {

        var line = contents.split(/\r?\n/);

        //process each line from file and get output
        var result = line.reduce((accumulator, input) => {

            //get required info from fetched line
            var {
                action,
                person,
                relationShipOrChildGender,
                nameOfNewChild
            } = GetInputs(input);

            // Add child to Family
            if (action === ADD_CHILD_COMMAND) {
                //check if mother exist in family
                if (typeof this.family[person] == 'undefined'
                    || typeof this.family[person].children == 'undefined') {
                    accumulator.push(PERSON_NOT_FOUND_ERROR) // mother not exist
                }
                else {
                    try {
                        // Add child to mother in the family
                        this.addChildToMother(person, nameOfNewChild);

                        // add child to family tree
                        this.addChild(nameOfNewChild, person, relationShipOrChildGender)

                        //child added successfully
                        accumulator.push(CHILD_ADDITION_SUCCEEDED_INFO)
                    }
                    catch (error) {
                        console.log(`Error occoured : ${error}`);
                    }
                }
            }

            // Get required relationship of the person
            if (action === GET_RELATIONSHIP_COMMAND) {
                //check if person exist in family tree
                if (typeof this.family[person] == 'undefined') {
                    accumulator.push(PERSON_NOT_FOUND_ERROR)
                }
                else {
                    const getRelation = this.RELATIONSHIPS[relationShipOrChildGender];
                    const relatives = typeof getRelation  == 'undefined' ? NO_RELATIONSHIP : getRelation(this.family, person);
                    accumulator.push(relatives);                 
                }
            }

            return accumulator
        }, []);

        return result;
    }

}

module.exports = MeetTheFamily;
