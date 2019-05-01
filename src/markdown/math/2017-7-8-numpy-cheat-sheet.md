---
layout: post
title: Numpy Cheat Sheet
tags: [math]
use_math: true
---

```python
import numpy as np
```

# Creating arrays

```python
# initialize with values
np.array([[1, 2, 3],[4, 5, 6]])

    >>  array([[1, 2, 3],
    >>         [4, 5, 6]])

# 1d array
np.zeros(4)

    >>  array([ 0.,  0.,  0.,  0.])

# 2d array
np.zeros((4,2))

    >>  array([[ 0.,  0.],
    >>         [ 0.,  0.],
    >>         [ 0.,  0.],
    >>         [ 0.,  0.]])

# multi-dimension array
np.zeros((4,2,3))

    >>  array([[[ 0.,  0.,  0.],
    >>          [ 0.,  0.,  0.]],
    >>  
    >>         [[ 0.,  0.,  0.],
    >>          [ 0.,  0.,  0.]],
    >>  
    >>         [[ 0.,  0.,  0.],
    >>          [ 0.,  0.,  0.]],
    >>  
    >>         [[ 0.,  0.,  0.],
    >>          [ 0.,  0.,  0.]]])

# np.arange(start, end, increment)
np.arange(1,10,0.5)

    >>  array([ 1. ,  1.5,  2. ,  2.5,  3. ,  3.5,  4. ,  4.5,  5. ,  5.5,  6. ,
    >>          6.5,  7. ,  7.5,  8. ,  8.5,  9. ,  9.5])

# np.linspace(start, end, numsteps)
np.linspace(1,10,20)

    >>  array([  1.        ,   1.47368421,   1.94736842,   2.42105263,
    >>           2.89473684,   3.36842105,   3.84210526,   4.31578947,
    >>           4.78947368,   5.26315789,   5.73684211,   6.21052632,
    >>           6.68421053,   7.15789474,   7.63157895,   8.10526316,
    >>           8.57894737,   9.05263158,   9.52631579,  10.        ])
```


# Accessing arrays

```python
# access element
A = np.zeros((3,4))
A[0][0] = 1
A[1,1] = 2
A[2,2] = 3
A

    >>  array([[ 1.,  0.,  0.,  0.],
    >>         [ 0.,  2.,  0.,  0.],
    >>         [ 0.,  0.,  3.,  0.]])

# slicing [start:end:stride], start + n*stride < end
rows = np.size(A,0)
cols = np.size(A,1)

# column 0, rows 0..rows-1
print(A[0:rows:1, 0])
print(A[:,0])

    >>  [ 1.  0.  0.]
    >>  [ 1.  0.  0.]

# sub matrix
A[1:3,1:3]

    >>  array([[ 2.,  0.],
    >>         [ 0.,  3.]])

# array indexing
B = np.arange(10,21)
i = [2, 4, 5]
print(B)
print(B[i])


    >>  [10 11 12 13 14 15 16 17 18 19 20]
    >>
    >>  [12 14 15]

# return intersections of rows 0,2 and columns 0,1
i = [[0,2],[0,1]]
print(A)
print(A[i])

    >>  [[ 1.  0.  0.  0.]
    >>   [ 0.  2.  0.  0.]
    >>   [ 0.  0.  3.  0.]]
    >>
    >>  [ 1.  0.]
```

# Flatten, Ravel, Reshape

```python
# flatten returns a new independant array
print(A.flatten())

    >>  [ 1.  0.  0.  0.  0.  2.  0.  0.  0.  0.  3.  0.]

# ravel returns a new array but accesses the same data
print(A.ravel())

    >>  [ 1.  0.  0.  0.  0.  2.  0.  0.  0.  0.  3.  0.]

# reshape array, new array accesses the same data
A = np.arange(12)
print(A)
A.reshape((3,4))

    >>  [ 0  1  2  3  4  5  6  7  8  9 10 11]
    >>
    >>  array([[ 0,  1,  2,  3],
    >>         [ 4,  5,  6,  7],
    >>         [ 8,  9, 10, 11]])
```

# Stacking

```python
a = np.arange(20)
b = np.arange(100,120)
c = np.vstack((a,b))
print(c)

    >>  [[  0   1   2   3   4   5   6   7   8   9  10  11  12  13  14  15  16  17
    >>     18  19]
    >>   [100 101 102 103 104 105 106 107 108 109 110 111 112 113 114 115 116 117
    >>    118 119]]
```

# Reducing

```python
# sum
print(np.sum(c,0)) # applying along the first axis will collapse the first dimension, leaving the second
print(np.sum(c,1)) # applying along the second axis will collapse the second dimension, leaving the first
print(np.sum(c))   # apply on all elements

    >>  [100 102 104 106 108 110 112 114 116 118 120 122 124 126 128 130 132 134
    >>   136 138]
    >>  [ 190 2190]
    >>  2380
```