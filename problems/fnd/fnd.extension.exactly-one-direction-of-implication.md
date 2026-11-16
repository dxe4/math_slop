# Count assignments with exactly one true implication

*Medium · [Foundations bridge](index.md)*

P and Q are Boolean statements. Under material implication, how many truth assignments make exactly one of $P\Rightarrow Q$ and $Q\Rightarrow P$ true?

```answer
{"answer":{"kind":"integer","expected":2,"checker_scope":"Only the requested exact result in the stated domain and units is checked; the reasoning remains a personal draft."}}
```

<details>
<summary>Hint 1</summary>

An implication is false only when its premise is true and conclusion false.

</details>

<details>
<summary>Hint 2</summary>

Examine equal truth values separately from unequal truth values.

</details>

<details>
<summary>Worked solution</summary>

Implication direction matters only for unequal input truth values.

1. When P,Q are both true, both implications are true. When both are false, both implications are also true.
2. For (P,Q)=(true,false), only P⇒Q is false; for (false,true), only Q⇒P is false.
3. Exactly one implication is true in the two unequal assignments, so the count is 2.

</details>
