

package pkg01.aula.operadores;

import java.util.Scanner;

public class exercicio2_2905 {
    
     public static void main(String[] args) {
        Scanner leia = new Scanner(System.in);
        
       double alt, larg, result;
       
         System.out.println(" Digite a altura do retângulo");
         alt = leia.nextDouble();
         System.out.println(" Digite a largura do retângulo");
         larg = leia.nextDouble();
          
         result = alt * larg;
         
         System.out.println(" A área do retângulo é " + result);
 
}
}
