
export const fn = (empanadas_3, empanadas_4, empanadas_5) => {

   let totalEmpanadas = (empanadas_3 + empanadas_4 + empanadas_5);
   let costoTotal = (empanadas_3 / 3) * 12 + (empanadas_4 / 3) * 14 + (empanadas_5 / 3) * 16;
   let aux = 0;

   if (totalEmpanadas >= 40) {
      throw new error("No se admite numeros mayor que 40")
   } else if (totalEmpanadas % 3 !== 0) {
      throw new error("El número tiene que ser multiplo de 3");
   } else if (totalEmpanadas < 0) {
      throw new error("El número no puede ser menor que 0");
   } else if ((empanadas_3 < 0) || (empanadas_4 < 0)|| (empanadas_5 < 0)) {
      throw new error("El número no puede ser menor que 0");
   }

   if (costoTotal < 14 ){
      aux = Math.floor(costoTotal) + 1;
      costoTotal = aux;
   } else if ((costoTotal > 26) && (costoTotal < 142)){
      aux = Math.floor(costoTotal) + 1;
      costoTotal = aux;
   } 
 
   //  // Calcular el costo medio por mitad para cada tipo de empanada
   // let costosMedios = [(empanadas_3 / 3) * 12, (empanadas_4 / 3) * 14, (empanadas_5 / 3) * 16];
   // let aux = 0;

   // costosMedios.sort((a, b) => a - b);
   // for (let i = 0; i < 3; i++) {
   //    if (costosMedios[i] <14) {
   //       aux += Math.floor(costosMedios[i]) + 1;
   //    } else if (costosMedios[i] < 142) {
   //       aux += Math.floor(costosMedios[i]) + 1;
   //    } else if (costosMedios[i] < 139) {
   //       aux += Math.floor(costosMedios[i]) + 1;   
   //    } 
   // }
   // costosMedios = aux-2;
   // return costosMedios; //;

   return costoTotal; //;
};

console.log(fn(3, 3, 0));