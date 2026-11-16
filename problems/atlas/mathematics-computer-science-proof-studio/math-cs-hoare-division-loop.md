# A total-correctness proof for quotient and remainder

*Difficulty 4 of 5 · [Mathematics for computer science proof and counterexample studio](index.md) · exercise 12 of 15*

For $a\ge 0,b>0$, analyze $q:=0$; $r:=a$; while $r\ge b$ do $r:=r-b$; $q:=q+1$. Give invariant, variant, and final division claim, including the arithmetic-model boundary.

<details>
<summary>Hint 1</summary>

Relate original a to current q and r

</details>

<details>
<summary>Hint 2</summary>

Guard preserves nonnegativity after subtraction

</details>

<details>
<summary>Hint 3</summary>

Use r as a nonnegative integer variant

</details>

<details>
<summary>Worked solution</summary>

Invariant is $a=bq+r$ and $r\ge 0$. Initialization gives $a=b\cdot 0+a$. Under guard $r\ge b$, updates yield $b(q+1)+(r-b)=bq+r=a$, while $r-b\ge 0$, so preservation holds. Variant r is a nonnegative integer and decreases by positive b each iteration, proving termination over mathematical integers. At exit, $not(r\ge b)$ gives r<b; combined with the invariant, $0\le r<b$ and $a=bq+r$, the quotient-remainder specification. On fixed-width machine integers, the proof additionally needs absence of overflow or a semantics in which the operations have the same mathematical meaning.

**Answer.** Invariant $a=bq+r$ with $r\ge 0$ and variant r prove termination and final $0\le r<b$, subject to exact-integer or no-overflow arithmetic.

</details>

*Tags: formal verification, Hoare logic, loop invariant, termination*
