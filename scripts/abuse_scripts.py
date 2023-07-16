
def clean():
    terms = []
    with open('nlp/abuse-terms.txt') as og:
        for line in og:
            if line.lower() not in terms:
                terms.append(line.lower())

    new = open("nlp/abuse-terms-clean.txt", "w")
    for line in terms:
        new.write(line)
    new.close()

def find_abuse():
    pass