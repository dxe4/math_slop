
# Products, Semidirect Products, and Group Presentations

Knowing a normal subgroup $N$ and a quotient $G/N$ does not usually determine
$G$. The missing information is how a copy of the quotient, when one exists,
acts on the normal subgroup. Direct products encode the trivial action;
semidirect products encode a possibly nontrivial action by automorphisms.

This chapter makes that construction exact. It separates external formulas
from internal subgroup criteria, proves associativity and inverse formulas,
relates complements to split exact sequences, and turns presentations into
normal forms. The result explains why $C_6$ and $S_3$ both contain a normal
$C_3$ with quotient $C_2$ but are not isomorphic.

The prerequisites are group homomorphisms and quotients, Cayley's theorem and
presentations, actions, and Sylow constraints. No extension-classification
theory is assumed.

## 1. External direct products

**Definition 11.1 (External direct product).**

For groups $H$ and $K$, the **direct product** $H \times K$ is the Cartesian set
with coordinatewise multiplication:

$(h,k)(h',k')=(hh',kk')$.

Its identity is $(e_H,e_K)$, and

$(h,k)^{-1}=(h^{-1},k^{-1})$.

Associativity follows coordinatewise. The subgroups

$\overline{H}=H \times \{e_K\}$ and $\overline{K}=\{e_H\} \times K$

are normal, intersect trivially, and commute elementwise. Every element has a
unique expression $(h,e)(e,k)$.

The coordinate projections are onto homomorphisms:

$\pi_H:H \times K\to H$, $\pi_K:H \times K\to K$.

Their kernels are the opposite factors. Hence

$(H \times K)/\overline{K} \cong H$, and
$(H \times K)/\overline{H} \cong K$.

If the groups are finite, $|H \times K|=|H|\,|K|$. The order of $(h,k)$ is

$\operatorname{lcm}(\operatorname{ord}(h),\operatorname{ord}(k))$

when both orders are finite, because a power is identity exactly when both
coordinate powers are identity.

### Cyclic products

$C_m \times C_n$ is cyclic exactly when $\gcd(m,n)=1$. If the gcd is one, a pair
of generators has order $\operatorname{lcm}(m,n)=mn$, the full product order. Conversely, an
element order is at most $\operatorname{lcm}(m,n)$, which is smaller than $mn$ when the gcd is
greater than one.

## 2. The universal property of a direct product

Suppose a group $L$ has homomorphisms $f:L\to H$ and $g:L\to K$. There is a unique
homomorphism

$\langle f,g\rangle:L\to H \times K$, $x\to (f(x),g(x))$

whose two projections are $f$ and $g$. Coordinatewise multiplication proves it
is a homomorphism, and the required coordinates force uniqueness.

Maps **from** a direct product require compatibility. If $\alpha:H\to L$ and
$\beta:K\to L$ have commuting images, then

$\Phi(h,k)=\alpha(h)\beta(k)$

is a homomorphism. Without commuting images,

$\alpha(h)\beta(k)\alpha(h')\beta(k')$

cannot generally be rearranged into $\alpha(hh')\beta(kk')$.

This asymmetry is a useful diagnostic: pairing maps into a product is
automatic; multiplying maps out of a product needs commutation.

## 3. Internal direct products

**Theorem 11.2 (Internal direct-product criterion).**

Suppose $H,K\le G$ satisfy

1. $H \trianglelefteq G$ and $K \trianglelefteq G$;
2. $H \cap K=\{e\}$;
3. $HK=G$.

Then $G$ is the **internal direct product** of $H$ and $K$.

First, the factors commute. For $h \in H,k \in K$, the commutator

$[h,k]=hkh^{-1}k^{-1}$

lies in $H$ because $H$ is normal and in $K$ because $K$ is normal. The
intersection is trivial, so $[h,k]=e$.

Define

$\Phi:H \times K\to G$, $\Phi(h,k)=hk$.

Commutation makes it a homomorphism:

$hk h'k'=hh'kk'$.

The condition $HK=G$ makes it onto. If $hk=e$, then $h=k^{-1}$ lies in the
intersection, so both are identity; the kernel is trivial. Therefore

$G \cong H \times K$.

