---
layout: post
title: Dimensionality Reduction
tags: [math]
use_math: true
---

# Correlation Analysis

## Pearson Correlation

2 variables *x, y* are positively correlated if *r* is close to 1, negatively if *r* is close to -1 and uncorrelated if *r* is 0

<div>
$$
\begin{align}
  r = \frac{\sum(x_i-\bar{x})(y_i-\bar{y})}{\sqrt{(x_i-\bar{x})^2}\sqrt{(y_i-\bar{y})^2}}
\end{align}
$$
</div>

## Probable error

If the sample size *n* is small, the **probable error of correlation coefficient** *P.E.R* is large, if *n* is large, then *r = 0.1* is still significant

<div>
$$
\begin{align}
  P.E.R = .675 \times \frac{1-r^2}{\sqrt{n}}
\end{align}
$$
</div>

as a rule

- there is no correlation if *r < P.E.R*
- there is certain correlation if *r > 6P.E.R*

## Dimensionality Reduction Using Correlation

Given *y* as a sum of weighted variables, if we want to reduce *X* to a smaller set, we would have to determine the correlation of pairs of *X*. If a pair is highly correlated, we find the correlation of each with respect to *y* and choose the higher correlated *x*

<div>
$$
\begin{align}
  y_i = w_1x_{1i} + w_2x_{2i} + w_3x_{3i} + w_4x_{4i} + ... 
\end{align}
$$
</div>

## Principle Component Analysis

