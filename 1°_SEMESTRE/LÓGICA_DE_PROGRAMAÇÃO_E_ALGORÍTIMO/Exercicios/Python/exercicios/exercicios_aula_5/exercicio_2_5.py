# -*- coding: UTF-8 -*-
'''2) Faça um programa que leia um vetor de 10 números
reais e mostre-os na ordem inversa'''

print("Me dê dez números reais e eu os imprimirei")
notas = []
x = 0 
for x in range (10):
    numero = float(input("Insira o número: "))
    notas.append (numero)
    x = x + 1
print(x)
for i in range (len(notas) -1, -1, -1):
    print (notas[i])
