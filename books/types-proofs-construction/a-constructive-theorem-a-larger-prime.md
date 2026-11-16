
# Constructive and Classical Existence

This chapter presents Euclid's theorem---that there are infinitely many primes---in a fully constructive form. The proof not only shows that a larger prime exists but describes an algorithm that computes one. We work through explicit finite calculations of the construction and discuss the distinction between constructivity and efficiency.

## The theorem

**Theorem 12.1.** For every natural number $n$, there exists a prime $p > n$.

The classical proof is often by contradiction: assume finitely many primes, multiply them and add one, derive a contradiction. The constructive proof below gives an explicit method.

## The constructive proof

Given $n \in \mathbb{N}$, define $N = n! + 1$.

Since $N > 1$, it has a least divisor $p > 1$. We claim $p$ is prime and $p > n$.

**$p$ is prime.** Suppose $p = ab$ with $1 < a < p$. Then $a$ divides $p$, and $p$ divides $N$, so $a$ divides $N$. But $a < p$, contradicting the minimality of $p$ as a divisor of $N$ greater than 1. Hence $p$ has no proper divisor, so $p$ is prime.

**$p > n$.** Suppose $p \leq n$. Then $p$ divides $n!$ (since $p$ is one of the factors). Since $p$ also divides $N = n! + 1$, it divides the difference $N - n! = 1$. But no prime divides 1. Contradiction. Hence $p > n$.

## The algorithm

The proof describes an algorithm:

1. Compute $N = n! + 1$.
2. Search upward from 2 for the least divisor $p$ of $N$.
3. Return $p$ together with proofs of primality and $p > n$.

This is a fully constructive existence proof: the witness $p$ is computed, and the primality and inequality are verified by the algorithm itself.

## Worked example 1: explicit prime witnesses

We verify the construction for small values of $n$ by explicit computation.

For $n = 1$: $N = 1! + 1 = 2$. The least divisor greater than 1 is 2, which is prime and $2 > 1$.

For $n = 2$: $N = 2! + 1 = 3$. The least divisor greater than 1 is 3, which is prime and $3 > 2$.

For $n = 3$: $N = 3! + 1 = 7$. The least divisor greater than 1 is 7, which is prime and $7 > 3$.

For $n = 4$: $N = 4! + 1 = 25$. The least divisor greater than 1 is 5, which is prime and $5 > 4$.

For $n = 5$: $N = 5! + 1 = 121$. The least divisor greater than 1 is 11, which is prime and $11 > 5$.

For $n = 6$: $N = 6! + 1 = 721$. The least divisor greater than 1 is 7, which is prime and $7 > 6$.

For $n = 10$: $N = 10! + 1 = 3628801$. Factoring: $3628801 = 11 \times 329891$. The least divisor is 11, which is prime and $11 > 10$.

Each case produces an explicit witness and verifies the required properties.

## Separate the witness producer from a finite certificate

A constructive witness can be checked without trusting every search decision that produced it. For this theorem, a certificate can name the proposed prime, a cofactor showing that it divides the constructed factorial successor, and finite primality evidence. The checker recomputes the factorial, verifies the multiplication by the cofactor exactly, checks that the proposed prime exceeds the input, and checks the primality evidence. These are mathematical specifications for a possible checker; no implementation execution is reported here.

One elementary primality certificate consists of unsuccessful divisions by every integer from two through the integer square root of the proposed prime. Its completeness follows from the factor bound: a composite positive integer has a factor between two and its square root, since two larger factors would have product exceeding it. Testing all integers in this interval avoids requiring a second certificate that a shorter list of candidate primes is exhaustive. A producer may use a faster method, but its returned certificate must still justify the predicate actually claimed.

The inequality property can also be derived rather than accepted as a raw comparison. If a divisor of the factorial successor were at most the input and greater than one, it would divide the factorial because its own value occurs among the factorial's factors. Dividing both the factorial and its successor would force it to divide one, impossible. This argument applies to every returned divisor, while the separate primality evidence selects a prime witness. For input zero, the constructed number is two and the inequality is immediate; the empty factorial convention keeps the algorithm total.

