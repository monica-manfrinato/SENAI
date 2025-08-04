'''4) Faça um programa com uma função que receba a base
e a altura de um triângulo e retorne a sua área (A = (base
x altura) / 2).'''

#-*- coding: UTF-8 -*-

print("Me dê a base e a altura de um triângulo e te direi qual sua área")

def area ():
    base = float(input("Qual a base do triângulo"))
    altura = float(input("Qual a altura do triângulo"))
    return(base*altura/2)

print(area())
