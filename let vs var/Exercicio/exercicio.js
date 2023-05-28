 let varA ='A'; //b
 let varB ='B'; //c
 let varC ='C'; //a

 console.log(varA, varB, varC);

 const varATemp = varA; // salvo o valor de uma das variavel em algum lugar
 let ab = varA = varB;
 let bc = varB = varC;
 let ca = varC = varC;
 

 console.log(ab, bc, varATemp);

 // ou

 [varA, varB, varC] = [varB, varC, varA]
 console.log(varA, varB, varC);

 