This separation clarifies the information carried by the dependent pair. The numerical witness alone does not establish its required properties. Conversely, verifying a valid certificate need not rerun the literal upward search or prove that the producer used that search. The existential theorem needs one prime with the properties, not a historical claim about the path by which it was discovered. Keeping producer, witness and property evidence distinct prepares the later discussion of proof-assistant trust without conflating constructivity with a particular implementation.

## Constructivity versus efficiency

The algorithm is not efficient. Computing $n!$ produces an integer with $\Theta(n\log n)$ bits for growing $n$. The literal upward search can require at most $N-1$ divisibility tests. A standard repair tests candidates only through $\lfloor\sqrt N\rfloor$: the first divisor found is prime, and if none is found then $N$ itself is prime. This gives the elementary upper bound $O(\sqrt{n!})$ divisibility tests; no matching lower bound for the special numbers $n!+1$ is asserted. Exact bit complexity also depends on the multiplication and division algorithms and on whether the input $n$ is encoded in unary or binary.

Constructivity does not require efficiency. A constructive proof demands a finite method that produces a witness and verifies it. Complexity is a separate concern, and any efficiency claim must specify the input encoding, cost model, permitted randomness, and output-size bound.

## Common errors

**Error: conflating constructivity with practicality.** A constructive proof may be computationally infeasible. The requirement is logical, not engineering.

**Error: treating the classical contradiction proof as constructive.** The classical proof by contradiction shows that finitely many primes is impossible. It does not directly compute a prime larger than $n$. The constructive proof above is stronger in information content.

**Error: assuming $n! + 1$ is always prime.** For $n = 4$, $n! + 1 = 25 = 5^2$. For $n = 5$, $n! + 1 = 121 = 11^2$. The construction guarantees that the least divisor of $n! + 1$ is prime, not that $n! + 1$ itself is prime.

## Practice exercises

### Exercise 1
<a id="a-constructive-theorem-a-larger-prime-ex-1"></a>
Apply the construction to $n = 7$. Compute $N$, find its least prime divisor, and verify it exceeds 7.


<details><summary>Hint 1</summary>

Compute seven factorial and add one.

</details>
<details><summary>Hint 2</summary>

Test the square root factor and prove it prime by bounded trial division.

</details>
<details><summary>Solution</summary>

$N = 7! + 1 = 5041$. Factoring: $5041 = 71 \times 71$. The least divisor greater than 1 is 71, which is prime and $71 > 7$.

</details>

### Exercise 2
<a id="a-constructive-theorem-a-larger-prime-ex-2"></a>
Explain why the least divisor of any integer $N > 1$ is prime.


<details><summary>Hint 1</summary>

Assume a smaller nontrivial factor of the selected divisor.

</details>
<details><summary>Hint 2</summary>

It would also divide the original number.

</details>
<details><summary>Solution</summary>

Let $p$ be the least divisor of $N$ greater than 1. If $p = ab$ with $1 < a < p$, then $a$ divides $N$ and $1 < a < p$, contradicting minimality. Hence $p$ has no proper divisor and is prime.

</details>

### Exercise 3
<a id="a-constructive-theorem-a-larger-prime-ex-3"></a>
Is the construction efficient? What is its time complexity?


<details><summary>Hint 1</summary>

Separate operation counts from bit complexity.

</details>
<details><summary>Hint 2</summary>

The search is bounded by N and can use a square-root cutoff.

</details>
<details><summary>Solution</summary>

Computing $n!$ uses at most $n$ multiplications (including $n=0$), and the literal search may test as many as $N-1=n!$ candidates. With the square-root cutoff, it performs $O(\sqrt N)$ divisibility tests, where $N=n!+1$. These are upper bounds on operation counts, not a complete bit-complexity analysis: operand sizes grow to $\Theta(n\log n)$ bits for growing $n$, and the relation to input length depends on how $n$ is encoded.

</details>

### Exercise 4
<a id="a-constructive-theorem-a-larger-prime-ex-4"></a>
Give a constructive proof that there are infinitely many primes, phrased as a method that, given any finite list of primes, produces a prime not in the list.


<details><summary>Hint 1</summary>

Multiply the listed primes and add one, including the empty-list case.

</details>
<details><summary>Hint 2</summary>

A divisor of both that product and its successor would divide one.

</details>
<details><summary>Solution</summary>

