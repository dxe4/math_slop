# Force a cyclic cubic maximum onto the boundary

*Hard · [Original olympiad-style problems](index.md)*

For nonnegative $a+b+c=1$, find the maximum of $a^2b+b^2c+c^2a$ as a rational number and classify equality.

```answer
{"answer":{"kind":"rational","expected":{"numerator":4,"denominator":27},"checker_scope":"Exact finite result only; a correct entry does not certify the accompanying argument or a contest performance."}}
```

<details>
<summary>Hint 1</summary>

At an interior maximum the coefficients of small signed perturbations exchanging two coordinates vanish.

</details>

<details>
<summary>Hint 2</summary>

The resulting equations include $(a-c)(3b-1)=0$ and its cyclic partners. On a boundary use AM-GM on a half, a half and the other variable.

</details>

<details>
<summary>Worked solution</summary>

Classify interior stationary possibilities and compare every boundary.

1. Compactness gives a maximum. At an interior maximum, the first-order coefficients of exchanging a and b, and of the other exchanges, vanish. Expansion gives $(a-c)(3b-1)=0$ and its cyclic versions.
2. If a differs from c, the first forces b one third; the next then forces c one third unless a also equals b, which again forces equality. Thus the only interior possibility is $a=b=c=1/3$, with value one ninth.
3. If c is zero, the objective is $a^2b=4(a/2)(a/2)b\le4((a+b)/3)^3=4/27$. Equality requires a twice b, giving $(a,b,c)=(2/3,1/3,0)$.
4. The other boundaries give its cyclic rotations. Their value exceeds one ninth, so these and only these cyclic triples are global maximizers. The perturbation argument is exact polynomial first-order reasoning with both signs permitted by interior positivity.

</details>
