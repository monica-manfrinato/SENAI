'''
Escreva um programa que leia dois números e que
pergunte qual operação você deseja realizar: soma (+),
subtração (-), multiplicação (*) e divisão (/). Exiba o
resultado da operação solicitada.
'''
#-*- coding: UTF-8 -*-
print("Me dê dois valores e qual operação deseja realizar entre os dois e te darei esse resultado")
valor1 = float(input("Qual o primeiro valor"))
valor2 = float(input("Qual o segundo valor"))
print("""
Para divisão digite: /
Para multiplicação digite: *
Para soma digite: +
Para subtração digite: -
""")

operacao = input("Qual a operação que deseja realizar?")

if operacao == "+":
    resposta = valor1 + valor2
    print("O resultado da sua soma foi de",resposta)
elif operacao == "-":
    resposta = valor1 - valor2
    print("O resultado da sua subtração foi de",resposta)
elif operacao == "*":
    resposta = valor1 * valor2
    print("O resultado da sua multiplicação foi de",resposta)
elif operacao == "/":
    resposta = valor1 / valor2
    print("O resultado da sua divisão foi de",resposta)
else:
    print("Insira um símbolo válido!")
