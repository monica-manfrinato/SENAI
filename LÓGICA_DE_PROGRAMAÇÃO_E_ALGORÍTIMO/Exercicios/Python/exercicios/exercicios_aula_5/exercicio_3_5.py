# -*- coding: UTF-8 -*-
'''3) Faça um programa que leia 4 notas, mostre as notas e a
média na tela.'''

print("Insira quatro notas e eu direi quais são elas e direi sua média!")

notas = []
soma = 0
for i in range (4):
    nota = float(input("Insira sua nota: "))
    notas.append(nota)
    soma += nota
x = 0
while x < len(notas):
    print ("Sua nota foi: ", notas[x])
    x = x + 1
media = soma/4
print("Sua média foi de:", media)
    
