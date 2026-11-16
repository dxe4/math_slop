# Take a preimage without an inverse function

*Medium · [Set theory](index.md)*

The function $f$ has domain $\{u,v,w\}$, codomain $\{0,1,2\}$, and values $f(u)=0$, $f(v)=1$, $f(w)=1$. Find $f^{-1}(\{1\})$. Does $f$ have an inverse function from its entire codomain to its domain?

```answer
{"answer":{"kind":"preimage_and_boolean","expected":{"preimage":["v","w"],"has_inverse":false},"checker_scope":"Finite preimage and bijection check; notation does not assert an inverse function exists."}}
```

<details>
<summary>Hint 1</summary>

A preimage collects inputs whose outputs lie in the supplied set.

</details>

<details>
<summary>Hint 2</summary>

An inverse function on the whole codomain would require exactly one antecedent for each codomain element.

</details>

<details>
<summary>Worked solution</summary>

Preimages are defined for every function, even when no inverse function exists.

1. The inputs sent to $1$ are $v$ and $w$, so the preimage is $\{v,w\}$.
2. Two inputs map to $1$ and no input maps to $2$; $f$ is neither injective nor surjective onto this codomain.
3. There is no inverse function on the entire codomain.

An input/output table and selectable codomain values expose all relevant relationships.

</details>
