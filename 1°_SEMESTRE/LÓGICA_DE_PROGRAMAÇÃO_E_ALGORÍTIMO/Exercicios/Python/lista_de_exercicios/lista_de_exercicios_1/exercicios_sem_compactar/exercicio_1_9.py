#-*- coding: UTF-8 -*- 
print("Irei calcular se seu peso está dentro do favorável segundo sua altura e seu peso!")
altura = float(input("Qual a sua altura em metros?"))
peso = float(input("Qual o seu peso em quilogramas?"))
IMC = peso/(altura**2)

if IMC < 20:
    print("Você está abaixo do peso!")
elif IMC >= 20 and IMC < 25:
    print("Você está no seu peso correto!")
elif IMC >= 25 and IMC < 30:
    print("Você está com sobre peso!")
elif IMC >= 30 and IMC < 40:
    print("Você está obeso!")
else:
    print("Você está obeso mórbido!")
