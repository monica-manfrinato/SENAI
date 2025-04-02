'''3 - Escreva um programa que apresenta o Fatorial de um número. 
Ex: Fat de 5 = 5X4X3X2X1 = 120. '''

print(" Me dê um valor e te mostrarei qual o seu fatorial! ")

valor = int(input("Qual será o valor?"))
multiplicacao = 1
            
for x in range (valor,0, -1):
    multiplicacao = multiplicacao*x
print("O resultado do fatorial foi de:", multiplicacao)
