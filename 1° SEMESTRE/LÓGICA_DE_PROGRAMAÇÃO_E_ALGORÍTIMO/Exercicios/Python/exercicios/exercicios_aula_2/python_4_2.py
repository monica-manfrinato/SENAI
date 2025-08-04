'''
Escreva um programa para aprovar o empréstimo
bancário para a compra de uma casa. O programa deve
perguntar o valor da casa a comprar, o salário e a
quantidade de anos a pagar. O valor da prestação mensal
não pode ser superior a 30% do salário. Calcule o valor da
prestação como sendo o valor da casa a comprar dividido
pelo número de meses a pagar.
'''
#-*- coding: UTF-8 -*-
print("Me dê os dados a seguir para que seu empréstimo de dinheiro para comprar a casa possa ou não ser aprovado")

valor_casa = float(input("Qual o valor da casa?"))
salario = float(input("Qual o valor do seu salário?"))
anos = float(input("Quantos anos terá para pagar?"))

meses = anos*12
prestacao_mensal = valor_casa/meses
porcent_salario = salario*30/100

if prestacao_mensal > porcent_salario:
    print("O seu empréstimo não pôde ser realizado!")
else:
    print("Parabéns! O seu empréstimo foi aceito!")
