class ConservationBiologist {

    
    constructor(name, availability){
        this.name = name;
        this.availability = availability;
        
    }

    execTask(task){
        console.log(`Convervation Biologist: Task started: ${task}`);
        for (let index = 0; index < 1000000; index++) {
            if(index == 999999){
                console.log(`Convervation Biologist: Task finished: ${task} by ${this.name}`);
                console.log(`________________________________________________________________`);
            }            
        }
    }
}

module.exports = ConservationBiologist;