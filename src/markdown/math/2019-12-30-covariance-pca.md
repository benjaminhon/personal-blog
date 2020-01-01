---
layout: post
title: Covariance Matrix and Principle Component Analysis
tags: [math]
use_math: true
---

# Covariance and Variance

The covariance between 2 variables is the **mean of the product** minus the **product of the mean**

<div>
$$
\begin{align}
  & cov(A,B) = E(AB) - E(A)E(B) \\
  & cov(A,B) = \frac{\sum{a_ib_i}}{N} - \frac{\sum{a_i}}{N}\frac{\sum{b_i}}{N} \\
\end{align}
$$
</div>

The variance of a variable is simple the covariance with itself. Variance measures the variation of a single random variable, whereas covariance is a measure of how much two random variables vary together

<div>
$$
\begin{align}
  & var(A) = cov(A,A) = E(A^2) - E(A)^2 \\
  & var(A) = \frac{\sum{a_i^2}}{N} - (\frac{\sum{a_i}}{N})^2 \\
\end{align}
$$
</div>

A simple analysis

- If *A* and *B* are correlated (positive or negative), *E(AB)* is very much positive
- If *A* and *B* are correlated, E(AB) > E(A)E(B)
- Thus *cov(A,B) = 0* means the A is uncorrelated to B
- The greater *cov(A,B)* the more A is correlated to B

It is important to note that if *E(A)* and *E(B)* are similar in value, it does not mean that they are correlated, it just means that their means are similar, they are only correlated if their values track one another, i.e. if E(AB) is positive 

# Covariance Matrix

The following matrix shows the preference for apples or oranges in a poll, each row represents a person's preference for apples and oranges.

|Apples|Oranges|
|:----:|:----:|
|1|1|
|3|0|
|-1|-1|

the covariance matrix of a 2 variable system is a *2x2* matrix

| |Apples|Oranges|
|:----:|:----:|:----:|
|**Apples**|cov(A,A)|cov(A,B)|
|**Oranges**|cov(B,A)|cov(B,B)|

in our example,

| |Apples|Oranges|
|:----:|:----:|:----:|
|**Apples**|2.67|0.67|
|**Oranges**|0.67|0.67|

observations

- The covariance matrix is symmetric
- the diagonal is the variance of each variable

# Eigen vectors of the Covariance Matrix

