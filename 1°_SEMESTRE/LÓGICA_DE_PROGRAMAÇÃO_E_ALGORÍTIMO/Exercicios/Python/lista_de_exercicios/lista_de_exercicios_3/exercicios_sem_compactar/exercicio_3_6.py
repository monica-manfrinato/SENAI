'''Enunciado: Você está viajando para diferentes regiões do mundo
e precisa converter as temperaturas de Celsius para Fahrenheit
e vice-versa. Crie uma função que converta uma temperatura de
acordo com a escolha do usuário.
'''

#-*- coding: UTF-8 -*-

print("Vou converter a temperatura de acordo com a sua escolha!")

def tipo_temp ():

    tipo_temp = input("Se deseja inserir um valor em Fahrenheit digite F, e se for Celsius digite C")
    
    if tipo_temp == 'F' or tipo_temp == 'f':
        
        temperatura = float(input("Quantos Fahrenheit?"))
        result_C = ( temperatura -32)/1.8
        print(f"A temperatura em Celsius resulta em %.3f " %result_C)
        
    elif tipo_temp == 'C' or tipo_temp == 'c':
        
        temperatura = float(input("Quantos Celsius?"))
        result_F =  temperatura * 1.8 + 32
        print(f"A temperatura em Fahrenheit resulta em %.3f " %result_F)
        
    else:
        print("Insira um tipo de temperatura válido!")
        
tipo_temp()
