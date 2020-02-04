const {
    NO_RELATIONSHIP,
    GENDER_FEMALE,
    GENDER_MALE
} = require('./helpers.js');

class RelationShip {
    constructor() {
        this.RelationShips = {
            // parental-uncle : Father’s brothers
            "Paternal-Uncle": function (family, person) {
                var father = family[person].father;
                var grandMother = family[father].mother;
                const paternalUncle = family[grandMother].children.filter((a) => (a != father && family[a].gender === GENDER_MALE));
                return paternalUncle.length > 0 ? paternalUncle : NO_RELATIONSHIP;
            },
            "Maternal-Uncle": (family, person) => {
                var mother = family[person].mother;
                var grandMother = family[mother].mother;
                const maternalUncle = family[grandMother].children.filter((a) => (a != mother && family[a].gender === GENDER_MALE));
                return maternalUncle.length > 0 ? maternalUncle : NO_RELATIONSHIP;
            },
            "Paternal-Aunt": (family, person) => {
                var father = family[person].father;
                var grandMother = family[father].mother;
                const paternalAunt = family[grandMother].children.filter((a) => (a != father && family[a].gender === GENDER_FEMALE));
                return paternalAunt.length > 0 ? paternalAunt : NO_RELATIONSHIP;
            },
            "Maternal-Aunt": (family, person) => {
                var mother = family[person].mother;
                var grandMother = family[mother].mother;
                const maternalAunt = family[grandMother].children.filter((a) => (a != mother && family[a].gender === GENDER_FEMALE));
                return maternalAunt.length > 0 ? maternalAunt : NO_RELATIONSHIP;
            },
            "Sister-In-Law": (family, person) => {
                var genderOfPerson = family[person].gender;
                let wivesOfBrothers, sisterInLaw;
                var mother = family[person].mother;
               
                if (genderOfPerson == GENDER_FEMALE) {
                    var husband = family[person].husband;
                    var husbandMother = family[husband].mother;
                    const sistersOfHusband = family[husbandMother].children.filter((a) => (a != husband && family[a].gender === GENDER_FEMALE));
                    sisterInLaw = sistersOfHusband;
                }
                else {
                    var wife = family[person].wife;
                    var wifeMother = family[wife].mother;
                    const sistersOfWife = family[wifeMother].children.filter((a) => (a != wife && family[a].gender === GENDER_FEMALE));
                    sisterInLaw = sistersOfWife;
                }

                var siblingBrother = (mother == null) ? [] : family[mother].cildren.filter((a) => family[a].gender === GENDER_MALE);
                if (siblingBrother.length > 0) {
                    wivesOfBrothers = siblingBrother.map((bro) => family[bro].wife);
                    sisterInLaw = [...sisterInLaw, ...wivesOfBrothers]
                }
                return sisterInLaw.length > 0 ? sisterInLaw : NO_RELATIONSHIP;
            },
            "Brother-In-Law": (family, person) => {
                var genderOfPerson = family[person].gender;
                let husbandOfSisters, brotherInLaw;
                var mother = family[person].mother;
                if (genderOfPerson == GENDER_MALE) {
                    var wife = family[person].wife;
                    var wifeMother = family[wife].mother;
                    var brothersOfWife = family[wifeMother].children.filter((a) => (a != wife && family[a].gender === GENDER_MALE));
                    brotherInLaw = brothersOfWife;
                }
                else {
                    var husband = family[person].husband;
                    var husbandMother = family[husband].mother;
                    const brothersOfHusband = family[husbandMother].children.filter((a) => (a != husband && family[a].gender === GENDER_MALE));
                    brotherInLaw = brothersOfHusband;
                }

                var siblingSister = (mother == null) ? [] : family[mother].cildren.filter((a) => family[a].gender === GENDER_FEMALE);
                if (siblingSister.length > 0) {
                    husbandOfSisters = siblingSister.map((bro) => family[bro].husband);
                    brotherInLaw = [...brotherInLaw, ...husbandOfSisters];
                }

                return brotherInLaw.length > 0 ? brotherInLaw : NO_RELATIONSHIP;
            },
            "Son": (family, person) => {
                if (family[person].gender === GENDER_MALE) {
                    var wife = family[person].wife;
                    if (wife == null) {
                        return NO_RELATIONSHIP;
                    }
                    else {
                        return family[wife].children.filter((a) => family[a].gender === GENDER_MALE);
                    }
                }
                else {
                    return family[person].children.filter((a) => family[a].gender === GENDER_MALE);
                }
            },
            "Daughter": (family, person) => {
                if (family[person].gender === GENDER_MALE) {
                    var wife = family[person].wife;
                    if (wife == null) {
                        return NO_RELATIONSHIP;
                    }
                    else {
                        return family[wife].children.filter((a) => family[a].gender === GENDER_FEMALE);
                    }
                }
                else {
                    return family[person].children.filter((a) => family[a].gender === GENDER_FEMALE);
                }
            },
            "Siblings": (family, person) => {
                var mother = family[person].mother;
                var Siblings = family[mother].children.filter((a) => a != person)
                return (Siblings.length > 0 ? Siblings : NO_RELATIONSHIP);
            }
        };
    }

    getRelationShips() {
        return this.RelationShips;
    }

    setRelationShip(relationIndex, relation) {
        this.RelationShips[relationIndex] = relation;
        return this.RelationShips;
    }
}

module.exports = RelationShip;