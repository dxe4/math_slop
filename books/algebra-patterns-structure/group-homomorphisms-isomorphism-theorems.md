
# Group Homomorphisms and the Isomorphism Theorems

A homomorphism compares groups by preserving multiplication. Its kernel records the distinctions it erases; its image records the structure it reaches. The first isomorphism theorem says these records fit exactly:

$G/\ker(\phi) \cong \operatorname{im}(\phi)$.

The later isomorphism theorems describe how subgroup lattices and nested quotients behave. They are not collections of quotient tricks. Each is a precise statement that two different construction routes collapse the same information.

The local prerequisites are [Normal Subgroups and Quotient Groups](normal-subgroups-quotient-groups.md) and the homomorphism language introduced in Chapter 1.

## 1. Maps are typed claims

**Definition 6.1 (Group homomorphism).**

A **group homomorphism** $\phi:G\to H$ satisfies

$\phi(xy)=\phi(x)\phi(y)$

for all $x,y \in G$. The two multiplications belong to different groups even when notation suppresses that fact.

Every group homomorphism preserves identity, inverses, and integer powers:

$\phi(e_G)=e_H$,

$\phi(g^{-1})=\phi(g)^{-1}$,

$\phi(g^n)=\phi(g)^n$ for $n \in \mathbb{Z}$.

Composition of homomorphisms is a homomorphism. The identity map is a homomorphism. An isomorphism is a bijective homomorphism; its inverse is automatically a homomorphism.

The domain and codomain affect the claim. The inclusion $2\mathbb{Z}\to \mathbb{Z}$ is a homomorphism and injective but not onto. The same formula viewed as $2\mathbb{Z}\to 2\mathbb{Z}$ is an isomorphism. A formula without its types does not determine surjectivity or even whether it is closed.

### Worked verification: conjugation

**Worked example 6.2 (An inner automorphism).**

For fixed $a \in G$, define $c_a(g)=aga^{-1}$. Then

$c_a(gh)=agha^{-1}=ag(a^{-1}a)ha^{-1}=c_a(g)c_a(h)$.

Its inverse is $c_{a^{-1}}$, so conjugation is an automorphism. The inserted $a^{-1}a$ is the decisive step; merely saying “conjugation respects products” would conceal the proof.

### Nonexample: powers in a nonabelian group

The map $p_2(g)=g^2$ need not be a homomorphism because

$p_2(gh)=ghgh$, while $p_2(g)p_2(h)=gghh$.

They agree for every pair exactly when the group is abelian. In an abelian group, $g\to g^n$ is a homomorphism for every integer $n$.

## 2. Kernel, image, and fibers

For $\phi:G\to H$,

$\ker \phi=\{g:\phi(g)=e_H\}$

is a normal subgroup of $G$, and

$\operatorname{im} \phi=\{\phi(g):g \in G\}$

is a subgroup of $H$.

Chapter 2 proved the subgroup claims; Chapter 5 proved kernel normality by conjugation.

**Theorem 6.3 (Trivial-kernel criterion).**

**Injectivity criterion.** $\phi$ is injective exactly when $\ker \phi=\{e_G\}$.

If $\phi$ is injective, only $e_G$ can map to $e_H$. Conversely, if $\phi(x)=\phi(y)$, then

$\phi(y^{-1}x)=\phi(y)^{-1}\phi(x)=e_H$.

A trivial kernel forces $y^{-1}x=e_G$, hence $x=y$.

More generally,

$\phi(x)=\phi(y)$ exactly when $y^{-1}x \in \ker \phi$,

so every nonempty fiber is a left coset of the kernel. If $\phi(x_0)=h$, then

$\phi^{-1}(\{h\})=x_0 \ker \phi$.

### Worked example: exponent sum

**Worked example 6.4 (An integer measurement of words).**

Let $F(a,b)$ denote the group of reduced words in $a^{\pm 1},b^{\pm 1}$ under concatenation and cancellation. Define $\sigma:F(a,b)\to \mathbb{Z}$ to be the total exponent of $a$ in a word. Cancellation removes an $a$ and $a^{-1}$ together, so the sum is independent of the reduced representation. Concatenation adds exponent sums, making $\sigma$ a homomorphism. It is onto because $\sigma(a^n)=n$. Its kernel contains nonidentity words with total $a$-exponent zero, such as $aba^{-1}$. The first isomorphism theorem will identify the quotient by this kernel with $\mathbb{Z}$.

