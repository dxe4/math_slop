# Differentiate an accumulation with a moving boundary

*Difficulty 3 of 5 · [Change and accumulation](index.md) · exercise 4 of 5*

Let $F(x)=\int_0^{x^3} \cos(t^2)\,dt$. Find $F'(x)$ without attempting to find an elementary antiderivative.

<details>
<summary>Hint 1</summary>

Apply the fundamental theorem to the outer accumulation

</details>

<details>
<summary>Hint 2</summary>

Then apply the chain rule to $x^3$

</details>

<details>
<summary>Worked solution</summary>

Define $G(u)=\int_0^u \cos(t^2)\,dt$. By the fundamental theorem, $G'(u)=\cos(u^2)$. Since $F(x)=G(x^3)$, the chain rule gives $F'(x)=G'(x^3)\cdot 3x^2 = 3x^2 \cos((x^3)^2) = 3x^2 \cos(x^6)$. No antiderivative of $\cos(t^2)$ is needed.

**Answer.** $F'(x)=3x^2 \cos(x^6)$.

</details>

*Tags: fundamental theorem, chain rule*
