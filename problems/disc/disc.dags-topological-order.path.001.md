# Schedule shared prerequisites

*Medium · [Discrete mathematics](index.md)*

A directed graph has vertices A,B,C,D and arrows A→C,B→C,C→D. Which is a topological order? Select the mathematically correct statement from the four alternatives.

**Options**

1. A,B,C,D.
2. C,A,B,D.
3. A,C,B,D.
4. A,D,B,C.

```answer
{"answer":{"kind":"multiple_choice","expected":"a_b_c_d","checker_scope":"Checks the selected mathematical statement among four authored alternatives under the stated hypotheses; does not assess a freely written proof."},"options":["a_b_c_d","c_a_b_d","a_c_b_d","a_d_b_c"]}
```

<details>
<summary>Hint 1</summary>

A and B must both precede C.

</details>

<details>
<summary>Hint 2</summary>

C must precede D.

</details>

<details>
<summary>Worked solution</summary>

Topological orders place each arrow source before its target. A directed cycle certifies that no such order can exist.

1. A respects all three arrows.
2. Starting with C puts it before its prerequisites A and B. The order A,C,B,D also puts C before B. The order A,B,C,D respects every supplied arrow.

</details>
