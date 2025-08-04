'4 - Escreva um programa que apresenta os números divisores de um número. '

#-*- coding: UTF-8 -*-

print("Me dê um número e te darei seus divisores")

valor = int(input("Insira qual será o número: "))
for x in range (1,valor,):
    if valor % x == 0:
        print("O número", x, "é um dos divisores")
        
        
