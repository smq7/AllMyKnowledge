const DashboardPage = require("./dashboard.page");
const DoctorPage = require("./doctors.page");

 /**
  * 
  * @param name {'dashboard' | 'doctors'} 
  * @returns {DashboardPage | DoctorPage}
  */

function pages(name) {
    const items = {
        dashboard: new DashboardPage(),
        doctors: new DoctorPage()
    }
    return items[name.toLowerCase()]; 
}

module.exports = {
    DashboardPage,
    DoctorPage,
    pages,
}