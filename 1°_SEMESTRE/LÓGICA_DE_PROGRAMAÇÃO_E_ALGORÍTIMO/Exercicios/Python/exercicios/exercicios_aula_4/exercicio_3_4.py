'''3) Faça um programa com uma função que receba o lado
(l) de um quadrado e retorne a sua área (A = lado2).'''

#-*- coding: UTF-8 -*-

print("Me dê o lado de um quadrado e te retornarei a sua área!")

def area ():
    lado = float(input("Insira o valor do lado: "))
    return (lado**2)

print(area())
