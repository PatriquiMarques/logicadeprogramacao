
package exercicio3_2905;

import java.util.Scanner;

public class Exercicio3_2905 {

   
    public static void main(String[] args) {
        
        Scanner leia = new Scanner(System.in);
        
        System.out.println("Digite quanto anos você tem ");
        
       int anos = leia.nextInt();
       
        System.out.println("Digite a quantidade de meses que você tem");
        
       int meses = leia.nextInt();
       
        System.out.println(" Digite a quantidade de dias que você tem");
        
        int dias = leia.nextInt();
        
        int totaldias = ( dias + (meses * 30) + ( anos* 365));
        
        System.out.println(" Você tem " + totaldias + " dias");
       
        
    
    }
    
}
