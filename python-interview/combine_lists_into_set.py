from typing import List

def combine_lists(a: List, b: List):
  return set(a) | set(b)

if __name__ == "__main__":
  combine_lists([1, 2, 3], [3, 4, 5])
