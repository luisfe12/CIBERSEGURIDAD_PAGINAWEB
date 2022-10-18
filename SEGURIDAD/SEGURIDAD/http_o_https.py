from urllib.parse import urlparse

def ver_tipod_link(link):
    partes_link = urlparse(link)

    if partes_link.scheme == "http":
        print("El link es {}".format(partes_link.scheme))
        return 'http'
    elif partes_link.scheme == "https":
        print("El link es {}".format(partes_link.scheme))
        return 'https'
    