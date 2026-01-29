'2 - Faça um programa que calcule a soma dos primeiros 50 números pares.'

#-*- coding: UTF-8 -*-

print("Irei somar os 50 primeiros números pares a seguir!")

soma = 0

for x in range (0,101,2):
    soma = soma + x
print("A soma dos 50 primeiros números pares é de: ", soma)
