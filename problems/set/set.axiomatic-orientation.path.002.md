# Which premise creates Russell’s contradiction?

*Medium · [Set theory](index.md)*

In classical ZF, which proposed premise is not a permitted set-formation rule and would lead to Russell’s contradiction? Select the mathematically correct statement from the four alternatives.

**Options**

1. Every predicate φ(x) forms the set of all x satisfying φ(x), without a bounding set.
2. Sets with exactly the same members are equal.
3. Given sets a and b, the unordered pair {a,b} is a set.
4. The union of a set of sets is a set.

```answer
{"answer":{"kind":"multiple_choice","expected":"every_predicate_x_fo","checker_scope":"Checks the selected mathematical statement among four authored alternatives under the stated hypotheses; does not assess a freely written proof."},"options":["every_predicate_x_fo","sets_with_exactly_th","given_sets_a_and","the_union_of_a"]}
```

<details>
<summary>Hint 1</summary>

ZF Separation requires an existing set to bound the construction.

</details>

<details>
<summary>Hint 2</summary>

An unrestricted collection of every set satisfying $x\notin x$ has no such bound.

</details>

<details>
<summary>Worked solution</summary>

Russell’s argument identifies the danger of unrestricted comprehension, not a contradiction in bounded Separation.

1. If $R=\{x:x\notin x\}$ were a set by unrestricted comprehension, asking whether $R\in R$ would give $R\in R$ iff $R\notin R$.
2. ZF does not allow this unrestricted set-formation premise. Extensionality and pairing are different valid axioms. Select the statement “Every predicate φ(x) forms the set of all x satisfying φ(x), without a bounding set.”.

</details>