The expression $g=hk$ is unique: $hk=h'k'$ implies
$h'^{-1}h=k'k^{-1}$ lies in both factors.

Normality of both factors matters. In $S_3$, $A_3$ is normal and a
transposition subgroup has trivial intersection with it and multiplies with it
to all of $S_3$, but the transposition subgroup is not normal. The result is a
semidirect, not direct, product.

## 4. Automorphism actions

Let $\operatorname{Aut}(H)$ be the group of automorphisms of $H$. To build a semidirect
product, choose a homomorphism

$\phi:K\to \operatorname{Aut}(H)$.

Write $\phi_k(h)$ for $\phi(k)(h)$. The homomorphism law says

$\phi_{kk'}=\phi_k \circ \phi_{k'}$.

This action data is essential. The notation $H\rtimes K$ without a stated
action may describe several nonisomorphic groups.

### Automorphisms of a cyclic group

An automorphism of $C_n=\langle a\rangle$ is determined by the image of $a$, which must be
another generator $a^u$ with $\gcd(u,n)=1$. Thus

$\operatorname{Aut}(C_n) \cong U(n)$,

the multiplicative group of units modulo $n$. An action on $C_n$ can therefore
be specified by modular exponent multipliers.

Inversion $a\to a^{-1}$ is an automorphism of every abelian group and has order
at most two. It supplies the dihedral action.

## 5. External semidirect products

Given $\phi:K\to \operatorname{Aut}(H)$, define multiplication on $H \times K$ by

$(h,k)(h',k')=(h \phi_k(h'),kk')$.

The resulting group is the **semidirect product** $H\rtimes_{\phi}K$.

Associativity is a calculation with the action law. The left association has
first coordinate

$h \phi_k(h') \phi_{kk'}(h'')$.

The right association has first coordinate

$h \phi_k(h' \phi_{k'}(h''))$

$=h \phi_k(h') \phi_k(\phi_{k'}(h''))$,

which agrees because $\phi_{kk'}=\phi_k \circ \phi_{k'}$. Second coordinates
agree by associativity in $K$.

The identity is $(e_H,e_K)$. Solving both sides gives

$(h,k)^{-1}=(\phi_{k^{-1}}(h^{-1}),k^{-1})$.

The copy $H \times \{e\}$ is normal, the copy $\{e\} \times K$ is a subgroup, and
their intersection is trivial. Conjugation by $(e,k)$ on $(h,e)$ is exactly

$(e,k)(h,e)(e,k)^{-1}=(\phi_k(h),e)$.

If $\phi$ is trivial, the formula becomes coordinatewise multiplication and
the semidirect product is the direct product.

## 6. Internal semidirect products

Suppose $H,K\le G$ satisfy

1. $H \trianglelefteq G$;
2. $H \cap K=\{e\}$;
3. $HK=G$.

Conjugation by $K$ preserves $H$, giving

$\phi:K\to \operatorname{Aut}(H)$, $\phi_k(h)=khk^{-1}$.

Then

$G \cong H\rtimes_{\phi}K$.

Every $g$ has form $hk$, and the expression is unique by the same intersection
argument as before. Moreover,