## 3. The first isomorphism theorem

**Theorem 6.2 (First isomorphism).** If $\phi:G\to H$ is a homomorphism, then

$G/\ker \phi \cong \operatorname{im} \phi$.

Define

$\overline{\phi}:G/\ker \phi \to  \operatorname{im} \phi$,

$\overline{\phi}(g \ker \phi)=\phi(g)$.

Let $K=\ker \phi$.

**Well-defined.** If $gK=hK$, then $h^{-1}g \in K$, so

$\phi(h)^{-1}\phi(g)=\phi(h^{-1}g)=e$,

and $\phi(g)=\phi(h)$.

**Homomorphism.** Quotient multiplication gives

$\overline{\phi}((gK)(hK))=\overline{\phi}(ghK)=\phi(gh)=\phi(g)\phi(h)$.

**Onto the stated codomain.** Every element of $\operatorname{im} \phi$ is $\phi(g)$ for some $g$.

**One-to-one.** If $\overline{\phi}(gK)=e$, then $\phi(g)=e$, so $g \in K$ and $gK=K$, quotient identity.

All four obligations matter. The codomain is $\operatorname{im} \phi$, not necessarily all of $H$.

### Worked arithmetic example

**Worked example 6.5 (Reduction fibers and quotient).**

Let $\phi:\mathbb{Z}\to \mathbb{Z}/12\mathbb{Z}$ send $n$ to $[n]$. It is onto and has kernel $12\mathbb{Z}$. The theorem gives

$\mathbb{Z}/12\mathbb{Z} \cong \operatorname{im} \phi=\mathbb{Z}/12\mathbb{Z}$.

Although the conclusion looks tautological in standard notation, the theorem explains why congruence classes are precisely the fibers of reduction.

### Worked matrix example

The determinant

$\det:GL_n(\mathbb R)\to \mathbb R^{\times}$

is an onto homomorphism: $\det(AB)=\det A\det B$, and $\operatorname{diag}(t,1,...,1)$ has determinant any nonzero $t$. Its kernel is $SL_n(\mathbb R)$. Therefore

$GL_n(\mathbb R)/SL_n(\mathbb R) \cong \mathbb R^{\times}$.

The quotient forgets every determinant-one change and retains only volume scale with orientation sign.

## 4. The quotient factorization principle

Let $N \trianglelefteq G$ and let $\pi:G\to G/N$ be the canonical projection. A homomorphism $\phi:G\to H$ descends to a homomorphism from $G/N$ exactly when

$N \subseteq \ker \phi$.

If the containment holds, define

$\widetilde{\phi}(gN)=\phi(g)$.

The same kernel calculation proves representative independence. It is the unique map satisfying

$\phi=\widetilde{\phi} \circ \pi$,

because $\pi$ is onto and every quotient coset has form $\pi(g)$.

Conversely, if such a factorization exists and $n \in N$, then

$\phi(n)=\widetilde{\phi}(\pi(n))=\widetilde{\phi}(N)=e$,

so $n$ lies in the kernel.

This **universal property** characterizes $G/N$: it is the most general group receiving a homomorphism from $G$ that makes every element of $N$ equal identity.

### Worked descent

Define $\phi:\mathbb{Z}\to \mathbb{Z}/4\mathbb{Z}$ by reduction modulo four. Does it descend through $\mathbb{Z}/12\mathbb{Z}$? Here $12\mathbb{Z} \subseteq 4\mathbb{Z}=\ker \phi$, so yes:

$\widetilde{\phi}:\mathbb{Z}/12\mathbb{Z}\to \mathbb{Z}/4\mathbb{Z}$, $[n]_{12}\to [n]_4$.

If two integers differ by a multiple of twelve, they differ by a multiple of four, proving well-definedness. The map is onto and has kernel $\{[0],[4],[8]\}$.

It does not descend through $\mathbb{Z}/2\mathbb{Z}$, because $2\mathbb{Z}$ is not contained in $4\mathbb{Z}$; integers differing by two can have different classes modulo four.

## 5. The correspondence theorem

Fix $N \trianglelefteq G$. Subgroups of $G/N$ correspond exactly to subgroups of $G$ containing $N$.

For $N\le K\le G$, send $K$ to

$K/N=\{kN:k \in K\}$.

