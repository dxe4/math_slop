
# Burnside’s p^a q^b Theorem

A group whose order involves only two primes is solvable. Sylow theory alone does not make this conclusion immediate: the Sylow subgroups need not themselves be normal. Burnside's argument uses traces and algebraic integers to show that a hypothetical nonabelian simple counterexample would have an impossible conjugacy class.

Read [class-sum arithmetic](group-algebra-wedderburn.md), [character orthogonality](characters-and-orthogonality.md), and the algebra book's [solvable-group definitions](#/books/algebra-patterns-structure/solvable-nilpotent-groups). The needed solvability facts are recalled and proved below. G is finite, all representations are complex, and p,q are distinct primes. Exponents may be zero.

## 1. The arithmetic input and its limits

Recall that an algebraic integer is a complex root of a monic integer polynomial. Roots of unity are algebraic integers. Sums and products of algebraic integers are algebraic integers, and a rational algebraic integer is an integer; Chapter 6 proved these facts through a stable finitely generated integer module and denominator clearing.

For an irreducible character χ of degree d and a conjugacy class C containing g, Chapter 6 also proved
$$\omega_\chi(C)=\frac{|C|\chi(g)}d$$
is an algebraic integer. It is an eigenvalue of the integer multiplication matrix of the class sum on the centre of C[G].

The normalised value χ(g)/d need not always be integral over Z. For the standard S_3 character on a 3-cycle, it is −1/2. An extra coprimality hypothesis will make the quotient an algebraic integer, after which its interpretation as an average of roots of unity becomes decisive.

**Lemma 9.1 (Coprime class and degree).** If gcd(|C|,d)=1, then χ(g)/d is an algebraic integer.

*Proof.* Choose integers a,b with a|C|+bd=1. Multiplying by χ(g)/d gives
$$\frac{\chi(g)}d=a\,\omega_\chi(C)+b\,\chi(g).$$
The central-character value and the ordinary character value are algebraic integers, so their integer linear combination is one. ∎

This is the exact point where coprimality enters. Knowing merely that both |C| and d divide |G| gives no such conclusion.

## 2. An algebraic integer that is an average of roots of unity

**Lemma 9.2.** Suppose α=(ζ_1+⋯+ζ_d)/d is an algebraic integer, with each ζ_j a root of unity and d≥1. Then either α=0 or all ζ_j are equal.

*Proof.* Every algebraic conjugate of α has absolute value at most one. To justify that statement, place all ζ_j in the finite extension K=Q(ζ_1,…,ζ_d). Any embedding of Q(α) into C extends to an embedding of K into C: adjoin the finitely many generators one at a time, sending each to a root of its transformed minimal polynomial. The quotient description F[x]/(m) makes each step an injective field map. The transformed roots of unity remain roots of unity, so the transformed average still has modulus at most one.

The minimal polynomial of the algebraic integer α over Q is monic with integer coefficients. Indeed, its conjugates are algebraic integers, so its coefficients, being symmetric sums, are algebraic integers; they are rational by definition of the minimal polynomial and therefore integers. If α≠0, its constant term is a nonzero integer. Up to sign it is the product of all conjugates, each of modulus at most one. Hence that product has modulus both at least one and at most one. Every conjugate, including α itself, has modulus one.

Finally equality in the triangle inequality for ζ_1+⋯+ζ_d forces all the unit-modulus summands to have the same argument. Equivalently the squared-modulus identity has every real part ζ_i\bar ζ_j equal to one. Thus all ζ_j coincide. ∎

The lemma does not assert that an arbitrary algebraic integer inside the unit disk is zero or a root of unity. It uses the bound for every algebraic conjugate, obtained here from the specific root-of-unity average. The distinction prevents a common invalid shortcut.

**Theorem 9.3 (Zero or scalar).** Let χ be an irreducible complex character of degree d, and let g have conjugacy-class size coprime to d. Then either χ(g)=0 or ρ(g) is scalar. In the latter case |χ(g)|=d.

*Proof.* The operator ρ(g) is diagonalizable with root-of-unity eigenvalues ζ_1,…,ζ_d. Lemma 9.1 makes their average χ(g)/d an algebraic integer. If χ(g)≠0, Lemma 9.2 makes all eigenvalues equal. Diagonalizability then makes the operator scalar. The scalar has modulus one, yielding the trace equality. ∎

