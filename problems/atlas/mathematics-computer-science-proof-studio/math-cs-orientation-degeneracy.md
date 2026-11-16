# An exact geometric predicate near degeneracy

*Difficulty 4 of 5 · [Mathematics for computer science proof and counterexample studio](index.md) · exercise 10 of 15*

For $a=(0,0)$, $b=(10^9,10^9)$, $c=(2\cdot 10^9,2\cdot 10^9+1)$, compute the exact orientation determinant and classify the turn. Explain the numerical risk after converting coordinates to limited-precision floating point.

<details>
<summary>Hint 1</summary>

Compute (b-a)x(c-a)

</details>

<details>
<summary>Hint 2</summary>

Large products nearly cancel

</details>

<details>
<summary>Hint 3</summary>

The exact sign is the combinatorial decision

</details>

<details>
<summary>Worked solution</summary>

The determinant is $(10^9)(2\cdot 10^9+1)-(10^9)(2\cdot 10^9)=10^9$, positive, so a,b,c make a counterclockwise turn. Although $10^9$ is not tiny absolutely, it is the difference of products near $2\cdot 10^18$. Limited-precision floating arithmetic may round both products to the same value or introduce an error larger than the determinant, producing zero or the wrong sign. A robust implementation uses exact sufficiently wide integer arithmetic when safe, adaptive precision, or an error bound that certifies the floating sign; a rendered angle is not a predicate certificate.

**Answer.** The exact determinant is $10^9$, hence counterclockwise; cancellation in products near $2\cdot 10^18$ can make a floating sign unreliable.

</details>

*Tags: computational geometry, orientation, floating point, robust predicate*
