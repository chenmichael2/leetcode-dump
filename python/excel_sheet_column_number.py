def title_to_number(column_title):
    print('input', column_title)
    letterArr = ['0', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    answer = 0
    reverse = column_title[::-1]
    lists = list(reverse)
    print()
    for i in range(len(lists)):
        number = letterArr.index(lists[i])
        answer += (26 ** i) * number
    return answer


print(title_to_number('ABA'))