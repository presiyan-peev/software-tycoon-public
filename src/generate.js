/* 
    This is the file where new Clients, Projects and Developers will be generated

 */


class RandomClient {
    constructor() {
        this.id = "client"+idGenerator()
        this.name = nameGenerator();
        this.relationship = relationshipGenerator();               // the relationship of the client between 0 and 100. if it falls below 0, then relationship is ended
        this.projectid = [];
    }
}

class RandomProject {
    constructor(complexityRequirement) {
        this.id = "project"+idGenerator()
        this.title = projectTitleGenerator();
        this.complexity = Math.ceil(Math.random()*complexityRequirement)          // Prevents Complexity to be random. complexityRequirement defines the maximum complexity level required from the project. Globally, it's 6. In some cases, the developer might want to limit the complexity to be e.g. 3
        this.ownerId = -1;
        this.fee = 30000;
        this.status = 'available'                               //"available", "rejected", "ongoing", "successful", "failed"
    }
}

class RandomDeveloper {
    constructor(seniorityRequirement) {
        this.id = "dev"+idGenerator()
        this.name = nameGenerator();
        this.relationship = relationshipGenerator();
        this.seniorityReq = seniorityRequirement==="Senior" ? "Senior" : "Junior"           //prevents Seniority to be random. 
    }
}

var maleFirstName = ["Diyan", "Apostol", "Trayan", "Stilgar", "Lyulyak", "Shushlyak", "Boyan", "Glarus", "Ivan", "Margaritko", "Naraforiy", "Stoyanko", "Luchezar", "Petko", "Panti", "Nikolaos", "Sasho", "Krasi", "Vanko", "Lyubcho", "Sisko", "Stanislav", "Dundyo", "Miteto", "Gufe", "Lisan", "Zayko", "Todor", "Bozhidar", "Petar", "Miroslav", "Ivan", "Georgi", "Gergan", "Georgi", "Gergi", ]
var maleLastName = ["Diyanski", "Apostolov", "Trayanov", "Nalbantov", "Linski", "Shushlyakov", "Boyanski", "Glarusov", "Ivanov", "Maleev", "Gusev", "Stoyankov", "Luchezarov", "Petkov", "Pantev", "Nikolaev", "Aleksandrov", "Krasimirov", "Ivanov", "Lyubomirov", "Svetozarski", "Stanislavski", "Dundev", "Mitev", "Gufeev", "Lisi", "Zaytsev", "Todorin", "Bozhidarov", "Petrov", "Miroslavov", "Ivanov", "Georgiev", "Gerganov", "Georgiev", "Gergiev", ]
var projectTitles = ["Design a website", "Fix bugs in my website", "Refresh looks of my website", "Add functionality to my website"]

var idSuffixes = []

function idGenerator() {
    return  idSuffixes.includes(Date.now().toString()+Math.ceil(Math.random()*100)) ? idGenerator() : Date.now().toString()+Math.ceil(Math.random()*100)
}

function nameGenerator() {
    return maleFirstName[Math.floor(Math.random()*maleFirstName.length)] + " " + maleLastName[Math.floor(Math.random()*maleLastName.length)]
}

function relationshipGenerator() {
    return Math.random() * 100
}

function projectTitleGenerator() {
    return projectTitles[Math.floor(Math.random()*projectTitles.length)]
}


export { RandomClient, RandomProject, RandomDeveloper }