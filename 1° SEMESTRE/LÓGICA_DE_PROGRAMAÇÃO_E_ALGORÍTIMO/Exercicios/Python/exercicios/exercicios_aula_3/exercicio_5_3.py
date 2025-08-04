'''5 - Entrar com sexo de várias pessoas e imprimir quantas
pessoas são do sexo masculino (considerar m ou M).'''

#-*- coding: UTF-8 -*-

print("Me dê o sexo de várias pessoas e te direi quantas delas são do sexo masculino!")
print("Caso deseje encerrar o programa, por favor digite 'parar' ")
quant_masc = 0
quant_fem = 0
while True:
    sexo = input("Qual o sexo dessa pessoa?")
    if sexo == "masculino" or sexo == "Masculino":
        quant_masc = quant_masc + 1
    elif sexo == "feminino" or sexo == "Feminino":
        quant_fem = quant_fem + 1
    else:
        quant_total = quant_fem + quant_masc
        print("Agora que você já acabou de inserir as respostas vou te mostrar o resultado!!")
        print(f"Das {quant_total} pessoas inseridas, um total de {quant_masc} são do sexo masculino!")
        break
    
