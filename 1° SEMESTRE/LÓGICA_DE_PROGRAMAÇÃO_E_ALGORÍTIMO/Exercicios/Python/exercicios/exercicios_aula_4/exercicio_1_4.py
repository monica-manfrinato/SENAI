'''1) Faça um programa com uma função que retorne o
maior de dois números.'''

#-*- coding: UTF-8 -*-


print("Me dê dois valores,e te direi qual o maior entre os dois!")

def maior_menor():
    valor1 = float(input("Insira o valor:"))
    valor2 = float(input("Insira o valor:"))
    if valor1 > valor2:
        print("O primeiro valor foi o maior!")
    elif valor2 > valor1:
        print("O segundo valor foi o maior!")
    else:
        print("Os valores são iguais! :(")

maior_menor()




        
