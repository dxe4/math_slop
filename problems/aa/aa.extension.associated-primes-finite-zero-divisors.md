# Prove finiteness of associated primes and their zero-divisor description

*Hard · [Abstract algebra problems](index.md)*

Let M be a finitely generated module over a commutative Noetherian R. Prove Ass(M) is finite and the zero divisors on M are exactly $\bigcup_{P\in Ass(M)}P$. Construct the required prime filtration and handle M=0.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

A maximal annihilator of a nonzero element is prime.

</details>

<details>
<summary>Hint 2</summary>

Build a finite filtration with factors R/P and control associated primes in a short exact sequence.

</details>

<details>
<summary>Model proof</summary>

Maximal annihilators detect zero divisors, while Noetherian filtrations give a finite list.

1. For M nonzero, choose a maximal annihilator Ann(u) among nonzero elements using the ascending-chain condition on ideals. If ab kills u but a does not, then a\*u is nonzero and its annihilator contains Ann(u); maximality forces equality, so b kills u. Hence this annihilator is prime.
2. Apply the same fact successively to nonzero quotients of M. The cyclic element chosen in each quotient adds a factor R/P to an ascending submodule filtration. Since M is Noetherian, the process terminates, giving a finite prime filtration. In0 to N to L to Q to0, an associated cyclic R/P in L either intersects N trivially and embeds in Q, or contains a nonzero a\*u in N with a outside P and the same annihilator P. Therefore Ass(L) is contained in Ass(N) union Ass(Q), and each prime factor R/P has associated-prime set exactly{P}, since every nonzero residue has annihilator P. Induction along the finite filtration therefore makes Ass(M) finite.
3. If r belongs to an associated prime it kills its nonzero witness, so it is a zero divisor on M. Conversely if r kills some nonzero element, choose a maximal annihilator among nonzero elements in ker(r). Multiplication stays in that kernel, so the same primality proof gives an associated prime containing r.
4. For M=0 there are no nonzero witnesses, Ass(M) is empty and there are no zero divisors in this module sense, so both assertions hold.

**Self-assessment rubric**

- Prove a maximal nonzero-element annihilator is prime.
- Construct the finite filtration and justify the associated-prime containment through exact sequences.
- Prove both directions, using a maximal witness within the annihilated submodule.
- State the empty-witness convention consistently.

</details>
