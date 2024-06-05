
package exercicio04;

import java.util.Scanner;


public class Exercicio04 {

 
    public static void main(String[] args) {
        
        Scanner s = new Scanner(System.in);
               
        
        System.out.println("Qual o total de eleitores");
        double TotalEleitores = s.nextDouble();
        System.out.println("Qual o total de votos validos");
        double TotalVotosValidos = s.nextDouble();
        
        System.out.println("Qual o total de votos em brancos");
        double totalVotosBrancos = s.nextDouble();
        System.out.println("Qual o total de votos nulos");
        double TotalVotosNulos  = s.nextDouble();
              
        double  porcentagemVotosValidos = (TotalVotosValidos/TotalEleitores)*100;
        double  porcentagemVotosBrancos = (totalVotosBrancos/TotalEleitores)*100;
        double  porcentagemVotosNulos = (TotalVotosNulos/TotalEleitores)*100;
        
 
        
        System.out.println("A porcentagem de votos validos é: " + porcentagemVotosValidos +"%" );
        System.out.println("A porcentagem de votos em brancos é: " + porcentagemVotosBrancos +"%"  );       
        System.out.println("A porcentagem de votos nulos é: " + porcentagemVotosNulos +"%"  );
        
        
    }
    
}
