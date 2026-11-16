# Recognize points in a product closure

*Medium · [Topology problems](index.md)*

Let $A=(0,1)$ and $B=\{1/n:n\ge1\}$ in $\mathbb R$. Which listed points lie in $\overline{A\times B}\subseteq\mathbb R^2$? The points are $p_1=(0,0)$, $p_2=(1,1)$, $p_3=(1/2,-1)$, $p_4=(2,0)$. Enter their indices.

```answer
{"answer":{"kind":"set","expected":[1,2],"checker_scope":"Exact finite set, interval, distance or count requested in the stated topology only; personal reasoning is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Use closure of each factor and the rectangle basis of the product.

</details>

<details>
<summary>Hint 2</summary>

A point must satisfy both coordinate closure conditions.

</details>

<details>
<summary>Worked solution</summary>

Product closure is the product of the two factor closures.

1. The closures are $\overline A=[0,1]$ and $\overline B=B\cup\{0\}$. A basic rectangle meets $A\times B$ exactly when both coordinate neighborhoods meet their respective factors.
2. Thus the closure is $[0,1]\times(B\cup\{0\})$. Points $p_1,p_2$ satisfy both conditions.
3. Point $p_3$ fails the second coordinate condition and $p_4$ the first. The answer is $\{1,2\}$.

</details>
