# Prove the largest coin gap and count every gap

*Hard · [Original olympiad-style problems](index.md)*

For coprime integers $a,b>1$, prove the largest nonnegative integer not expressible as $ax+by$ with nonnegative integers $x,y$ is $ab-a-b$, and that the total number of positive nonexpressible integers is $(a-1)(b-1)/2$.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict, contest correctness, graded evidence or checkpoint credit."}}
```

<details>
<summary>Hint 1</summary>

Each residue modulo $a$ has a unique representative $by$ with $0\le y<a$. This is the smallest nonnegative representable integer in its residue class.

</details>

<details>
<summary>Hint 2</summary>

Count the gaps below each such representative, then use the permutation of nonzero remainders of $by$ modulo $a$.

</details>

<details>
<summary>Model proof</summary>

Classify every residue class by its least representable member.

1. Coprimality makes the numbers $by$ for $0\le y<a$ cover every residue modulo $a$ exactly once. If a representable integer has this residue, its coefficient of $b$ is congruent to $y$ modulo $a$ and cannot be smaller than $y$ while nonnegative. Hence $by$ is its least representable member.
2. Every nonnegative integer in that residue at least $by$ is representable by adding a nonnegative multiple of $a$. Its gaps are precisely $by-a,by-2a,\ldots$ while these remain positive.
3. The largest such gap over $y=0,\ldots,a-1$ is $b(a-1)-a=ab-a-b$, which is positive for the stipulated coprime integers greater than one.
4. The number in residue $y$ is $\lfloor by/a\rfloor$ for $y\ge1$, since none of these $by$ is a multiple of $a$. Summing the identities $by=a\lfloor by/a\rfloor+r_y$ over $1\le y<a$, the remainders $r_y$ are a permutation of $1,\ldots,a-1$.
5. Thus $a$ times the gap count is $(b-1)a(a-1)/2$, giving $(a-1)(b-1)/2$. The residue classification proves both the absence of further gaps and every claimed nonrepresentation.

**Self-assessment rubric**

- Prove the minimal representable member in each residue class.
- Describe all and only gaps in every class.
- Determine and verify the largest positive gap.
- Use the remainder permutation to obtain the exact total.

</details>
