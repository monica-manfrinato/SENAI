"""Faça um algoritmo para ler um número inteiro e informar se o número é par ou ímpar."""

print("Me dê um valor e te direi se ele é par ou ímpar")
valor = float(input("Qual é o valor?"))
resposta = valor%2
if resposta == 0:
    print("O seu valor é par!")
else:
    print("O seu valor é ímpar!")
