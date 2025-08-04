'''8) Escreva um programa, com uma função para ler a idade
de uma pessoa e informar a sua classe eleitoral, conforme:
• Não-eleitor (abaixo de 16 anos).
• Eleitor obrigatório (entre 18 e 65 anos).
• Eleitor facultativo (entre 16 e 18 ou maior de 65
anos).'''

#-*- coding: UTF-8 -*-

print("Informe a sua idade e te retornarei qual a sua classe eleitoral")

def votar ():
    idade = int(input("Insira a sua idade: "))
    if idade > 0 and idade < 16:
        print("Você ainda não é eleitor!")
    elif idade >= 16 and idade < 18 or idade > 65:
        print("Você é um eleitor facultativo!")
    elif idade >= 18 and idade <= 65:
        print("Você é um eleitor obrigatório!")
    else:
        print ("Insira uma idade válida!")

votar()
    