For $L\le G/N$, send $L$ to its full preimage

$\pi^{-1}(L)=\{g \in G:gN \in L\}$.

These constructions are inverse. The preimage of $K/N$ is $K$: if $gN=kN$ with $k \in K$, then $k^{-1}g \in N \subseteq K$, so $g \in K$. Conversely, every quotient subgroup $L$ is reached because $\pi(\pi^{-1}(L))=L$ by surjectivity.

The correspondence preserves containment and index. It also preserves normality:

$K \trianglelefteq G$ exactly when $K/N \trianglelefteq G/N$.

Conjugation in the quotient satisfies

$(gN)(K/N)(gN)^{-1}=(gKg^{-1})/N$,

which proves the equivalence.

### Worked lattice: $\mathbb{Z}/12\mathbb{Z}$

Subgroups of $\mathbb{Z}/12\mathbb{Z}$ correspond to subgroups of $\mathbb{Z}$ containing $12\mathbb{Z}$, namely $d\mathbb{Z}$ where $d$ divides $12$. Their images have orders $12/d$:

| subgroup above $12\mathbb{Z}$ | quotient subgroup | order |
| --- | --- | ---: |
| $\mathbb{Z}$ | all of $\mathbb{Z}/12\mathbb{Z}$ | 12 |
| $2\mathbb{Z}$ | $\langle [2]\rangle$ | 6 |
| $3\mathbb{Z}$ | $\langle [3]\rangle$ | 4 |
| $4\mathbb{Z}$ | $\langle [4]\rangle$ | 3 |
| $6\mathbb{Z}$ | $\langle [6]\rangle$ | 2 |
| $12\mathbb{Z}$ | $\{[0]\}$ | 1 |

The familiar divisor lattice is the correspondence theorem in concrete form.

## 6. The second isomorphism theorem

Let $H\le G$ and $N \trianglelefteq G$. The set

$HN=\{hn:h \in H,n \in N\}$

is a subgroup of $G$, $H \cap N \trianglelefteq H$, and

$H/(H \cap N) \cong HN/N$.

The map makes the theorem transparent. Restrict the quotient projection to $H$:

$\psi:H\to G/N$, $\psi(h)=hN$.

Its kernel is $H \cap N$. Its image consists of cosets $hN$; as a subgroup of $G/N$, this is exactly $HN/N$. The first isomorphism theorem gives the result.

For completeness, $HN$ is a subgroup because normality gives $NH=HN$; then

$(h_1n_1)(h_2n_2)=h_1h_2(h_2^{-1}n_1h_2)n_2 \in HN$,

and inverses can be handled similarly. Alternatively, $HN=\pi^{-1}(\pi(H))$, a preimage of a subgroup, so it is a subgroup.

The slogan is:

> enlarge $H$ by $N$, then quotient by $N$; this loses exactly $H \cap N$ from $H$.

### Additive example

Inside $\mathbb{Z}$, take $H=4\mathbb{Z}$ and $N=6\mathbb{Z}$. Then

$H+N=2\mathbb{Z}$, $H \cap N=12\mathbb{Z}$.

The theorem gives

$4\mathbb{Z}/12\mathbb{Z} \cong 2\mathbb{Z}/6\mathbb{Z}$.

Both are cyclic of order three. The explicit map sends $4k+12\mathbb{Z}$ to $4k+6\mathbb{Z}$; its image in $2\mathbb{Z}/6\mathbb{Z}$ cycles through $0,4,2$ modulo six.

## 7. The third isomorphism theorem

Let $N\le K$ be normal subgroups of $G$. Then $K/N \trianglelefteq G/N$, and

$(G/N)/(K/N) \cong G/K$.

Define

$\Phi:G/N\to G/K$, $\Phi(gN)=gK$.

It is well-defined because $N \subseteq K$: changing $g$ by an element of $N$ also changes it by an element of $K$. It is onto, and its kernel consists of cosets $gN$ with $g \in K$, namely $K/N$. The first isomorphism theorem proves the result.

The theorem says nested collapsing can be performed in one step or two. The subgroup containment and normality hypotheses are what make both routes meaningful.

### Worked nested quotient

Let $12\mathbb{Z}\le 4\mathbb{Z}\le \mathbb{Z}$. Then

$(\mathbb{Z}/12\mathbb{Z})/(4\mathbb{Z}/12\mathbb{Z}) \cong \mathbb{Z}/4\mathbb{Z}$.

