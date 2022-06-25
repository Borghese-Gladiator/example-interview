'''
Implement the RandomizedSet class:

RandomizedSet() Initializes the RandomizedSet object.

3 methods, insert, remove, getRandom

Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the same probability of being returned.

## MY NOTES
- RandomizedSet() - stores dict, set, list
- insert(num)
	- if num in set: throw exception
	- else: add to set, add to list, dict[num] = len(list) - 1
- getRandom() - random element of list
- remove(num)
	- idx = dict[num] # index of number in list
	- dict[list[-1]] = idx # reassign dict index
	- swap(list, -1, idx)
	- list.pop()
	=> how to remove from set with O(1) here? set.remove(num)

'''
import random

class RandomizedSet:
  def __init__(self):
    self.dict = {}
    self.list = []

  def insert(self, num):
    if num in self.dict:
      raise Exception('A very specific bad thing happened.')
    self.list.append(num)
    self.dict[num] = len(self.list) - 1

  def remove(self, num):
    def swap(idxA, idxB):
      temp = self.list[idxA]
      self.list[idxA] = self.list[idxB]
      self.list[idxB] = temp
    idx = self.dict[num]
    self.dict[self.list[-1]] = idx
    swap(idx, -1)
    self.list.pop()
    del self.dict[num]
  
  def getRandom(self):
    return random.choice(self.list)

  def print(self):
    print(self.dict)
    print(self.list)
    print()

if __name__ == "__main__":
  a = RandomizedSet()
  a.insert(1)
  a.insert(2)
  a.insert(3)
  a.getRandom()
  a.print()
  a.remove(1)
  a.print()
  a.remove(2)
  a.print()