Given primes $p_1, \dots, p_k$, let $N = p_1 \cdots p_k + 1$. Let $p$ be the least divisor of $N$ greater than 1. Then $p$ is prime. If $p = p_i$ for some $i$, then $p_i$ divides both $p_1 \cdots p_k$ and $N$, so it divides 1, impossible. Hence $p$ is not in the list.

</details>

## Chapter summary

Euclid's theorem has a fully constructive form: given $n$, compute $N = n! + 1$ and take the least divisor of $N$ greater than 1. The result is prime and exceeds $n$. The proof is an algorithm, and the witness is explicit. Constructivity does not imply efficiency.

**Backward pointers:** This chapter uses natural numbers and basic divisibility. The proof structure echoes the BHK reading from Chapter 1: the existential claim carries a witness.

**Forward pointers:** The later section of this chapter, "A classical existence proof without branch information," contrasts this constructive proof with a classical proof that lacks computational content. Chapter 13, "Choice Principles and Constructive Reals," examines constructivity in analysis.


## Worked example 2: a checkable certificate at seven

For $n=7$, compute $7!=5040$, so $N=5041=71^2$. To verify primality of 71, any composite 71 would have a prime factor at most its square root, which lies below nine. The candidate primes are two, three, five and seven. The number is odd, its digit sum is eight, it ends in neither zero nor five, and division by seven leaves remainder one. Thus none divides it and 71 is prime. It exceeds seven and divides the constructed $N$, providing the required witness and its properties.

The square-root assertion follows directly from a factorisation: if $N=ab$ with $a,b>1$ and both factors exceeded $\sqrt N$, their product would exceed $N$. A least proper factor is prime by the earlier argument. The finite primality certificate therefore has an explicit completeness reason; a list of unsuccessful divisions without a bound would not suffice. This example does not require a software execution claim.

## Witness production includes a stopping argument

The upward divisor search is bounded because $N$ itself divides $N$. Testing the finite integers from two through $N$ therefore always finds a divisor. Each divisibility test terminates by elementary integer division. Minimality is certified by the negative results at every earlier candidate, and primality follows from that minimality. The returned result can be packaged as a dependent pair containing the prime, its primality proof and its inequality proof.

This explains why a proof by contradiction inside the prime argument can still be constructive. Assuming that the selected divisor is composite and deriving a smaller divisor uses a decidable finite property to establish primality; it does not invoke a general double-negation elimination principle for an arbitrary proposition. The relevant information is retained in the bounded search and the recorded candidate checks. Calling every occurrence of the word contradiction nonconstructive would misclassify this proof.

Similarly, a classical presentation of Euclid's theorem can often be reorganised to expose the witness procedure already implicit in its arithmetic. The contrast concerns the information made available in the displayed argument, not an unchangeable label attached to its author's notation. A constructive reconstruction must still state the divisor search and why it terminates rather than merely promise that some contradiction could be found.

## Related existence and choice distinctions

# A classical existence proof without branch information

This chapter presents a famous example that separates classical and constructive existence proofs. The statement has a classical proof by cases that does not decide which case holds, and therefore does not directly compute a witness. We analyze the proof, identify the information gap, and compare it with the constructive standard from the earlier larger-prime section of this chapter.

## The theorem

**Theorem 12.2.** There exist irrational positive real numbers $a$ and $b$ such that $a^b$ is rational.

## The classical proof

Let $r = (\sqrt{2})^{\sqrt{2}}$.

**Case 1:** If $r$ is rational, take $a = b = \sqrt{2}$. Then $a$ and $b$ are irrational, and $a^b = r$ is rational.

**Case 2:** If $r$ is irrational, take $a = r$ and $b = \sqrt{2}$. Then $a$ is irrational by assumption, $b$ is irrational, and

$$a^b = ((\sqrt{2})^{\sqrt{2}})^{\sqrt{2}} = (\sqrt{2})^{\sqrt{2} \cdot \sqrt{2}} = (\sqrt{2})^2 = 2,$$

which is rational.

By excluded middle, either $r$ is rational or it is not. In both cases, we have found irrational $a, b$ with $a^b$ rational.

## The information gap

The proof establishes existence but does not identify which pair $(a, b)$ satisfies the theorem. It branches on whether $r$ is rational, a proposition that may not be decidable with current knowledge. The proof as written does not return a named pair.