The inner subgroup $4\mathbb{Z}/12\mathbb{Z}$ has three elements; quotienting the twelve-element group by it leaves four cosets, matching $\mathbb{Z}/4\mathbb{Z}$.

## 8. Homomorphisms organize normal subgroups

Every kernel is normal, and every normal subgroup is the kernel of its canonical quotient map. Thus normal subgroups are exactly those subgroups that can be erased consistently by a homomorphism.

Likewise, every image is a subgroup, and every subgroup occurs as the image of its inclusion map. Kernel and image answer different questions:

- kernel: which source distinctions disappear?
- image: which target elements are reached?

The first isomorphism theorem connects them without confusing their ambient groups.

A short exact sequence

$1 \to  N \to  G \to  Q \to  1$

records an injective copy of $N$ as the kernel of an onto map to $Q$. In this first course, the notation is a compact ledger, not an invitation to the module/category theory developed in the separate advanced volume. Constructing all possible $G$ from $N$ and $Q$ leads to extensions and semidirect products in Chapter 11.

## 9. Common errors

- A homomorphism need not be injective or onto.
- A trivial kernel proves injectivity, not surjectivity.
- The first theorem's codomain is $\operatorname{im} \phi$ unless onto-ness is proved.
- Defining $gK \to  \phi(g)$ requires a well-definedness calculation.
- A map descends through $G/N$ when $N$ is contained in the kernel, not merely when the two subgroups intersect.
- Correspondence uses subgroups **containing** $N$; arbitrary subgroups of $G$ do not map to subgroups of $G/N$ by $K \to  K/N$ when $N$ is not contained in $K$.
- The third theorem needs nested normal subgroups so both quotient groups exist.

## 10. Chapter summary and retrieval prompts

Homomorphisms preserve products and turn fibers into kernel cosets. The first isomorphism theorem identifies the quotient by the kernel with the image. A map factors uniquely through $G/N$ exactly when it kills $N$. Subgroups above $N$ correspond to subgroups of $G/N$. The second theorem compares enlargement and intersection; the third proves that nested quotients equal one-step collapse.

Retrieve:

1. Why is the squaring map not generally a homomorphism?
2. Which four properties establish the first induced map as an isomorphism?
3. What containment is the exact descent condition?
4. Which subgroups participate in quotient correspondence?
5. How do the second and third theorems describe two routes to the same collapse?

A homomorphism can also be retained through its graph. For f:G→H, its graph is the subset of G×H consisting of pairs (g,f(g)). If f is a homomorphism, this is a subgroup: products and inverses remain pairs of the required form. Conversely, if the graph is a subgroup, multiplying the pairs for g and h forces the pair over gh to have second coordinate f(g)f(h), hence f(gh)=f(g)f(h). Projection onto G is then an isomorphism, and projection onto H recovers f after its inverse. This retains more data than kernel and image alone: identity and negation on the additive integers have the same kernel and image but different graphs and different values.

## Exercises with full solutions

### ALG-CH06-E001 — Exercise 1: Multiplication by an integer

For additive groups, let $\phi:\mathbb{Z}\to \mathbb{Z}$, $\phi(n)=6n$. Find kernel and image and apply the first theorem.

<details>
<summary>Hint 1</summary>

Find which multiples of six vanish as integers.

</details>

<details>
<summary>Hint 2</summary>

The reached subgroup can be smaller than the stated codomain.

</details>

#### ALG-CH06-E001 — Solution

<details>
<summary>Solution</summary>

The kernel is $\{0\}$ because $6n=0$ implies $n=0$. The image is $6\mathbb{Z}$. Thus $\mathbb{Z}/\{0\} \cong 6\mathbb{Z}$, explicitly by $n \to  6n$.


</details>

### ALG-CH06-E002 — Exercise 2: Reduction with a non-surjective codomain

Let $\phi:\mathbb{Z}\to \mathbb{Z}/12\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}$, $\phi(n)=([n]_{12},[n]_2)$. Find the kernel and image size.

<details>
<summary>Hint 1</summary>

An input must vanish in both residue coordinates to enter the kernel.

</details>

<details>
<summary>Hint 2</summary>

Use the least common multiple and count reached residue patterns.

</details>

#### ALG-CH06-E002 — Solution

<details>
<summary>Solution</summary>

