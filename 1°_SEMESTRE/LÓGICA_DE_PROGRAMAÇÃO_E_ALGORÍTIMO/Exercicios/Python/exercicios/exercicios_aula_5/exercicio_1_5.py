# -*- coding: UTF-8 -*-
'''1) Faça um programa que leia um vetor de 5 números
inteiros e mostre-os na tela.'''

print("Me dê cinco números inteiros e eu os imprimirei")
notas = []
for x in range (5):
    nota = int(input("Insira o número: "))
    notas.append (nota)
    x = x + 1
x = 0
while x < len(notas):
    print (notas[x])
    x = x + 1
