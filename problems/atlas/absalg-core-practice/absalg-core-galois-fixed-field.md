# Fixed field of a Galois group

*Difficulty 3 of 5 · [Abstract Algebra Core Practice](index.md) · exercise 7 of 12*

Let $E=\mathbb{Q}(\sqrt{2},\sqrt{3})$ and $G=\operatorname{Gal}(E/\mathbb{Q})$. Describe the four automorphisms in $G$ by their action on $\sqrt{2}$ and $\sqrt{3}$. Determine the fixed field of the subgroup $H=\{\mathrm{id},\sigma\}$ where $\sigma(\sqrt{2})=-\sqrt{2}$ and $\sigma(\sqrt{3})=\sqrt{3}$.

<details>
<summary>Hint 1</summary>

Each generator can be sent to either sign of its square root independently.

</details>

<details>
<summary>Hint 2</summary>

An element fixed by $\sigma$ must have zero coefficient on basis elements that change sign.

</details>

<details>
<summary>Worked solution</summary>

Since $E=\mathbb{Q}(\sqrt{2},\sqrt{3})$ has degree $4$ over $\mathbb{Q}$ and is the splitting field of $(x^2-2)(x^2-3)$, it is Galois. An automorphism fixing $\mathbb{Q}$ is determined by the images of $\sqrt{2}$ and $\sqrt{3}$, each of which must be a root of its minimal polynomial. The four choices are: $\mathrm{id}$ (both positive); $\sigma$ ($\sqrt{2}\mapsto -\sqrt{2}$, $\sqrt{3}\mapsto \sqrt{3}$); $\tau$ ($\sqrt{2}\mapsto \sqrt{2}$, $\sqrt{3}\mapsto -\sqrt{3}$); and $\sigma\tau$ (both negative). Thus $G\cong C_2\times C_2$. For the fixed field of $H=\{\mathrm{id},\sigma\}$, write a general element $a+b\sqrt{2}+c\sqrt{3}+d\sqrt{6}$ with $a,b,c,d\in\mathbb{Q}$. Applying $\sigma$ gives $a-b\sqrt{2}+c\sqrt{3}-d\sqrt{6}$. Equality forces $b=0$ and $d=0$. Hence $E^H=\{a+c\sqrt{3}:a,c\in\mathbb{Q}\}=\mathbb{Q}(\sqrt{3})$. By the Galois correspondence, $[E:E^H]=|H|=2$, which matches $[E:\mathbb{Q}(\sqrt{3})]=2$.

**Answer.** $G=\{\mathrm{id},\sigma,\tau,\sigma\tau\}\cong C_2\times C_2$; the fixed field of $H$ is $\mathbb{Q}(\sqrt{3})$.

</details>

*Tags: galois-theory, fields-extensions, fixed-fields, galois-correspondence*
