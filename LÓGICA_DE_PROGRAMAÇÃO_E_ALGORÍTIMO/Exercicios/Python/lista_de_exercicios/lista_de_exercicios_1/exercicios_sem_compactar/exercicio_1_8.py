#-*- coding: UTF-8 -*-

print("Me dê seu salário bruto e o valor de cada prestação e te direi se o empréstimo pode ou não ser realizado")  
salario_bruto = float(input("Qual o valor do salário bruto?")) 
prestacao = float(input("Qual o valor da prestação?")) 
porcentagem = salario_bruto*30/100 
if prestacao <= porcentagem: 
    print("Parabéns! O seu empréstimo pode ser concedido!") 
else: 
    print("Infelizmente seu empréstimo não pode ser realizado") 
