#-*- coding: UTF-8 -*-
print ("Me dê o preço de uma mercadoria, o percentual de desconto e te darei o valor do desconto e o preço final a pagar") 
mercadoria = input("Qual é a mercadoria?") 
valor = float(input("Qual o preço dessa mercadoria?"))
desconto = float(input("E qual é a porcentagem de desconto?"))
valor_desc = valor*desconto/100 
print("O valor do desconto foi de", valor_desc, "reais!") 
preco_fim = valor - valor_desc  
print("O valor final a pagar pelo(a)", mercadoria, "foi de",preco_fim) 
