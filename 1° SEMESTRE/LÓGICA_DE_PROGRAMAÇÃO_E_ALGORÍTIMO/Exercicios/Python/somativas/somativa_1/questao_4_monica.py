#-*- coding: UTF-8 -*-

print("Olá! Me dê o valor da compra e te direi se você terá um desconto de 10% ou não, e quanto será o novo preço da sua compra!")

preco = float(input("Insira o valor da compra:"))
if preco > 100:
    desconto =  10*preco/100
    com_desconto = preco - desconto
    print(f'''Você atingiu o preço necessário para obter o desconto!
Seu antigo valor de {preco} sofreu uma diminuição de 10 porcento! Agora ele é de %.2f reais!''' %com_desconto )
else:
    print(f'''Você não atingiu o preço necessário para obter o desconto...
O preço a pagar contiua sendo de {preco} :( ''')