Both coordinates vanish exactly when $12$ divides $n$, since that already implies evenness. Thus the kernel is $12\mathbb{Z}$. The first theorem gives an image isomorphic to $\mathbb{Z}/12\mathbb{Z}$, so the image has twelve elements. The codomain has twenty-four elements, so the map is not onto; its coordinates satisfy the parity compatibility $[n]_{12} \bmod 2=[n]_2$.


</details>

### ALG-CH06-E003 — Exercise 3: Injectivity test

Prove $\phi:G\to H$ is injective iff $\phi(g)=e_H$ implies $g=e_G$.

<details>
<summary>Hint 1</summary>

If two images agree, examine y⁻¹x.

</details>

<details>
<summary>Hint 2</summary>

Compare with the source identity for the reverse implication.

</details>

#### ALG-CH06-E003 — Solution

<details>
<summary>Solution</summary>

The stated condition says the kernel is trivial. The kernel criterion then proves injectivity. Directly, $\phi(x)=\phi(y)$ gives $\phi(y^{-1}x)=e$; the condition yields $y^{-1}x=e$, so $x=y$.


</details>

### ALG-CH06-E004 — Exercise 4: Image order

If $G$ is finite, prove $|\operatorname{im} \phi|=|G|/|\ker \phi|$.

<details>
<summary>Hint 1</summary>

Every reached output has one kernel coset as its fiber.

</details>

<details>
<summary>Hint 2</summary>

Count equal-size fibers using Lagrange.

</details>

#### ALG-CH06-E004 — Solution

<details>
<summary>Solution</summary>

The first theorem gives an isomorphism $G/\ker \phi \to  \operatorname{im} \phi$. The quotient has index $[G:\ker \phi]=|G|/|\ker \phi|$ by Lagrange, and isomorphic finite groups have equal size.


</details>

### ALG-CH06-E005 — Exercise 5: Sum map

Let $\phi:\mathbb{Z} \times \mathbb{Z}\to \mathbb{Z}$, $\phi(a,b)=a+b$. Find its kernel and apply the first theorem.

<details>
<summary>Hint 1</summary>

Solve a+b=0 in integers.

</details>

<details>
<summary>Hint 2</summary>

Give a chosen preimage for every target integer.

</details>

#### ALG-CH06-E005 — Solution

<details>
<summary>Solution</summary>

The map is onto because $\phi(n,0)=n$. The kernel is $\{(a,-a):a \in \mathbb{Z}\}=\langle (1,-1)\rangle$. Therefore

$(\mathbb{Z} \times \mathbb{Z})/\langle (1,-1)\rangle \cong \mathbb{Z}$.

The quotient remembers total sum and erases transfers between coordinates.


</details>

### ALG-CH06-E006 — Exercise 6: Product projection

For groups $G,H$, apply the first theorem to $\pi_G:G \times H\to G$.

<details>
<summary>Hint 1</summary>

Find all pairs with first coordinate identity.

</details>

<details>
<summary>Hint 2</summary>

The projection is onto and its kernel is the opposite factor.

</details>

#### ALG-CH06-E006 — Solution

<details>
<summary>Solution</summary>

The projection is onto and has kernel $\{e_G\} \times H$. Thus

$(G \times H)/(\{e_G\} \times H) \cong G$.


</details>

### ALG-CH06-E007 — Exercise 7: Determinant sign

Let $\phi:GL_n(\mathbb R)\to \{1,-1\}$ send $A$ to the sign of $\det A$. Find its kernel and prove it is onto.

<details>
<summary>Hint 1</summary>

Use determinant multiplicativity and sign multiplication.

</details>

<details>
<summary>Hint 2</summary>

A diagonal matrix with one negative entry reaches the other sign.

</details>

#### ALG-CH06-E007 — Solution

<details>
<summary>Solution</summary>

The sign of a product is the product of signs, so this is a homomorphism. The kernel consists of matrices with positive determinant. It is onto because $I$ maps to $1$ and $\operatorname{diag}(-1,1,...,1)$ maps to $-1$. The quotient by positive-determinant matrices is isomorphic to $C_2$.


</details>

### ALG-CH06-E008 — Exercise 8: Squaring criterion

Prove $g\to g^2$ is a homomorphism on $G$ iff $G$ is abelian.

<details>
<summary>Hint 1</summary>

Expand the homomorphism equation for squaring.

