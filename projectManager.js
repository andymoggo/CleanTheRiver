const EnvironmentalTechnician = require('./environmentalTechnician.js');
const EnvironmentalEngineer = require('./environmentalEngineer');
const WaterQualitySpecialist = require('./waterQualitySpecialist');
const ConservationBiologist = require('./conservationBiologist');
const WildlifeRehabilitator = require('./wildlifeRehabilitator');

remoteEmployees = {
    [0] : new EnvironmentalTechnician("Rachel Carson",true),
    [1] : new EnvironmentalEngineer("Joseph Bazalgette",true),    
    [2] : new WaterQualitySpecialist("Joan Didion",true),
    [3] : new ConservationBiologist("Jane Goodall", true),   
    [4] : new WildlifeRehabilitator("Paula Kahumbu",true)
};


class ProjectManager {
    constructor(name, availability){
        this.name = name;
        this.availability = availability;
        this.trackingActivities = {};
    }

    planningProject(project){
        console.log("Designing the plan");
        for (let index = 0; index < 1000000000; index++) {
            if(index == 999999999){
                console.log(`Plan finished for the project: ${project}`);
                console.log(`________________________________________________________________`);
            }           
        }

        this.executeTask('Trash Collection', remoteEmployees[0]);
        this.executeTask('Pollution Source Elimination', remoteEmployees[1]);
        this.executeTask('Water Purification', remoteEmployees[2]);
        this.executeTask('Planting Vegetation', remoteEmployees[3]);
        this.executeTask('Animal Rescue', remoteEmployees[4]);       

    }

    executeTask(task, professional){
        console.log(professional.name);
        console.log(task);
        
        professional.execTask(task);
    }


}

module.exports = ProjectManager;