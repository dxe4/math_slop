# Challenge the shared witness, not the theorem

*Medium · [Foundations bridge](index.md)*

The statement 'The sum of any two even integers is even' is true. A draft argues: $(1)$ Since m and n are even, there is one and the same integer r with $m=2r$ and $n=2r$. $(2)$ Then m+n=4r, so the sum is even. Choose any even integers m,n for which the r asserted in step($1$) cannot exist. Your pair challenges step($1$), not the true even-sum statement. In the optional explanation, repair the draft without changing its theorem. Enter exact integer values for m and n, including negative integers or zero. Integer-valued fractions and exact finite decimals are also allowed. Each number field permits at most $80$ written decimal digits across the whole written form before cancellation, and $2048$ raw characters. Leading zeros count. Choose your own values; there is no smallest, positive or increasing-order requirement. Repeated entries are allowed whenever they meet the stated mathematical conditions.

```answer
{"answer":{"kind":"argument_witness_pair_with_open_reasoning","expected_constraints":{"model":"shared_even_witness_gap"},"checker_scope":"Checks only that the two submitted exact integer values are both even and unequal, thereby refuting the asserted common integer half. It does not refute the true even-sum theorem or assess an optional written repair or general proof."}}
```

<details>
<summary>Hint 1</summary>

Which assertion are you challenging: the evenness of the sum, or the existence of the one integer r claimed in step($1$)? Keep both chosen numbers even.

</details>

<details>
<summary>Hint 2</summary>

If the same r satisfied $m=2r$ and $n=2r$, what relationship would that force between m and n? Check whether your proposed even integers have that relationship.

</details>

<details>
<summary>Worked solution</summary>

Independent existence statements need not share one witness.

1. One example is $m=-4,n=6$. Both are even: $-4=2$($-2$) and $6=2$($3$).
2. A common r would have to equal both $-2$ and $3$, which is impossible. This challenges step($1$). Their sum is 2, so it does not challenge the true even-sum statement.
3. Repair the general argument by allowing separate witnesses. For arbitrary even integers, write $m=2r$ and $n=2s$, where r,s are integers.
4. Then $m+n=2$($r+s$). Since $r+s$ is an integer, the sum is even.
5. Every unequal even pair works for the requested counterexample: $(2r,2s)$ with integer $r\neq s$. Equal even entries do not work because their common half is a valid shared witness.
6. Either order, negative entries and zero are allowed when these conditions hold. The optional written repair is not automatically assessed.

</details>
