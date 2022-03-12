class Solution:
    def isPalindrome(self, x: int) -> bool:
        string = str(x)
        length = len(string)
        print(string, length)
        print(string[1])
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
    
s = Solution()

s.isPalindrome(31132)