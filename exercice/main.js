import { appliqueurRemise} from "./remise.js";
import { formaterPrix } from "./prix.js";
import calculerTTC,{TVA} from "./ttc.js";
import { formaterPrix as afficher } from "./prix.js";


const prix= calculerTTC(100, 20);

console.log ("TTC = ", formaterPrix(prix));
console.log ("TTC = ", afficher(prix));
console.log ( "TVA : " , TVA);


const prixRemise =  appliqueurRemise(prix, 10 );
 
console.log ("Après remise : ", formaterPrix(prixRemise));

console.log ("Après remise : ", afficher(prixRemise));