$(hk)(h'k')=h(kh'k^{-1})kk'=h \phi_k(h')kk'$,

exactly the external semidirect multiplication. Thus $(h,k)\mapsto hk$ is an
isomorphism.

The subgroup $K$ is called a **complement** to $H$. If it is also normal, its
conjugation action on $H$ is trivial and the construction collapses to a direct
product.

## 7. Dihedral and symmetric examples

Let $C_n=\langle r\rangle$ and $C_2=\langle s\rangle$. Let $s$ act by inversion:

$\phi_s(r^i)=r^{-i}$.

Then

$C_n\rtimes_{\phi}C_2 \cong D_n$.

The pair $(r^i,e)$ represents a rotation and $(r^i,s)$ a reflection. The
relation

$srs^{-1}=r^{-1}$

is built into multiplication. Because $s^{-1}=s$, this matches the Chapter 7
presentation $srs=r^{-1}$.

For $n=3$, the same construction is

$C_3\rtimes C_2 \cong S_3$.

The trivial action instead gives $C_3 \times C_2 \cong C_6$. Thus the
same factor groups yield an abelian or nonabelian group depending on the
action.

### Explicit multiplication in $D_n$

**Worked example 11.3 (Dihedral coordinate multiplication).**

Encode elements as $(i,\epsilon)$ with $i \in \mathbb{Z}/n\mathbb{Z}$, $\epsilon \in \{0,1\}$. Then

$(i,\epsilon)(j,\delta)=(i+(-1)^\epsilon j, \epsilon+\delta \bmod 2)$.

This coordinate law makes every convention executable and avoids informal
reflection diagrams when checking products.


For a concrete calculation in $D_5$, take the reflection $u=(2,1)$ and rotation $v=(4,0)$. The displayed law gives
$$
uv=(2-4,1)=(3,1),\qquad vu=(4+2,1)=(1,1),
$$
where first coordinates are reduced modulo five. Their different rotation coordinates prove noncommutativity directly. Also $u^2=(2-2,0)=(0,0)$, so this nonidentity reflection has order two. By contrast $v$ has order five because four is coprime to five. The second coordinate tells us whether the next rotation contribution is added or subtracted; it cannot be ignored when composing two states. These calculations check the action convention and exhibit the distinction between a direct and a semidirect multiplication on the same underlying pairs.

## 8. Split exact sequences

An exact sequence

$1 \to  H \to  G \to  K \to  1$

records $H$ as the kernel of an onto map $\pi:G\to K$. It **splits** if there is a
homomorphism $s:K\to G$ with

$\pi \circ s=id_K$.

The section is injective, and its image is a complement to the kernel. For any
$g \in G$, put $k=\pi(g)$. Then

$h=g s(k)^{-1}$

lies in the kernel, so $g=h s(k)$. The intersection of $H$ and $s(K)$ is
trivial. Therefore a split exact sequence gives

$G \cong H\rtimes K$,

with action induced by conjugation through the section.

**Worked example 11.4 (A nonsplit cyclic extension).**

Not every extension splits. The sequence

$1 \to  C_2 \to  C_4 \to  C_2 \to  1$

using the unique order-two subgroup does not split. A section would have to
send the nonidentity quotient element to an element of order dividing two
outside the kernel, but the only element of order two in $C_4$ is already in
the kernel.

## 9. Groups of order $pq$

Let primes satisfy $p<q$ and let $|G|=pq$. Sylow arithmetic forces the Sylow
$q$-subgroup $Q$ to be unique: $n_q$ divides $p$ and is one modulo $q$, so
$n_q=1$. A Sylow $p$-subgroup $P$ has trivial intersection with $Q$, and
$|QP|=pq$, so

$G \cong C_q\rtimes_{\phi}C_p$.

The action is a homomorphism

$C_p\to \operatorname{Aut}(C_q)$,

and $|\operatorname{Aut}(C_q)|=q-1$. A nontrivial image has order $p$, so a nontrivial action
is possible only if $p$ divides $q-1$. If $p$ does not divide $q-1$, the action
must be trivial and

$G \cong C_q \times C_p \cong C_{pq}$.

**Worked example 11.5 (Actions distinguish orders fifteen and twenty-one).**

This gives, for example, the cyclicity of every group of order 15 because
$3$ does not divide $4$. For order 21, the multiplier $2 \in U(7)$ has order
three because $2^3=1 \bmod 7$; it produces a nontrivial action of $C_3$ on
$C_7$ and hence a nonabelian semidirect product.

The reduction to actions is complete, but a general count of isomorphism types
requires deciding when two actions are equivalent under automorphisms of both
factors. That classification step is not hidden here.

## 10. Presentations encode actions

The direct product of cyclic groups has presentation

$C_m \times C_n=\langle a,b | a^m=e,b^n=e,ab=ba\rangle$.

The relations reduce every word to $a^i b^j$, giving at most $mn$ elements.
The concrete direct product supplies $mn$ distinct images, so the presentation
is exact.

The dihedral semidirect product has

$D_n=\langle r,s | r^n=e,s^2=e,srs^{-1}=r^{-1}\rangle$.

The action relation moves $s$ past powers of $r$, producing normal forms
$r^i$ and $r^i s$.

More generally, presentations for $H$ and $K$, together with relations

$k h k^{-1}=\phi_k(h)$

on chosen generators, present a semidirect product when the relations truly
specify the action and a normal-form proof controls all words. Merely writing
the conjugation equations is not a substitute for checking they define
automorphisms and respect the relations of $K$.

## 11. Common errors

- The product of element orders need not be the order of a pair; use an lcm.
- Trivial intersection and product $HK=G$ do not give a direct product unless
  both factors are normal.
- $H\rtimes K$ is incomplete notation until the action is stated.
- The semidirect multiplication is not coordinatewise unless the action is
  trivial.
- Normality belongs to the first factor in the convention
  $H\rtimes K$ used here.
- A quotient sequence need not split; a set-theoretic choice of representatives
  is not a homomorphic section.
- Isomorphic kernel and quotient do not determine the middle group.
- Relations that hold in a model give a surjection from a presented group;
  normal forms or another injectivity argument are still required.

## 12. Chapter summary and retrieval prompts

Direct products combine groups with trivial mutual action. Internally, two
normal, trivially intersecting factors that fill the group commute and give a
direct product. A homomorphism $K\to \operatorname{Aut}(H)$ twists multiplication to form
$H\rtimes K$; internally this corresponds to a normal subgroup with a
complement. Split exact sequences are precisely this situation. Presentations
record the action through conjugation relations and require normal-form audits.

Retrieve:

1. What is the order of an element in a finite direct product?
2. Why do normal factors with trivial intersection commute?
3. Which homomorphism is the input to a semidirect product?
4. How is associativity tied to the action law?
5. What subgroup conditions characterize an internal semidirect product?
6. What does a splitting section provide?
7. How does a presentation distinguish trivial from inversion action?

## Exercises with full solutions

### ALG-CH11-E001 — Exercise 1: Direct-product laws

Verify the inverse formula in $H \times K$.

<details>
<summary>Hint 1</summary>

Multiply the proposed inverse on both sides.

</details>

<details>
<summary>Hint 2</summary>

Each coordinate must give its own identity.

</details>

#### ALG-CH11-E001 — Solution

<details>
<summary>Solution</summary>

Coordinatewise multiplication gives
$(h,k)(h^{-1},k^{-1})=(e_H,e_K)$ and the same product in reverse order.
Therefore $(h,k)^{-1}=(h^{-1},k^{-1})$.


</details>

### ALG-CH11-E002 — Exercise 2: Element order

Find the order of $([2],[3])$ in $\mathbb{Z}/8\mathbb{Z} \times \mathbb{Z}/15\mathbb{Z}$.

<details>
<summary>Hint 1</summary>

Compute the two coordinate orders using gcds.

</details>

<details>
<summary>Hint 2</summary>

The pair order is the lcm of their return times.

</details>

#### ALG-CH11-E002 — Solution

<details>
<summary>Solution</summary>

$[2]$ has additive order $8/\gcd(8,2)=4$; $[3]$ has order
$15/\gcd(15,3)=5$. The pair has order $\operatorname{lcm}(4,5)=20$.


</details>

### ALG-CH11-E003 — Exercise 3: When a cyclic product is cyclic

Prove $C_m \times C_n$ is cyclic iff $\gcd(m,n)=1$.

<details>
<summary>Hint 1</summary>

Every pair order divides the lcm of the factor orders.

</details>

<details>
<summary>Hint 2</summary>

Factor generators attain it, and it equals mn exactly in the coprime case.

</details>

#### ALG-CH11-E003 — Solution

<details>
<summary>Solution</summary>

If coprime, a pair of generators has order
$\operatorname{lcm}(m,n)=mn$, the product size, so it generates. If the gcd exceeds one,
every pair has order dividing $\operatorname{lcm}(m,n)<mn$, so no element generates the
whole product.


</details>

### ALG-CH11-E004 — Exercise 4: Quotients of a direct product

Prove $(H \times K)/(H \times \{e\}) \cong K$.

<details>
<summary>Hint 1</summary>

Project to K.

</details>

<details>
<summary>Hint 2</summary>

The opposite factor is its kernel, so apply the first isomorphism theorem.

</details>

#### ALG-CH11-E004 — Solution

<details>
<summary>Solution</summary>

The projection $\pi_K(h,k)=k$ is an onto homomorphism with kernel
$H \times \{e\}$. The first isomorphism theorem gives the result.


</details>

### ALG-CH11-E005 — Exercise 5: Internal factors commute

If $H,K \trianglelefteq G$ and $H \cap K=\{e\}$, prove every $h \in H$ commutes with
every $k \in K$.

<details>
<summary>Hint 1</summary>

Show hkh⁻¹k⁻¹ lies in both normal factors.

</details>

<details>
<summary>Hint 2</summary>

Trivial intersection forces the commutator to vanish.

</details>

#### ALG-CH11-E005 — Solution

<details>
<summary>Solution</summary>

The commutator $hkh^{-1}k^{-1}$ lies in $H$ because $H$ is
normal and lies in $K$ because $K$ is normal. It therefore lies in the trivial
intersection and equals identity, which is equivalent to $hk=kh$.


</details>

### ALG-CH11-E006 — Exercise 6: $S_3$ as an internal semidirect product

Take $H=A_3$ and $K=\langle (1 2)\rangle$. Verify the three internal conditions.

<details>
<summary>Hint 1</summary>

Use index two for normality of A₃.

</details>

<details>
<summary>Hint 2</summary>

Incompatible orders give trivial intersection, and the product-size formula gives all six elements.

</details>

#### ALG-CH11-E006 — Solution

<details>
<summary>Solution</summary>

$A_3$ is normal as the sign kernel. The intersection is trivial
because the nonidentity element of $K$ is odd. The product has size
$|H|\,|K|/|H \cap K|=3 \times 2=6$, so it is all $S_3$. Hence
$S_3 \cong C_3\rtimes C_2$; conjugation by the transposition
inverts a three-cycle.


</details>

### ALG-CH11-E007 — Exercise 7: Semidirect associativity

Complete the associativity calculation for three pairs.

<details>
<summary>Hint 1</summary>

Expand both bracketings in the twisted law.

</details>

<details>
<summary>Hint 2</summary>

Use the automorphism property and the action homomorphism law in the first coordinate.

</details>

#### ALG-CH11-E007 — Solution

<details>
<summary>Solution</summary>

Left association yields
$(h \phi_k(h') \phi_{kk'}(h''),(kk')k'')$. Right association yields
$(h \phi_k(h' \phi_{k'}(h'')),k(k'k''))$, whose first coordinate is
$h \phi_k(h') \phi_k(\phi_{k'}(h''))$. The action homomorphism gives
$\phi_k \circ \phi_{k'}=\phi_{kk'}$, and associativity in $K$ matches second
coordinates.


</details>

### ALG-CH11-E008 — Exercise 8: Semidirect inverse

Verify $(h,k)^{-1}=(\phi_{k^{-1}}(h^{-1}),k^{-1})$.

<details>
<summary>Hint 1</summary>

Substitute into the twisted product law in both orders.

</details>

<details>
<summary>Hint 2</summary>

Use φ_kφ_k⁻¹=id and inverse preservation by automorphisms.

</details>

#### ALG-CH11-E008 — Solution

<details>
<summary>Solution</summary>

Multiplying on the left gives first coordinate
$h \phi_k(\phi_{k^{-1}}(h^{-1}))=hh^{-1}=e$. Multiplying in reverse gives
$\phi_{k^{-1}}(h^{-1}) \phi_{k^{-1}}(h)=e$. Both second coordinates are
identity, so the displayed pair is a two-sided inverse.


</details>

### ALG-CH11-E009 — Exercise 9: Trivial action

Prove a semidirect product with trivial $\phi$ is a direct product.

<details>
<summary>Hint 1</summary>

A trivial action leaves every h fixed.

</details>

<details>
<summary>Hint 2</summary>

The twisted law then becomes coordinatewise.

</details>

#### ALG-CH11-E009 — Solution

<details>
<summary>Solution</summary>

Triviality means $\phi_k(h')=h'$ for all $k,h'$. The multiplication
becomes $(h,k)(h',k')=(hh',kk')$, exactly the coordinatewise direct-product
law.


</details>

### ALG-CH11-E010 — Exercise 10: Dihedral coordinates

In $D_5$, using $(i,\epsilon)(j,\delta)=(i+(-1)^\epsilon j,\epsilon+\delta)$,
compute $(2,1)(4,0)$ and $(4,0)(2,1)$.

<details>
<summary>Hint 1</summary>

The first factor's reflection coordinate controls the sign.

</details>

<details>
<summary>Hint 2</summary>

Reduce rotation coordinates modulo five and reflection coordinates modulo two.

</details>

#### ALG-CH11-E010 — Solution

<details>
<summary>Solution</summary>

Modulo five,
$(2,1)(4,0)=(2-4,1)=(3,1)$, while
$(4,0)(2,1)=(4+2,1)=(1,1)$. The unequal products show the inversion action is
nontrivial and the group nonabelian.


</details>

### ALG-CH11-E011 — Exercise 11: Reflection orders

Prove every $(i,1)$ in the dihedral coordinate model has order two.

<details>
<summary>Hint 1</summary>

Square the pair.

</details>

<details>
<summary>Hint 2</summary>

The two rotation terms cancel while the second coordinate becomes zero.

</details>

#### ALG-CH11-E011 — Solution

<details>
<summary>Solution</summary>

Squaring gives
$(i,1)(i,1)=(i-i,0)=(0,0)$, the identity. A reflection pair is not identity
because its second coordinate is one, so its order is exactly two.


</details>

### ALG-CH11-E012 — Exercise 12: An action on $C_8$

Show inversion defines a homomorphism $C_2\to \operatorname{Aut}(C_8)$ and identify the
resulting group order.

<details>
<summary>Hint 1</summary>

Inversion is an automorphism of the abelian cycle.

</details>

<details>
<summary>Hint 2</summary>

Its square is identity, so it respects C₂'s relation.

</details>

#### ALG-CH11-E012 — Solution

<details>
<summary>Solution</summary>

Inversion is an automorphism because $C_8$ is abelian, and
applying it twice is identity, so the generator relation of $C_2$ is
satisfied. The semidirect product has underlying set $C_8 \times C_2$, hence
order 16; it is the dihedral group $D_8$ under the order-$2n$ convention.


</details>

### ALG-CH11-E013 — Exercise 13: A split sequence

Show $1\to C_3\to S_3\to C_2\to 1$ via sign splits.

<details>
<summary>Hint 1</summary>

Lift the nonidentity sign to a transposition.

</details>

<details>
<summary>Hint 2</summary>

Its order gives a homomorphic section.

</details>

#### ALG-CH11-E013 — Solution

<details>
<summary>Solution</summary>

The kernel of sign is $A_3 \cong C_3$, and sign is onto.
Map the nonidentity element of $C_2$ to any transposition, for example
$(1 2)$. This is a homomorphism because the transposition has order two, and
sign composed with it is identity on $C_2$. Thus it is a section and the
sequence splits.


</details>

### ALG-CH11-E014 — Exercise 14: A nonsplit sequence

Prove $1\to C_2\to C_4\to C_2\to 1$ does not split.

<details>
<summary>Hint 1</summary>

A section lifts the quotient generator to an element of order dividing two.

</details>

<details>
<summary>Hint 2</summary>

Check where every such element of C₄ maps.

</details>

#### ALG-CH11-E014 — Solution

<details>
<summary>Solution</summary>

The kernel is the unique subgroup generated by the element of
order two. A section must send the nonidentity element of the quotient to an
element outside the kernel whose order divides two. But the only elements of
order dividing two are identity and the kernel's nonidentity element. No such
image exists, so there is no homomorphic section.


</details>

### ALG-CH11-E015 — Exercise 15: The normal Sylow subgroup at order $pq$

For primes $p<q$, prove every group of order $pq$ has a normal subgroup of
order $q$.

<details>
<summary>Hint 1</summary>

The q-Sylow count divides p and is one modulo q.

</details>

<details>
<summary>Hint 2</summary>

The inequality p<q forces uniqueness.

</details>

#### ALG-CH11-E015 — Solution

<details>
<summary>Solution</summary>

Sylow gives $n_q|p$ and $n_q \equiv 1 \bmod q$. The divisors are
one and $p$, and $p<q$ prevents $p$ from being one modulo $q$. Thus $n_q=1$,
so the Sylow $q$-subgroup is unique and normal.


</details>

### ALG-CH11-E016 — Exercise 16: Groups of order 15

Use semidirect actions to prove every group of order 15 is cyclic.

<details>
<summary>Hint 1</summary>

Reduce to an action C₃→Aut(C₅).

</details>

<details>
<summary>Hint 2</summary>

Its image size divides both three and four.

</details>

#### ALG-CH11-E016 — Solution

<details>
<summary>Solution</summary>

It is $C_5\rtimes C_3$. An action maps $C_3$ into
$\operatorname{Aut}(C_5)$, which has order four. The image order divides both three and four,
so it is trivial. Hence the group is $C_5 \times C_3$, cyclic because five and
three are coprime.


</details>

### ALG-CH11-E017 — Exercise 17: A nonabelian group of order 21

Construct it using the multiplier two modulo seven.

<details>
<summary>Hint 1</summary>

Check multiplication by two is an order-three automorphism modulo seven.

</details>

<details>
<summary>Hint 2</summary>

Use the semidirect law and exhibit nontrivial conjugation.

</details>

#### ALG-CH11-E017 — Solution

<details>
<summary>Solution</summary>

The automorphism $a\to a^2$ of $C_7=\langle a\rangle$ has order three because
$2^3=8=1 \bmod 7$, while neither $2$ nor $2^2$ is one modulo seven. Send a
generator $b$ of $C_3$ to this automorphism. The semidirect product has order
21 and relation $bab^{-1}=a^2$. The action is nontrivial, so $a$ and $b$ do not
commute; the group is nonabelian.


</details>

### ALG-CH11-E018 — Exercise 18: A direct-product presentation

Prove $\langle a,b|a^4=e,b^3=e,ab=ba\rangle$ presents $C_4 \times C_3$.

<details>
<summary>Hint 1</summary>

Commute letters into a^i b^j normal forms.

</details>

<details>
<summary>Hint 2</summary>

Bound the presented size above and map onto the matching concrete product.

</details>

#### ALG-CH11-E018 — Solution

<details>
<summary>Solution</summary>

Commutation moves every $a$ left of every $b$; power relations
reduce every word to $a^i b^j$ with $0\le i<4,0\le j<3$, so there are at most 12
elements. Sending generators to the coordinate generators of
$C_4 \times C_3$ gives a surjection onto 12 elements. The bound makes it an
isomorphism.


</details>

### ALG-CH11-E019 — Exercise 19: Dihedral normal forms revisited

In $D_n=\langle r,s\mid r^n=e,s^2=e,srs^{-1}=r^{-1}\rangle$, prove $sr^i=r^{-i}s$ and obtain $2n$ normal forms.

<details>
<summary>Hint 1</summary>

Derive the relation for positive and negative powers.

</details>

<details>
<summary>Hint 2</summary>

Move s symbols rightward and compare with distinct concrete symmetries.

</details>

#### ALG-CH11-E019 — Solution

<details>
<summary>Solution</summary>

The relation gives the case $i=1$; induction gives positive
powers, and inverses give negative powers. Move each $s$ rightward and cancel
$s^2$. Every word becomes $r^i$ or $r^i s$, with exponent reduced modulo $n$.
The concrete $n$ rotations and $n$ reflections show these $2n$ forms are
distinct.


</details>

### ALG-CH11-E020 — Exercise 20: Same factors, different actions

Compare the trivial and inversion actions of $C_2$ on $C_3$.

<details>
<summary>Hint 1</summary>

One action fixes the generator and the other reverses it.

</details>

<details>
<summary>Hint 2</summary>

Compare commutation and order behavior of the resulting order-six groups.

</details>

#### ALG-CH11-E020 — Solution

<details>
<summary>Solution</summary>

The trivial action yields $C_3 \times C_2 \cong C_6$, an
abelian group containing an element of order six. Inversion yields
$C_3\rtimes C_2 \cong S_3$, which is nonabelian and has no element
of order six. Kernel and quotient factors alone therefore do not determine the
middle group; the action matters.

</details>


## Summary

Direct products combine commuting factors; semidirect products record an explicit automorphism action. Internally, a normal subgroup and complement recover that action, and a homomorphic section is exactly the extra data supplied by a split sequence. Presentations need compatible action relations and controlled normal forms. The following chapter develops solvable and nilpotent structure through subgroup series.
