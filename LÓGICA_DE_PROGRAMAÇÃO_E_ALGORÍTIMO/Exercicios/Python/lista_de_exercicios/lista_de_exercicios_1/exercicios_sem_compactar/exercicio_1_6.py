"""- Faça um algoritmo para ler dois números inteiros A e B e informar se A é divisível
por B"""

print("Me dê dois números inteiros e te direi se o primeiro é divisível pelo segundo")
valor1 = int(input("Qual o primeiro valor?"))
valor2 = int(input("Qual o primeiro valor?"))
resultado = valor1%valor2
if  resultado == 0:
    print("O primeiro valor é divisível pelo segundo!")
else:
    print("O primeiro valor não é divisível pelo segundo!")
