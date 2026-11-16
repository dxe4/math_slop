var e=`---
parent_id: book-number-theory-proof-reference
chapter_id: primitive-roots-cyclic-units
title: "Primitive Roots and Cyclic Unit Groups"
level: advanced-undergraduate
estimated_minutes: 230
license: CC BY-SA 4.0
---

# Primitive Roots and Cyclic Unit Groups {#section-1-primitive-roots-and-cyclic-unit-groups}

A primitive root is a single residue whose powers enumerate every unit. Such a coordinate turns multiplication into addition of exponents and makes order questions transparent. But primitive roots do not exist for every modulus. This chapter proves cyclicity over finite fields, states and scopes the full integer-modulus classification, and develops reliable tests and counts.

Prerequisites are orders, CRT, prime-power lifting, and polynomial root bounds. Afterward you should be able to find and certify primitive roots, solve discrete-log tables in small groups, count generators, and reject moduli whose unit groups cannot be cyclic.

<a id="section-5-1-cyclic-groups-and-generators"></a>
## 1. Cyclic groups and generators {#section-7-1-cyclic-groups-and-generators}

A finite group $G$ is **cyclic** if $G=\\{1,g,\\ldots,g^{N-1}\\}$ for some $g$; then $\\operatorname{ord}(g)=N=\\lvert G\\rvert$. The generators of a cyclic group of order $N$ are exactly $g^k$ with $\\gcd(k,N)=1$, so there are $\\varphi(N)$.

If $\\operatorname{ord}(g)=N$, then

$\\operatorname{ord}(g^k)=N/\\gcd(N,k)$.

This proves the generator criterion and turns equality $g^r=g^s$ into the linear congruence $r\\equiv s \\bmod N$.

<a id="section-15-2-finite-subgroups-of-fields-are-cyclic"></a>
## 2. Finite subgroups of fields are cyclic {#section-17-2-finite-subgroups-of-fields-are-cyclic}

**Theorem 8.1.** Every finite subgroup $G$ of the multiplicative group of a field is cyclic.

Let $m$ be the least common multiple of all element orders. Since each order divides $\\lvert G\\rvert$, $m\\mid \\lvert G\\rvert$. For every maximal prime power $\\ell^e\\mathrel{\\|}m$, choose an element whose order is divisible by $\\ell^e$ and raise it to the complementary part of its order; this extracts an element of order exactly $\\ell^e$. Because $G$ is abelian, multiplying these extracted elements over the distinct primes produces an element of order $m$. Every member of $G$ is a root of $X^m-1$. A nonzero degree-$m$ polynomial over a field has at most $m$ roots, so $\\lvert G\\rvert\\le m$. Together with $m\\le \\lvert G\\rvert$, equality holds and the constructed element generates $G$.

**Corollary 8.2.** $U(p)$ is cyclic for every prime $p$. A generator is called a **primitive root modulo $p$**.

The field hypothesis matters. Unit groups modulo composite integers can be noncyclic.

<a id="section-25-3-testing-a-candidate-generator"></a>
## 3. Testing a candidate generator {#section-27-3-testing-a-candidate-generator}

Let $G$ be cyclic of known order $N$. An element $g$ has order $N$ exactly when

\\[g^{N/q} \\ne 1\\]

for every prime $q\\mid N$.

If its order were proper, it would divide $N/q$ for some prime factor removed from $N/order$. Conversely failure at a tested $q$ directly shows the order is too small.

<a id="section-35-worked-primitive-root-certificate"></a>
### Worked primitive-root certificate {#section-37-worked-primitive-root-certificate}

Test $3 \\bmod 7$. The group order is $6=2*3$. Compute $3^{6/2}=3^{3}\\equiv 6$, not one, and $3^{6/3}=3^{2}\\equiv 2$, not one. Therefore $\\operatorname{ord}_{7}(3)=6$, so $3$ is primitive.

The certificate consists of the factorization of $6$ and the two modular powers.

<a id="section-41-4-discrete-logarithms-in-a-cyclic-group"></a>
## 4. Discrete logarithms in a cyclic group {#section-43-4-discrete-logarithms-in-a-cyclic-group}

Given a generator $g$, every unit has a unique representation $g^k$, with $k \\bmod N$. The exponent is the **discrete logarithm** $\\log_{g}(a)$. It obeys

$\\log_{g}(ab)\\equiv \\log_{g}(a)+\\log_{g}(b) \\bmod N$.

For small groups a table is a complete algorithm. For large groups, computing discrete logarithms can be difficult even though verifying $g^k=a$ is easy. That asymmetry is computational evidence, not by itself a cryptographic security theorem.

<a id="section-49-worked-table-modulo-seven"></a>
### Worked table modulo seven {#section-51-worked-table-modulo-seven}

Powers of $3$ are

$3^{0}=1, 3^{1}=3, 3^{2}=2, 3^{3}=6, 3^{4}=4, 3^{5}=5$.

Thus $\\log_{3}(5)=5$ and $\\log_{3}(2*5)=\\log_{3}(3)=1\\equiv 2+5 \\bmod 6$.

<a id="section-57-5-lifting-primitive-roots-to-odd-prime-powers"></a>
## 5. Lifting primitive roots to odd prime powers {#section-59-5-lifting-primitive-roots-to-odd-prime-powers}

Let $p$ be odd and $g$ primitive modulo $p$. At least one of $g$ or $g+p$ is primitive modulo $p^{2}$. Once an integer is primitive modulo $p^{2}$, it is primitive modulo every $p^k$.

The lifting mechanism is valuation growth: if $g^{p-1}=1+cp$ with $p$ not dividing $c$, successive $p$th powers raise the exact valuation by one, so the order gains a factor $p$ at every level. If $p\\mid c$, replacing $g$ by $g+p$ repairs the first lift.

This yields primitive roots for every odd prime power. Since $U(2p^k)$ maps isomorphically to $U(p^k)$ for odd $p$, those moduli also have primitive roots.

<a id="section-65-6-which-moduli-have-primitive-roots"></a>
## 6. Which moduli have primitive roots? {#section-67-6-which-moduli-have-primitive-roots}

**Theorem 8.3 (Classification).** $U(n)$ is cyclic exactly for

$n=1, 2, 4, p^k, \\lor 2p^k$,

where $p$ is an odd prime and $k\\ge 1$.

We have supplied the existence mechanism for odd prime powers and twice those powers. For nonexistence, two obstructions drive the full proof:

- if $8\\mid n$, the three distinct classes represented locally by $-1$, $1+n/2$, and $-1+n/2$ have order two, whereas a cyclic group has only one element of order two;
- if the odd part contains two distinct prime factors, CRT produces independent sign choices and again at least three order-two elements.

Remaining factors of four combined with an odd prime also create the CRT obstruction. These cases leave only the listed forms.

<a id="section-80-7-counting-primitive-roots-and-solving-powers"></a>
## 7. Counting primitive roots and solving powers {#section-82-7-counting-primitive-roots-and-solving-powers}

Whenever $U(n)$ is cyclic, its order is $\\varphi(n)$ and the number of primitive roots is $\\varphi(\\varphi(n))$. If $g$ is one primitive root, all are

$g^k$ with $\\gcd(k,\\varphi(n))=1$.

Power congruences become linear congruences in exponents. If $a=g^r$, solving $x^d=a$ among units amounts to

$d t\\equiv r \\bmod \\varphi(n)$.

Therefore solutions exist exactly when $\\gcd(d,\\varphi(n))\\mid r$, and their exact count is that gcd.

<a id="section-92-8-scope-and-security-boundary"></a>
## 8. Scope and security boundary {#section-94-8-scope-and-security-boundary}

Primitive-root existence is structural; finding a generator requires factoring the group order or another certificate strategy. Discrete-log hardness depends on group choice, parameter sizes, algorithms, and adversarial resources. A toy finite-field computation establishes arithmetic correctness only. It does not establish safe parameter generation, side-channel resistance, subgroup validation, authenticated key exchange, or any security reduction.

<a id="section-96-exercises-with-complete-solutions"></a>
## 9. Extract an actual generator from the field argument {#section-384-9-extract-an-actual-generator-from-the-field-argument}

Let G be a finite subgroup of the multiplicative group of a field, with size N. The identity belongs to G, every member is nonzero, and multiplication commutes. Write m for the least common multiple of the element orders. The earlier proof uses two facts that deserve separate verification: m is attained as one element order, and the field prevents G from being larger than m.

For each prime $\\ell$ in m, let $\\ell^e$ be its largest power dividing an element order. Some x has order $d=\\ell^e c$ with $\\gcd(\\ell,c)=1$. Then $x^c$ has order exactly $\\ell^e$: its $\\ell^e$th power is one, while a smaller order would contradict the formula $d/\\gcd(d,c)$. Thus the largest prime-power contribution can be isolated rather than assumed to occur in a common element.

If commuting x,y have coprime orders r,s, their product has order rs. Its rsth power is one. Conversely, $(xy)^k=1$ gives $x^k=y^{-k}$, an element of both cyclic subgroups. Its order divides both r and s and is therefore one. Hence r and s both divide k, so rs divides k.

Multiplying the isolated prime-power elements now constructs an element of order m. Each original order divides N by the finite coset argument, so $m\\mid N$. On the other hand every element of G satisfies $X^m-1=0$. This polynomial has degree m and is not the zero polynomial, so the field root bound gives $N≤m$. Therefore $N=m$, and the constructed element generates G.

The trivial case is included: if every order is one, the prime-power product is the identity, and the same root bound forces G to contain only that identity. In particular the sole nonzero element modulo two generates its trivial unit group.

The proof does not classify all finite groups. Commutativity allowed the order contributions to be combined, and the field root bound forced their product to exhaust the group. An arbitrary abelian group can have more elements than its exponent. In $U(8)$ every element squares to one, yet there are four elements. The polynomial $X^2-1$ has four roots in the ring $\\mathbb Z/8\\mathbb Z$, precisely where the field argument fails.

Nor is $\\mathbb Z/p^k\\mathbb Z$ a field for k>1: the nonzero classes p and $p^{k-1}$ multiply to zero. Cyclicity of its unit group for odd p requires the lifting argument below. It is not an automatic application of the finite-field theorem.

<a id="section-398-10-a-generator-certificate-starts-with-group-membership"></a>
## 10. A generator certificate starts with group membership {#section-400-10-a-generator-certificate-starts-with-group-membership}

Let g be an element of a finite group of known order N. Lagrange supplies $d=\\operatorname{ord}(g)\\mid N$. If d is proper, $N/d>1$ has a prime divisor q and d divides $N/q$. Thus one of the powers $g^{N/q}$ equals one. Conversely that equality directly rules out order N. This proves the prime-factor test without checking every proper divisor.

The test needs every distinct prime divisor q of N. Repeating a prime in the factorization adds no new exponent test, but omitting a prime can leave an unexcluded proper order. Its short length is conditional on having a complete verified factorization of the group order, not a claim that factoring it is always easy.

More basically, g must be in the group. For a prime modulus this means $\\gcd(g,p)=1$. With p=3 and g=0, the only listed exponent is $(p-1)/2=1$, and the residue zero is unequal to one. Non-one tests alone would falsely accept. With p=2, $p-1=1$ has no prime divisors, so the list is empty; the unit check is still necessary. These examples show why a standalone certificate must begin with membership.

The group-theoretic test starts with g in the group. When applying it to a residue supplied as an integer, record the unit check explicitly before invoking Fermat or Lagrange. A nonzero integer may reduce to zero, so membership must be checked in the stated modulus.

A known group order can instead be replaced by a proved exponent relation $g^N=1$, together with the same non-one tests. The order then divides N by division with remainder, and the preceding argument applies. Without either justification, the tests do not certify an arbitrarily proposed number N.

For example, 2 modulo seven has order three. If someone wrongly proposes N=4, its only test is $2^2\\ne1$, which passes. But $2^4\\equiv2\\ne1$, so N was not a valid multiple of the order. A certificate must record why the full order divides the number being factored.

For a correct new example modulo seventeen, $3^2\\equiv9$, $3^4\\equiv13$, and $3^8\\equiv16=-1$. The group order is sixteen, whose only distinct prime divisor is two. The non-one eighth power therefore proves order sixteen. All odd powers of three are generators, and there are eight of them. This is a complete exact certificate derived by hand, not an observed search for a generator.

<a id="section-414-11-the-first-lift-and-every-later-lift-have-different-j"></a>
## 11. The first lift and every later lift have different jobs {#section-416-11-the-first-lift-and-every-later-lift-have-different-j}

Let p be odd and g primitive modulo p. Its order modulo $p^2$ is divisible by p−1 because reduction preserves every power relation. It also divides $p(p-1)$ by the unit-group size. Thus it is either p−1 or $p(p-1)$. The single check $g^{p-1}\\not\\equiv1\\pmod{p^2}$ decides which.

Write $g^{p-1}=1+cp$ as an integer equality. Modulo $p^2$, binomial expansion gives
\\[
(g+p)^{p-1}\\equiv g^{p-1}+(p-1)g^{p-2}p.
\\]
The coefficient $(p-1)g^{p-2}$ is nonzero modulo p. Therefore if c vanishes modulo p, the corresponding coefficient for g+p does not vanish. If c is already nonzero, g itself has full order. This proves that at least one of the two proposed lifts works.

More generally, the p lifts $g+tp$ modulo $p^2$ have coefficients
$c+t(p-1)g^{p-2}\\pmod p$.
Exactly one is zero, since the slope is a unit. Thus every primitive class modulo p has precisely p−1 primitive lifts to the next level. The argument explains both existence and the exceptional bad lift.

For persistence at all levels, use the sharp valuation lemma proved in Chapter 5, “Odd prime-power exponents from a sharp valuation”: for odd p and $v_p(u-1)=r≥1$,
\\[
v_p(u^{p^s}-1)=r+s\\qquad(s≥0).
\\]
Its proof compares the first binomial term with the higher terms; it does not assume primitive roots. Here take $u=g^{p-1}$ after a successful first lift, so r=1.

Modulo $p^k$, reduction forces the order to be a multiple of p−1, and Lagrange makes it $(p-1)p^s$ for $0≤s≤k-1$. The valuation lemma says that such a power is one exactly when $1+s≥k$. Therefore the least possible s is k−1, giving full order $(p-1)p^{k-1}$. This is the all-level lifting deduction; it is separate from repairing the first lift.

<a id="section-436-representatives-of-one-prime-field-class-can-lift-diffe"></a>
### Representatives of one prime-field class can lift differently {#section-438-representatives-of-one-prime-field-class-can-lift-diffe}

Take p=3 and g=8. Modulo three, g is two and has order two. But $8^2-1=63$ has 3-adic valuation two, so modulo nine the order is still two. The lift g+p=11 satisfies $11^2-1=120$, of valuation one, and therefore generates the units modulo every power of three.

The same valuation reasoning gives the following exact order table.

| Integer representative | modulo 3 | modulo 9 | modulo 27 |
| --- | --- | --- | --- |
| 8 | 2 | 2 | 6 |
| 11 | 2 | 6 | 18 |

For 8, the valuation starts at two and increases by one with each cubing; for 11 it starts at one. The entries follow from those valuations and order divisibility. No exhaustive computation or software run is claimed.

A successful generator modulo $p^2$ has $p^{k-2}$ lifts to classes modulo $p^k$, and all remain primitive because their $(p-1)$st powers agree modulo $p^2$. Combined with the first-lift count, this gives $(p-1)p^{k-2}\\varphi(p-1)$ primitive roots for k≥2, agreeing with $\\varphi(\\varphi(p^k))$.

Oddness is essential to the persistence mechanism. The unit three generates $U(4)$ but has order only two modulo eight. The proved power-of-two structure in the next classification step explains that obstruction; one must not reuse the odd-prime valuation lemma outside its stated domain.

<a id="section-453-12-complete-the-cyclic-unit-classification"></a>
## 12. Complete the cyclic-unit classification {#section-455-12-complete-the-cyclic-unit-classification}

Factor a positive modulus as $n=2^a\\prod_{j=1}^r p_j^{e_j}$, with distinct odd primes. CRT gives a direct product of the corresponding unit groups. Every exponent and factor in this decomposition is part of the classification data.

For n=1 use the one-element unit-group convention. The groups for n=2 and n=4 have one and two elements respectively, and are cyclic. For an odd prime power, the finite-field generator and the repaired first lift followed by persistence supply a generator at every exponent.

For twice an odd prime power, CRT gives $U(2p^k)\\cong U(2)\\times U(p^k)\\cong U(p^k)$. A primitive residue modulo $p^k$ has a unique odd representative modulo $2p^k$, and that representative has the same order. If the original integer representative is even, it must be replaced by the other lift before calling it a unit of the doubled modulus.

These are all the positive cases. For the negative cases, a cyclic group of even order has exactly one element of order two: in a generator coordinate, $2j\\equiv0\\pmod N$ has only the two solutions zero and N/2, and the first is the identity.

If $a≥3$, Chapter 5's “Powers of two and the role of five” proves $U(2^a)=\\langle-1\\rangle\\times\\langle5\\rangle$ with orders two and $2^{a-2}$. It therefore contains three distinct involutions. The direct product with the other CRT factors preserves those three elements by putting identity in every other coordinate.

If at least two odd prime-power factors occur, choose minus one independently in their two unit groups. The sign pairs $(-1,1)$, $(1,-1)$ and $(-1,-1)$ give three distinct nonidentity elements whose squares are one. Oddness ensures minus one differs from one in each coordinate.

If $a=2$ and at least one odd prime-power factor occurs, the same argument uses minus one in $U(4)$ and minus one in the odd factor. Again there are at least three involutions. These possibilities rule out every remaining factorization: either no odd factor occurs and a is at most two, or exactly one odd factor occurs and a is zero or one.

Thus cyclicity occurs exactly for $1,2,4,p^k,2p^k$ with odd p and k≥1. The proof supplies existence and nonexistence, not merely a memorized list. Its CRT argument also explains why many individually cyclic factors can combine to a noncyclic product: their even orders create independent order-two choices.

For instance $U(45)\\cong U(9)\\times U(5)$ is a product of cyclic groups of orders six and four. The largest possible element order is their least common multiple twelve, while the group has twenty-four elements. No primitive root exists, even though both local factors have primitive roots. This is a concrete failure of replacing product order by the product of local orders.

<a id="section-473-13-generator-coordinates-solve-equations-not-every-comp"></a>
## 13. Generator coordinates solve equations, not every computational problem {#section-475-13-generator-coordinates-solve-equations-not-every-comp}

In a cyclic group of order N with generator g, every element is $g^r$ for one exponent class modulo N. The formula $\\operatorname{ord}(g^r)=N/\\gcd(N,r)$ follows by asking for the least positive t with $N\\mid rt$. Writing $N=dN'$ and $r=dr'$ with $\\gcd(N',r')=1$ makes the least t equal N'.

A unit equation $x^d=a=g^r$ therefore becomes $dt\\equiv r\\pmod N$. If $c=\\gcd(d,N)$ does not divide r, no solution exists. If it does, divide by c and invert d/c modulo N/c. There is one exponent class modulo N/c and exactly c classes modulo N, hence exactly c group solutions.

This is a structural solution conditional on knowing a generator and the exponent r of a. Discovering r can be a separate discrete-log problem. A proof that the exponent coordinate exists is not an algorithm for finding it efficiently at large scale.

For a complete new finite example, use g=2 modulo eleven. Its powers at exponents zero through nine are
\\[
1,2,4,8,5,10,9,7,3,6.
\\]
Multiplying each entry by two and reducing verifies the table, and the ten distinct entries prove completeness. Since five is $2^4$, the equation $x^3=5$ becomes $3t\\equiv4\\pmod{10}$. Inverting three gives $t\\equiv8$, so x is three. Directly $3^3=27\\equiv5$.

For $x^2=5$, the exponent equation is $2t\\equiv4\\pmod{10}$, giving t=2 or 7 and roots four or seven. The two equations have different counts because their gcd values differ, not because the same residue suddenly gained or lost a unique logarithm.

Changing the chosen generator changes the exponent coordinates. If $h=g^u$ with $\\gcd(u,N)=1$, then $h^s=g^r$ exactly when $us\\equiv r\\pmod N$. Thus logarithms transform by multiplication by the inverse of u. The group element and its order are unchanged; its numerical logarithm depends on the named base.

Using a nongenerator instead gives coordinates only on its proper subgroup. A residue outside that subgroup has no logarithm to that base. This is why a logarithm table must state and justify its base, rather than calling every nonzero residue a primitive root.

<a id="section-493-14-transfer-orders-and-power-equations-through-crt"></a>
## 14. Transfer orders and power equations through CRT {#section-495-14-transfer-orders-and-power-equations-through-crt}

For elements x and y of finite orders r and s, the pair $(x,y)$ in a direct product has order $\\operatorname{lcm}(r,s)$. Its kth power is the identity exactly when both $r\\mid k$ and $s\\mid k$; the least such positive k is the least common multiple. This proves the transfer rule without assuming the two orders are coprime.

Now let the two factors be cyclic groups of orders r and s, and choose a generator in each. Their pair attains that least common multiple, and every other pair has order dividing it. The direct product is cyclic exactly when $\\operatorname{lcm}(r,s)=rs$, equivalently $\\gcd(r,s)=1$. This explains why CRT's product of unit-group sizes must not be mistaken for an attained element order.

For $U(45)$, the local generators attain orders six and four, so their pair attains order twelve. One explicit pair uses two in both $U(9)$ and $U(5)$; the CRT representative is two modulo forty-five. Its square is four, its fourth power is sixteen and its sixth power is nineteen, all nonidentity where needed; its twelfth power is one because both local powers are one. In particular twelve is attained, while twenty-four is impossible. The size, exponent and maximum element order answer different questions even when two of them coincide.

There is also a logarithm-free decision criterion for a power equation inside a known cyclic group. Let d be a positive integer, let $c=\\gcd(d,N)$, and write a as $g^r$. The earlier exponent equation shows that $x^d=a$ is solvable precisely when $c\\mid r$. On the other hand,
\\[
a^{N/c}=1\\quad\\Longleftrightarrow\\quad N\\mid rN/c
\\quad\\Longleftrightarrow\\quad c\\mid r.
\\]
Thus the single full-power equality decides existence without computing r. If it holds there are exactly c solutions. Constructing particular roots may still require more information; the decision and witness tasks remain distinct.

For units modulo an odd prime, N=p−1. Taking d=2 recovers Euler's residue criterion, while other positive d give corresponding power-residue tests. The criterion requires a to be a unit: a field's zero case has the separate single root zero, and a nonunit in a composite ring need not obey cyclic-group counts.

For $x^4=1$ in $U(45)$, CRT gives two local equations. The cyclic group $U(9)$ has order six, hence $\\gcd(4,6)=2$ roots; $U(5)$ has order four and all four of its elements are roots. There are therefore eight roots modulo forty-five. CRT proves their completeness and distinctness. A degree-four polynomial can have eight roots here because this residue ring is not a field.

More generally, when the local unit groups are cyclic and the right-hand side is a unit, test $a_j^{N_j/c_j}=1$ in each factor, with $c_j=\\gcd(d,N_j)$. Failure of one local test rules out a global root. Success in every factor gives exactly the product of the $c_j$ local counts, by the CRT bijection. This product rule concerns the independent solution sets; it does not assert that the global unit group itself is cyclic.

<a id="section-514-exercises-primitive-root-extensions"></a>

## Summary

<a id="section-381-chapter-summary"></a>
Finite multiplicative subgroups of fields are cyclic, so every prime modulus has primitive roots. A factorization of the group order yields short generator certificates. Primitive roots extend exactly to moduli $1,2,4,p^k,2p^k$ for odd prime $p$; CRT order-two obstructions exclude all others. Within a cyclic unit group, products and power equations become linear arithmetic on exponents.
<a id="section-382-9-extract-an-actual-generator-from-the-field-argument"></a>

## Exercises {#section-98-exercises-with-complete-solutions}

<a id="section-98-1-generators-of-a-cyclic-group"></a>
### 1. Generators of a cyclic group {#section-100-1-generators-of-a-cyclic-group}

Which powers of a generator $g$ generate a group of order $12$?

**Hint 1.** The order of a power is the group order divided by the gcd with its exponent.

**Hint 2.** Choose the exponent classes coprime to twelve.

<details><summary>Full solution</summary>

**Solution.** Exactly exponents coprime to $12$: $1,5,7,11$. There are $\\varphi(12)=4$.

</details>

<a id="section-112-2-order-of-a-power"></a>
### 2. Order of a power {#section-114-2-order-of-a-power}

If $\\operatorname{ord}(g)=18$, find $\\operatorname{ord}(g^{12})$.

**Hint 1.** Apply the order-of-a-power formula.

**Hint 2.** The gcd of eighteen and twelve is six.

<details><summary>Full solution</summary>

**Solution.** It is $18/\\gcd(18,12)=18/6=3$.

</details>

<a id="section-126-3-primitive-root-modulo-seven"></a>
### 3. Primitive root modulo seven {#section-128-3-primitive-root-modulo-seven}

List all primitive roots modulo $7$ from the generator $3$.

**Hint 1.** Raise the known generator to exponents coprime to six.

**Hint 2.** There are two such exponent classes modulo six.

<details><summary>Full solution</summary>

**Solution.** Exponents coprime to $6$ are $1,5$. Thus the roots are $3$ and $3^{5}\\equiv 5$.

</details>

<a id="section-140-4-test-modulo-eleven"></a>
### 4. Test modulo eleven {#section-142-4-test-modulo-eleven}

Show $2$ is primitive modulo $11$.

**Hint 1.** Factor the target order ten into prime factors.

**Hint 2.** Exclude order divisors by checking the fifth and second powers.

<details><summary>Full solution</summary>

**Solution.** $10=2*5$. Compute $2^{5}=32\\equiv-1$, not one, and $2^{2}=4$, not one. The prime-factor test gives order $10$.

</details>

<a id="section-154-5-reject-a-candidate"></a>
### 5. Reject a candidate {#section-156-5-reject-a-candidate}

Show $4$ is not primitive modulo $11$.

**Hint 1.** Check the fifth power of four modulo eleven.

**Hint 2.** A return before exponent ten rules out a generator.

<details><summary>Full solution</summary>

**Solution.** $4^{5}=(2^{2})^{5}=2^{10}\\equiv 1$, so its order divides $5$, smaller than $10$.

</details>

<a id="section-168-6-logarithm-table"></a>
### 6. Logarithm table {#section-170-6-logarithm-table}

Using base $3 \\bmod 7$, find $\\log_{3}(4)$.

**Hint 1.** List powers of three modulo seven.

**Hint 2.** Locate the power equal to four.

<details><summary>Full solution</summary>

**Solution.** The power table gives $3^{4}\\equiv 4$, so the logarithm is $4 \\bmod 6$.

</details>

<a id="section-182-7-multiply-by-logarithms"></a>
### 7. Multiply by logarithms {#section-184-7-multiply-by-logarithms}

Using the same table, compute $4*5 \\bmod 7$ through exponents.

**Hint 1.** Express each factor as a power of three.

**Hint 2.** Add exponents modulo six and translate back.

<details><summary>Full solution</summary>

**Solution.** Logs are $4$ and $5$; their sum is $9\\equiv 3 \\bmod 6$. Then $3^{3}\\equiv 6$, agreeing with $20\\equiv 6$.

</details>

<a id="section-196-8-count-primitive-roots"></a>
### 8. Count primitive roots {#section-198-8-count-primitive-roots}

How many primitive roots are there modulo $17$?

**Hint 1.** A cyclic group of order sixteen has as many generators as unit exponent classes modulo sixteen.

**Hint 2.** Apply the totient formula.

<details><summary>Full solution</summary>

**Solution.** $U(17)$ is cyclic of order $16$; it has $\\varphi(16)=8$ generators.

</details>

<a id="section-210-9-identify-from-one-generator"></a>
### 9. Identify from one generator {#section-212-9-identify-from-one-generator}

If $3$ is primitive modulo $17$, which powers of $3$ are primitive?

**Hint 1.** A power of the generator is primitive exactly when its exponent is coprime to sixteen.

**Hint 2.** List the odd exponent classes.

<details><summary>Full solution</summary>

**Solution.** Use odd exponents $1,3,5,7,9,11,13,15$, precisely those coprime to $16$.

</details>

<a id="section-224-10-noncyclic-modulo-eight"></a>
### 10. Noncyclic modulo eight {#section-226-10-noncyclic-modulo-eight}

Prove $U(8)$ is not cyclic.

**Hint 1.** Every odd square is one modulo eight.

**Hint 2.** No element can have the required order four.

<details><summary>Full solution</summary>

**Solution.** Every unit $1,3,5,7$ squares to one, so no element has order $4=\\lvert U(8)\\rvert$.

</details>

<a id="section-238-11-noncyclic-modulo-fifteen"></a>
### 11. Noncyclic modulo fifteen {#section-240-11-noncyclic-modulo-fifteen}

Prove $U(15)$ is not cyclic.

**Hint 1.** Use CRT to compare the exponents at three and five.

**Hint 2.** The exponent is four but the group has eight elements.

<details><summary>Full solution</summary>

**Solution.** CRT gives $U(15)\\cong U(3)\\times U(5)$, whose exponent is $\\operatorname{lcm}(2,4)=4$, while its size is $8$. No element has order eight.

</details>

<a id="section-252-12-classification-use"></a>
### 12. Classification use {#section-254-12-classification-use}

For which of $9,10,12,14,18,25$ do primitive roots exist?

**Hint 1.** Apply the classification into two, four, odd prime powers and twice odd prime powers.

**Hint 2.** Twelve is the only proposed modulus outside those forms.

<details><summary>Full solution</summary>

**Solution.** $9=3^{2}$, $10=2*5$, $14=2*7$, $18=2*3^{2}$, and $25=5^{2}$ are listed forms. $12=4*3$ is not. Thus all except $12$.

</details>

<a id="section-266-13-lift-check"></a>
### 13. Lift check {#section-268-13-lift-check}

Show $3$ is not primitive modulo $9$, but $2$ is.

**Hint 1.** First check membership in the unit group.

**Hint 2.** Three is not a unit modulo nine, while powers of two have order six.

<details><summary>Full solution</summary>

**Solution.** $3$ is not even a unit. Powers of $2$ modulo $9$ are $2,4,8,7,5,1$, giving order $6=\\varphi(9)$.

</details>

<a id="section-280-14-primitive-modulo-twenty-five"></a>
### 14. Primitive modulo twenty-five {#section-282-14-primitive-modulo-twenty-five}

Show $2$ is primitive modulo $25$.

**Hint 1.** The unit-group size is twenty.

**Hint 2.** Check the tenth and fourth powers of two modulo twenty-five.

<details><summary>Full solution</summary>

**Solution.** The order is $20=2^{2}*5$. Check $2^{10}=1024\\equiv-1 \\bmod 25$ and $2^{4}=16\\ne 1 \\bmod 25$; the prime-factor test gives order $20$.

</details>

<a id="section-294-15-solve-a-power-equation"></a>
### 15. Solve a power equation {#section-296-15-solve-a-power-equation}

In $U(7)$ with generator $3$, solve $x^{2}\\equiv 2$.

**Hint 1.** Write the unknown as a power of the known generator.

**Hint 2.** Solve twice its exponent congruent to the logarithm of two modulo six.

<details><summary>Full solution</summary>

**Solution.** Since $2=3^{2}$, write $x=3^t$; then $2t\\equiv 2 \\bmod 6$, so $t\\equiv 1 \\bmod 3$, giving $t=1,4$. Roots are $3$ and $4$.

</details>

<a id="section-308-16-obstruct-a-power-equation"></a>
### 16. Obstruct a power equation {#section-310-16-obstruct-a-power-equation}

Does $x^{2}\\equiv 3 \\bmod 7$ have a solution?

**Hint 1.** Translate the equation to an exponent congruence modulo six.

**Hint 2.** Twice an integer cannot be congruent to an odd exponent there.

<details><summary>Full solution</summary>

**Solution.** $3=3^{1}$, so exponent form requires $2t\\equiv 1 \\bmod 6$, insoluble because $\\gcd(2,6)=2$ does not divide $1$.

</details>

<a id="section-322-17-unique-order-two-element"></a>
### 17. Unique order-two element {#section-324-17-unique-order-two-element}

Prove a cyclic group of even order has exactly one element of order two.

**Hint 1.** Write every element as a power of one generator.

**Hint 2.** The equation twice the exponent equal to zero has one nonzero solution modulo the even order.

<details><summary>Full solution</summary>

**Solution.** If $G=<g>$ has order $N$, the equation $(g^k)^{2}=1$ means $2k\\equiv 0 \\bmod N$. Its solutions are $k=0,N/2$; only $g^{N/2}$ is nonidentity and has order two.

</details>

<a id="section-336-18-crt-obstruction"></a>
### 18. CRT obstruction {#section-338-18-crt-obstruction}

Why do two distinct odd prime factors prevent $U(n)$ from being cyclic?

**Hint 1.** CRT supplies independent sign choices at two odd prime factors.

**Hint 2.** That gives more than one nonidentity element whose square is one, impossible in a cyclic group.

<details><summary>Full solution</summary>

**Solution.** Independent choices $(-1,1)$, $(1,-1)$, and $(-1,-1)$ in the two CRT coordinates give three distinct elements of order two. A cyclic even-order group has only one.

</details>

<a id="section-350-19-verification-versus-discovery"></a>
### 19. Verification versus discovery {#section-352-19-verification-versus-discovery}

Why can checking a proposed discrete logarithm be easier than finding it?

**Hint 1.** Verification substitutes one proposed exponent into a modular power.

**Hint 2.** Discovery may require locating that exponent among many candidates.

<details><summary>Full solution</summary>

**Solution.** Given $k$, repeated squaring verifies $g^k=a$ efficiently. Finding $k$ from $g,a$ requires search or a discrete-log algorithm; no supplied witness identifies the exponent. This is a computational distinction, not a standalone security proof.

</details>

<a id="section-364-20-generator-certificate-audit"></a>
### 20. Generator certificate audit {#section-366-20-generator-certificate-audit}

What data certifies that $g$ is primitive modulo prime $p$?

**Hint 1.** First certify the prime modulus and that the proposed generator is a nonzero residue.

**Hint 2.** Factor the group size and exclude the quotient exponent for every distinct prime factor.

<details><summary>Full solution</summary>

**Solution.** First verify $\\gcd(g,p)=1$. Provide a verified factorization of $p-1$ and, for each distinct prime $q\\mid p-1$, the residue $g^{(p-1)/q} \\bmod p$, each unequal to one. Fermat ensures the full order divides $p-1$; the tests exclude every proper divisor.

</details>


<a id="section-379-chapter-summary"></a>

<a id="section-516-exercises-primitive-root-extensions"></a>
### 21. NTP-08-E21. Certify a whole prime-power tower {#section-520-ntp-08-e21-certify-a-whole-prime-power-tower}

Verify that three is primitive modulo seven and use the valuation of $3^6-1$ to prove it is primitive modulo every $7^k$. Give its exact order modulo $7^4$, without enumerating all units there.

**Hint 1.** Check the quotient powers for the prime factors of six.

**Hint 2.** The valuation of three to the sixth minus one is exactly one at seven, so each lift adds the full seven-power factor.

<a id="section-526-ntp-08-e22-lifting-to-a-doubled-modulus-still-needs-a-u"></a>
### 22. NTP-08-E22. Lifting to a doubled modulus still needs a unit {#section-528-ntp-08-e22-lifting-to-a-doubled-modulus-still-needs-a-u}

Suppose two is primitive modulo twenty-five. Decide whether two and twenty-seven are primitive modulo fifty. Explain why the tests $2^{10}\\not\\equiv1$ and $2^4\\not\\equiv1\\pmod{50}$ cannot certify two, and give a valid certificate for twenty-seven using CRT.

**Hint 1.** An even integer is not a unit modulo fifty.

**Hint 2.** Twenty-seven has the same class as two modulo twenty-five and the unique unit class modulo two.

<a id="section-534-solutions-primitive-root-extensions"></a>

## Solutions: Primitive-root extensions {#section-536-solutions-primitive-root-extensions}

<a id="section-536-ntp-08-e21-certify-a-whole-prime-power-tower-solution"></a>
### NTP-08-E21. Certify a whole prime-power tower — solution {#section-538-ntp-08-e21-certify-a-whole-prime-power-tower-solution}

<details><summary>Full solution</summary>

Modulo seven, $3^3\\equiv6$ and $3^2\\equiv2$, excluding both prime-factor proper-order tests for N=6. Also $3^6-1=728=7\\cdot104$, and seven does not divide 104. The successful first-lift valuation is one, so the proved odd-prime lifting deduction gives order $6\\cdot7^{k-1}$ modulo $7^k$. For k=4 this is 2058.

</details>

<a id="section-544-ntp-08-e22-lifting-to-a-doubled-modulus-still-needs-a-u"></a>
### NTP-08-E22. Lifting to a doubled modulus still needs a unit — solution {#section-546-ntp-08-e22-lifting-to-a-doubled-modulus-still-needs-a-u}

<details><summary>Full solution</summary>

Two has gcd two with fifty, so it is not in $U(50)$ and cannot be primitive. Its displayed powers are 24 and 16 modulo fifty, both non-one, illustrating the missing membership condition. Twenty-seven is odd and reduces to two modulo twenty-five. CRT identifies its component modulo two with the unique unit and its component modulo twenty-five with a generator of order twenty. Therefore twenty-seven has order twenty, equal to $\\varphi(50)$, and is primitive.

</details>

<a id="section-552-references-primitive-root-proof-dependencies"></a>

## Sources: Primitive-root proof dependencies {#section-554-references-primitive-root-proof-dependencies}

The finite subgroup construction, first lift, classification and worked certificates are supplied above. The sharp valuation and power-of-two unit structure are the noncircular Chapter 5 inputs at the two explicitly named headings. Statement scopes were independently checked against [Keith Conrad, Prime Powers Units and Finite Subgroups of GLn(Q), Theorem 1.1, Corollary 2.1 and Appendix A](https://kconrad.math.uconn.edu/blurbs/gradnumthy/primepowerunitsandGLnQ.pdf); its p-adic proof is not a hidden prerequisite of the elementary argument here.
`;export{e as default};