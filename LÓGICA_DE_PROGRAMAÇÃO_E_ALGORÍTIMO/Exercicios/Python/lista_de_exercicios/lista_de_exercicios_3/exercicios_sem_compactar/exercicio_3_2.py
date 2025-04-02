'''Escreva um programa em Python que, dado um número inteiro positivo, determine
se ele é um número perfeito. Um número perfeito é um número que é igual à soma
de seus divisores positivos (excluindo ele mesmo). Por exemplo, 6 é um número
perfeito, pois seus divisores são 1, 2 e 3, e 1 + 2 + 3 = 6.'''

#-*- coding: UTF-8 -*-

print("Me dê um valor inteiro e te direi se ele é perfeito ou não!")

soma = 0 

def perfeito ():
    global soma
    valor = int(input("Insira o valor:"))
    
    for x in range (valor -1, 0, -1): 
        if valor % x == 0:
            soma = soma + x
    if soma == valor:
        print(f"O número {valor} é um número perfeito!")
    else:
        print(f" O número {valor} não é um número perfeito :( ")
        
perfeito()

