# Je nettoie déjà mes codes après écriture donc j'en ai créé un
def t(l):
 for i in range(len(l)):
    for j in range(len(l)-1-i):
     if l[j]>l[j+1]:l[j],l[j+1]=l[j+1],l[j]
 return l
print(t([64,34,25,12,22,11,90]))