
# Primality Tests and Certificates

A factor, a failed congruence and a recursive order certificate support different conclusions. This chapter proves the arithmetic behind each. It distinguishes finding a proof object from verifying one and distinguishes a probable-prime label from a primality theorem. It adapts the elementary certificate arguments in the earlier combined algorithms/cryptography chapter, which remains live with its complete program and capstone.

Preparation is Euclid and Bezout, modular powers, finite unit groups, Fermat's theorem and primitive roots. The [Wilson development](units-orders-exponent-theorems.md) gives an exact primality characterization. Its direct factorial method also illustrates why an exact decision rule need not be economical in the binary input length. No analytic prime-distribution theorem, number field or elliptic curve is a prerequisite here.

## 1. What a short certificate actually proves

For integers $a,b$ not both zero, a normalized gcd certificate consists of integers $g,x,y$ satisfying $g>0$, $g\mid a$, $g\mid b$ and $ax+by=g$. The divisibilities show that $g$ is a common divisor. The equality shows that every common divisor divides $g$. These two directions prove it is the positive greatest common divisor. The identity alone is insufficient: $6(-2)+10(1)=-2$ is true but does not certify a positive gcd.

For $n>1$, a factor certificate consists of an integer $d$ with $1<d<n$ and $d\mid n$. Neither endpoint may be dropped: one divides every integer, and $n$ divides itself even when prime. A complete prime factorisation needs more data: distinct increasing prime bases, positive exponents, exact product $n$, and a primality justification for each base. An exact product of composite bases proves only a decomposition.

For a candidate $n\ge2$, trial division through its integer square root is complete. If a composite $n=uv$ had both factors greater than $\sqrt n$, their product would exceed $n$. Thus it has a divisor between two and the square root. Testing only primes in that interval is enough because any composite divisor has a prime divisor no larger. A search through a smaller unexplained bound has no corresponding theorem.

The input length is approximately $\log_2 n$. Trial division can inspect on the order of $\sqrt n$ possible divisors, already exponential in that length. This arithmetic-operation observation is sufficient to show why a small successful table is not a proof of a fast general algorithm. It does not assert that all primality methods are slow.

## 2. Modular exponentiation has a loop invariant

For positive modulus $n$ and nonnegative exponent $e$, start with accumulator one, base the canonical residue of $a$, and remaining exponent $e$. Maintain

$$\text{accumulator}\cdot\text{base}^{\text{remaining}}
\equiv a^e\pmod n.$$

If the remaining exponent is odd, multiply the accumulator by the base. Replace the remaining exponent by its integer half and square the base. For an even exponent $2k$ the new expression is the old accumulator times $(\text{base}^2)^k$; for an odd exponent $2k+1$ it is the old accumulator times the old base times that same square power. Thus the invariant is preserved. The remaining exponent decreases to zero, when the accumulator is the desired answer.

Reducing every multiplication modulo $n$ preserves the invariant and keeps canonical residues bounded. There are logarithmically many halving stages, each using at most two modular multiplications. Bit cost additionally depends on operand sizes and the chosen multiplication method. Negative exponents require a unit and an inverse; they are outside this nonnegative-exponent algorithm. Modulus one has the unique residue zero, including the residue of the integer identity one.

### Worked example: a compositeness witness at fifteen

For $n=15,a=2$, Euclid first gives gcd one. Repeated squaring gives $2^2=4$, $2^4\equiv1$, so $2^{14}\equiv2^2\equiv4\ne1$. Fermat's theorem would make this power one if fifteen were prime. Its exact failure therefore proves compositeness. The proof does not depend on discovering the factorisation $15=3\cdot5$.

## 3. Fermat witnesses and their passing boundary

If $1<a<n$ and $g=\gcd(a,n)>1$, then $g<n$ is a proper factor. If $g=1$ and $a^{n-1}\not\equiv1\pmod n$, Fermat proves $n$ composite by contrapositive. These are unconditional conclusions from exact integer calculations. A base divisible by a prime candidate would fail the congruence too, which is why the unit premise and the base domain must be checked.

Passing is weaker. For $341=11\cdot31$, the equality $2^{10}=1024\equiv1\pmod{341}$ implies $2^{340}\equiv1$. Hence a base-two Fermat pass can occur for a composite. Carmichael numbers strengthen this failure: the earlier unit-group chapter proves their complete squarefree divisibility criterion, showing that some composites pass every coprime Fermat base. Repeating one successful base gives no new mathematical information.

