# Recognize realizable cohomology actions on S² times S²

*Medium · [Topology problems](index.md)*

Let $u,v$ generate $H^2(S^2\times S^2;\mathbb{Z})$ with $u^2=v^2=0$ and $uv$ the oriented top generator. Candidate maps specify (f\*u,f\*v) as a₁=(2u,3v), a₂=(3v,2u), a₃=(u,u+v). Which are realized by continuous maps S²×S²→S²×S²? Return labels as a set.

```answer
{"answer":{"kind":"set","expected":["a_1","a_2"],"checker_scope":"Only the requested exact result in the specified space, bases and coefficient conventions is checked; a personal argument is not automatically graded."}}
```

<details>
<summary>Hint 1</summary>

Every pullback must preserve the square-zero relations.

</details>

<details>
<summary>Hint 2</summary>

For the candidates that pass, use products of sphere maps of specified degrees, allowing a swap of factors.

</details>

<details>
<summary>Worked solution</summary>

Cohomology relations obstruct a proposed action even when its additive matrix is perfectly well defined.

1. Candidate a₃ fails because (u+v)²=2uv≠0, whereas the source generator v has square zero. Pullbacks preserve cup products, so no continuous map realizes it.
2. Candidate a₁ is realized by the product of a degree-2 map on the first sphere and a degree-3 map on the second. For a₂, take a degree-3 first output depending on the second input and a degree-2 second output depending on the first input.
3. Thus exactly a₁ and a₂ are realizable, giving {a\_1,a\_2}. Both have top degree 6 because the factors have even dimension; their interchange contributes no minus sign.

</details>
