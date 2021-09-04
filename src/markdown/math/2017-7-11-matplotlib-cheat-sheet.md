---
layout: post
title: Matplotlib Cheat Sheet
tags: [math]
use_math: true
---

```python
import matplotlib.pyplot as plt
import numpy as np
```

# Plot

```python
%matplotlib inline
xs = np.linspace(0,4)
plt.plot(xs, xs**2, 'r--', label='Man')
plt.plot(xs, xs**3, 'go', label='Car')
plt.plot(xs, xs**4, 'b', label='Plane')

# legend
plt.legend()

# axis
ax = plt.gca()
ax.set_title("exponentials", size=14, weight='bold')
ax.set_xlabel("time")
ax.set_ylabel("distance")
```

![png](/personal-blog/assets/matplotlib-cheat-sheet/output_2_1.png)


# Error bars

```python
# error bars
yerr = np.random.random_integers(-4,4,xs.shape)
plt.errorbar(xs, xs**2, yerr=yerr)
```

![png](/personal-blog/assets/matplotlib-cheat-sheet/output_4_1.png)


# 3D Plots

```python
from mpl_toolkits.mplot3d import Axes3D
```


```python
fig = plt.figure()
ax = Axes3D(fig)
t = np.linspace(0, 5*np.pi, 501)
ax.plot(np.cos(t), np.sin(t), t)
```

![png](/personal-blog/assets/matplotlib-cheat-sheet/output_7_1.png)


# Subplots

```python
# plt.subplot(rows, columns, active)
plt.subplot(2,2,1)
plt.plot(xs, xs)
plt.subplot(2,2,2)
plt.plot(xs, xs**2)
plt.subplot(2,2,3)
plt.plot(xs, xs**3)
plt.subplot(2,2,4)
plt.plot(xs, xs**4)
```

![png](/personal-blog/assets/matplotlib-cheat-sheet/output_9_1.png)

