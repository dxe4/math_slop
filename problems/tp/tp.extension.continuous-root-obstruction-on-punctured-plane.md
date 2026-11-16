# Prove the winding obstruction to a continuous root

*Hard · [Topology problems](index.md)*

For an integer n≥2 prove no continuous $r:\mathbb C^*\to\mathbb C^*$ satisfies r(z)ⁿ=z for every z. Then prove such a root exists on $\mathbb C\setminus(-\infty,0]$. Use the usual complex topology and make the winding-number or lifting obstruction explicit.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic verdict, grade or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

The nth-power covering multiplies π₁(C\*)=Z by n.

</details>

<details>
<summary>Hint 2</summary>

On the slit plane choose a continuous argument in (−π,π) and define the root with that argument divided by n.

</details>

<details>
<summary>Model proof</summary>

The obstruction is global winding around zero, and disappears after removing a ray.

1. Let p(w)=wⁿ on C\*. A putative r would satisfy p∘r=id. Choose any basepoint and the corresponding root basepoint; under the standard winding-number identifications of the fundamental groups, p\_\* is multiplication by n and r\_\* multiplication by an integer k.
2. The identity composition would force nk=1 in Z, impossible for n≥2. Equivalently, a once-around loop would have to lift to a closed loop whose winding multiplied by n equals one.
3. On the slit plane D, write z=ρe^{iθ} with ρ&gt;0 and −π&lt;θ&lt;π. This argument θ varies continuously on D. Define r(z)=ρ^{1/n}e^{iθ/n}. Modulus, argument and the real positive root are continuous there, so r is continuous and r(z)ⁿ=z.
4. The construction has no contradiction with the first part because the excluded ray prevents a once-around loop inside D; indeed the chosen argument gives a continuous logarithm on D.

**Self-assessment rubric**

- Identifies the induced fundamental-group map of the power cover as multiplication by n.
- Derives the impossible integer equation from a global right inverse.
- Builds and verifies a continuous root using the specified continuous argument branch.

</details>
