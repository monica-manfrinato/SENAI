'''Você precisa executar cálculos entre dois números
com os operadores matemáticos simples (adição, subtração,
multiplicação e divisão). Crie um programa com 4 funções (uma
para cara operador) que deixe a opção de escolha para o
usuário que irá inserir dois valores e selecionar sua operação'''


#-*- coding: UTF-8 -*-

print("Aqui está uma calculadora, digite a expressão e os valores necessários para realizar o cálculo!")

sinal = input("""Qual será a operação realizada? Utilize:
'-' para subtração
'+' para adição
'/' para divisão
'*' para multiplicação
""")

valor1 = float(input("Insira o primeiro valor: "))
valor2 = float(input("Insira o segundo valor: "))



def soma ():
    global valor1
    global valor2
    soma = valor1 + valor2
    print (f"O resultado da soma entre {valor1} e {valor2} foi de {soma}")
    
def subtracao ():
    subtracao = valor1 - valor2
    print (f"O resultado da subtração entre {valor1} e {valor2} foi de {subtracao}")

def divisao ():
    divisao = valor1 / valor2
    print (f"O resultado da divisão entre {valor1} e {valor2} foi de {divisao}")

def multiplicacao ():
    multiplicacao = valor1 * valor2
    print (f"O resultado da multiplicação entre {valor1} e {valor2} foi de {multiplicacao}")

##########################################################################
    
if sinal == '+':
    soma()
    
elif sinal == '-':
    subtracao()
    
elif sinal == '*':
    multiplicacao()
    
elif sinal == '/':
    divisao()

else:
    print("Insira um sinal válido!")



    
    
    
