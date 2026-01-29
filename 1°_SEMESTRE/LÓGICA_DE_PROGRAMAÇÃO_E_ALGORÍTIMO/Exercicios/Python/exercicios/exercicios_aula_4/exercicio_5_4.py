'''5) Faça um programa com uma função que receba o
raio (R) de um círculo e retorne a sua área (A = PI * R2
'''

#-*- coding: UTF-8 -*-

print("Me dê o raio de um círculo e te direi qual sua área!")

def area ():
    raio = int(input("Insira o raio do círculo: "))
    pi = 3.14
    return(pi*(raio**2))

print(area())
