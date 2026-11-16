# Backpropagate with every shape visible

*Difficulty 4 of 5 · [Data and mathematical learning audit studio](index.md) · exercise 3 of 9*

Let X be m×p, W be p×h, b be length h, $Z=XW+1bᵀ$, $A=ReLU(Z)$, v be length h, and scores $s=Av$. Given upstream gradient $g=\partial L/\partial s$ of length m, derive ∂L/∂v, ∂L/∂W, ∂L/∂b, and ∂L/∂X, giving every shape. State the convention needed when an entry of Z is zero.

<details>
<summary>Hint 1</summary>

The gradient entering A is the outer product gvᵀ

</details>

<details>
<summary>Hint 2</summary>

Mask by the ReLU derivative before traversing $Z=XW+1bᵀ$

</details>

<details>
<summary>Hint 3</summary>

Sum rows for the shared bias

</details>

<details>
<summary>Worked solution</summary>

First $\partial L/\partial v=Aᵀg$, shape h. The gradient with respect to A is $G_A=gvᵀ$, shape m×h. Let M have entries 1 when Z_ij>0 and 0 when Z_ij<0; at $Z_ij=0$ the classical derivative is undefined, so an implementation must declare a backward convention, commonly 0. Then $G_Z=G_A⊙M$ has shape m×h. Matrix-multiplication backpropagation gives $\partial L/\partial W=XᵀG_Z$, shape p×h, and $\partial L/\partial X=G_ZWᵀ$, shape m×p. Because b is broadcast to every row, $\partial L/\partial b=G_Zᵀ1$, shape h. Every product has the same shape as the parameter or input it differentiates.

**Answer.** $dv=Aᵀg$ (h), $dZ=(gvᵀ)⊙M$ (m×h), $dW=XᵀdZ$ (p×h), $db=dZᵀ1$ (h), and $dX=dZWᵀ$ (m×p), with a declared ReLU-zero convention.

</details>

*Tags: backpropagation, matrix calculus, shapes, ReLU*
