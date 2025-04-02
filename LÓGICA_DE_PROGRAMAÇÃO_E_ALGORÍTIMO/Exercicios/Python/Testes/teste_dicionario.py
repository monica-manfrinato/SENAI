
'''
tabela = {"Alface": 0.45,
"Batata": 1.20,
"Tomate": 2.30,
"Feijão": 1.50}

print(tabela["Tomate"])
print(tabela)
tabela["Tomate"] = 2.50
print(tabela["Tomate"])
tabela["Cebola"] = 1.20
print(tabela)
'''

#########################################################

'''
tabela = {"Alface": 0.45,
 "Batata": 1.20,
 "Tomate": 2.30,
 "Feijão": 1.50}
print(tabela["Manga"])
'''

#########################################################
'''
tabela = {"Alface": 0.45,
 "Batata": 1.20,
 "Tomate": 2.30,
 "Feijão": 1.50}
print("Manga" in tabela)
print("Batata" in tabela)
'''

#########################################################
'''
tabela = {"Alface": 0.45,
 "Batata": 1.20,
 "Tomate": 2.30,
 "Feijão": 1.50}
print(tabela.keys())
print(tabela.values())
'''

########################################################

tabela = {"Alface": 0.45,
 "Batata": 1.20,
 "Tomate": 2.30,
 "Feijão": 1.50}
while True:
    produto = input("Digite o nome do produto, fim para terminar: ")
    if produto == "fim":
        break
    if produto in tabela:
        print("Preço: %5.2f" % tabela[produto])
    else:
        print("Produto não encontrado!")
        