A randomized claim needs a specified sampling distribution and a theorem bounding the proportion of passing composite bases. This chapter does not infer a numerical error probability from a deterministic list of passes. It proves the necessary conditions and the certificates for their failure. That boundary is useful even without a probabilistic counting theorem.

## 4. The strong probable-prime chain

Let $n\ge3$ be odd and $2\le a<n$. After the gcd branch has confirmed a unit, write $n-1=2^sd$ with $d$ odd. Form $x_j=a^{2^jd}\bmod n$ for $0\le j<s$. The strong test passes if $x_0=1$ or some $x_j=-1$.

To prove that every prime passes, suppose $n$ prime. Fermat gives the final squared value $a^{2^sd}=1$. If $x_0\ne1$, follow the chain to the first value equal to one, allowing that final value. Its predecessor is a nonidentity square root of one. The field factorisation $(u-1)(u+1)=0$ makes that predecessor minus one. It occurs among the tested entries, so the prime passes. Exact failure is therefore a compositeness certificate.

### Worked example: two different failure branches

At $(n,a)=(15,2)$ one has $14=2\cdot7$, and the sole tested entry is $2^7\equiv8$, neither one nor fourteen. This is a unit-branch strong witness. At $(9,3)$ the gcd is already three, so a squaring chain is unnecessary. Treating the latter as an invalid base would discard a legitimate factor certificate; treating every nonunit as a witness without checking the base range would be equally careless.

### Worked example: a strong pass at a composite

The composite $2047=23\cdot89$ passes base two. Its predecessor exponent is $2046=2\cdot1023$, and $1023=11\cdot93$. Since $2^{11}=2048\equiv1\pmod{2047}$, the first chain entry is one. Thus the stronger necessary condition still does not turn an arbitrary single pass into a proof. The explicit factorisation certifies the counterexample independently of the exponent calculation.

A nontrivial square root of one can also yield a factor. If $u^2\equiv1\pmod n$ but $u\not\equiv\pm1$, then $n$ divides $(u-1)(u+1)$. The gcd $\gcd(u-1,n)$ is not one: otherwise cancellation by its Bezout inverse would force $u+1=0$. It is not $n$ because $u-1$ is not zero modulo $n$. Thus it is a proper factor. This explains why a failed chain can contain more information than the verdict alone.

## 5. Full recursive order certificates

Suppose $n>2$ and the complete factorisation $n-1=\prod q_i^{e_i}$ has certified prime bases. A witness $a$ satisfies

$$a^{n-1}\equiv1\pmod n,\qquad
\gcd(a^{(n-1)/q_i}-1,n)=1\quad\text{for every distinct }q_i.$$

The first congruence makes $a$ a unit: its inverse is $a^{n-2}$. Let $h$ be its order in $U(n)$. Then $h\mid n-1$. If $h<n-1$, some prime exponent in $h$ is smaller than in the complete factorisation, so $h\mid(n-1)/q_i$ for that prime. The corresponding power would be one modulo $n$, contradicting the gcd requirement. Hence $h=n-1$.

The $n-1$ powers from zero to $n-2$ are distinct units, and there are only $n-1$ nonzero residue classes. Every nonzero residue is therefore a unit. A composite candidate has a nonzero proper divisor that is not a unit, contradiction. This proves primality. This version uses gcd conditions stronger than mere inequality modulo $n$; those conditions also support the partial-factor theorem below.

Certify every $q_i$ recursively by the same rule. Each child is a prime divisor of $n-1$ and is smaller than $n$, so positive labels strictly decrease. The base label two is checked directly. A finite certificate must provide every child, every positive exponent, the exact product and every witness condition. The verifier does not need to repeat the producer's search for a primitive root. Existence of a witness for actual primes follows from the preceding cyclicity theorem, while validity of a supplied certificate follows directly from its checked arithmetic.

### Worked example: a complete tree for seven

For seven, factor six as $2\cdot3$. Two is the base. For three, witness two has $2^2\equiv1\pmod3$ and $\gcd(2-1,3)=1$, with child two. At the root choose three. Its sixth power is one modulo seven, its third power is six and its second power is two. The gcds of five and one with seven are both one. These data prove seven prime through the theorem. Deleting the child three or replacing the root witness by two would break a specific obligation: missing factorisation evidence or the failed third-power condition, respectively.

## 6. A proved partial-factor certificate

