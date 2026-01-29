"""Escreva um programa com uma função que leia a altura e o raio de um cilindro e
imprima o volume do mesmo (Limite a 2 casas decimais o retorno)"""

#-*- coding: UTF-8 -*-

print("Me dê o valor da altura e do raio do cilindro e te darei seu volume!")

def volume_cilindro ():
    altura = float(input("Insira a altura do cilindro: "))
    raio = float(input("Insira o raio do cilindro: "))
    volume = 3.14 * raio**2 * altura
    print(f" O volume desse cilindro é de %.2f " %volume)

volume_cilindro()
    
