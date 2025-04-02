"""5 - Escreva um algoritmo que receba um número e imprima uma das mensagens: “é
múltiplo de 3” ou “não é múltiplo de 3”. """

print("Me dê um valor e te direi se ele é multiplo de 3 ou não")
valor = float(input("Qual o valor?"))
resposta = valor%3
if resposta == 0:
    print("O seu valor é múltiplo de 3!")
else:
    print("O seu valor não é múltiplo de 3!")
