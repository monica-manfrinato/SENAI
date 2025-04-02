# -*- coding: UTF-8 -*-
'''4) Faça um programa que leia um vetor de 10 caracteres
minúsculos e diga quantas consoantes foram lidas.'''

print ("Digite uma palavra letra por letra e eu te direi quantas consoantes ela tem! Para sair do programa digite 0!")

valor  = []
x = 0
vogais = ['a','e','i','o','u']

for i in range(10):
    letra = input("Insira a letra: ")
    if letra in vogais:
        valor.append(letra)
    else:
        valor.append(letra)
        x += 1

print(" Das 10 letras", x, "são consoantes")
