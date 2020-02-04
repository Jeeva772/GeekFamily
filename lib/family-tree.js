const {
    NO_RELATIONSHIP,
    GENDER_FEMALE,
    GENDER_MALE
} = require('./helpers.js');

class FamilyTree {
    constructor() {
        this.family = {
            "Shan": {
                "father": null,
                "mother": null,
                "gender": "Male",
                "wife": "Anga"
            },
            "Anga": {
                "father": null,
                "mother": null,
                "gender": "Female",
                "husband": "Shan",
                "children": [
                    "Chit",
                    "Ish",
                    "Vich",
                    "Aras",
                    "Satya"
                ]
            },
            "Chit": {
                "father": "Shan",
                "mother": "Anga",
                "gender": "Male",
                "wife": "Amba"
            },
            "Amba": {
                "father": null,
                "mother": null,
                "gender": "Female",
                "husband": "Chit",
                "children": [
                    "Dritha",
                    "Tritha",
                    "Vritha"
                ]
            },
            "Ish": {
                "father": "Shan",
                "mother": "Anga",
                "gender": "Male",
                "wife": null
            },
            "Vich": {
                "father": "Shan",
                "mother": "Anga",
                "gender": "Male",
                "wife": "Lika"
            },
            "Lika": {
                "father": null,
                "mother": null,
                "gender": "Female",
                "husband": "Vich",
                "children": [
                    "Vila",
                    "Chika"
                ]
            },
            "Aras": {
                "father": "Shan",
                "mother": "Anga",
                "gender": "Male",
                "wife": "Chitra"
            },
            "Chitra": {
                "father": null,
                "mother": null,
                "gender": "Female",
                "husband": "Aras",
                "children": [
                    "Jnki",
                    "Ahit"
                ]
            },
            "Satya": {
                "father": "Shan",
                "mother": "Anga",
                "gender": "Female",
                "husband": "Vyan",
                "children": [
                    "Asva",
                    "Vyas",
                    "Atya"
                ]
            },
            "Dritha": {
                "father": "Chit",
                "mother": "Amba",
                "gender": "Female",
                "husband": "Jaya",
                "children": [
                    "Yodahan"
                ]
            },
            "Jaya": {
                "father": null,
                "mother": null,
                "gender": "Male",
                "wife": "Dritha"
            },
            "Yodhan": {
                "father": "Jaya",
                "mother": "Dritha",
                "gender": "Male",
                "wife": null
            },
            "Vila": {
                "father": "Vich",
                "mother": "Lika",
                "gender": "Female",
                "husband": null,
                "children": []
            },
            "Chika": {
                "father": "Vich",
                "mother": "Lika",
                "gender": "Female",
                "husband": null,
                "children": []
            },
            "Arit": {
                "father": null,
                "mother": null,
                "gender": "Male",
                "wife": "Jnki"
            },
            "Jnki": {
                "father": "Aras",
                "mother": "Chitra",
                "gender": "Female",
                "husband": "Arit",
                "children": [
                    "Laki",
                    "Lavnya"
                ]
            },
            "Ahit": {
                "father": "Aras",
                "mother": "Chitra",
                "gender": "Male",
                "wife": null
            },
            "Satvy": {
                "father": null,
                "mother": null,
                "gender": "Female",
                "husband": "Asva",
                "children": [
                    "Vasa"
                ]
            },
            "Asva": {
                "father": "Vyan",
                "mother": "Satya",
                "gender": "Male",
                "wife": "Satvy"
            },
            "Krpi": {
                "father": null,
                "mother": null,
                "gender": "Female",
                "husband": "Vyas",
                "children": [
                    "Kriya",
                    "Krithi"
                ]
            },
            "Vyas": {
                "father": "Vyan",
                "mother": "Satya",
                "gender": "Male",
                "wife": "Krpi"
            },
            "Kriya": {
                "father": "Vyas",
                "mother": "Krpi",
                "gender": "Male",
                "wife": null
            },
            "Krithi": {
                "father": "Vyas",
                "mother": "Krpi",
                "gender": "Female",
                "husband": null,
                "children": []
            },
            "Lavnya": {
                "father": "Arit",
                "mother": "Jnki",
                "gender": "Female",
                "husband": null,
                "children": []
            },
            "Laki": {
                "father": "Arit",
                "mother": "Jnki",
                "gender": "Male",
                "wife": null
            },
            "Yodhan": {
                "father": "Jaya",
                "mother": "Dritha",
                "gender": "Male",
                "wife": null
            },
            "Vasa": {
                "father": "Asva",
                "mother": "Satvy",
                "gender": "Male",
                "wife": null
            },
            "Atya": {
                "father": "Vyan",
                "mother": "Satya",
                "gender": "Female",
                "husband": null,
                "children": []
            },
            "Tritha": {
                "father": "Chit",
                "mother": "Amba",
                "gender": "Female",
                "husband": null,
                "children": []
            },
            "Vritha": {
                "father": "Chit",
                "mother": "Amba",
                "gender": "Male",
                "wife": null
            }
        }
    }

    getFamily() {
        return this.family;
    };

    setFamily(family) {
        this.family = family;
    };

    addChildToMother(mother, childToBeAdded) {
        this.family[mother].children.push(childToBeAdded);
    }

    addChild(childToBeAdded, mother, gender) {
        this.family[childToBeAdded] = {
            father: this.family[mother].husband,
            mother,
            gender,
        }
        if (gender === GENDER_FEMALE) {
            this.family[childToBeAdded].husband = null;
            this.family[childToBeAdded].children = [];
        }
        else {
            this.family[childToBeAdded].wife = null;
        }
    };
}
module.exports = FamilyTree;