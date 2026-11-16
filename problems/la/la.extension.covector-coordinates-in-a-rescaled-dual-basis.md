# Transform a functional into dual-basis coordinates

*Easy · [Linear algebra problems](index.md)*

Work over $\mathbb R$ in finite dimension; all coordinate entries are dimensionless. Let $f(x,y)=2x-y$ and $B=((2,0),(0,3))$. Find the coordinate vector of $f$ in the corresponding dual basis $B^*$.

```answer
{"answer":{"kind":"vector","expected":["4","-3"],"checker_scope":"Only the requested exact finite object is checked; the derivation does not receive an automatic proof verdict."}}
```

<details>
<summary>Hint 1</summary>

The dual-basis coefficients of a functional are its values on the original basis vectors.

</details>

<details>
<summary>Hint 2</summary>

Do not confuse these coefficients with its coefficients on standard coordinate functions.

</details>

<details>
<summary>Worked solution</summary>

Evaluation transforms a covector in the direction opposite to vector coordinate conversion.

1. Write $f=c_1f_1+c_2f_2$ in the dual basis. Evaluating on the first basis vector gives $c_1=f(2,0)=4$.
2. Evaluating on the second gives $c_2=f(0,3)=-3$.
3. Thus its dual-basis coordinate vector is $[4,-3]$, though its standard coefficient vector is $[2,-1]$.

</details>
