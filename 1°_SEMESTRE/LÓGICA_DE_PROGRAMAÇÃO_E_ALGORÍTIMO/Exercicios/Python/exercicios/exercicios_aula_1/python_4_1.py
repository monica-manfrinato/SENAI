#-*- coding: UTF-8 -*-
print("Me dê o valor do seu salário, e a porcentagem de aumento que te darei o valor do aumento e seu novo salário")
salario = float(input("Qual o valor do seu salário?"))
porcentagem = float(input("Qual a porcentagem de aumento?"))
porcentagem_aumento = (salario*porcentagem)/100
print("O seu salário aumentou em",porcentagem_aumento,"reais!")
novo_salario =  porcentagem_aumento + salario
print("O valor do seu novo salário é de",novo_salario,"reais!")
