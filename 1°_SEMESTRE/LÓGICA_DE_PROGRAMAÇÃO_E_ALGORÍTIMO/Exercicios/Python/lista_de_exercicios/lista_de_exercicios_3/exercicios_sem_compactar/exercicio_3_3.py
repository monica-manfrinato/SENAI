'''Você precisa de uma tabela de multiplicação para estudar, então crie
uma função que gere a tabela de multiplicação de um número fornecido pelo
usuário. A tabela deve ir de 1 até 10'''

#-*- coding: UTF-8 -*-

print("Digite um número e te darei sua tabuada até o 10!")

def tabuada ():
    valor = int(input("Insira o número:"))
    for x in range (1, 11):
        print(valor, "x", x, "==", valor*x)

tabuada()
