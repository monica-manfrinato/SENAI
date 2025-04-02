'''
Escreva um programa que pergunte o salário do
funcionário e calcule o valor do aumento. Para salários
superiores a R$ 1.250,00, calcule um aumento de 10%.
Para os inferiores ou iguais, de 15%.
'''

#-*- coding: UTF-8 -*- 

print("Me dê o valor do seu salário e calcularei o valor do aumento de acordo com os dados recebidos")
salario = float(input("Qual o valor do seu salário atual?"))
if salario <= 1250.00:
    porcentagem = salario*15/100
    salario_final = salario + porcentagem
    print(f"O seu salário obteve um aumento de 15 porcento! Agora seu novo salário será de{salario_final}")
else:
    porcentagem = salario*10/100
    salario_final = salario + porcentagem
    print(f"O seu salário obteve um aumento de 10 porcento! Agora seu novo salário será de {salario_final}")
    
