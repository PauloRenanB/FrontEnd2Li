alturamasc = []
alturafem = []
masc = []
fem = []

for i in range (0,15):
    genero = input("Qual o sexo? M ou F? ")

    if genero == "M":
        altura = float(input("Qual sua altura? "))
        masc.append(genero)
        alturamasc.append(altura)
    elif genero == "F":
        altura = float(input("Qual sua altura? "))
        fem.append(genero)
        alturafem.append(altura)
    else:
        print("Informe se o genero é M ou F")

maioraltura = 0
for i in alturafem:
    if i > maioraltura:
        maioraltura = i

for i in alturamasc:
    if i > maioraltura:
        maioraltura = i

menoraltura = 0
for i in alturafem:
    if menoraltura == 0:
        menoraltura = i
    elif i > maioraltura:
        maioraltura = i

for i in alturamasc:
    if menoraltura == 0:
        menoraltura = i
    elif i > maioraltura:
        maioraltura = i

media = sum(alturamasc) / len(alturamasc)

print(f"Maior altura: {maioraltura}")
print(f"Menor altura: {menoraltura}")
print(f"Media da altura masculina: {media}")
print("Quantidade de mulheres: ", len(alturafem))