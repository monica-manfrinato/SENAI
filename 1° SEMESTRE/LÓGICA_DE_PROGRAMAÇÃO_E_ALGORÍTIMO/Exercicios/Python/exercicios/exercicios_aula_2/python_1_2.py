"""
Escreva um programa que pergunte a velocidade do
carro de um usuário. Caso ultrapasse 80 km/h, exiba uma
mensagem dizendo que o usuário foi multado. Nesse
caso, exiba o valor da multa, cobrando R$ 5 por km acima
de 80 km/h
"""
#-*- coding: UTF-8 -*- 

print("Me dê a velocidade do seu carro e te direi se foi multado ou não por ultrapassar o limite, e o valor da multa caso exista")
velocidade = int(input("Qual a velocidade?"))
if velocidade > 80:
                 print("Você ultrapassou a velocidade permitida!")
                 valor = (velocidade - 80)*5
                 print(f"Por isso, terá que pagar {valor} como multa!")
else:
    print("Parabéns! Você está dentro da velocidade permitida!")
