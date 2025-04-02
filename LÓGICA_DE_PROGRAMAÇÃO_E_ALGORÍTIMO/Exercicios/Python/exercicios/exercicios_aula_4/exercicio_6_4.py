'''6) Faça um programa com uma função que necessite de
um argumento. A função retorna o valor do caractere 'P',
se o seu argumento for positivo, e 'N', se o seu argumento
for zero ou negativo.
'''

#-*- coding: UTF-8 -*-

print("Me dê um valor e retornarei 'P' caso seja positivo e 'N' caso seja negativo!")

def sinal ():
    valor = float(input("Insira o valor:"))
    if valor >= 0:
        print("P")
    else:
        print("N")

sinal()
