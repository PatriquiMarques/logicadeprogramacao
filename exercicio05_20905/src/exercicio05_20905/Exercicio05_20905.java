
package exercicio05_20905;

import java.util.Scanner;


public class Exercicio05_20905 {

  
    public static void main(String[] args) {
        
        Scanner s = new Scanner(System.in);
        
        double celsius = s.nextDouble();
        double fahrenheit = (1.8*celsius) +32;
        double kelvin = celsius + 273.15;      
        
        System.out.println("Ceulsiu: " + celsius +"°C"); 
        System.out.println("Fahrenheit: " + fahrenheit +"°C"); 
        System.out.println("Kelvin: " + kelvin +"°C"); 
                
                
    }
    
}
