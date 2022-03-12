class Solution:
    def isPalindrome(self, x: int) -> bool:
        string = str(x)
        print(string, len(string))
        print(string[1])
        if (len(string) == 1):
            return False
        else:
            print("longer than 1")
    
s = Solution()

s.isPalindrome(3113)