A useful generalisation needs only a sufficiently large factored portion. Let $n>1$, write $n-1=FR$ with $F>\sqrt n$, and suppose the complete prime factorisation of $F$ is known and certified. For each distinct prime $q\mid F$, suppose there is a possibly different witness $a_q$ such that

$$a_q^{n-1}\equiv1\pmod n,\qquad
\gcd(a_q^{(n-1)/q}-1,n)=1.$$

Then $n$ is prime. To prove it, let $r$ be any prime divisor of $n$. The first congruence makes $a_q$ a unit modulo $r$. Its order $h_q$ divides both $n-1$ and $r-1$. The gcd condition says that its $((n-1)/q)$th power is not one modulo $r$, so $h_q$ does not divide $(n-1)/q$. Since it divides $n-1$, the exponent of $q$ in $h_q$ must be the full exponent of $q$ in $n-1$. In particular that exponent is at least its exponent in $F$.

Thus every prime power in $F$ divides $r-1$, giving $F\mid r-1$. It follows that every prime divisor $r$ of $n$ is at least $F+1>\sqrt n$. But every composite has a prime divisor at most its square root, as proved earlier. Therefore $n$ is prime. No assumption that $F$ and $R$ are coprime is needed: the witness condition forces the full relevant exponent in $n-1$, even if the same prime occurs in both factors.

For thirteen take $F=4,R=3$, since four exceeds $\sqrt{13}$. The only prime base in $F$ is two. Witness two has $2^{12}\equiv1\pmod{13}$ and $2^6\equiv12$, so $\gcd(12-1,13)=1$. These exact residues, the child certificate for two and the product $12=4\cdot3$ prove thirteen prime without factoring the residual factor as part of the certificate's obligations. This is a small Pocklington-type certificate with its full proof given here.

## 7. Discovery, verification and scope

A producer may search for factors, witnesses or parameter choices by any method. A valid mathematical certificate contains enough data for a simpler check of the stated theorem. Failure to discover one says nothing by itself: a prime may remain uncertified because a factorisation or witness was not found. Conversely a factor that multiplies back exactly is useful whatever heuristic suggested it.

The earlier combined source retains its complete bounded arithmetic desk, exact input domains, program listings, historical reference obligations and original exercise identities. This focused chapter imports no claim that those programs have been rerun. Hashes identify bytes, while the proofs above identify what equations and domains would establish the intended conclusion. An implementation that silently omits a gcd, an exponent or a recursive child would be checking a different contract.

## 8. Every candidate has a finite arithmetic justification

The preceding methods give a termination theorem for a simple proof-producing decision procedure, even though they do not give a fast general method. Given $n\ge2$, perform complete trial division through its integer square root. If a proper divisor is found, return it as a compositeness certificate. If none is found, the proved small-factor theorem establishes primality. At that point a recursive order certificate can also be constructed: factor $n-1$ by finite trial division and search the finite list of nonzero residues for a primitive root. The cyclicity theorem guarantees that one exists because primality has already been established.

For each prime factor of $n-1$, construct its certificate by the same procedure. The child labels are smaller positive integers than the parent, so recursion terminates by strong induction, with two as its base case. At every node the factor search and witness search are finite. Combining these two facts proves termination of the entire tree construction, rather than relying on the belief that a search will usually finish quickly. All possible producer branches now have a justified output for every input in the stated domain.

The consumer of the resulting tree need not know how that tree was found. It checks the base labels, exact products and witness congruences at each node, then applies the order theorem upward. A certificate copied from an unrelated search remains mathematically valid if those conditions hold; an efficiently produced object remains invalid if even one necessary condition fails. Provenance may identify its source, while arithmetic validity comes from its content and domain.

For a complete factorisation certificate of an arbitrary positive integer, the same idea certifies each claimed prime base independently and multiplies the powers back to the original integer. Positive exponents and distinct bases remove redundant representations, but their ordering is a serialization convention rather than a hypothesis of the multiplication theorem. Allowing a base one would make the expression noncanonical and supply no prime information. Allowing exponent zero could similarly conceal a claimed base that contributes nothing to the product. Keeping the mathematical and normalization obligations distinct explains exactly why each field is present.