</details>

<details>
<summary>Hint 2</summary>

Cancellation in ghgh=gghh forces commutation.

</details>

#### ALG-CH06-E008 — Solution

<details>
<summary>Solution</summary>

If $G$ is abelian, $(gh)^2=g^2h^2$. Conversely, homomorphism preservation gives $ghgh=gghh$; cancel $g$ on the left and $h$ on the right to get $hg=gh$ for arbitrary $g,h$.


</details>

### ALG-CH06-E009 — Exercise 9: Descent criterion

Does $\phi:\mathbb{Z}\to \mathbb{Z}/6\mathbb{Z}$ descend through $\mathbb{Z}/15\mathbb{Z}$? Through $\mathbb{Z}/12\mathbb{Z}$?

<details>
<summary>Hint 1</summary>

Descent means the collapse subgroup lies in 6Z.

</details>

<details>
<summary>Hint 2</summary>

Test whether each proposed period is divisible by six.

</details>

#### ALG-CH06-E009 — Solution

<details>
<summary>Solution</summary>

The kernel is $6\mathbb{Z}$. Descent through $\mathbb{Z}/n\mathbb{Z}$ requires $n\mathbb{Z} \subseteq 6\mathbb{Z}$, equivalently $6$ divides $n$. It does not descend through $15\mathbb{Z}$, but it does through $12\mathbb{Z}$; the induced rule is $[a]_{12}\to [a]_6$.


</details>

### ALG-CH06-E010 — Exercise 10: Factorization uniqueness

If $\pi:G\to G/N$ and maps $\alpha,\beta:G/N\to H$ satisfy $\alpha \circ \pi=\beta \circ \pi$, prove $\alpha=\beta$.

<details>
<summary>Hint 1</summary>

Choose a representative of any quotient coset.

</details>

<details>
<summary>Hint 2</summary>

Surjectivity of the projection lets the two composites determine each value.

</details>

#### ALG-CH06-E010 — Solution

<details>
<summary>Solution</summary>

The projection is onto. Every quotient element is $\pi(g)$, and then $\alpha(\pi(g))=\beta(\pi(g))$ by assumption. Thus the maps agree everywhere.


</details>

### ALG-CH06-E011 — Exercise 11: Correspondence in $\mathbb{Z}/18\mathbb{Z}$

Which subgroup of $\mathbb{Z}$ corresponds to the order-six subgroup of $\mathbb{Z}/18\mathbb{Z}$?

<details>
<summary>Hint 1</summary>

Identify the generator of the order-six quotient subgroup.

</details>

<details>
<summary>Hint 2</summary>

Take its full integer preimage.

</details>

#### ALG-CH06-E011 — Solution

<details>
<summary>Solution</summary>

The order-six subgroup is $\langle [3]\rangle$, the image of $3\mathbb{Z}$. It corresponds to $3\mathbb{Z}$, which contains $18\mathbb{Z}$; the quotient has order $|3\mathbb Z/18\mathbb Z|=[3\mathbb Z:18\mathbb Z]=6$.


</details>

### ALG-CH06-E012 — Exercise 12: Normality under correspondence

Why is every subgroup of $\mathbb{Z}/18\mathbb{Z}$ normal from the correspondence viewpoint?

<details>
<summary>Hint 1</summary>

Subgroups above the kernel lie in an abelian source.

</details>

<details>
<summary>Hint 2</summary>

Use preservation of normality under correspondence.

</details>

#### ALG-CH06-E012 — Solution

<details>
<summary>Solution</summary>

Corresponding subgroups above $18\mathbb{Z}$ lie in the abelian group $\mathbb{Z}$ and are normal. The correspondence theorem preserves normality, so their quotient subgroups are normal. More directly, $\mathbb{Z}/18\mathbb{Z}$ is abelian.


</details>

### ALG-CH06-E013 — Exercise 13: Second theorem in integers

Verify $8\mathbb{Z}/(8\mathbb{Z} \cap 12\mathbb{Z}) \cong (8\mathbb{Z}+12\mathbb{Z})/12\mathbb{Z}$ and identify both cyclic orders.

<details>
<summary>Hint 1</summary>

Compute the gcd-generated sum and lcm-generated intersection.

</details>

<details>
<summary>Hint 2</summary>

Count both cyclic quotient orders.

</details>

#### ALG-CH06-E013 — Solution