## 3. A prime-power class cannot occur in a nonabelian simple group

**Theorem 9.4 (Burnside's class-size obstruction).** A finite nonabelian simple group has no nonidentity conjugacy class of prime-power size.

*Proof.* Suppose G were such a group and g≠e had class size p^a, for a≥0. Every nontrivial irreducible representation is faithful: its kernel is normal; simplicity makes that kernel either trivial or all G. The latter case would make the irreducible representation the trivial one.

We claim there is a nontrivial irreducible χ of degree d not divisible by p with χ(g)≠0. Column orthogonality between e and g gives
$$0=\sum_\psi \psi(e)\overline{\psi(g)}
=1+\sum_{\psi\ne1}\psi(e)\overline{\psi(g)}.$$
If every nontrivial character whose degree is not divisible by p vanished at g, then
$$-\frac1p=\sum_{\substack{\psi\ne1\\p\mid\psi(e)}}
\frac{\psi(e)}p\,\overline{\psi(g)}.$$
The right side is an algebraic integer, while the nonintegral rational −1/p is not. This contradiction proves the claim.

For that χ, gcd(d,p^a)=1, so Theorem 9.3 makes ρ(g) scalar. For every h, scalar commutation gives ρ(ghg^(−1)h^(−1))=I. Faithfulness forces gh=hg. Hence g is a nonidentity central element. The centre is a normal subgroup; in a nonabelian simple group it is trivial, a contradiction. ∎

The theorem is often useful as a simplicity obstruction in its own right. It does not say that every group with a prime-power class is solvable. It rules out one particular group structure, and the two-prime order argument supplies the rest.

### Extracting a normal subgroup from the obstruction

The same argument yields more than a contradiction under simplicity. Suppose g is noncentral and its conjugacy class has prime-power size. The column-orthogonality argument still supplies a nontrivial irreducible character of degree coprime to that prime and nonzero at g. Its representation sends g to a scalar. Therefore every commutator ghg^(−1)h^(−1) belongs to its kernel. Since g is noncentral, at least one such commutator is nonidentity, so the kernel is nontrivial. Since the representation is nontrivial irreducible, its kernel is proper. It is consequently a proper nontrivial normal subgroup.

This gives a character-theoretic witness for the normal subgroup needed in the subsequent induction. It does not by itself list that subgroup or its generators: obtaining them requires an actual realisation of the representation, followed by determining which group elements act as the identity. The existence proof and the finite computational task have distinct inputs.

## 4. Passing from simplicity to solvability

For a group G write G' for its commutator subgroup and G^(r) for the iterated derived series, with G^(0)=G. The group is solvable when G^(r)={e} for some r.

**Lemma 9.5 (Solvable extension).** If N◁G, and both N and G/N are solvable, then G is solvable.

*Proof.* A homomorphism sends commutators to commutators, so the quotient image of G^(r) is (G/N)^(r). If the quotient's r-th derived group is trivial, then G^(r)⊆N. Inductively G^(r+s)⊆N^(s). Choosing s with N^(s)={e} proves termination for G. ∎

A nontrivial finite p-group has nontrivial centre. Its conjugation class equation writes its order as |Z(P)| plus class sizes divisible by p, so p divides |Z(P)|. In particular the centre contains a nonidentity element. Repeated central quotients, or induction using Lemma 9.5, show that every finite p-group is solvable.

**Theorem 9.6 (Burnside).** Every finite group of order p^a q^b is solvable.

*Proof.* Induct on |G|. The trivial group and prime-power cases are solvable. Suppose both primes occur. If G has a proper nontrivial normal subgroup N, both N and G/N have smaller orders involving at most these two primes, by Lagrange. They are solvable by induction, and Lemma 9.5 proves G solvable.

It remains to exclude a nonabelian simple G of the specified order; an abelian simple group is cyclic of prime order and already solvable. Let Q be a Sylow q-subgroup, so |Q|=q^b. Choose e≠z∈Z(Q). Since Q⊆C_G(z), the centraliser order is divisible by q^b. Its index |G:C_G(z)|, which is the conjugacy-class size of z, therefore divides p^a and is a power of p. The class-size obstruction rules this out in a nonabelian simple group. Thus the remaining case cannot occur, completing the induction. ∎

The centre of a Sylow subgroup need not be central in all G. We used it only to place the entire Sylow subgroup inside its centraliser. That weaker conclusion is enough to force a prime-power class size.

## 5. Worked example: the hypothesis in S_3

A transposition has class size three. The standard irreducible has degree two, coprime to three, and character value zero there. The trivial and sign representations have scalar transposition operators, so every irreducible satisfies the zero-or-scalar conclusion.

A 3-cycle has class size two. The standard degree is also two, so coprimality fails. Its character value is −1, neither zero nor of modulus two, and its operator is not scalar: its eigenvalues are ω,ω². Its normalised trace −1/2 is not an algebraic integer. This single entry displays all three points where an omitted hypothesis would break the arithmetic argument.

The group itself is solvable, with S_3'=A_3 and A_3'={e}. The class-size obstruction never claimed S_3 could not have a prime-power class; it claimed such a group cannot be nonabelian simple.

## 6. Worked example: a normal subgroup detected in S_4

A double transposition z=(12)(34) has a class of size three. The degree-two irreducible arises by letting S_4 permute the three partitions of four labels into two unordered pairs and taking the sum-zero plane of that three-point action. The kernel of the action is V_4={e,(12)(34),(13)(24),(14)(23)}.

On that irreducible, z acts as I, giving character value two. Its degree is coprime to the class size, so the scalar conclusion is visible. The representation is not faithful, and its kernel supplies the proper normal subgroup that a simplicity argument must eventually find.

The derived series gives the solvability explicitly:
$$S_4'\ =A_4,\qquad A_4'\ =V_4,\qquad V_4'=\{e\}.$$
For the first equality, sign kills commutators and commutators of transpositions generate the 3-cycles of A_4. For the second, A_4/V_4 is cyclic, so A_4'≤V_4; a commutator of 3-cycles is a nonidentity double transposition, and its A_4-conjugates are all three such elements, generating V_4.

## 7. Worked example: order 72 and the three-prime boundary

Suppose a group G of order 72=2³·3² were nonabelian simple. A Sylow 3-subgroup has order nine and a nontrivial central element z. The centraliser contains that order-nine subgroup, so the class size of z divides eight. Its possibilities are 1,2,4,8, all powers of two. Size one would make z central; any other possibility contradicts the class-size obstruction. Thus such a simple group cannot exist, and the induction proves every order-72 group solvable.

The restriction to two primes cannot be dropped. The order of A_5 is 60=2²·3·5. Its nonidentity classes have sizes 15,20,12,12: double transpositions, 3-cycles, and two classes of 5-cycles. None is a prime power. For a double transposition the A_5-centraliser has order four; for a 3-cycle order three; for a 5-cycle order five. The class sizes follow by dividing sixty by those orders. This pattern is compatible with A_5 being nonabelian simple, as proved in the algebra book. The two-prime proof has no corresponding way to eliminate all but one prime from the centraliser index.

The class-size obstruction is consistent with the first nonabelian simple example. In A₅, a three-cycle has centraliser of order three, so its class has twenty elements. A double transposition has centraliser of order four, giving fifteen. A five-cycle has centraliser of order five and class size twelve; the twenty-four five-cycles therefore occupy two classes. The nonidentity sizes are twelve, twelve, fifteen and twenty, each divisible by at least two different primes. This calculation uses centralisers within A₅, not those in the ambient symmetric group. It verifies the obstruction's hypothesis boundary without using the obstruction to prove simplicity or using simplicity to assume the individual class counts.

## 8. Exercises

### REP-09-01 — Bezout integrality

Prove Lemma 9.1 explicitly when |C|=9 and d=4.

<details>
<summary>Hint 1</summary>

Find integers a,b with 9a+4b=1.

</details>
<details>
<summary>Hint 2</summary>

Use a=1,b=−2.

</details>
<details>
<summary>Full solution</summary>

Since 9−2·4=1,
χ(g)/4=[9χ(g)/4]−2χ(g).
The bracket is the central-character value of the class sum and is an algebraic integer. The ordinary character value is a sum of roots of unity and is also an algebraic integer. Their difference is therefore an algebraic integer. The same Bezout argument works whenever degree and class size are coprime.

</details>

### REP-09-02 — A forbidden rational average

Explain why the average of the two nontrivial cube roots, (ω+ω²)/2=−1/2, cannot be an algebraic integer.

<details>
<summary>Hint 1</summary>

A rational algebraic integer must be an integer.

</details>
<details>
<summary>Hint 2</summary>

Its summands have modulus one but are different.

</details>
<details>
<summary>Full solution</summary>

The average is the rational number −1/2, which is not an integer and hence not an algebraic integer. It is nonzero and its two summands differ, so it also illustrates the contrapositive of Lemma 9.2. Being an average of roots of unity by itself does not guarantee algebraic integrality; division by the degree is the delicate step.

</details>

### REP-09-03 — Scalar action and commutators

If ρ(g) is scalar, prove [g,h] belongs to kerρ for every h. Deduce g is central when ρ is faithful.

<details>
<summary>Hint 1</summary>

Apply ρ to ghg^(−1)h^(−1).

</details>
<details>
<summary>Hint 2</summary>

A scalar matrix commutes with every matrix.

</details>
<details>
<summary>Full solution</summary>

Writing ρ(g)=λI gives
ρ([g,h])=(λI)ρ(h)(λ^(−1)I)ρ(h)^(−1)=I.
Thus every [g,h] belongs to the kernel. If the kernel is trivial, every commutator [g,h]=e, so g commutes with all h and lies in Z(G). Without faithfulness, this conclusion holds only in the quotient by the representation kernel.

</details>

### REP-09-04 — Faithful irreducibles in a simple group

Prove that every nontrivial irreducible representation of a nonabelian simple finite group is faithful.

<details>
<summary>Hint 1</summary>

The representation kernel is normal.

</details>
<details>
<summary>Hint 2</summary>

If the kernel is all G, the whole action is trivial.

</details>
<details>
<summary>Full solution</summary>

Simplicity makes the kernel either {e} or G. In the second case every group element acts as I, so every subspace is invariant. Irreducibility then forces a one-dimensional trivial representation, contrary to the assumption. Therefore the kernel is trivial. This uses nontrivial to mean nonisomorphic to the trivial representation, not merely nonzero-dimensional.

</details>

### REP-09-05 — The integral contradiction

In the class-size obstruction, explain why
1+Σ_(p|d_i)d_i\overline{χ_i(g)}=0
is impossible.

<details>
<summary>Hint 1</summary>

Divide by p.

</details>
<details>
<summary>Hint 2</summary>

Every d_i/p is an integer.

</details>
<details>
<summary>Full solution</summary>

The equality would imply
−1/p=Σ_(p|d_i)(d_i/p)\overline{χ_i(g)}.
Each character value and its complex conjugate is an algebraic integer, and integer linear combinations remain algebraic integers. Thus −1/p would be an algebraic integer. It is rational but not integral, a contradiction. The argument is divisibility in the algebraic-integer ring, rather than reduction of arbitrary complex numbers modulo p.

</details>

### REP-09-06 — The centre of a p-group

Give the class-equation proof that a finite nontrivial p-group has nontrivial centre.

<details>
<summary>Hint 1</summary>

Conjugacy-class sizes are indices of centralisers.

</details>
<details>
<summary>Hint 2</summary>

Every noncentral class size is divisible by p.

</details>
<details>
<summary>Full solution</summary>

For a p-group P, every class size divides |P| and is a power of p. A noncentral class has size greater than one and is therefore divisible by p. The class equation |P|=|Z(P)|+Σ_(noncentral classes)|C| shows |Z(P)|≡0 mod p. Since the identity lies in the centre, its size is positive and divisible by p, so is at least p. Hence the centre contains a nonidentity element.

</details>

### REP-09-07 — A centraliser index

For |G|=2⁴·5³ and z in the centre of a Sylow 5-subgroup, list the possible sizes of its conjugacy class.

<details>
<summary>Hint 1</summary>

The centraliser contains a subgroup of order 5³.

</details>
<details>
<summary>Hint 2</summary>

Its index must divide 2⁴.

</details>
<details>
<summary>Full solution</summary>

The centraliser order has the full factor 5³, and its remaining factor divides 2⁴. Thus |G:C_G(z)| is one of 1,2,4,8,16. If z≠e, none of these sizes is possible in a nonabelian simple group: size one contradicts trivial centre and the other sizes contradict the prime-power class obstruction. No assertion that the Sylow subgroup is normal was needed.

</details>

### REP-09-08 — Solvable extensions

If N has derived length at most s and G/N has derived length at most r, prove G has derived length at most r+s.

<details>
<summary>Hint 1</summary>

The r-th derived subgroup of G maps trivially into G/N.

</details>
<details>
<summary>Hint 2</summary>

Continue taking commutators inside N.

</details>
<details>
<summary>Full solution</summary>

The quotient image of G^(r) is (G/N)^(r)={e}, so G^(r)≤N. Induction on j gives G^(r+j)≤N^(j), since commutators of elements of a subgroup lie in its derived subgroup. At j=s this yields G^(r+s)≤N^(s)={e}. Thus the stated bound holds. It can be nonsharp because the first inclusion may already land in a smaller subgroup of N.

</details>

### REP-09-09 — Why Sylow normality is unnecessary

Identify the role of Q in Burnside's proof and explain why no uniqueness of a Sylow subgroup is required.

<details>
<summary>Hint 1</summary>

Only one Sylow subgroup is chosen.

</details>
<details>
<summary>Hint 2</summary>

The argument uses its centre and the centraliser of one element.

</details>
<details>
<summary>Full solution</summary>

Choose any Sylow q-subgroup Q. Its nontrivial centre supplies z≠e, and centrality within Q gives Q≤C_G(z). Since Q already contains the full q-part of |G|, the class size of z has no q-factor and is a p-power. The argument never conjugates Q globally or asserts Q◁G. This is why the character-theoretic obstruction handles cases where elementary Sylow-counting does not immediately produce a normal Sylow subgroup.

</details>

### REP-09-10 — A_4 entries

Check Theorem 9.3 on both nonidentity class types of A_4.

<details>
<summary>Hint 1</summary>

The class sizes are three and four.

</details>
<details>
<summary>Hint 2</summary>

The irreducible degrees are 1,1,1,3.

</details>
<details>
<summary>Full solution</summary>

For the double-transposition class of size three, the degree-three irreducible is not coprime to the class size, so its value −1 need not be zero or scalar-sized. The three linear characters have scalar value one. For either 3-cycle class of size four, the degree-three representation is coprime to the size and has character zero, as required. Every linear representation is automatically scalar, with value a cube root of unity on those classes.

</details>

### REP-09-11 — The three-prime boundary

Why does the Sylow-centraliser argument not force a prime-power class in a group of order 60?

<details>
<summary>Hint 1</summary>

Removing the full power of one prime can leave two other primes.

</details>
<details>
<summary>Hint 2</summary>

For a Sylow 5-element, its class size may be twelve.

</details>
<details>
<summary>Full solution</summary>

If a centraliser contains the full 5-part, its index divides twelve, which can involve both two and three. Thus the index need not be a prime power. Similarly removing the full 3-part can leave factors two and five. A_5 has nonidentity class sizes 12,15,20, all involving two primes. The special elimination of every prime except one is available only for the two-prime group order.

</details>

### REP-09-12 — Scope of the conclusion

Does Burnside's theorem imply that every group of order p^a q^b is abelian or nilpotent? Give a counterexample and its derived series.

<details>
<summary>Hint 1</summary>

Use S_3 of order six.

</details>
<details>
<summary>Hint 2</summary>

Its Sylow two-subgroups are not normal, but its commutator subgroup is cyclic.

</details>
<details>
<summary>Full solution</summary>

No. S_3 has order 2·3, is nonabelian and is not nilpotent: its centre is trivial, whereas every nontrivial finite nilpotent group has nontrivial centre. Its derived series is S_3,A_3,{e}, so it is solvable. Burnside's conclusion concerns the derived series; it does not assert a direct product of Sylow subgroups or a central series of the same kind as a nilpotent group.

</details>

## 9. Summary and next connection

Class-sum integrality plus a coprimality argument forces a character value to be zero or to come from a scalar operator. This rules out prime-power classes in nonabelian simple groups. A Sylow-subgroup centre then rules out simple two-prime groups, and solvable extensions complete Burnside's theorem. The next chapter studies a different use of character averages: [Frobenius–Schur indicators](frobenius-schur-indicators.md) and the distinction between real and quaternionic forms.
