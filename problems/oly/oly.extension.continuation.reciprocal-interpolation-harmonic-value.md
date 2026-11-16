# Recover a harmonic sum from reciprocal samples

*Hard · [Original olympiad-style problems](index.md)*

For nonnegative integer d, a real polynomial P of degree at most d satisfies $P(k)=1/k$ for $k=1,\ldots,d+1$. Prove $P(0)=1+1/2+\cdots+1/(d+1)$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Multiply P by its input and subtract one, creating a polynomial with all the sampled inputs as roots.

</details>

<details>
<summary>Hint 2</summary>

Fix its scalar factor at zero and compare the linear coefficient or derivative there.

</details>

<details>
<summary>Model proof</summary>

Transform reciprocal data into a completely factored polynomial.

1. Let $Q(x)=xP(x)-1$. It has degree at most $d+1$ and vanishes at all the distinct listed integers, while $Q(0)=-1$.
2. Thus $Q(x)=c\prod_{k=1}^{d+1}(x-k)$, with nonzero c fixed by its value at zero.
3. The logarithmic product derivative at zero, understood by the ordinary product rule, gives $Q^\prime(0)=Q(0)\sum_{k=1}^{d+1}(-1/k)=\sum_{k=1}^{d+1}1/k$.
4. But $Q^\prime(0)=P(0)$ from its definition. This proves the formula, including d zero, without computing every interpolation coefficient.

**Self-assessment rubric**

- Create the exact rooted polynomial with the proper degree bound.
- Use the nonzero value at zero to justify the full factorization.
- Obtain the harmonic sum with the correct sign.
- Retain the degree-zero case and all denominators.

</details>
