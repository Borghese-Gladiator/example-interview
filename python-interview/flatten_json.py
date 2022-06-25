"""
TASK
Figure out easy way to print all values given a JSON string in Python

REFERENCES
https://stackoverflow.com/questions/53978542/how-to-use-collections-abc-from-both-python-3-8-and-python-2-7

ARCHIVE
def rec_flatten_dict(my_dict: Dict, existing_dict: Dict):
  # Deep flatten dictionary
  for k, v in my_dict.items():
    if not isinstance(v, dict):
      existing_dict[k] = v
    else:
      rec_flatten_dict(v, existing_dict)
  return existing_dict
"""
import json
from typing import Dict, List
try:
  # Python 3.7 and up - MutableMapping was moved to collections.abc
  from collections.abc import MutableMapping
except ImportError:
  from collections import MutableMapping

def rec_flatten_dict(dictionary, parent_key=False, separator='.'):
  """
  Turn a nested dictionary into a flattened dictionary
  :param dictionary: The dictionary to flatten
  :param parent_key: The string to prepend to dictionary's keys
  :param separator: The string used to separate flattened keys
  :return: A flattened dictionary
  """
  items = []
  for key, value in dictionary.items():
    new_key = str(parent_key) + separator + key if parent_key else key
    if isinstance(value, MutableMapping):
      items.extend(rec_flatten_dict(value, new_key, separator).items())
    elif isinstance(value, list):
      for k, v in enumerate(value):
        items.extend(rec_flatten_dict({str(k): v}, new_key).items())
    else:
      items.append((new_key, value))
  return dict(items)

def rec_flatten_list(nestedList: List):
  """
  Deep flatten list
  """
  # check for empty list
  if not nestedList:
    return nestedList
  # check if first element is a list
  if isinstance(nestedList[0], list):
    # flatten first element with * unpack operator
    return rec_flatten_list(*nestedList[:1]) + rec_flatten_list(nestedList[1:])
  # flatten rest of list until empty
  return nestedList[:1] + rec_flatten_list(nestedList[1:])
  

def flatten_json(json_str: str):
  input_dict = json.loads(json_str)
  flatten_dict = rec_flatten_dict(input_dict)
  flatten_list = rec_flatten_list(list(flatten_dict.values()))
  return flatten_list

if __name__ == "__main__":
  input_json_str = json.dumps({
    "a" : { "a": "a" },
    "b": ["b", "c"],
    "c": "d",
    "d": 1,
    "e": "string"
  })
  output_list = ["a", "b", "c", "d", 1, "string"]
  print("IS WORKING: ", output_list == flatten_json(input_json_str))