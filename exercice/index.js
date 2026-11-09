export function formaterPrix(montant) {

    return montant.toFixed(2) + "$"; 
}

export  function appliqueurRemise(prix, pourcentage) {
    
    return prix * (1 - pourcentage / 100); 
}

export const TVA = 0.19 ;

function calculerTTC(ht) {

    return (ht * 1.19) ;
     
}

export default calculerTTC;

 