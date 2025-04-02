'''Você está participando de um evento que conta com
uma contagem regressiva antes de algo grande acontecer. Crie
uma função que imprima a contagem regressiva até zero. A cada
número, ele deve ser impresso, e ao final deve aparecer uma
mensagem de celebração!'''

#-*- coding: UTF-8 -*-

print("Vou fazer uma contagem regressiva para você!")

def contagem ():
    valor = int(input("Qual o primeiro número da contagem regressiva?"))
    for x in range (valor, 0, -1):
        print(x)
    print("Uhuuu parabéns!!!")

contagem()
