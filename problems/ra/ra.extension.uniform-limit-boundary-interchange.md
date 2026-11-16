# Interchange a domain limit and a uniform function limit

*Medium · [Real analysis](index.md)*

Let c be an accumulation point of a real domain D. Suppose f\_n:D to R converge uniformly to f and each finite limit $L_n=\lim_{x\to c,\ x\in D}f_n(x)$ exists. Prove L\_n converges to some L and f has domain limit L at c. The point c need not belong to D.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

The difference of two boundary limits is bounded by the uniform distance of the functions.

</details>

<details>
<summary>Hint 2</summary>

After obtaining L, choose one function to mediate an epsilon split.

</details>

<details>
<summary>Model proof</summary>

Uniform approximation controls both the limit sequence and the final boundary behavior.

1. Uniform convergence makes f\_n a uniform Cauchy sequence. Passing to the domain limit in \|f\_n(x)-f\_m(x)\|&lt;=sup\_D \|f\_n-f\_m\| gives \|L\_n-L\_m\|&lt;=sup\_D \|f\_n-f\_m\|. Thus L\_n is Cauchy and has a finite real limit L.
2. Given epsilon&gt;0, choose n with sup\_D \|f-f\_n\|&lt;epsilon/3 and \|L\_n-L\|&lt;epsilon/3.
3. For this fixed n, its domain limit gives delta&gt;0 such that 0&lt;\|x-c\|&lt;delta, x in D, implies \|f\_n(x)-L\_n\|&lt;epsilon/3. The three error terms then give \|f(x)-L\|&lt;epsilon, proving the asserted limit.

**Self-assessment rubric**

- Transfer a uniform two-function bound to their finite domain limits.
- Choose one index controlling both sequence errors.
- Use the actual punctured relative-domain limit in the final estimate.

</details>
