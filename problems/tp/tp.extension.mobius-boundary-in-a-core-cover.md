# Compute boundary components in a cover of the Möbius band

*Medium · [Topology problems](index.md)*

Let M be a Möbius band with its core generator identifying $\pi_1(M)=\mathbb Z$. Take the connected covering corresponding to 6Z. Return \[number of boundary components upstairs, degree of each boundary component over ∂M\]. Use the fact that the boundary inclusion sends its generator to twice the core generator.

```answer
{"answer":{"kind":"vector","expected":["2","3"],"checker_scope":"Only the requested exact result in the specified space, bases and coefficient conventions is checked; a personal argument is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Follow boundary monodromy on the six cosets of 6Z.

</details>

<details>
<summary>Hint 2</summary>

Addition by 2 partitions those cosets into cycles, each recording one lifted boundary circle.

</details>

<details>
<summary>Worked solution</summary>

The boundary subgroup can have more than one orbit even when the whole covering is connected.

1. The covering has fiber Z/6Z, and a core loop acts by addition of 1. The boundary generator acts by addition of 2, by the stated boundary inclusion convention.
2. Addition by 2 has the two cycles {0,2,4} and {1,3,5}, each of length 3. A collar of the boundary lifts to collars, so these cycles are exactly the boundary components.
3. Thus there are two boundary components, each a three-fold covering of the original boundary. The returned vector is \[2,3\]. The six-fold cover is orientable, consistently giving an annulus.

</details>