<details>
<summary>Solution</summary>

The intersection is $24\mathbb{Z}$ and the sum is $4\mathbb{Z}$. The theorem gives $8\mathbb{Z}/24\mathbb{Z} \cong 4\mathbb{Z}/12\mathbb{Z}$. Each has three cosets and is cyclic of order three.


</details>

### ALG-CH06-E014 — Exercise 14: Second-theorem kernel

For $\psi:H\to HN/N$, $\psi(h)=hN$, prove $\ker \psi=H \cap N$ and the map is onto.

<details>
<summary>Hint 1</summary>

The quotient identity is N.

</details>

<details>
<summary>Hint 2</summary>

Each hn has the same quotient coset as h, proving surjectivity.

</details>

#### ALG-CH06-E014 — Solution

<details>
<summary>Solution</summary>

$\psi(h)=N$ exactly when $h \in N$; since $h$ already lies in $H$, the kernel is the intersection. Every coset in $HN/N$ has a representative $hn$; but $hnN=hN$, so it is reached by $h$. Thus the map is onto.


</details>

### ALG-CH06-E015 — Exercise 15: Third theorem in residues

Show $(\mathbb{Z}/24\mathbb{Z})/(6\mathbb{Z}/24\mathbb{Z}) \cong \mathbb{Z}/6\mathbb{Z}$ and compare orders.

<details>
<summary>Hint 1</summary>

Compare reduction modulo twenty-four and modulo six.

</details>

<details>
<summary>Hint 2</summary>

Identify the entire subgroup erased by the second quotient.

</details>

#### ALG-CH06-E015 — Solution

<details>
<summary>Solution</summary>

Here $24\mathbb{Z}\le 6\mathbb{Z}\le \mathbb{Z}$. The third theorem gives the isomorphism. The middle subgroup $6\mathbb{Z}/24\mathbb{Z}$ has four elements, so the quotient has $24/4=6$ elements, matching $\mathbb{Z}/6\mathbb{Z}$.


</details>

### ALG-CH06-E016 — Exercise 16: Induced map for the third theorem

Prove $gN\to gK$ is well-defined when $N\le K$.

<details>
<summary>Hint 1</summary>

Representatives differing by N also differ by K.

</details>

<details>
<summary>Hint 2</summary>

Use N⊆K in the coset equality test.

</details>

#### ALG-CH06-E016 — Solution

<details>
<summary>Solution</summary>

If $gN=hN$, then $h^{-1}g \in N$. Since $N \subseteq K$, the same element lies in $K$, so $gK=hK$. Thus the output does not depend on the $N$-coset representative.


</details>

### ALG-CH06-E017 — Exercise 17: Normal subgroups are kernels

Prove a subgroup $N\le G$ is normal iff it is the kernel of some homomorphism from $G$.

<details>
<summary>Hint 1</summary>

Kernels are normal by conjugation.

</details>

<details>
<summary>Hint 2</summary>

For the converse take the canonical quotient map.

</details>

#### ALG-CH06-E017 — Solution

<details>
<summary>Solution</summary>

Every homomorphism kernel is normal. Conversely, if $N \trianglelefteq G$, the canonical projection $\pi:G\to G/N$ is a homomorphism and has kernel exactly $N$.


</details>

### ALG-CH06-E018 — Exercise 18: Image versus codomain

Give a homomorphism with trivial kernel whose first-isomorphism conclusion is not an isomorphism to the full codomain.

<details>
<summary>Hint 1</summary>

Choose an inclusion into a larger group.

</details>

<details>
<summary>Hint 2</summary>

A trivial kernel identifies only the image with the domain.

</details>

#### ALG-CH06-E018 — Solution

<details>
<summary>Solution</summary>

The inclusion $\mathbb{Z}\to\mathbb Q$ is an injective additive homomorphism with trivial kernel, but its image is $\mathbb{Z}$, not all of $\mathbb Q$. The theorem says $\mathbb{Z}/\{0\} \cong \mathbb{Z}$ as the image, not to $\mathbb Q$.


</details>

### ALG-CH06-E019 — Exercise 19: Commutator factorization

If $A$ is abelian and $\phi:G\to A$, prove $\phi$ factors through $G/[G,G]$.

<details>
<summary>Hint 1</summary>

An abelian target kills every commutator.

</details>

<details>
<summary>Hint 2</summary>

