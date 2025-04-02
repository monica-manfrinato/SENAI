'''2) Faça um programa com uma função que receba dois
números e retorne True se o primeiro número for
múltiplo do segundo.'''

#-*- coding: UTF-8 -*-

print("Me dê dois valores e te direi se o primeiro número for múltiplo do segundo!")

def multiplo ():
    valor1 = int(input("Insira o primeiro valor: "))
    valor2 = int(input("Insira o segundo valor: "))
    return (valor2 % valor1 == 0 )

print(multiplo())
