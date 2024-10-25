// це шоб імпортувати export default 
// import PI from './ES6Export';
// шоб імпортувати крч над сначала НПМ ініт робити для проекту
// це шоб імпортувати просто export з ьабагатьма велью
import { PI, stddev } from "./ES6Export.js";
console.log(PI)
// шоб імпортувати всьо і записати це в обєкт статс
import * as stats from "./stats.js"

// імпорт файлу тіпа но без значень крч зшоб файл запустився і сделал шо він має сделат но 
// нічо не добавив нам
import "./analytics.js";


import { render as renderImage } from "./imageutils.js";
import { render as renderUI } from "./ui.js";
// These lines import two functions into the current module. The
// functions are both named render() in the modules that define them
// but are imported with the more descriptive and disambiguating names
// renderImage() and renderUI().

// експорто імпорт
import { mean } from "./stats/mean.js";
import { stddev } from "./stats/stddev.js";
export { mean, stdev };
// ES6 modules anticipate this use case and provide a special syntax for
// it. Instead of importing a symbol simply to export it again, you can
// combine the import and the export steps into a single “re-export”
// statement that uses the export keyword and the from keyword:
export { mean } from "./stats/mean.js";
export { stddev } from "./stats/stddev.js";