Apply the quotient factorization principle to their generated subgroup.

</details>

#### ALG-CH06-E019 — Solution

<details>
<summary>Solution</summary>

Every commutator maps to identity because outputs commute, so $[G,G] \subseteq \ker \phi$. The quotient factorization principle gives a unique homomorphism $G/[G,G]\to A$ whose composition with the projection is $\phi$.


</details>

### ALG-CH06-E020 — Exercise 20: Transfer problem: lossy encodings

A homomorphic encoding $\phi:G\to H$ represents system actions in a simpler group. Explain exactly when two source actions share an encoding, what structure the lossless encoded action group has, and how to factor a second encoding that ignores at least the same distinctions.

<details>
<summary>Hint 1</summary>

Use kernel cosets to describe equal encodings.

</details>

<details>
<summary>Hint 2</summary>

The lossless image is G/kerφ, and the second map descends when it kills that kernel.

</details>

#### ALG-CH06-E020 — Solution

<details>
<summary>Solution</summary>

Actions $x,y$ share an encoding exactly when $y^{-1}x \in \ker \phi$, so fibers are kernel cosets. The lossless group of encoded actions is $\operatorname{im} \phi$, isomorphic to $G/\ker \phi$ by the first theorem. If a second homomorphism $\psi:G\to K$ ignores every distinction in a normal subgroup $N$ with $N \subseteq \ker \psi$, it factors uniquely through $G/N$; in particular, it factors through $G/\ker \phi$ when $\ker \phi \subseteq \ker \psi$. These are exact algebraic loss statements, not claims about numerical or semantic adequacy of a real encoding.


</details>

## ALG-CH06-P001 — Project: a quotient-and-correspondence audit

Analyze the chain $12\mathbb{Z}\le 4\mathbb{Z}\le \mathbb{Z}$ and the maps

$\mathbb{Z} \to  \mathbb{Z}/12\mathbb{Z} \to  \mathbb{Z}/4\mathbb{Z}$.

Construct the kernels, images, all subgroups in the correspondence above $12\mathbb{Z}$, the kernel of the induced second map, and the third-isomorphism identification. Present both coset representatives and commuting map equations.

### Deliverables

Submit both projections with domains, codomains, kernels, images, and representative-independence proofs. List all six subgroups above $12\mathbb Z$, their corresponding quotient subgroups with representatives and orders, and their containment relations. Give the commuting equations and the final quotient isomorphism with a proof.

### Solution framework and rubric

The first projection has kernel $12\mathbb{Z}$ and image $\mathbb{Z}/12\mathbb{Z}$. The induced map $[n]_{12}\to [n]_4$ is well-defined because $12\mathbb{Z} \subseteq 4\mathbb{Z}$; it is onto with kernel $4\mathbb{Z}/12\mathbb{Z}=\{ [0],[4],[8] \}$. Subgroups above $12\mathbb{Z}$ are $d\mathbb{Z}$ for divisors $d$ of $12$, corresponding to $\langle [d]\rangle$ in the quotient. For $d=1,2,3,4,6,12$, these have respectively $12,6,4,3,2,1$ elements, with representatives $[0],[d],\ldots,[12-d]$. Containment reverses divisibility of the positive generators: $d\mathbb Z\subseteq e\mathbb Z$ exactly when $e\mid d$, and the corresponding quotient subgroups retain that containment. The third theorem yields

$(\mathbb{Z}/12\mathbb{Z})/(4\mathbb{Z}/12\mathbb{Z}) \cong \mathbb{Z}/4\mathbb{Z}$.

The triangle commutes because $[n]_{12}\mapsto[n]_4$ gives the same class as reducing $n$ directly modulo four. If $[n]_{12}=[m]_{12}$, then $12\mid(n-m)$ and therefore $4\mid(n-m)$; this proves representative independence. Every $[r]_4$ is the image of $[r]_{12}$, proving surjectivity. The final quotient has four cosets, represented by $[[0]_{12}],\ldots,[[3]_{12}]$; its map to $\mathbb Z/4\mathbb Z$ is the displayed isomorphism.

## Summary

A homomorphism identifies two inputs precisely when they differ by its kernel. Quotienting by that kernel yields the image, and further factorization is possible exactly when the desired distinctions are already erased. Correspondence and the second and third theorems organize subgroup and quotient constructions. Permutation models next make these structural maps concrete.
