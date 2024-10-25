const BasePage = require('./base.page');

const {DoctorListHeader, AddDoctorComponent, SpecialistCard} = require('./../components');
class DoctorPage extends BasePage {
    
    constructor() {
        super("/showcase/angular/appointmentplanner/#/doctors");
        this.doctorListHeader = new DoctorListHeader();
        this.addDoctorModal = new AddDoctorComponent();
    }

    specialistCard(id){
        return new SpecialistCard(id);
    }
}


module.exports = DoctorPage;