This is not a claim that the rationality of $r$ is forever unknowable. It is a claim about the information supplied by this particular proof. A different proof, or a decision procedure for the rationality of $r$, could close the gap.

In fact, the Gelfond-Schneider theorem implies that $(\sqrt{2})^{\sqrt{2}}$ is transcendental, hence irrational. So Case 2 is the actual one, and $a = (\sqrt{2})^{\sqrt{2}}$, $b = \sqrt{2}$ is a valid witness. But the classical proof does not establish this; it relies on excluded middle.

## Comparison with constructive existence

A constructive proof of the same theorem would require an explicit pair $(a, b)$ and verifications that $a$ is irrational, $b$ is irrational, and $a^b$ is rational. The classical proof above does not meet this standard.

The BHK reading from Chapter 1 demands that evidence for $\exists x.\, P(x)$ include a witness and a proof that the witness satisfies $P$. The classical proof provides neither directly; it provides a case analysis that guarantees one of two candidates works.

## Common errors

**Error: treating the classical proof as constructive.** The proof uses excluded middle on a potentially undecided proposition. This unrestricted step is not a rule of the intuitionistic core; a supplied decision for the particular proposition would justify that case split.

**Error: claiming the proof shows the rationality of $r$ is unknowable.** The proof does not establish unknowability. It establishes existence without deciding the case. The Gelfond-Schneider theorem decides the case, but it is a separate result.

**Error: conflating "exists" in classical and constructive senses.** Classical existence is weaker: it may not supply a witness. Constructive existence is stronger: it always supplies a witness and verification.

## Practice exercises

### Exercise 1
<a id="a-classical-existence-proof-without-branch-information-ex-1"></a>
Explain why the proof does not directly return one named pair.


<details><summary>Hint 1</summary>

The branch proposition is not decided by the displayed elementary proof.

</details>
<details><summary>Hint 2</summary>

Identify the two conditional candidate pairs.

</details>
<details><summary>Solution</summary>

The proof branches on whether $r = (\sqrt{2})^{\sqrt{2}}$ is rational. It does not decide this proposition. Excluded middle guarantees that one branch works, but the proof as written does not identify which.

</details>

### Exercise 2
<a id="a-classical-existence-proof-without-branch-information-ex-2"></a>
State the Gelfond-Schneider theorem and explain how it resolves the case.


<details><summary>Hint 1</summary>

Check the algebraic base and irrational algebraic exponent hypotheses.

</details>
<details><summary>Hint 2</summary>

The theorem is an additional deep input.

</details>
<details><summary>Solution</summary>

The Gelfond--Schneider theorem states that if $\alpha$ is algebraic with $\alpha\neq0,1$ and $\beta$ is algebraic and irrational, then every value of $\alpha^\beta$ is transcendental. Here $\alpha=\sqrt2$ and $\beta=\sqrt2$ satisfy the hypotheses, so the positive real value $(\sqrt2)^{\sqrt2}$ is transcendental, hence irrational. Case 2 holds.

</details>

### Exercise 3
<a id="a-classical-existence-proof-without-branch-information-ex-3"></a>
Give a constructive proof that there exist irrational $a, b$ with $a^b$ rational, using a different pair.


<details><summary>Hint 1</summary>

Choose the positive logarithmic exponent giving a rational output.

</details>
<details><summary>Hint 2</summary>

A rational exponent would force incompatible powers of two and three.

</details>
<details><summary>Solution</summary>

Take $a = \sqrt{2}$ and $b = \log_{\sqrt{2}}(3)$. Then $a^b = 3$, which is rational. It remains to show that $b$ is irrational. If $b = p/q$ in lowest terms, then $(\sqrt{2})^{p/q} = 3$, so $2^{p/(2q)} = 3$, so $2^p = 3^{2q}$. The left side is a power of 2 and the right side is a power of 3, so both must be 1, implying $p = 0$, contradiction. Hence $b$ is irrational.

</details>

### Exercise 4
<a id="a-classical-existence-proof-without-branch-information-ex-4"></a>
Explain the difference between "the proof does not decide the case," independence from a specified theory, and undecidability of a uniform decision problem.


<details><summary>Hint 1</summary>

Name the particular argument, formal theory or input family in each assertion.

</details>
<details><summary>Hint 2</summary>

