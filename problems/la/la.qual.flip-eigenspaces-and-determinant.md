# Separate symmetric and alternating tensor directions

*Medium · [Linear algebra problems](index.md)*

On $\mathbb R^3\otimes\mathbb R^3$, let F be the flip $F(u\otimes v)=v\otimes u$. Return {plus\_dimension, minus\_dimension, determinant} for its eigenspaces and determinant.

```answer
{"answer":{"kind":"record_of_rationals","expected":{"plus_dimension":"6","minus_dimension":"3","determinant":"-1"},"checker_scope":"Only the specified finite invariant or rational coordinate object is checked. Tensor and operator reasoning are not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

The diagonal tensors are fixed; each pair with distinct indices splits into a sum and a difference.

</details>

<details>
<summary>Hint 2</summary>

Only the negative eigenspace contributes a minus sign to the determinant.

</details>

<details>
<summary>Worked solution</summary>

The tensor flip distinguishes symmetric and exterior structure.

1. The plus eigenspace has three diagonal generators and three symmetric pair sums, hence dimension six.
2. The three pair differences span the minus eigenspace, giving dimension three.
3. These nine independent vectors form a basis. The determinant is $1^6(-1)^3=-1$.

</details>
