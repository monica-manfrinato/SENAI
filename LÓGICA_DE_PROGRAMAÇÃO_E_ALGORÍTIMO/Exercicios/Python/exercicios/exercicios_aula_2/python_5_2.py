'''
Escreva um programa que calcule o preço a pagar pelo
fornecimento de energia elétrica. Pergunte a quantidade
de kWh consumida e o tipo de instalação: R para
residências, I para indústrias e C para comércios. Calcule o
preço a pagar, de acordo com a tabela a seguir.
'''
#-*- coding: UTF-8 -*-

print("Me dê as informações abaixo e te apresentarei o preço a pagar pelo fornecimento de energia elétrica")
kWh = float(input("Quantos kWh são consumidos no local?"))
tipo_instalacao = input("""Qual o tipo de instalação? (digite as letras a seguir para representa-los)
I para indústrias
R para residências
C para comércio
""")

if tipo_instalacao == "R" and kWh <=500:
    preco = kWh*0.40
    print("O preço a pagar será de",preco)
elif tipo_instalacao == "R" and kWh >500 and Wh <=1000:
    preco = kWh*0.65
    print("O preço a pagar será de", preco)

#####################################################
    
elif tipo_instalacao == "C" and kWh <=2500 :
    preco = kWh*0.55
    print("O preço a pagar será de", preco)
elif tipo_instalacao == "C" and kWh >2500 and Wh <=5000:
    preco = kWh*0.60
    print("O preço a pagar será de", preco)

#####################################################
    
elif tipo_instalacao == "I" and kWh <=10000 :
    preco = kWh*0.55
    print("O preço a pagar será de", preco)
elif tipo_instalacao == "I" and kWh >10000 and Wh <=15000:
    preco = kWh*0.60
    print("O preço a pagar será de", preco)
    