Missing information in one proof does not establish either stronger metatheorem.

</details>
<details><summary>Solution</summary>

"Does not decide" describes the information missing from this particular argument. Independence means that a sentence can be neither proved nor refuted in a named theory, assuming that theory is consistent; it is relative to the theory. Algorithmic undecidability normally concerns a family of inputs for which no single algorithm decides every instance. One cannot infer either stronger claim merely because one proof branches without choosing a side. Here Gelfond--Schneider settles the rationality of $r$, while the displayed elementary proof does not.


</details>


## Worked example 3: specifying the alternative irrational pair

The logarithmic pair in the preceding exercise uses positive-real exponentiation and its inverse logarithm as mathematical inputs. Set $a=\sqrt2$ and $b=\log_{\sqrt2}3$. The base is positive and exceeds one, so the logarithm exists uniquely under the usual positive-real logarithm theorem, and $b>0$. Its defining equation gives $a^b=3$.

If $b=p/q$ were rational, take positive integers $p,q$ because $b>0$. Raising $(\sqrt2)^{p/q}=3$ to the power $2q$ gives $2^p=3^{2q}$, contradicting unique prime factorisation. Thus $b$ is irrational; the standard parity proof gives irrationality of $a=\sqrt2$. This specifies one named pair and verifies its properties without deciding the branch of the earlier elementary argument.

Describing this as a computational real witness additionally assumes a constructive construction of the positive square root, logarithm and their relevant laws. Those analytic foundations are not proved merely by writing a logarithm symbol. The constructive-real chapter distinguishes a named classical real from effective approximation data and its modulus. The present calculation identifies exactly which analytic input a stronger extraction claim would require.

### Exercise 9
<a id="a-constructive-theorem-a-larger-prime-ex-9"></a>
Explain why the divisor search always stops, including $n=0$, and identify the finite evidence supporting minimality of its answer.

<details><summary>Hint 1</summary>

The constructed number is a divisor of itself.

</details>
<details><summary>Hint 2</summary>

The empty factorial is one.

</details>
<details><summary>Solution</summary>

Since $n!\ge1$, $N=n!+1\ge2$. The finite search through two to $N$ reaches a divisor no later than $N$ itself. For $n=0$, $0!=1$ gives $N=2$ immediately. Earlier failed divisibility tests establish that the returned divisor is least among integers greater than one. The minimal-divisor argument then proves it prime, and the factorial difference argument proves it exceeds $n$. No infinite search or unproved termination assertion is needed.

</details>

### Exercise 10
<a id="a-constructive-theorem-a-larger-prime-ex-10"></a>
Why does an internal contradiction argument proving the least divisor prime differ from applying arbitrary double-negation elimination to an existence claim?

<details><summary>Hint 1</summary>

The prime witness was selected by a terminating finite procedure first.

</details>
<details><summary>Hint 2</summary>

The contradiction rules out a proposed proper factor using minimality.

</details>
<details><summary>Solution</summary>

The algorithm already produces an explicit divisor. For any alleged proper factorisation, its smaller nontrivial factor would divide $N$, contradicting the finite minimality certificate. This constructs a refutation of every prohibited factorisation, giving the stated primality property of an existing witness. It does not turn a bare refutation of universal nonexistence into a witness for an arbitrary predicate. Constructive reasoning permits such negation proofs; the missing general rule is extracting arbitrary positive evidence from its double negation.

</details>

## Chapter summary

The factorial construction supplies a bounded witness search, primality proof and inequality proof. Its internal contradictions justify properties of an already produced witness. The irrational-power case split instead leaves its branch undecided; a separate theorem can settle that branch, or a differently specified logarithmic pair can avoid it with explicit analytic assumptions. Constructivity, computational real data and efficiency remain distinct requirements. The next chapter examines how representations of choice and real numbers determine which information is actually available.

**Backward pointers:** This section contrasts with the earlier larger-prime construction in this chapter, which gave an explicit algorithm and witness. The BHK reading from Chapter 1 motivates the demand for witness-bearing evidence.

**Forward pointers:** Chapter 13, "Choice Principles and Constructive Reals," examines other principles whose classical and constructive forms differ in information content. Its section "Constructive real-number boundaries" discusses the constructive status of real numbers.
