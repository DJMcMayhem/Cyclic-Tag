productions = ('00', '000')
l = len(productions)
word = '11001'

i = 0
while word.find('1') != '1' and word != '':
        if word[0] == '1':
                word = word + productions[i % l]
        i += 1
        word = word[1:]
        print(word)
        if i > 20:
                break
