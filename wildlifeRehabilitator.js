class WildlifeRehabilitator {
    constructor(name, availability){
        this.name = name;
        this.availability = availability;
        this.task = '';
    }

    execTask(task){
        console.log(`Wildlife Rehabilitator: Task started: ${task}`);
        for (let index = 0; index < 1000000000; index++) {
            if(index == 999999999){
                console.log(`Wildlife Rehabilitator: Task finished: ${task} by ${this.name}`);
                console.log(`________________________________________________________________`);
            }            
        }
    }
}

module.exports = WildlifeRehabilitator;