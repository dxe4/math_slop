# Characterize a maximal ideal by its quotient

*Hard · [Abstract algebra problems](index.md)*

For a commutative ring $R$ with identity and a proper ideal $M$, prove that $M$ is maximal if and only if $R/M$ is a field.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic correctness verdict, demonstration or checkpoint."}}
```

<details>
<summary>Hint 1</summary>

For one direction, enlarge the ideal by a representative of a nonzero coset.

</details>

<details>
<summary>Hint 2</summary>

For the reverse direction, start with any strictly larger ideal and use a nonzero invertible coset to force the identity into it.

</details>

<details>
<summary>Model proof</summary>

Invertibility of a nonzero quotient class is equivalent to generating the whole ring together with the ideal.

1. Assume $M$ is maximal. If $a+M\ne M$, then $a\notin M$ and the ideal $M+(a)$ strictly contains $M$, hence equals $R$.
2. Thus $1=m+ra$ for some $m\in M$, $r\in R$, giving $(r+M)(a+M)=1+M$. Every nonzero class is invertible, so the quotient is a field.
3. Conversely, suppose $R/M$ is a field and $M\subsetneq J\subseteq R$ is an ideal. Choose $a\in J\setminus M$.
4. The class $a+M$ is invertible, so some $b\in R$ satisfies $ab-1\in M\subseteq J$. As $ab\in J$, subtraction gives $1\in J$.
5. Any ideal containing the identity is all of $R$, so $J=R$. Thus $M$ is maximal.

**Self-assessment rubric**

- Relate a nonzero quotient class to a representative outside the ideal.
- Use the enlarged ideal to obtain an inverse modulo the ideal.
- Use invertibility in the quotient to put the identity in every larger ideal.
- Use properness and the two implications to complete the equivalence.

</details>
