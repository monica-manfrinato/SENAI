#-*- coding: UTF-8 -*- 

print("Me dê o valor da compra do produto e te direi qual o preço para venda segundo parâmetros de lucro")
valor = float(input("Qual o valor da compra?"))

if valor < 20:
    porcentagem = valor*45/100
    valor_final = valor + porcentagem
    print("O valor final para venda, após adicionar um lucro de 45% o valor final será de", valor_final)
else:
    porcentagem = valor*30/100
    valor_final = valor + porcentagem
    print("O valor final para venda, após adicionar um lucro de 30% o valor final será de", valor_final)
