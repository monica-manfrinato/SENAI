"""1 - Entrar com números e imprimir o triplo de cada
número. O programa acaba quando entrar o número
-999."""

#-*- coding: UTF-8 -*-

print ("Olá! Me dê um valor e te darei o triplo dele!")
print ("Caso deseje encerrar, digite o valor -999")

while True:
    valor = float(input("Digite o valor que iremos triplicar: "))
    if (valor == -999):
        print("Até mais!")
        break
    else:
        triplo = valor*3
        print("O triplo do valor inserido é:", triplo)