This existence argument has a deliberate cost boundary. It proves that finite certificates can be produced by the specified terminating searches. It does not estimate their optimal size, establish polynomial total running time, or prove a statistical bound for interrupted searches. Such complexity theorems need additional analysis of certificate size, the factoring work, modular multiplication and shared subtrees. Reusing a child certificate can reduce repeated verification without changing any prime label's proof obligation. Simply drawing a small example tree does not establish an asymptotic theorem for all candidates.

Finally, zero, one and negative integers require explicit verdict conventions: under the usual definition they are not primes. They need no recursive predecessor factorisation, because the order theorem begins above two and the base case is two itself. A total arithmetic interface can return those boundary conclusions directly, but it must not pass an empty factor list at one through the prime theorem. The theorem's domain is part of the certificate, even when the excluded cases seem familiar.

## Exercises

### ENT17-01. Normalize a gcd certificate

Decide whether $g=-2,x=-2,y=1$ certifies the gcd of six and ten, and repair it.

**Hint 1.** The linear equality is valid.

**Hint 2.** A positive gcd requires a separate sign condition.

<details><summary>Full solution</summary>

The equality is $6(-2)+10=-2$, but the proposed gcd is negative. Negate all three values to get $g=2,x=2,y=-1$. Then $6\cdot2-10=2$, and two divides both inputs. The positivity, divisibilities and identity together certify the normalized gcd. Checking only one of these conditions would not prove the complete claim.

</details>

### ENT17-02. Prove a trial bound

Explain why testing all divisors through ten decides primality for a candidate between two and one hundred.

**Hint 1.** A composite has a factor at most its square root.

**Hint 2.** The proposed range bounds that root by ten.

<details><summary>Full solution</summary>

If such a candidate is composite, its least prime factor is at most its square root, hence at most ten. Thus finding no divisor among two through ten, excluding the candidate itself when it is small, proves primality. A clean procedure stops at $d^2>n$ rather than treating $d=n$ as a proper divisor. The bound is a finite-range theorem, not a rule for candidates of arbitrary size.

</details>

### ENT17-03. Use the exponent invariant

Explain why the odd-exponent update preserves the binary-exponentiation invariant.

**Hint 1.** Write the remaining exponent as $2k+1$.

**Hint 2.** Compare $A b^{2k+1}$ with $(Ab)(b^2)^k$.

<details><summary>Full solution</summary>

The two expressions are equal in the integers before reduction. Updating the accumulator to $Ab$, the base to $b^2$ and the remaining exponent to $k$ therefore preserves the congruence to the original power. The even case uses $Ab^{2k}=A(b^2)^k$. Termination follows from strict halving of a positive remaining exponent, and at zero the invariant identifies the accumulator with the result.

</details>

### ENT17-04. A Fermat false positive

Prove that 341 passes the base-two Fermat condition and is nevertheless composite.

**Hint 1.** It factors as eleven times thirty-one.

**Hint 2.** Its predecessor exponent is thirty-four times ten.

<details><summary>Full solution</summary>

The exact factorisation $341=11\cdot31$ proves compositeness. Also $2^{10}=1024=3\cdot341+1$, so $2^{340}=(2^{10})^{34}\equiv1$. The base is coprime to the candidate. Thus a legitimate Fermat pass does not imply prime, and repeating this same congruence cannot strengthen it into a certificate.

</details>

### ENT17-05. A strong witness

Give the strong-test certificate for fifteen at base two.

**Hint 1.** The odd part of fourteen is seven and there is one tested entry.

**Hint 2.** Reduce $2^7$ modulo fifteen.

<details><summary>Full solution</summary>

The gcd is one, $14=2\cdot7$, and $2^7=128\equiv8$. Since eight is neither one nor fourteen, the test fails. The prime-field proof shows no odd prime can fail, so this proves fifteen composite. The certificate specifies the base, decomposition and exact residue; it need not provide a factor as an additional justification.

</details>

### ENT17-06. A strong false positive

Prove that 2047 passes the strong condition at base two.

**Hint 1.** Use $2^{11}=2048$.

**Hint 2.** The odd part of $2046$ is $1023=11\cdot93$.

<details><summary>Full solution</summary>

The first tested entry is $2^{1023}=(2^{11})^{93}\equiv1\pmod{2047}$, so the condition passes immediately. Yet $2047=23\cdot89$. Both calculations are exact. This example refutes a universal conclusion from one passing base, while remaining fully compatible with the contrapositive theorem that a failing base proves compositeness.

</details>

### ENT17-07. Extract a factor from a square root

For $n=15,u=4$, use a nontrivial square root of one to find a proper factor.

