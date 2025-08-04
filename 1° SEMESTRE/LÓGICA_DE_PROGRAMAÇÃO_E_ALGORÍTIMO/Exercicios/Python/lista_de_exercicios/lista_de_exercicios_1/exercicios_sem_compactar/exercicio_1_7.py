'''7 - Em uma empresa paga-se R$ 19,50 a hora e recolhe-se para o imposto de renda 10%
dos salários acima de R$ 1500,00. Dado o número de horas trabalhadas por um
funcionário, informar o valor do seu salário líquido.'''

#-*- coding: UTF-8 -*- 
print("Me dê a quantidade de horas trabalhadas em sua empresa e te direi qual o valor do seu salário líquido")  
horas = float(input("Quantas horas de trabalho você tem mensalmente?")) 
salario_bruto= horas*19.50  
  
if salario_bruto>= 1500: 
    print("Será descontado 10% do seu salário segundo o imposto de renda") 
    descontar = salario_bruto*10/100  
    salario_liquido = salario_bruto - descontar  
    print("O seu salário líquido é de",salario_liquido,"reais!") 
else:  
    print("O seu salário líquido é de",salario_bruto,"reais!")

