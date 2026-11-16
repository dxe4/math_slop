# Prove nonlinear shears preserve area while stretching boundary length

*Hard · [Calculus](index.md)*

For C¹ φ on \[0,1\], set T(u,v)=(u,v+φ(u)) on \[0,1\]² and D=T(\[0,1\]²). Prove $\iint_DF=\int_0^1\int_0^1F(u,v+\phi(u))\,dv\,du$ for continuous F, and area(D)=1. Show the perimeters are unbounded for φ(u)=N sin(2πu), N&gt;0.

```answer
{"answer":{"kind":"proof","expected":null,"checker_scope":"Personal proof reflection only; no automatic proof verdict or graded evidence."}}
```

<details>
<summary>Hint 1</summary>

Use an inner vertical translation, or compute the explicit inverse and unit determinant.

</details>

<details>
<summary>Hint 2</summary>

Each curved horizontal edge has length at least the total variation ∫\|φ′\|.

</details>

<details>
<summary>Model proof</summary>

Area preservation does not imply length preservation of the image boundary.

1. The image is 0≤x≤1,φ(x)≤y≤φ(x)+1. The inverse is u=x,v=y−φ(x), so T is one-to-one, with determinant 1. In each vertical slice y=v+φ(x), translation gives the stated iterated identity.
2. Taking F=1 gives area(D)=∫₀¹∫₀¹1dvdu=1. This conclusion is independent of the size of φ′.
3. For φ=N sin(2πu), each of the lower and upper curved edges has length ∫₀¹√(1+(φ′)²)du≥∫₀¹\|φ′\|du=4N.
4. The two vertical closing edges each have length 1, so the total perimeter is at least 8N+2 and tends to infinity. The area Jacobian controls area, not this boundary-length distortion.

**Self-assessment rubric**

- Describes the image, inverse and determinant on the whole source square.
- Derives the identity by vertical translation and obtains exact unit area.
- Computes the variation lower bound on both curved edges and includes the two closing sides.
- Explains the distinct geometric quantities controlled by area and curve length.

</details>
