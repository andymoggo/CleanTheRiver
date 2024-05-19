class EnvironmentalEngineer {
    constructor(name, availability){
        this.name = name;
        this.availability = availability;
        this.task = '';
    }

    execTask(task){
        console.log(`Environmental Engineer: Task started: ${task}`);
        for (let index = 0; index < 1000000000; index++) {
            if(index == 999999999){
                console.log(`Environmental Engineer: Task finished: ${task} by ${this.name}`);
                console.log(`________________________________________________________________`);
            }            
        }
    }
}

module.exports = EnvironmentalEngineer;