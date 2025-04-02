#-*- coding: UTF-8 -*- 

print("Me informe qual a sua idade e direi em qual faixa etária você está incluido!")
idade = int(input("Qual a sua idade?"))

if idade <= 2:
    print("Você é um bebê!")
elif idade > 2 and idade <= 12:
    print("Você é uma criança!")
elif idade > 12 and idade <= 23:
    print("Você é um adolescente!")
elif idade > 23 and idade <= 70:
    print("Você é um adulto!")
else:
    print("Você é um idoso!")
