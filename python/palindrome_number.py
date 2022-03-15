from distutils.command.build_scripts import first_line_re


class Solution:
    def isPalindrome(self, x: int) -> bool:
        string = str(x)
        length = len(string)
        print(string, length)
        if length == 1:
            return False
        else:
            print("longer than 1")
            if length % 2 == 0:
                print("even")
                print(length / 2)
                first_half_index = int((length / 2))
                second_half_index = first_half_index
                first_half = string[0:first_half_index]
                second_half = string[second_half_index:][::-1]
                if first_half == second_half:
                    print('palindrome')
                    return True
                else:
                    print('not palindrome')
                    return False
            else: 
                print("odd")
                print((length - 1) / 2)
                first_half_index = int(((length - 1) / 2))
                second_half_index = first_half_index + 1
                first_half = string[0:first_half_index]
                second_half = string[second_half_index:][::-1]
                if first_half == second_half:
                    print('palindrome')
                    return True
                else:
                    print('not palindrome')
                    return False
                
    
s = Solution()

s.isPalindrome(311113)