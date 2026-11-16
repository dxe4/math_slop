# Choose circle maps that lift through a fixed power covering

*Medium · [Topology problems](index.md)*

For the based covering $p:S^1\to S^1$, p(z)=z^6, consider based maps f with degrees −12,0,15. For which listed degrees does a based lift through p exist? Return the set of degrees; all basepoints are 1.

```answer
{"answer":{"kind":"set","expected":["-12","0"],"checker_scope":"Only the requested exact result in the specified space, bases and coefficient conventions is checked; a personal argument is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Identify the induced subgroup of π₁(S¹,1)=Z for the power covering.

</details>

<details>
<summary>Hint 2</summary>

Apply the based lifting criterion to f\_\*(Z)=degree(f) Z.

</details>

<details>
<summary>Worked solution</summary>

A lift is controlled by the image subgroup, including negative and zero degree.

1. The map p induces multiplication by 6 on the fundamental group, so its image is 6Z.
2. The image of the induced map of a degree-d based circle map is dZ. The lifting criterion requires dZ⊂6Z, equivalent to divisibility of d by 6.
3. Both −12 and 0 satisfy this condition, whereas 15 does not. Thus the returned set is {−12,0}; the based lift is unique in each existing case.

</details>
