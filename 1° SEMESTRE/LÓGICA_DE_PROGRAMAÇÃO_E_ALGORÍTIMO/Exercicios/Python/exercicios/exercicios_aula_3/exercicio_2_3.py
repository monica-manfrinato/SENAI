"""2 - Entrar com números enquanto forem positivos e
imprimir quantos números foram digitados."""

#-*- coding: UTF-8 -*-

print("Me dê números positivos e direi quantos números você digitou!")
print("Caso digite um valor negativo, o contador será encerrado!")
soma = 0

while True:
    valor = float(input("Qual o valor?"))
    if (valor > 0 ):
        soma = soma + 1
    else:
        print("Que pena que você escolheu parar :( ")
        print("Você digitou", soma , "números!")
        break