**Hint 1.** Check $u^2\equiv1$ but $u\not\equiv\pm1$.

**Hint 2.** Compute $\gcd(u-1,n)$.

<details><summary>Full solution</summary>

One has $4^2=16\equiv1$ modulo fifteen, while four is neither one nor fourteen. The gcd $\gcd(3,15)=3$ is a proper factor. Also $\gcd(5,15)=5$ gives the complementary factor in this example. The general argument guarantees the first gcd is proper using the two nontriviality conditions; it does not need the factors to be guessed beforehand.

</details>

### ENT17-08. A wrong root witness

Why does witness two fail the full order certificate for seven even though $2^6\equiv1$?

**Hint 1.** The prime factors of six are two and three.

**Hint 2.** Check the exponent $6/2$.

<details><summary>Full solution</summary>

The third power is $2^3=8\equiv1\pmod7$. Consequently $\gcd(2^3-1,7)=7$, failing the factor-two condition. The actual order is three, so the sixth-power equality alone did not force maximal order. Witness three satisfies both required gcds and certifies the same candidate; failure of one witness does not imply the candidate is composite.

</details>

### ENT17-09. Complete factorisation is an obligation

Explain the error in certifying $n$ by checking just one prime divisor of $n-1$ in the full-order argument.

**Hint 1.** A proper order can lose a prime exponent at an unexamined prime.

**Hint 2.** The proof that $h=n-1$ uses every possible missing prime power.

<details><summary>Full solution</summary>

Knowing $h\mid n-1$ and excluding divisibility by one quotient $(n-1)/q$ only forces the full exponent of that particular prime into $h$. Other prime exponents may still be smaller. The proof of maximal order chooses a prime where an exponent is missing, so all distinct prime factors must be checked. A partial-factor certificate is possible only with an additional theorem and size condition, as in Section 6.

</details>

### ENT17-10. Prove the partial-factor order step

If $h\mid n-1$ but $h\nmid(n-1)/q$, prove $v_q(h)=v_q(n-1)$.

**Hint 1.** At every other prime, division by $q$ changes no exponent.

**Hint 2.** If the exponent at $q$ were smaller, every prime exponent of $h$ would fit in the quotient.

<details><summary>Full solution</summary>

Write $n-1=q^e u$ with $q\nmid u$. Divisibility gives $h=q^f v$ with $f\le e$ and $v\mid u$. If $f<e$, then $q^f v$ divides $q^{e-1}u=(n-1)/q$, contradiction. Hence $f=e$. Applied to the order modulo any prime divisor of the candidate, this forces each prime power from the certified portion $F$ into that prime divisor minus one.

</details>

### ENT17-11. A partial certificate for thirteen

Verify the Section 6 certificate with $F=4$ and explain why it excludes a composite candidate.

**Hint 1.** The witness is two; its sixth power is twelve modulo thirteen.

**Hint 2.** Every prime divisor would have to be one modulo four.

<details><summary>Full solution</summary>

The factorisation $F=2^2$ is certified by the base prime two, and $12=4\cdot3$. The witness has twelfth power one and the required gcd is $\gcd(12-1,13)=1$. The theorem forces every prime divisor $r$ to satisfy $4\mid r-1$, hence $r\ge5>\sqrt{13}$. A composite has a prime divisor at most its square root, contradiction. This uses the general proof without assuming thirteen prime in advance.

</details>

### ENT17-12. Failure to discover is not a verdict

A search finds neither a proper factor nor a valid order certificate for a candidate. What conclusion is justified?

**Hint 1.** Distinguish a theorem about a complete search from an interrupted search.

**Hint 2.** A prime might lack a discovered factorisation of its predecessor.

<details><summary>Full solution</summary>

Without a proved complete search bound, the candidate remains undecided by those methods. A missing factor is not primality evidence, and a missing witness is not a compositeness certificate. If complete trial division through the integer square root has been performed, its theorem does give a primality decision; if a valid recursive certificate is supplied, its arithmetic gives another. The stated incomplete search establishes neither condition.

</details>

## Closing summary

A certificate proves a normalized arithmetic statement under explicit domains. Fermat and strong-chain failures certify compositeness; arbitrary passes do not certify primality. Full order certificates and a sufficiently large partially factored predecessor certify primality through proved order arguments. Discovery cost, verification cost and input bit length are separate quantities. All original combined-source identities and listings remain live, with no new execution or review claim.
