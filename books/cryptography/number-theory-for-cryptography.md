
# Number Theory for Cryptography

Cryptographic arithmetic uses exact finite objects: residues, units, finite fields, groups and encoded integers. The same modular formula can describe a correct algebraic map, an efficient algorithm or a conjectured hard problem, but those are different statements. This chapter develops the arithmetic used later and keeps each algorithm's domain and cost visible. It assumes the elementary number theory and group language named in the book's prerequisites.

The [Number Theory and Cryptography laboratory](../../apps/atlas/index.html#/labs?lab=visual-lab-number-theory-cryptography) accompanies these calculations. Its small examples can illustrate modular inverses and powers. A finite calculation establishes its own arithmetic result, not the hardness of a family of growing instances. The later public-key chapters add security experiments and reductions to the algebra developed here.

## Residues, units and division

For an integer modulus $n\ge2$, two integers represent the same residue when their difference is divisible by $n$. Addition and multiplication respect that relation, so they define operations on $\mathbb Z/n\mathbb Z$. Division is different: a residue $a$ has a multiplicative inverse exactly when $\gcd(a,n)=1$. Such residues form the unit group.

**Theorem 2.1 (Inverse criterion).** A residue $a$ modulo $n$ is invertible if and only if there are integers $s,t$ satisfying $sa+tn=1$.

*Proof.* The displayed identity gives $sa\equiv1\pmod n$, so $s$ is an inverse. Conversely, an inverse represented by $s$ means $sa-1$ is a multiple of $n$; rearranging gives the identity. Bézout's theorem characterises existence of such coefficients by the gcd being one. ∎

This does not permit cancelling a nonunit from a congruence. Modulo fifteen, multiplication by three sends both one and six to the same residue three, although one and six are different residues. Over a prime modulus every nonzero residue is a unit; over a product of primes there are nonzero zero divisors. The distinction is essential in RSA and in elliptic-curve formulas whose denominators must be invertible.

## Worked example 1: an inverse with its certificate

Find the inverse of seventeen modulo forty-three. Euclidean division gives $43=2\cdot17+9$, $17=9+8$, and $9=8+1$. Back-substitution gives
$$1=9-8=2\cdot9-17=2\cdot43-5\cdot17.$$
Thus the inverse is $-5\equiv38\pmod{43}$. Verify the certificate directly: $17\cdot38=646=15\cdot43+1$.

The coefficient identity both proves invertibility and supplies the inverse. A numerical routine returning thirty-eight without its explanation still has a checkable answer, but the Bézout certificate makes the underlying argument especially small. Negative coefficients are legitimate integers; reducing them modulo the positive modulus changes their representation, not the certified equation. The same extended Euclidean method reports a gcd greater than one when no inverse exists.

## Fast exponentiation and an invariant

For a nonnegative exponent $e$, compute $a^e\bmod n$ by repeated squaring. Maintain an accumulator $z$, a current base $b$ and remaining exponent $r$, with invariant
$$z\,b^r\equiv a^e\pmod n.$$
Initially take $z=1,b=a,r=e$. If $r$ is odd, replace $z$ by $zb$, replace $r$ by $(r-1)/2$ and square $b$. If $r$ is even, halve $r$ and square $b$, leaving $z$ unchanged. Reduce products modulo $n$ after each multiplication.

In the odd case the new expression is $(zb)(b^2)^{(r-1)/2}=zb^r$; in the even case it is $z(b^2)^{r/2}=zb^r$. Thus each step preserves the invariant. Positive $r$ strictly decreases under halving, so the algorithm terminates at zero, where $z$ is the requested residue. For exponent zero it returns one without needing an inverse, including when the base is not a unit.

The number of iterations is bounded by the exponent's binary length; each uses at most a constant number of modular multiplications. These are arithmetic-operation counts. When the modulus grows, a multiplication is not a fixed-cost operation in the bit model. Encoding length, multiplication algorithms and the cost of reduction determine the further bit-complexity bound.

## Worked example 2: a power from its binary expansion

Compute $7^{13}\bmod23$. The successive squares are $7^2\equiv3$, $7^4\equiv9$ and $7^8\equiv12$. Since thirteen is eight plus four plus one, multiply the corresponding residues: $12\cdot9\equiv16$ and $16\cdot7\equiv20$. Hence the result is twenty.

One can audit the calculation by recording the exponent represented by each squared base and the invariant at each accumulator update. No primality assumption was required for repeated squaring itself. The prime modulus becomes relevant only when invoking group-order laws or reducing exponents by a theorem. Mixing those separate reasons can accidentally apply a group identity to a nonunit modulo a composite.

## Orders and exponent reduction

The order of a group element is its least positive exponent giving the identity. In a finite group it divides the group order by Lagrange's theorem. In particular, for a unit modulo $n$, Euler's theorem gives $a^{\varphi(n)}\equiv1\pmod n$, where $\varphi(n)$ counts the units.

A direct proof of Euler's theorem is useful. Multiplication by the unit $a$ permutes the finite unit set. Multiply all elements before and after the permutation. If there are $r=\varphi(n)$ elements, the new product is $a^r$ times the original product. That original product is itself a unit, so cancelling it is legitimate and yields $a^r=1$. The cancellation would fail if the list included nonunits indiscriminately.

For a prime $p$, there are $p-1$ nonzero residues and all are units, giving Fermat's theorem for nonzero bases. The all-residue statement $a^p\equiv a\pmod p$ handles the zero residue separately. A passed Fermat test modulo a proposed prime does not prove the modulus prime: the converse requires more than one congruence and admits pseudoprimes.

## Worked example 3: a generator in a small group

In the nonzero residues modulo twenty-three, consider five. Fermat gives $5^{22}=1$. The proper positive divisors of twenty-two are one, two and eleven. We have $5\ne1$, $5^2\equiv2\ne1$, and
$$5^{11}=5^8 5^2 5\equiv16\cdot2\cdot5\equiv22\ne1.$$
Therefore the order is twenty-two, and five generates the whole multiplicative group. The calculation uses both the upper bound from the prime-field theorem and the proper-divisor exclusions.

Finding an exponent in this small group is easy by enumeration. For example, $5^6\equiv8$. Such a worked discrete logarithm checks group arithmetic; it cannot establish hardness at another parameter size or in another group. A discrete-log assumption must name a generated group family, its encodings and the adversary's resources. Computational and decisional Diffie–Hellman assumptions are different experiments, introduced in the later chapter.

## Chinese remainders with exact hypotheses

**Theorem 2.2 (Two-modulus CRT).** If $u,v\ge2$ are coprime, every pair of residues $a\bmod u$, $b\bmod v$ has a unique combined residue modulo $uv$.

*Proof.* Choose integers $s,t$ with $su+tv=1$. Set $x=atv+bsu$. Modulo $u$ its first coefficient is one and its second term zero, so it equals $a$. Modulo $v$ the roles reverse and it equals $b$. If two solutions differ by $d$, both $u$ and $v$ divide $d$. Since they are coprime, their product divides $d$: for instance write $d=uk$ and use the Bézout identity to deduce $v\mid k$. Thus the combined residue is unique. ∎

For $x=2\bmod5$ and $x=3\bmod7$, take $s=3,t=-2$ because $3\cdot5-2\cdot7=1$. The formula gives $x=2(-2)7+3(3)5=17\bmod35$. Direct substitution checks both residues. If moduli are not coprime, arbitrary pairs can be incompatible; one modulo four and two modulo six disagree already modulo two.

## Correct algebra does not supply a secrecy theorem

For distinct primes, CRT can prove that an appropriate exponent permutation is inverted even on nonunit residues, by treating each prime separately. That is an arithmetic correctness theorem. If the resulting encryption is deterministic, it still leaks repeated plaintext and fails a chosen-plaintext experiment with an encryption oracle. A proof that decrypting recovers a message does not establish indistinguishability.

Similarly, factoring a modulus can enable a particular private-key calculation without proving that every way to break a fully encoded scheme factors it. A reduction must construct that implication explicitly with its resource loss. The later RSA chapter separates the raw exponent map, encoding and security assumptions. This chapter supplies the exact rings and algorithms needed to read that separation.

## A primality certificate with a complete argument

The arithmetic seed for this chapter also supplies a useful contrast between searching for a prime and checking a prime certificate. Let $N\ge3$. Suppose the full prime factorisation of $N-1$ is known and an integer $a$ satisfies
$$a^{N-1}\equiv1\pmod N,$$
and, for every prime divisor $q$ of $N-1$,
$$\gcd(a^{(N-1)/q}-1,N)=1.$$
Under these hypotheses, $N$ is prime. Each prime appearing in the factorisation must itself have established primality, for example recursively down to a small base case.

Here is the full order argument. Choose any prime divisor $p$ of $N$. The first power congruence makes $a$ a unit modulo $p$. Let its order there be $r$. The same congruence makes $r$ divide $N-1$, while the prime-field group theorem makes it divide $p-1$. For a prime $q$ dividing $N-1$, the gcd condition says that $a^{(N-1)/q}$ is not one modulo $p$. Hence $r$ does not divide $(N-1)/q$.

Since $r$ divides $N-1$, the last nondivisibility forces the exponent of $q$ in $r$ to equal its exponent in $N-1$. If it were smaller, $r$ would divide the quotient after removing one copy of $q$. This works for every prime factor, so $r=N-1$. Now $N-1=r\le p-1$, giving $N\le p$. But $p$ is a positive prime divisor of $N$, so $p\le N$; equality follows and $N$ is prime.

This proof does not merely apply Fermat's congruence backwards. The gcd conditions rule out every shorter candidate order permitted by the complete factorisation. They also need exact gcds modulo the full proposed modulus, ensuring that no hidden prime divisor makes one of those powers equal to one. Those hypotheses are precisely what the simple probable-prime observation lacks.

For a small certificate take $N=13$ and $a=2$. The factorisation is $12=2^2\cdot3$. We have $2^{12}\equiv1\pmod{13}$, $2^6\equiv12$ and $2^4\equiv3$. The required gcds are therefore $\gcd(11,13)=1$ and $\gcd(2,13)=1$. These finite checks meet every displayed condition and certify thirteen prime. Verifying the powers uses repeated squaring, and the gcds can be accompanied by Bézout identities. The discovery process for the certificate is separate from its verification.

By contrast, $341=11\cdot31$ passes the base-two Fermat congruence: $2^{10}=1024=3\cdot341+1$, so raising that congruence to the thirty-fourth power gives $2^{340}\equiv1\pmod{341}$. Thus one successful Fermat congruence is consistent with compositeness. The arithmetic is small enough to check directly and illustrates the different logical force of a witness test and a complete primality certificate.

## Input size and certificate size

An integer's value and its bit length differ exponentially. Trial division through its square root is a finite complete method, but its number of candidates can be exponential in that bit length. Repeated squaring and Euclid operate on growing integer operands; their arithmetic-operation counts must be combined with finite-bit multiplication and division costs for a bit-model statement. A certificate's list of factors and exponent checks also has an encoded size, which is part of any efficiency theorem about its verifier.

The later primality and factoring chapter develops those algorithms and evidence formats in greater depth. The purpose here is to establish the logical direction: verified certificate conditions imply primality, while failure to find a factor or passage of one probable-prime test has weaker force. Cryptographic key generation needs that distinction before any hardness assumption about the generated keys can even be stated precisely.

## Exercises

### Exercise 1
<a id="number-theory-for-cryptography-ex-1"></a>
Find an inverse of seven modulo twenty-six and give an integer certificate.

<details><summary>Hint 1</summary>

Use extended Euclid or inspect multiples of seven.

</details>
<details><summary>Hint 2</summary>

Fifteen times seven differs from a multiple of twenty-six by one.

</details>
<details><summary>Solution</summary>

$7\cdot15=105=4\cdot26+1$, so fifteen is the inverse. The certificate is $15\cdot7-4\cdot26=1$. It proves the gcd is one as well as exhibiting a solution to the inverse equation. The answer is a residue class, so adding any multiple of twenty-six gives another integer representative of the same inverse. No division of nonunits was used.

</details>

### Exercise 2
<a id="number-theory-for-cryptography-ex-2"></a>
Explain why six has no inverse modulo fifteen, and give a cancellation failure using multiplication by three.

<details><summary>Hint 1</summary>

The gcd criterion detects nonunits.

</details>
<details><summary>Hint 2</summary>

Compare one and six before and after multiplication.

</details>
<details><summary>Solution</summary>

The gcd of six and fifteen is three, so their integer combinations cannot equal one and no inverse exists. Also $3\cdot1\equiv3\cdot6\equiv3\pmod{15}$, but one and six are distinct residues. Thus cancelling the factor three would be invalid. A field intuition applies to nonzero residues modulo a prime; it does not apply indiscriminately to this composite-modulus ring.

</details>

### Exercise 3
<a id="number-theory-for-cryptography-ex-3"></a>
Compute $3^{13}\bmod17$ by repeated squaring.

<details><summary>Hint 1</summary>

Thirteen has binary components eight, four and one.

</details>
<details><summary>Hint 2</summary>

The fourth power is thirteen and the eighth power is sixteen modulo seventeen.

</details>
<details><summary>Solution</summary>

$3^2=9$, $3^4\equiv81\equiv13$, and $3^8\equiv169\equiv16$. Hence $3^{13}\equiv16\cdot13\cdot3$. The first product is $208\equiv4$, and multiplying by three gives twelve. The calculation uses three squarings and the selected binary powers, avoiding thirteen successive multiplications. Its arithmetic correctness is independent of any hardness assumption concerning exponentiation inverses.

</details>

### Exercise 4
<a id="number-theory-for-cryptography-ex-4"></a>
Prove preservation of the repeated-squaring invariant in the odd-exponent case, including the update to all three variables.

<details><summary>Hint 1</summary>

Use $z'=zb$, $b'=b^2$, $r'=(r-1)/2$.

</details>
<details><summary>Hint 2</summary>

Expand $z'(b')^{r'}$ before reducing modulo the modulus.

</details>
<details><summary>Solution</summary>

The new expression is $(zb)(b^2)^{(r-1)/2}=zb^{1+r-1}=zb^r$, so it equals the old invariant expression. Reducing any intermediate product modulo the positive modulus preserves the congruence. Since positive odd $r$ becomes a smaller nonnegative integer, the same update also makes progress towards termination. Both facts are needed: an invariant alone does not exclude a loop that never reaches the final state.

</details>

### Exercise 5
<a id="number-theory-for-cryptography-ex-5"></a>
Combine $x=1\bmod3$ and $x=4\bmod5$ and prove uniqueness modulo fifteen.

<details><summary>Hint 1</summary>

Inspect the three residues modulo fifteen congruent to four modulo five.

</details>
<details><summary>Hint 2</summary>

A difference of solutions is divisible by both coprime moduli.

</details>
<details><summary>Solution</summary>

The residues four, nine and fourteen are the candidates; four is congruent to one modulo three. Thus $x=4\bmod15$. Any two solutions have a difference divisible by three and five, hence by fifteen because the moduli are coprime. This is uniqueness as a combined residue, not as a single integer: every integer four plus a multiple of fifteen is a solution.

</details>

### Exercise 6
<a id="number-theory-for-cryptography-ex-6"></a>
Show that $x=1\bmod4$, $x=2\bmod6$ has no solution, and identify the failed CRT hypothesis.

<details><summary>Hint 1</summary>

Reduce both requirements modulo two.

</details>
<details><summary>Hint 2</summary>

The two moduli have a common factor.

</details>
<details><summary>Solution</summary>

The first requirement makes $x$ odd, while the second makes it even. No integer satisfies both. The moduli have gcd two, so the coprime CRT theorem does not promise a solution to every pair. General noncoprime versions require consistency modulo that gcd. The contradiction here exhibits exactly that missing compatibility rather than a failure of the coprime theorem.

</details>

### Exercise 7
<a id="number-theory-for-cryptography-ex-7"></a>
Find the order of two modulo seven and explain why it is not a generator of the entire unit group.

<details><summary>Hint 1</summary>

Compute its first few powers.

</details>
<details><summary>Hint 2</summary>

The unit group has six elements.

</details>
<details><summary>Solution</summary>

The powers are two, four and one, so the order is three: neither of the first two is the identity. The group has six nonzero residues, and the subgroup generated by two contains only these three powers. Thus two is not a generator of the full group. An element being nonzero does not imply it has full order, even when the modulus is prime and the multiplicative group is cyclic.

</details>

### Exercise 8
<a id="number-theory-for-cryptography-ex-8"></a>
Why can Euler's theorem cancel the product of all units, while a product of all nonzero residues modulo a composite might not be cancellable?

<details><summary>Hint 1</summary>

A finite product of units is a unit.

</details>
<details><summary>Hint 2</summary>

Nonzero need not mean invertible in a composite ring.

</details>
<details><summary>Solution</summary>

Each listed unit has an inverse, so multiplying those inverses in reverse order inverts their product. Cancellation is therefore legitimate. In a composite ring, a nonzero residue can share a factor with the modulus; a product containing it may be a nonunit or even zero. The permutation proof intentionally lists the unit group, not every nonzero residue. Its precise domain supplies the cancellation property it needs.

</details>

### Exercise 9
<a id="number-theory-for-cryptography-ex-9"></a>
Explain why a bound of logarithmically many modular multiplications is not automatically a logarithmic bit-time bound.

<details><summary>Hint 1</summary>

The modulus and operands can have many bits.

</details>
<details><summary>Hint 2</summary>

Multiplication and reduction require algorithms at that size.

</details>
<details><summary>Solution</summary>

The operation count treats one modular multiplication as one unit. In the bit model its cost depends on the modulus length and the chosen multiplication and reduction algorithms. A total bit bound must multiply or otherwise combine the number of such operations with their size-dependent costs and include input processing. Thus an exponent-length argument establishes a useful algebraic count without silently making a growing integer operation constant time.

</details>

### Exercise 10
<a id="number-theory-for-cryptography-ex-10"></a>
Does demonstrating $5^6=8\bmod23$ establish a discrete-log hardness assumption? State the missing kind of claim.

<details><summary>Hint 1</summary>

One small instance has just been solved explicitly.

</details>
<details><summary>Hint 2</summary>

A hardness experiment ranges over a parameterised instance distribution and adversaries.

</details>
<details><summary>Solution</summary>

No. The equation supplies one discrete logarithm in a tiny group. A hardness claim needs a family of generated groups and encodings, a distribution of instances, a resource class for adversaries and a bound on their success probability. It is an assumption about growing computational problems, not a consequence of the modular identity. The equation is valuable for checking correctness while supporting no unproved general lower bound.

</details>

## Summary and provenance

Units explain when modular division and cancellation are legal. Bézout certificates supply inverses, repeated squaring has a decreasing exponent and invariant, and CRT needs coprime or explicitly compatible moduli. Group orders justify exponent laws under their actual hypotheses. None of those correctness arguments alone is a secrecy theorem. The next chapter defines the adversarial experiments needed to state such a theorem.

This is new exposition seeded by the retained Algorithms, Certificates and Cryptographic Boundaries chapter in Number Theory and its arithmetic contracts. The benchmark is Katz and Lindell, *Introduction to Modern Cryptography*; the linked prerequisite number-theory and finite-algebra books supply the broader proofs of the algebraic background. Existing source examples, hypotheses and solutions remain in their original books.
