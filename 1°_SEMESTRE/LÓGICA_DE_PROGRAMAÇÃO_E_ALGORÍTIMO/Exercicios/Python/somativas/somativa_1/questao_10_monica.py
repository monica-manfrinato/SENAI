#-*- coding: UTF-8 -*-

print("Olá! Me dê um valor inteiro e te direi se ele é divisível por 3 e por 5!")
valor = int(input("Insira o valor: "))
if valor%3 == 0 and valor%5 == 0:
    print("Esse valor é divisível por 3 e por 5!")
else:
    print("Esse valor não é divisível por 3 e 5...")
