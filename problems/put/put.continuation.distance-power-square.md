# Distance power square

*Hard · [Original Putnam-style training](index.md)*

For real $p>-1$, prove $\int_0^1\int_0^1|x-y|^p\,dx\,dy=2/[(p+1)(p+2)]$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict."}}
```

<details>
<summary>Hint 1</summary>

Split the square into the two triangles on either side of $x=y$.

</details>

<details>
<summary>Hint 2</summary>

Integrate the inner variable as a power of $x-y$, then integrate $x$.

</details>

<details>
<summary>Model proof</summary>

Integrating over $x\in[0,1]$ gives $2/(p+1)\cdot1/(p+2)$, the claimed value.

1. The integrand is nonnegative and symmetric in $x,y$; Tonelli allows splitting the square, and the diagonal has measure zero. Thus the integral is $2\int_0^1\int_0^x(x-y)^pdy\,dx$.
2. For $p>-1$, the inner integral exists and equals $x^{p+1}/(p+1)$.
3. Integrating over $x\in[0,1]$ gives $2/(p+1)\cdot1/(p+2)$, the claimed value.

**Self-assessment rubric**

- Split the square into symmetric triangles and address the diagonal for p&gt;−1.
- Integrate (x−y)^p over 0≤y≤x with the correct exponent condition.
- Integrate the remaining x power and obtain the stated rational function of p.

</details>
