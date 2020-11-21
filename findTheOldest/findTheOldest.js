let findTheOldest = function(people) {
    const oldest = people.reduce((oldestPerson, current) => {
        const oldestAge = getAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
        const currentAge = getAge(current.yearOfBirth, current.yearOfDeath);

        return oldestAge < currentAge ? current : oldestPerson;
    });

    return oldest;
};

function getAge(birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }

    return death - birth;
}

module.exports = findTheOldest
