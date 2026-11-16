# A continuous probability integral transform

*Medium · [Probability problems](index.md)*

Let $X$ have a continuous distribution function $F$. Assume there is an open interval $I=(a,b)$, with possibly infinite endpoints, such that $P(X\in I)=1$, $F$ is strictly increasing on $I$, and its limits at $a,b$ are zero and one. Prove that $U=F(X)$ is uniform on $(0,1)$, using the inverse of $F:I\to(0,1)$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or graded objective evidence."}}
```

<details>
<summary>Hint 1</summary>

Continuity, strict increase and the endpoint limits give a unique inverse value for every $u\in(0,1)$.

</details>

<details>
<summary>Hint 2</summary>

On the probability-one event $X\in I$, compare $F(X)$ with $u$ by applying this increasing inverse; then handle the distribution-function endpoints.

</details>

<details>
<summary>Model proof</summary>

Invert the event at every interior probability level.

1. For $0<u<1$, the intermediate value theorem and strict increase give a unique $q\in I$ with $F(q)=u$. Denote it by $F^{-1}(u)$.
2. On $X\in I$, monotonicity gives $\{F(X)\le u\}=\{X\le q\}$. Equality of these events up to a null set implies $P(U\le u)=P(X\le q)=F(q)=u$.
3. Also $0<F(X)<1$ almost surely because $X\in I$ almost surely. Thus the distribution function of $U$ is zero for $u\le0$, equals $u$ on $(0,1)$ and equals one for $u\ge1$. This is the uniform law. The explicit interval assumptions ensure the ordinary inverse is well defined; more general continuous laws can instead be treated using generalised inverses.

For $0<u<1$, $P(F(X)\le u)=F(F^{-1}(u))=u$, with the uniform endpoint values.

**Self-assessment rubric**

- Use continuity, strict increase and endpoint limits to obtain the inverse at each interior level.
- Establish the event equivalence on the probability-one support and compute its mass.
- Identify the complete uniform distribution function, including endpoints and exterior arguments.

</details>
