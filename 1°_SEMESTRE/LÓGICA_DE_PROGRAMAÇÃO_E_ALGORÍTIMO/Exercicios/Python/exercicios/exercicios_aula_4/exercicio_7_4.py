'''7) Faça um programa com uma função chamada
somaImposto. A função possui dois parâmetros formais:
taxaImposto, que é a quantia de imposto sobre vendas
expressa em porcentagem, e custo, que é o custo de um
item antes do imposto. A função "altera" o valor de custo
para incluir o imposto sobre vendas.'''

#-*- coding: UTF-8 -*-

print("Me dê as informações de imposto e do valor do produtoe te darei o seu novo preço! ")


taxaImposto = float(input("Qual a porcentagem do imposto sobre o produto?"))
custo = float(input("Qual o preço do produto?"))

def somaImposto():
    global taxaImposto,custo
    valor = (taxaImposto*custo/100)
    custo = custo + valor
    print("O novo valor com o imposto adicionado é de: ", custo)

somaImposto()
    
