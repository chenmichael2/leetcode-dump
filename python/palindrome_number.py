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
            else: 
                print("odd")
                print((length - 1) / 2)
                first_half_index = int(((length - 1) / 2))
                second_half_index = first_half_index + 2
                first_half = string[0:first_half_index]
                print(first_half)
    
s = Solution()

s.isPalindrome(311113132)