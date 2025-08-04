#-*- coding: UTF-8 -*-

print("Olá! informe os valores dos 5 pratos escolhidos no restaurante, e caso atinja um certo valor, você ganhará um desconto!")

preco_total = 0
for x in range (5):
    preco = float(input("Insira o valor do prato: "))
    preco_total += preco
                  
if preco_total > 200:
    desconto =  5*preco_total/100
    com_desconto = preco_total - desconto
    print(f'''Você atingiu o preço necessário para obter o desconto!
Seu antigo valor de {preco_total} sofreu uma diminuição de 5 porcento! Agora ele é de %.2f reais!''' %com_desconto )
else:
    print(f'''Você não atingiu o preço necessário para obter o desconto...
O preço a pagar contiua sendo de {preco_total} :( ''')

          
