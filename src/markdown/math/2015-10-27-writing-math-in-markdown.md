---
layout: post
title: Writing Math In Markdown
tags: [math]
use_math: true
---

The curent markdown syntax is [kramdown][kramdown-syntax] which uses [MathJax][mathjax]. Here are some examples.

<html>
  <table>
    <tr>
      <td>
        <pre><code class="language-tex">
$$
\begin{align*}
  & \phi(x,y) = \phi \left(\sum_{i=1}^n x_ie_i, \sum_{j=1}^n y_je_j \right)
  = \sum_{i=1}^n \sum_{j=1}^n x_i y_j \phi(e_i, e_j) = \\
  & (x_1, \ldots, x_n) \left( \begin{array}{ccc}
      \phi(e_1, e_1) & \cdots & \phi(e_1, e_n) \\
      \vdots & \ddots & \vdots \\
      \phi(e_n, e_1) & \cdots & \phi(e_n, e_n)
    \end{array} \right)
  \left( \begin{array}{c}
      y_1 \\
      \vdots \\
      y_n
    \end{array} \right)
\end{align*}
$$
        </code></pre>
      </td>
      <td>
        $$
        \begin{align*}
          & \phi(x,y) = \phi \left(\sum_{i=1}^n x_ie_i, \sum_{j=1}^n y_je_j \right)
          = \sum_{i=1}^n \sum_{j=1}^n x_i y_j \phi(e_i, e_j) = \\
          & (x_1, \ldots, x_n) \left( \begin{array}{ccc}
              \phi(e_1, e_1) & \cdots & \phi(e_1, e_n) \\
              \vdots & \ddots & \vdots \\
              \phi(e_n, e_1) & \cdots & \phi(e_n, e_n)
            \end{array} \right)
          \left( \begin{array}{c}
              y_1 \\
              \vdots \\
              y_n
            \end{array} \right)
        \end{align*}
        $$
      </td>
    </tr>
    <tr>
      <td>
      <pre><code class="language-tex">
$$
\DeclareMathOperator{\Div}{div}
\DeclareMathOperator{\Rot}{rot}
\newcommand{\parder}[2]{\frac{\partial {#1}}{\partial {#2}}}
\begin{align}
  \label{18.1:1}
  \begin{aligned}
    \Rot\vec{E} &=-\frac{1}{c}\parder{\vec{B}}{t},&
    \Div\vec{B} &=0,
    \\
    \Rot\vec{B} &=\frac{1}{c}\parder{\vec{E}}{t}
    +\frac{4\pi}{c}\,\vec{j},&
    \Div\vec{E} &=4\pi\rho_{\varepsilon}.
  \end{aligned}
\end{align}
$$
      </code></pre>
      </td>
      <td>
      $$
      \DeclareMathOperator{\Div}{div}
      \DeclareMathOperator{\Rot}{rot}
      \newcommand{\parder}[2]{\frac{\partial {#1}}{\partial {#2}}}
      \begin{align}
        \label{18.1:1}
        \begin{aligned}
          \Rot\vec{E} &=-\frac{1}{c}\parder{\vec{B}}{t},&
          \Div\vec{B} &=0,
          \\
          \Rot\vec{B} &=\frac{1}{c}\parder{\vec{E}}{t}
          +\frac{4\pi}{c}\,\vec{j},&
          \Div\vec{E} &=4\pi\rho_{\varepsilon}.
        \end{aligned}
      \end{align}
      $$
      </td>
    </tr>
    <tr>
      <td>
        <pre><code class="language-tex">
here is some inlined math \( \sin^{2}\theta + \cos^{2}\theta = 1 \)
        </code></pre>
      </td>
      <td>
        here is some inlined math \( \sin^{2}\theta + \cos^{2}\theta = 1 \)
      </td>
    </tr>
  </table>
</html>

[kramdown-syntax]: http://kramdown.gettalong.org/syntax.html
[mathjax]: https://www.mathjax.org/