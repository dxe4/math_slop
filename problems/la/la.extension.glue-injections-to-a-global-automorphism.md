# Characterize when two partial injections extend together

*Hard · [Linear algebra problems](index.md)*

Work over $\mathbb R$. Coordinates are dimensionless and ordered as stated. Let $U,W$ be subspaces of a finite-dimensional real vector space $V$. Injective linear maps $A:U\to V$ and $B:W\to V$ agree on $U\cap W$. Find and prove a necessary and sufficient condition, in terms of their image intersections, for a linear automorphism of $V$ extending both maps to exist.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

First define a candidate on $U+W$ by adding the two prescribed images and check well-definedness.

</details>

<details>
<summary>Hint 2</summary>

Its kernel is controlled by whether an equality between one image from each side comes from the shared input subspace.

</details>

<details>
<summary>Model proof</summary>

Separate compatibility of a glued map from its injectivity and final basis extension.

1. Agreement on the intersection makes $T(u+w)=Au+Bw$ well defined: two decompositions differ by a vector in $U\cap W$, on which the assigned maps agree.
2. Necessity is $A(U)\cap B(W)=A(U\cap W)$. An injective extension taking $Au=Bw$ forces $u=w$ in the intersection; the reverse inclusion follows from agreement.
3. For sufficiency, if $Au+Bw=0$, the condition gives $z\in U\cap W$ with $Au=Az=-Bw$. Injectivity gives $u=z$ and $w=-z$, hence $u+w=0$. Thus the glued map is injective on $U+W$.
4. Extend a basis of $U+W$ to one of $V$ and extend its independent image family to a basis of $V$. Mapping the added basis vectors to the added output vectors gives an automorphism extending the glued map.

**Self-assessment rubric**

- Check the candidate map is independent of the chosen sum decomposition.
- Derive the image-intersection condition from injectivity of an extension.
- Use that condition and both input injections to prove the glued map is injective.
- Complete domain and image bases to obtain a global automorphism.

</details>
