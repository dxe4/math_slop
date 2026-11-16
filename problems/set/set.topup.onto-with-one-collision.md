# Classify onto behavior and collisions separately

*Medium · [Set theory](index.md)*

Let $f:\{1,2,3\}\to\{a,b\}$ be given by f(1)=a,f(2)=b,f(3)=a. Which description is correct? Choices: It is onto but not injective.; It is injective but not onto.; It is bijective.; It is neither onto nor injective.

**Options**

1. It is onto but not injective.
2. It is injective but not onto.
3. It is bijective.
4. It is neither onto nor injective.

```answer
{"answer":{"kind":"multiple_choice","expected":"onto_not_injective","checker_scope":"Exact declared bounded result, explicit interval description or selected statement only; no unrestricted mapping proof or new checkpoint objective is automatically certified."},"options":["onto_not_injective","injective_not_onto","bijective","neither"]}
```

<details>
<summary>Hint 1</summary>

Check whether every element of the named codomain is attained.

</details>

<details>
<summary>Hint 2</summary>

Injectivity asks whether two distinct inputs share an output.

</details>

<details>
<summary>Worked solution</summary>

Coverage of the codomain and uniqueness of inputs are different tests.

1. Both a and b occur as outputs, so f is onto.
2. The distinct inputs one and three both map to a, so f is not injective.
3. The correct description is onto but not injective, and therefore not bijective.

</details>
