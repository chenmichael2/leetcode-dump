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
                first_half_index = ((length - 1) / 2) - 1
                print()
    
s = Solution()

s.isPalindrome(31132)