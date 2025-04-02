#-*- coding: UTF-8 -*- 

print("Me dê qual a temperatura atual e te direi como o clima está")
temperatura = float(input("Qual o temperatura atual?"))

if temperatura <= 15:
    print("O clima está muito frio!")
elif temperatura > 15 and temperatura < 23:
    print("O clima está frio!")
elif temperatura >= 23  and temperatura < 26:
    print("O clima está agradável!")
elif temperatura >= 26  and temperatura <= 30:
    print("O clima está calor!")
else:
    print("O clima está muito quente!")
