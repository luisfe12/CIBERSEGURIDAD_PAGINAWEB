import validators


def Validar(link):
    validarLINK = validators.url(link)

    if validarLINK == True:
        print("el link es valido \n")
        print(link)
        return True
    else:
        print("link invalido \n")
        return False