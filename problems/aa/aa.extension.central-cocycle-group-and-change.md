# Construct a central extension and its change-of-section equivalence

*Hard · [Abstract algebra problems](index.md)*

Let A be an abelian group written additively and Q any group. Let c:Q times Q to A be normalized by c(e,x)=c(x,e)=0. Prove $(a,x)(b,y)=(a+b+c(x,y),xy)$ is a group law exactly when c(x,y)+c(xy,z)=c(y,z)+c(x,yz). Give inverses and prove replacing c by c+delta h, where h(e)=0 and delta h(x,y)=h(x)+h(y)-h(xy), gives an isomorphic central extension.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof draft and semantic rubric reflection only; no automatic correctness verdict or automatic required slot is supplied."}}
```

<details>
<summary>Hint 1</summary>

Compare the two associations of a three-factor product.

</details>

<details>
<summary>Hint 2</summary>

The inverse uses c(x,x inverse); the cocycle identity makes the left and right formulas agree.

</details>

<details>
<summary>Model proof</summary>

Associativity is the cocycle condition, and coordinate changes add coboundaries.

1. The two triple products have central terms a+b+d+c(x,y)+c(xy,z) and a+b+d+c(y,z)+c(x,yz). Thus associativity is exactly the stated identity. Normalization gives identity (0,e), and A embedded as (a,e) is central.
2. The cocycle identity at (x,x inverse,x) gives c(x,x inverse)=c(x inverse,x). Therefore (-a-c(x,x inverse),x inverse) is both a left and right inverse of (a,x). The quotient by central A is Q.
3. If c'=c+delta h, define F(a,x)=(a-h(x),x). A direct multiplication comparison gives F(product with c)=product with c' of F's two inputs. This map is bijective with inverse (a,x) maps to (a+h(x),x), fixes the central A and induces the identity on Q. Hence it is the required extension isomorphism.

**Self-assessment rubric**

- Derive precisely the normalized cocycle equation from the two products.
- Verify identity, two-sided inverse and central kernel.
- Use the correct sign in the coordinate change and verify the extension maps.

</details>
