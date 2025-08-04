'''3 - Solicitar a idade de várias pessoas e imprimir: Total de pessoas com menos de
21 anos. Total de pessoas com mais de 50 anos. O programa termina quando idade
for = -99.'''

#-*- coding: UTF-8 -*-

print("Me dê várias idades e te direi quantas dessas pessoas tem menos de 21 e quantas tem mais do que 50 anos!")
print("Para parar de enviar números, digite '-99' ")

menos_21 = 0
mais_50 = 0

while True:
    idade = int(input("Qual a idade?"))
               
    if idade < 20 and idade >= 0:
        menos_21 = menos_21 + 1
                
    elif idade > 50:
        mais_50 = mais_50 + 1
    elif idade == -99:
        print (f"""A contagem foi encerrada!
               O total com menos de 21 anos foi de {menos_21} pessoas!
               E o total com mais de 50 foi de {mais_50} pessoas!""")
        break
