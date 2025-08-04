#-*- coding: UTF-8 -*-
print ("Me dê a quantidade de km percorridos e por quantos dias utilizou o carro alugado que te darei o valor final a pagar")
km = float(input("Quantos quilômetros o carro percorreu?"))
quant_dias = int(input("Quantos dias ficou com o carro?"))
km_rs = km*0.15
dias_rs = quant_dias*60
total = km_rs + dias_rs
print("O total a pagar pelo uso do carro alugado foi %.2f de reais!" %total)
